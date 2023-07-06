import React from "react";
import Hamburger from "./Hamburger";
import Footer from "./Footer";
import "./Styles.css"
import AllIcons from "./AllIcons";

function App() {
  return (
    <div className="App">
      <div className="app-container container text-center">
        <Hamburger />
        
        <Footer />
        
        <AllIcons size={36}/>
      </div>
      
    </div>
  );
}

export default App;

// <AllIcons size={36}/>
