import logo from './logo.svg';
import './App.css';
import PhoneBox from './components/PhoneBox';

function App() {
  return (
    <div className="dS">
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="card-header text-center">
      <div className="asa">
        <h1 className="App"> <i className="fa fa-address-book"></i> Phones Book</h1>
        <PhoneBox />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
