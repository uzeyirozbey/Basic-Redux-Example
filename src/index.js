import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Redux
import thunk from 'redux-thunk';
import {compose, applyMiddleware, combineReducers, createStore } from 'redux';
//Reduxın program içinde kullanılabilir ve erişilebilir olması için  provider adlı nesne ile sarmalamak lazım.
import {Provider} from 'react-redux';
//Reducers------------------
import kullaniciReducer from './reducers/kullaniciReducer';
import urunReducer from "./reducers/urunReducers";
import personelReducer from "./reducers/personelRecuder"
//-------------------

/////////////
//ecmasscriptte yeni özellik state parametresine default değer atanabilir 
//combineReducers ile birden fazla reducera işlem yapabilirz.
//Yani reducerları birleştiriyoruz.
const rootReducer = combineReducers({
  urunler: urunReducer,
  kullanici: kullaniciReducer,
  personeller: personelReducer
});

//compose birleştirmek içiçe getirmk anlamına gelir
 const allEnhancers = compose(
    applyMiddleware(thunk),
   //Redux devtoll etkinleştirme
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

const store = createStore(rootReducer, {
  urunler: [
    { Ad: 'Samsung', Kategori: 'TV' },
    { Ad: 'Nokia', Kategori: 'Telefon' }
  ],
  kullanici: 'Cemşit',
  personeller: [
    { Ad: 'Sabri', Soyad: 'Kaya',     Telefon: '05445849924' },
    { Ad: 'Enver', Soyad: 'Cantemiz', Telefon: '00000000000' }
  ],
},
  allEnhancers
);
//provider kullanılırsa gerek kalmaz 
/////////////////////////////////////////////////////
//Kullanıcıyı güncelleme
 const kullaniciGuncelleAction = {
    type: 'kullaniciGuncelle',
    payload: {
      kullanici: 'Sabri'
    }
  }
  
  store.dispatch(kullaniciGuncelleAction)
  ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App count={4} />
     </Provider> 
    </React.StrictMode>,
    document.getElementById('root')
  );
reportWebVitals();