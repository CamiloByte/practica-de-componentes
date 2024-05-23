import logo from './logo.svg';
import './App.css';

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
