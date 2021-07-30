import axios from 'axios';
export const KULLANICI_GUNCELLE = 'KULLANICI_GUNCELLE';
export const KULLANICI_HATA     = "KULLANICI_HATA";
export function kullaniciGuncelle(yeniKullanici){
    return {
        type : KULLANICI_GUNCELLE,
        payload: {
            kullanici :yeniKullanici
        } 
    }
}

export function hataGoster(){
    return { 
        type :  KULLANICI_HATA,
        payload : {
          error : "HATA OLUŞTU "
        }
    }
}

// //fonksiyon return etme Normal kullanım
// export function kullaniciListele(){
//     return dispatch => {
//         axios.get('https://jsonplaceholder.typicode.com/users/2')
//         .then( response => response.data)
//         .then(  response => dispatch(kullaniciGuncelle(response.name)))
//         .catch( error    => dispatch(hataGoster()))
//     }
// }

//ecma script kullanımı : asenkron fonsiyon
//fonksiyon return etme asenkron kullanımı
export  function kullaniciListele(){
    return  async dispatch => {
        try{
           const res = await axios.get('https://jsonplaceholder.typicode.com/users/2')
           dispatch(kullaniciGuncelle(res.data.name));
        }
        catch(e){
            dispatch(hataGoster())
        }
      
    }
}