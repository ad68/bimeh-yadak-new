"use client";
import React from "react";
import { MapContainer, TileLayer, useMap, useMapEvent } from "react-leaflet";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import { Button } from "@/common";

const center = [35.699789623529476, 51.33803749048416];
const zoom = 16;

function DisplayPosition({ setLongData, setLatData }) {
  useMapEvent("move", (e) => {
    const newPosition = e.target.getCenter();
    setLongData(newPosition.lng);
    setLatData(newPosition.lat);
  });

  return null;
}
/* const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
        return { lat: position.coords.latitude, lng: position.coords.longitude }
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};
const FlyToButton = () => {
  const map = useMap();

  const handleFly = () => {
    map.flyTo([35.6892, 51.3890], 13, {
      duration: 2,
    });
  };

  return <Button className="absolute z-100 top-0" onClick={handleFly}>پرواز به تهران</Button>;
}; */



export default function MyMap({ setLongData, setLatData }) {
  return (
    <div className="w-[90%] mx-auto xl:w-full">
      <section className="text-red-600 font-medium text-[16px] mb-3">
        محل دقیق خود را انتخاب کنید.
      </section>
      <section className="relative xl:w-full">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          className="h-[400px] w-full"
        >
          {/*  <section className=" absolute z-[10000] left-2 top-[100px]">
            <FlyToButton />
          </section> */}
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
          <DisplayPosition setLongData={setLongData} setLatData={setLatData} />


        </MapContainer>
        <Image
          alt=""
          src="/assets/icons/pin.png"
          width={40}
          height={50}
          className="absolute right-[50%] top-[50%] z-[1000] translate-x-[50%] translate-y-[-50%] pointer-events-none"
        />
      </section>

    </div>
  );
}
