"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Store } from "@/types/Store";

// Brand-colored teardrop pin as a divIcon — avoids Leaflet's bundler-broken
// default image paths entirely.
const pinIcon = L.divIcon({
  className: "",
  html: `<span style="
    display:block;width:1.5rem;height:1.5rem;
    background:var(--brand-pink,#ff90bb);
    border:2px solid #fff;border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    box-shadow:0 1px 4px rgba(0,0,0,.4);
  "></span>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

interface FitBoundsProps {
  stores: Store[];
}

function FitBounds({ stores }: FitBoundsProps) {
  const map = useMap();

  useEffect(() => {
    if (stores.length === 0) return;
    const bounds = L.latLngBounds(stores.map((s) => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 11 });
  }, [stores, map]);

  return null;
}

interface StoreMapProps {
  stores: Store[];
}

export function StoreMap({ stores }: StoreMapProps) {
  // Sensible default center (continental US) before bounds fit.
  return (
    <MapContainer
      center={[39.5, -98.35]}
      zoom={4}
      scrollWheelZoom={false}
      className="h-full min-h-125 w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
        <Marker key={store.id} position={[store.lat, store.lng]} icon={pinIcon}>
          <Popup>
            <strong>{store.name}</strong>
            <br />
            {store.address}
            <br />
            {store.city}, {store.state} {store.zip}
          </Popup>
        </Marker>
      ))}
      <FitBounds stores={stores} />
    </MapContainer>
  );
}
