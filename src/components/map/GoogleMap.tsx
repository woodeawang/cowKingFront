"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Icon from "@/assets/map_marker.png";

const GoogleMapComp = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

  const center = {
    lat: 37.440168,
    lng: 127.172509,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });
  // const locations = [
  //   { place: '--', lat: , lng: -- },
  // ];

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();

    bounds.extend(new window.google.maps.LatLng(37.440168, 127.172509));
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: "100%", height: "700px" }} center={center} zoom={15} onLoad={onLoad} onUnmount={onUnmount}>
      <MarkerF position={center} title="우대왕" />
    </GoogleMap>
  ) : (
    <div>실패</div>
  );
};

export default GoogleMapComp;
