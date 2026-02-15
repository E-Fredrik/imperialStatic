"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Room } from "@/app/page";

interface RoomModalProps {
  room: Room;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  const panoramaRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<unknown>(null);

  useEffect(() => {

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {

    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(linkEl);


    const scriptEl = document.createElement("script");
    scriptEl.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
    scriptEl.onload = () => {
      if (panoramaRef.current && (window as any).pannellum) {
        const pannellum = (window as any).pannellum as {
          viewer: (
            el: HTMLElement,
            config: Record<string, unknown>
          ) => { destroy: () => void };
        };
         viewerRef.current = pannellum.viewer(panoramaRef.current, {
           type: "equirectangular",
           panorama: room.panoramaUrl,
           autoLoad: true,
           compass: false,
           showZoomCtrl: true,
           showFullscreenCtrl: false,
           mouseZoom: true,
           hfov: 110,
           minHfov: 50,
           maxHfov: 120,
         });
       }
     };
    document.head.appendChild(scriptEl);

    return () => {
      if (viewerRef.current) {
        (viewerRef.current as { destroy: () => void }).destroy();
      }
      document.head.removeChild(linkEl);
      document.head.removeChild(scriptEl);
    };
  }, [room.panoramaUrl]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{room.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


        <div className="relative">
          <div
            ref={panoramaRef}
            className="w-full bg-gray-900"
            style={{ height: "400px" }}
          >

            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Loading 360° View...</p>
                <p className="text-xs mt-1 text-gray-500">
                  Drag to look around
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium pointer-events-none">
            🔄 360° View - Drag to explore
          </div>
        </div>

        {/* Room Details */}
        <div className="p-6">
          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-amber-600">{room.price}</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Room Type</h3>
            <p className="text-gray-600 leading-relaxed">{room.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {room.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
                >
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Room Images - show only image at index 0 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Photos</h3>
            {room.images?.[0] ? (
              <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                <Image
                  src={room.images[0]}
                  alt={`${room.name} photo`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ) : (
              <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-8 h-8 mx-auto mb-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">No photo available</p>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <a
              href={`https://wa.me/6283856705857?text=Hello%20Imperial%20Kost%2C%20Saya%20ingin%20melakukan%20location%20survey%20untuk%20'${encodeURIComponent(room.name)}'.`}
              onClick={onClose}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
            >
              Book Appoinment to Survey
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}