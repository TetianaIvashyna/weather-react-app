import React from "react";
import Hamburger from "./Hamburger";
import Footer from "./Footer";
import "./Styles.css"
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
// container d-flex justify-content-center p-3
export default App;

// <AllIcons size={36}/>
