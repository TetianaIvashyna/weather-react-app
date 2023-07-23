import React from "react";
import Footer from "./Footer/Footer";
import "./Styles/Styles.css"
import WeatherAppCore from "./WeatherAppCore/WeatherAppCore";
// import AllIcons from "./AllIcons";

function App() {
  return (
    <div className="App">
      <div className="app-container container text-center">
        <WeatherAppCore />
        <Footer />
      </div>  
    </div>
  );
}

export default App;

// <AllIcons size={36}/>
