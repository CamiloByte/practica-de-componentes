import logo from './logo.svg';
import './App.css';
import { MyComponent } from './compnents/MyComponent';
import { SecondComponent } from './compnents/SecondComponent';
import { ThirdComponent } from './compnents/ThirdComponent';

function App() {

  const medicalRecord = {
    height: "160",
    bloodGroup:"Rh A+",
    allergies: "None"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <MyComponent/>
        <SecondComponent/>
        <ThirdComponent 
          name="Cristian"
          lastName="Aranda"
          card={medicalRecord}
        />
      
      </header>
    </div>
  );
}

export default App;
