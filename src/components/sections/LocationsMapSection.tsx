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

const AXA_PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <mask id="mask0_axa_pin" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
    <rect width="56" height="56" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_axa_pin)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28 50.6902C33.562 45.8487 37.9593 40.9249 41.1919 35.9188C44.4244 30.9126 46.0407 26.5829 46.0407 22.9296C46.0407 17.5156 44.3268 13.047 40.8989 9.52396C37.471 6.0014 33.1714 4.24011 28 4.24011C22.8286 4.24011 18.529 6.0014 15.1011 9.52396C11.6732 13.047 9.95931 17.5156 9.95931 22.9296C9.95931 26.5829 11.5756 30.9126 14.8081 35.9188C18.0407 40.9249 22.438 45.8487 28 50.6902Z" fill="#00008F"/>
  </g>
  <path d="M30.6316 16.6116H35.5L24.3684 30.3259H19.5L30.6316 16.6116Z" fill="#FF1721"/>
</svg>
`;

export interface LocationsMapSectionProps {
    center: MapCenter;
    zoom?: number;
    /** Optional Google Maps style override; defaults to AXA contact map theme. */
    mapStyles?: Record<string, unknown>[];
    branches?: ReadonlyArray<BranchLocation>;
    className?: string;
}

declare global {
    interface Window {
        initAxaLocationsMap?: () => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        google?: any;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapInstanceRef = useRef<any>(null);
    const branchesRef = useRef<ReadonlyArray<BranchLocation> | undefined>(branches);
    const [currentZoom, setCurrentZoom] = useState(zoom);
    const [selectedBranchId, setSelectedBranchId] = useState<string | null>(
        branches && branches.length > 0 ? branches[0].id : null
    );

    const defaultStyles: Record<string, unknown>[] = [
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
        branchesRef.current = branches;
    }, [branches]);

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

            const currentBranches = branchesRef.current;
            if (currentBranches && currentBranches.length > 0) {
                const encodedSvg = encodeURIComponent(AXA_PIN_SVG.trim());
                const pinIcon = {
                    url: `data:image/svg+xml;charset=UTF-8,${encodedSvg}`,
                    scaledSize: new window.google.maps.Size(37, 47),
                    anchor: new window.google.maps.Point(18.5, 47),
                };

                currentBranches.forEach((branch) => {
                    const marker = new window.google.maps.Marker({
                        position: { lat: branch.lat, lng: branch.lng },
                        map: styledMap,
                        title: branch.name,
                        icon: pinIcon,
                    });

                    marker.addListener("click", () => {
                        setSelectedBranchId(branch.id);
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
    }, [center.lat, center.lng, zoom, mapStyles]);

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
                        className="h-[500px] md:h-[480px] lg:h-[700px] w-full overflow-hidden rounded-[12px] bg-[#d6e4ff]"
                        aria-label="AXA branch locations map"
                    />

                    {/* Custom zoom controls — hidden on mobile where pinch-to-zoom is standard */}
                    <div className="pointer-events-none absolute right-10 top-6 hidden flex-col md:flex">
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

