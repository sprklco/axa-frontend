"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type MapCenter = {
    lat: number;
    lng: number;
};

export interface LocationsMapSectionProps {
    center: MapCenter;
    zoom?: number;
    className?: string;
}

declare global {
    interface Window {
        initAxaLocationsMap?: () => void;
        google?: typeof google;
    }
}

export function LocationsMapSection({
    center,
    zoom = 13,
    className,
}: LocationsMapSectionProps) {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!mapRef.current) return;

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            // In production this should be logged/monitored; for now we fail silently in UI.
            return;
        }

        const initMap = () => {
            if (!mapRef.current || !window.google || !window.google.maps) return;

            // eslint-disable-next-line no-new
            new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
                disableDefaultUI: true,
            });
        };

        const existingMaps = window.google && window.google.maps;
        if (existingMaps) {
            initMap();
            return;
        }

        const scriptId = "axa-google-maps-js";
        const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

        window.initAxaLocationsMap = initMap;

        if (existingScript) {
            if (existingScript.getAttribute("data-loaded") === "true") {
                initMap();
            } else {
                existingScript.addEventListener("load", initMap);
            }
            return;
        }

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initAxaLocationsMap`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            script.setAttribute("data-loaded", "true");
            initMap();
        };
        document.body.appendChild(script);

        return () => {
            script.removeEventListener("load", initMap);
        };
    }, [center.lat, center.lng, zoom]);

    return (
        <section className={cn("bg-[#f7f7f8] py-12 md:py-16 lg:py-20", className)}>
            <Container noHorizontalPadding>
                <div
                    ref={mapRef}
                    className="h-[360px] md:h-[480px] lg:h-[760px] w-full overflow-hidden rounded-[12px] bg-[#d6e4ff]"
                    aria-label="AXA branch locations map"
                />
            </Container>
        </section>
    );
}

