import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PlaceInfo from "./InfoWindow";

const createContent = (text: string) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const containerStyle = {
  height: "500px",
  width: "500px",
};

const center = {
  lat: 35.65815592222921, 
  lng: 139.7016357975378,
};

const MyComponent: React.FC = () => {
  const [display, setDisplay] = useState(false);

  const handleOnDisplay = () => {
    setDisplay(!display);
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyALwYvWVcmWiyaMLydjlVlBWh1-Y276oY8">
      {/* <button onClick={() => handleOnDisplay()} >change display</button> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <PlaceInfo />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyComponent;