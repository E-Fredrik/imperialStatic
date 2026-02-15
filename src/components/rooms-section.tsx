import Image from "next/image";
import type { Room } from "@/app/page";

interface RoomsSectionProps {
  rooms: Room[];
  onSelectRoom: (room: Room) => void;
}

export default function RoomsSection({ rooms, onSelectRoom }: RoomsSectionProps) {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Rooms
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group border border-gray-100"
              onClick={() => onSelectRoom(room)}
            >
              {/* Image / placeholder */}
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                {room.images?.[0] ? (
                  <div className="absolute inset-0">
                    <Image
                      src={room.images[0]}
                      alt={`${room.name} photo`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm">Room Photo</p>
                    </div>
                  </div>
                )}

                <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  360° View
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Click to View Details
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {/* <span className="text-amber-600 font-bold text-lg">
                    {room.price}
                  </span> */}
                  <span className="text-sm text-gray-500 group-hover:text-amber-600 transition-colors">
                    <b>View Details →</b>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}