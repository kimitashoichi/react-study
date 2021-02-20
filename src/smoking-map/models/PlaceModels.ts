// 喫煙所モデル
export interface SmokingArea {
  latLng: {
    lat: number; // 緯度
    lng: number; // 経度
  }
  smokingAreaName: string; // 喫煙所名
  smokingAreaAddress: string; // 住所
  smokingAreaTokyo23wards: string; // 存在している東京の区
  isExist: boolean; // 現在あるかどうかのフラグ
  descriptionOfSmokingArea?: string; // わかりにくい喫煙所の際にどこにあるのかを詳細に記載するための
}


// カフェのモデル
export interface Cafe {
  storeName: string; // 店名
  storeAddress: string; // 住所
  storeTokyo23wards: string; // 存在している東京の区
  storeAttributes: StoreAttributes; // 店舗の属性
}

// 店舗の属性モデル
export interface StoreAttributes {
  nonSmoking: boolean; // 完全禁煙
  onlyElectronicCigarette: boolean; // 電子タバコのみOK
  bothCigarette: boolean; // 電子タバコも紙タバコもOK
  powerSupplyAll: boolean; // 全席電源あり
  powerSupplyPartial: boolean; // 一部の席電源あり
  wifi: boolean; // Wifiがあるかどうか
}


// ダメなデータ:緯度経度がこの形式だとGoogleマップに渡せない
export const  smokingAreaAampleData = [
  {
    lat: 35.66166309438292,
    lng: 139.69737881103293,
    smokingAreaName: "タイムズ渋谷宇田川町",
    smokingAreaAddress: "東京都渋谷区宇田川町３６−６",
    smokingAreaTokyo23wards: "渋谷区",
    isExist: true
  }, {
    lat: 35.65948014944864,
    lng: 139.70055062528152,
    smokingAreaName: "渋谷スクランブル交差点",
    smokingAreaAddress: "東京都渋谷区渋谷",
    smokingAreaTokyo23wards: "渋谷区",
    isExist: true
  }, {
    lat: 35.66215298240577,
    lng: 139.69879815520792,
    smokingAreaName: "渋谷PARCO",
    smokingAreaAddress: "東京都渋谷区宇田川町１５−１",
    smokingAreaTokyo23wards: "渋谷区",
    isExist: true
  }
];

// 良いデータ例:Googleマップに緯度経度を渡すことができる
export const sampleSmokimgAreas: SmokingArea[] = [
  {
    latLng: {
      lat: 35.67177681207955,
      lng: 139.70291752637328,
    },
    smokingAreaName: "原宿駅前",
    smokingAreaAddress: "原宿駅の住所を表示する",
    smokingAreaTokyo23wards: "渋谷区",
    isExist: true,
    descriptionOfSmokingArea: "原宿駅前にある喫煙所です。"
  },{
    latLng: {
      lat: 35.67064392349695,
      lng: 139.70324078404312,
    },
    smokingAreaName: "喫煙所A",
    smokingAreaAddress: "喫煙所Aの住所を表示する",
    smokingAreaTokyo23wards: "渋谷区",
    isExist: true,
    descriptionOfSmokingArea: "喫煙所Aです"
  },{
    latLng: {
      lat: 35.669211701868704,
      lng: 139.70417878219814,
    },
    smokingAreaName: "喫煙所B",
    smokingAreaAddress: "喫煙所Bの住所を表示する",
    smokingAreaTokyo23wards: "渋谷区",
    isExist: true,
    descriptionOfSmokingArea: "喫煙所Bです"
  },
];