import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import Footer from "./Footer/Footer";
import "./Styles/Styles.css"
// import AllIcons from "./AllIcons";

function App() {
  return (
    <div className="App">
      <div className="app-container container text-center">
        <Hamburger />
        <Footer />
      </div>  
    </div>
  );
}

export default App;

// <AllIcons size={36}/>
