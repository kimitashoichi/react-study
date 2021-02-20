import React, { useState, useContext } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

import { SearchContext } from "./HeaderComponent";
import { SmokingArea, sampleSmokimgAreas } from "../models/PlaceModels";

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const containerStyle = {
  height: "500px",
  width: "500px",
};

const center = {
  lat: 35.65815592222921, 
  lng: 139.7016357975378,
};

// 検討:各コンポーネントを別ファイルに切り出すかどうか
// TODO:再レンダリングされているか調査
// されているようだったら子コンポーネントをメモ化する

const MapComponent: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const searchWord = useContext(SearchContext);

  const handleOnDisplay = () => {
    setDisplay(!display);
    console.log("searchWord.area", searchWord)
  };

  // ジオコーディングはカスタムフックで対応したい

  return (
    <LoadScript googleMapsApiKey={API_KEY as string} >
      <button onClick={() => handleOnDisplay()} >change display</button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { sampleSmokimgAreas.map((positon) => {
          return (
            <MarkerComponent
              key={positon.latLng.lat}
              position={positon}/>
          )
        })}
      </GoogleMap>
    </LoadScript>
  );
};

interface Position {
  position: SmokingArea
}

const MarkerComponent: React.FC<Position> = ({
  position
}) => {
  const [info, setInfo] = useState<SmokingArea>();
  const displayInfoWIndow = (position: SmokingArea) => {
    console.log(position);
    setInfo(position);
  };

  return (
    <>
      <Marker
        key={position.latLng.lat}
        position={position.latLng}
        onClick={() => displayInfoWIndow(position)}>
      </Marker>

      { info ?
        <InfoWindowComponent info={info} setInfo={setInfo}/>
      : null }
    </>
  )
}

interface info {
  info: SmokingArea;
  setInfo: (e: any) => void;
}

const InfoWindowComponent: React.FC<info> = ({
  info,
  setInfo
}) => {
  return (
    <InfoWindow
      position={info.latLng}
      onCloseClick={() => setInfo(undefined)}>
        <div>
          <p>{info.smokingAreaName}</p>
          <p>住所：{info.smokingAreaAddress}</p>
          <p>備考：{info.descriptionOfSmokingArea}</p>
        </div>
    </InfoWindow>
  )
}

export default MapComponent;