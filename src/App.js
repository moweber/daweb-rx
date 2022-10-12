import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  const [cSection, setCSection] = useState("about");

  return (
    <div className="mApp">
      <header className="mHeader">
        <Navbar cSection={cSection} setCSection={setCSection}></Navbar>
      </header>
      <main className="mContent fluid-container">
        {cSection === "about" && <About></About>}
        {cSection === "portfolio" && <Portfolio></Portfolio>}
        {cSection === "contact" && <ContactForm></ContactForm>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
