//actionu dahil etmek

import { KULLANICI_GUNCELLE,KULLANICI_HATA } from "../actions/kullanici-actions";
//normal kullanım
// export default function kullaniciReducer(state = '', action) {
//ecma script 6 kullanımı
export default function kullaniciReducer(state = '', { type, payload }) {
  switch (type) {
    case KULLANICI_GUNCELLE:
      return payload.kullanici;
    case  KULLANICI_HATA:
      return payload.error
    default:
      return state
  }
}