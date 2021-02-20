import React, { useState, useContext } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

import { SearchContext } from "./HeaderComponent";

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
const containerStyle = {
  height: "500px",
  width: "500px",
};

const center = {
  lat: 35.65815592222921, 
  lng: 139.7016357975378,
};

const sampleData = [{
    lat:35.67064392349695,
    lng:139.70324078404312
  },{
    lat: 35.669211701868704,
    lng: 139.70417878219814
  },{
    lat: 35.67177681207955,
    lng: 139.70291752637328
  }
]

const MapComponent: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const [info, setInfo] = useState();
  const searchWord = useContext(SearchContext);

  const handleOnDisplay = () => {
    setDisplay(!display);
    console.log("searchWord.area", searchWord)
  };

  // ジオコーディングはカスタムフックで対応したい

  const displayInfoWIndow = (position: any) => {
    console.log(position);
    setInfo(position);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY ? API_KEY : ""} >
      <button onClick={() => handleOnDisplay()} >change display</button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { sampleData.map((positon) => {
          return (
            <Marker
              key={positon.lat}
              position={positon}
              onClick={() => displayInfoWIndow(positon)}>
            </Marker>
          )
        })}

        { info ? (
          <InfoWindow
            position={info}
            onCloseClick={() => setInfo(undefined)}>
            <h1>1</h1>
          </InfoWindow>
        ) : null }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;