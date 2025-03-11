import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import scss from "./Map.module.scss";

const Map = () => {
  return (
    <MapContainer center={[41.2904, 27.9248]} zoom={13} className={scss.Map}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[41.2904, 27.9248]} >
        <Popup>
          Veliköy Organize Sanayi Bölgesi, Çerkezköy, Tekirdağ, Турция
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
