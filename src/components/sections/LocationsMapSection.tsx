"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { BranchLocation } from "@/types/branches";
import { BranchLocationsPanel } from "@/components/sections/BranchLocationsPanel";

type MapCenter = {
    lat: number;
    lng: number;
};

export interface LocationsMapSectionProps {
    center: MapCenter;
    zoom?: number;
    /** Optional Google Maps style override; defaults to AXA contact map theme. */
    mapStyles?: google.maps.MapTypeStyle[];
    branches?: ReadonlyArray<BranchLocation>;
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
    mapStyles,
    branches,
    className,
}: LocationsMapSectionProps) {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<google.maps.Map | null>(null);
    const [currentZoom, setCurrentZoom] = useState(zoom);
    const [selectedBranchId, setSelectedBranchId] = useState<string | null>(
        branches && branches.length > 0 ? branches[0].id : null
    );

    const defaultStyles: google.maps.MapTypeStyle[] = [
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#434956" }],
        },
        {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c5d9ff" }],
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f7f7f8" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#e0e4f0" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8080c7" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#ebeaf5" }],
        },
        {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ color: "#d3d7e5" }],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#434956" }],
        },
    ];

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

            const styledMap = new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
                disableDefaultUI: true,
                styles: mapStyles ?? defaultStyles,
            });

            mapInstanceRef.current = styledMap;

            window.google.maps.event.addListener(styledMap, "zoom_changed", () => {
                const z = styledMap.getZoom();
                if (typeof z === "number") {
                    setCurrentZoom(z);
                }
            });

            if (branches && branches.length > 0) {
                branches.forEach((branch) => {
                    // eslint-disable-next-line no-new
                    new window.google.maps.Marker({
                        position: { lat: branch.lat, lng: branch.lng },
                        map: styledMap,
                        title: branch.name,
                    });
                });
            }
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
    }, [center.lat, center.lng, zoom, mapStyles, branches]);

    const handleZoomChange = (direction: "in" | "out") => {
        const map = mapInstanceRef.current;
        if (!map) return;
        const delta = direction === "in" ? 1 : -1;
        const nextZoom = (map.getZoom() ?? currentZoom) + delta;
        map.setZoom(nextZoom);
        setCurrentZoom(nextZoom);
    };

    useEffect(() => {
        if (!selectedBranchId || !branches || !branches.length) return;
        const map = mapInstanceRef.current;
        if (!map) return;
        const selected = branches.find((b) => b.id === selectedBranchId);
        if (!selected) return;
        map.panTo({ lat: selected.lat, lng: selected.lng });
    }, [selectedBranchId, branches]);

    return (
        <section className={cn("bg-[#f7f7f8] py-12 md:py-16 lg:py-20", className)}>
            <Container noHorizontalPadding>
                <div className="relative w-full">
                    <div
                        ref={mapRef}
                        className="h-[360px] md:h-[480px] lg:h-[700px] w-full overflow-hidden rounded-[12px] bg-[#d6e4ff]"
                        aria-label="AXA branch locations map"
                    />

                    {/* Custom zoom controls top-right, styled to match Figma node 18805:31373 */}
                    <div className="pointer-events-none absolute right-10 top-6 flex flex-col">
                        <div className="pointer-events-auto flex items-center gap-1 rounded-[10px] border border-[#00008f] bg-[rgba(255,255,255,0.3)] px-1 py-1 backdrop-blur-[32px]">
                            <button
                                type="button"
                                onClick={() => handleZoomChange("in")}
                                className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-transparent text-[#00008f] text-[20px] leading-none"
                                aria-label="Zoom in"
                            >
                                +
                            </button>
                            <div className="h-6 w-px bg-[#00008f]" />
                            <button
                                type="button"
                                onClick={() => handleZoomChange("out")}
                                className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-transparent text-[#00008f] text-[20px] leading-none"
                                aria-label="Zoom out"
                            >
                                −
                            </button>
                        </div>
                    </div>

                    {/* Branch cards overlay (left side) */}
                    {branches && branches.length > 0 ? (
                        <BranchLocationsPanel
                            branches={branches}
                            selectedBranchId={selectedBranchId}
                            onSelectBranch={setSelectedBranchId}
                        />
                    ) : null}
                </div>
            </Container>
        </section>
    );
}

