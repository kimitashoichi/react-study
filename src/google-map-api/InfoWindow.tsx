import React, { useState, useEffect } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

import { smokingAreaAampleData, SmokingArea } from "./PlaceModels";

export default function PlaceInfo() {
  const [selected, setSelected] = useState<SmokingArea>();
  const [display, setDisplay] = useState(false);

  // 強制的にイベントを発生させているが、親コンポーネントの何らかのイベントを受け取った時に表示されるようにしたい
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);

  return (
    <>
      {/* <button onClick={() => setDisplay(!display)}>喫煙所を表示する</button> */}
      {smokingAreaAampleData.map((marker) => (
        <Marker
          key={`${marker.lat * marker.lng}`}
          position={{
            lat: marker.lat,
            lng: marker.lng,
          }}
          // マウスオーバーで<InfoWindow>が描画されます。
          // ここでアイコン表示の設定ができます。
          icon={{
            url: "url of icon",
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}

      {display ? (
        smokingAreaAampleData.map((point) => {
          return (
            <InfoWindow position={{lat: point.lat, lng: point.lng}}>
              <div>{point.smokingAreaName}</div>
            </InfoWindow>
            )
          })
      ) : null}
    </>
  );
}

// リストを作る => バックエンドから取得したデータを保持
// ボタンを複数用意 => 喫煙所、カフェ、喫煙所つきのカフェなどの条件ごとにボタンを作る
// あるプロパティの値で絞り込んで新たなリストを作成 => ボタンで選択された条件と合致するリストを作成する
// 新しく作ったリストをマップに描画
// 画面下にリスト表示する
// リスト表示したものをクリックするとクリックした喫煙所まで地図が移動する