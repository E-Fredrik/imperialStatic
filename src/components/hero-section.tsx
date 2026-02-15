"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {

  const images = [
    "/assets/images/general/firstFloor.jpg",
    "/assets/images/general/front.jpg",
    "/assets/images/general/secondFloor.jpg",
    "/assets/images/general/yard.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section id="home" className="relative bg-gray-800 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12">
          {/* Left: Text / CTA */}
          <div className="text-white px-4">
            <img src="/assets/images/imperial-kost-logo.png" alt="Imperial Logo" className="h-30 w-auto mb-4" />
                <p className="text-gray-300 mb-8 leading-relaxed">
                Live like A King, Feel Like Home
                </p>
            <div className="flex gap-4">
              <a
                href="#rooms"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                View Rooms
              </a>
              <a
                href="#location"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="relative w-full h-60 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={images[index]}
              alt={`Imperial ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width:1024px) 50vw, 100vw"
            />

            <button
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute left-3 bottom-3 bg-black/40 text-white text-sm px-3 py-1 rounded-full">
              {index + 1}/{images.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}