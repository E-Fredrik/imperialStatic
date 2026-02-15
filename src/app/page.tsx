"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import LocationSection from "@/components/location-section";
import RoomsSection from "@/components/rooms-section";
import RoomModal from "@/components/room-modal";
import Footer from "@/components/footer";

export interface Room {
  id: number;
  name: string;
  description: string;
  amenities: string[];
  images: string[];
  panoramaUrl: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Kamar A",
    description:
      "VIP",
    amenities: ["AC", "Kamar Mandi Dalam", "Water Heater", "Lemari", "Meja Belajar"],
    images: ["/assets/images/rooms/a.jpg"],
    panoramaUrl: "/assets/images/360/a360.jpeg",
  },
  {
    id: 2,
    name: "Kamar B",
    description:
      "Standard",
    amenities: ["AC", "Kamar Mandi Dalam", "Lemari", "Meja Belajar", "Water Heater"],
    images: ["/assets/images/rooms/b.jpg"],
    panoramaUrl: "/assets/images/360/b360.jpeg",
  },
  {
    id: 3,
    name: "Kamar C",
    description:
      "Compact",
    amenities: ["AC", "Kamar Mandi Dalam", "Lemari", "Meja Belajar", "Water Heater"],
    images: ["/assets/images/rooms/c.jpg"],
    panoramaUrl: "/assets/images/360/c360.jpeg",
  },
  {
    id: 4,
    name: "Kamar D",
    description:
      "Suite",
    amenities: ["AC", "Kamar Mandi Dalam", "Lemari", "Meja Belajar", "Water Heater"],
    images: ["/assets/images/rooms/d.jpg"],
    panoramaUrl: "/assets/images/360/d360.jpeg",
  },
  {
    id: 5,
    name: "Kamar E",
    description:
      "VIP",
    amenities: ["AC", "Kamar Mandi Dalam", "Lemari", "Meja Belajar", "Water Heater"],
    images: ["/assets/images/rooms/e.jpg"],
    panoramaUrl: "/assets/images/360/e360.jpeg",
  },
  {
    id: 6,
    name: "Kamar F",
    description:
      "Suite",
    amenities: ["AC", "Kamar Mandi Dalam", "Lemari", "Meja Belajar", "Water Heater"],
    images: ["/assets/images/rooms/f.jpg"],
    panoramaUrl: "/assets/images/360/f360.jpeg",
  },
  {
    id: 7,
    name: "Kamar G",
    description:
      "Standard",
    amenities: ["AC", "Kamar Mandi Dalam", "Lemari", "Meja Belajar", "Water Heater"],
    images: ["/assets/images/rooms/g.jpg"],
    panoramaUrl: "/assets/images/360/g360.jpeg",
  },
  {
    id: 8,
    name: "Kamar H",
    description:
      "Compact",
    amenities: [
      "AC",
      "Kamar Mandi Dalam",
      "Lemari",
      "Meja Belajar",
      "Water Heater",
    ],
    images: ["/assets/images/rooms/h.jpg"],
    panoramaUrl: "/assets/images/360/h360.jpeg",
  },
  {
    id: 9,
    name: "Kamar I",
    description:
      "Compact",
    amenities: [
      "AC",
      "Kamar Mandi Dalam",
      "Lemari",
      "Meja Belajar",
      "Water Heater",
    ],
    images: ["/assets/images/rooms/i.jpg"],
    panoramaUrl: "/assets/images/360/i360.jpeg",
  }
];

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LocationSection />
      <RoomsSection rooms={rooms} onSelectRoom={setSelectedRoom} />
      <Footer />
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </main>
  );
}
