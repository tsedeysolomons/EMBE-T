import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Railway Route Coordinates
const railwayRoute = [
  [11.5988, 43.1451], // Djibouti City
  [11.8445, 42.9098],
  [11.6045, 42.3528],
  [9.9806, 41.857], // Dire Dawa
  [8.9806, 38.7578], // Addis Ababa
];

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Fix the missing icon issue in Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  if (!isMounted) {
    return (
      <div className="h-[600px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
        Loading map...
      </div>
    );
  }

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[9.9806, 41.857]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Railway Route */}
        <Polyline
          positions={railwayRoute as L.LatLngExpression[]}
          color="red"
          weight={3}
          opacity={0.7}
        />

        {/* Railway Stations */}
        <Marker position={[11.5988, 43.1451]}>
          <Popup>Djibouti City Station</Popup>
        </Marker>
        <Marker position={[9.9806, 41.857]}>
          <Popup>Dire Dawa Station</Popup>
        </Marker>
        <Marker position={[8.9806, 38.7578]}>
          <Popup>Addis Ababa Station</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
