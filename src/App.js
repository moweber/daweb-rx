import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav";
import About from "./components/About";

function App() {
  const [cSection, setCSection] = useState("about");

  return (
    <div className="mApp">
      <header className="mHeader">
        <Navbar cSection={cSection} setCSection={setCSection}></Navbar>
      </header>
      <main className="mContent fluid-container">
        <About></About>
      </main>
    </div>
  );
}

export default App;
