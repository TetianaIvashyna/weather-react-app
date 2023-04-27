import React from "react";
import Hamburger from "./HamburgerSearch";
import Footer from "./Footer";
import "./Styles.css"

function App() {
  return (
    <div className="App">
      <Hamburger defaultcity="Eindhoven" />
      <Footer />
    </div>
  );
}
// container d-flex justify-content-center p-3
export default App;
