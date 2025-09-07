import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { RadiusBottomleftOutlined } from "@ant-design/icons";
const center = [35.726517, 51.402329];
const zoom = 16;


export default function MyMap() {
  const [map, setMap] = useState(null);
  const displayMap = useMemo(
    () => (
      <section className="relative mx-auto  xl:w-full">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          ref={setMap}
        >
          <Image
            alt=""
            src="/assets/icons/pin.png"
            width={40}
            height={50}
            className="absolute right-[50%] top-[50%] z-[1000]  h-auto w-[30px] translate-x-[50%] translate-y-[-50%] xl:w-[40px]"
          />

          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </MapContainer>
      </section>
    ),
    [],
  );
  return (
    <>
      <div
        className="
      w-full"
      >
        {/* {map ? <DisplayPosition map={map} /> : null} */}
        {displayMap}
      </div>
    </>
  );
}
