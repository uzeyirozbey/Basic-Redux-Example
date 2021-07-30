import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { kullaniciGuncelle, kullaniciListele } from './actions/kullanici-actions';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.onKullaniciGuncelle = this.onKullaniciGuncelle.bind(this);
  }

  onKullaniciGuncelle() {
    this.props.onKullaniciGuncelle('Aykut');
  }

  componentDidMount(){
    this.props.onKullaniciListele()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {this.props.kullanici}</h2>
          <button onClick={this.onKullaniciGuncelle}> Kullanıcı Ad Değiştir </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state,
    MyCount: props.count + 2
  }
}

const mapDispatchToProps = {
  onKullaniciGuncelle: kullaniciGuncelle,
  onKullaniciListele : kullaniciListele
}
//mergeprops : hangi propsun nerden geldiğini öğrenmek için kullanılır.
//propsFromState :stateden gelen propslar
// propsFromDispatch : dispatctan gelen propslar
//ownProps : kendi oluşturduğumuz propslar
// const mergeProps =  (propsFromState,propsFromDispatch,ownProps) => {
//   console.log(".........................");
//   console.log(propsFromState);
//   console.log(propsFromDispatch);
//   console.log(ownProps);
//   console.log(".........................");
//   return {}
// }
export default connect(mapStateToProps,mapDispatchToProps)(App);
