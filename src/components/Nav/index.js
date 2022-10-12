import React from "react";

function Navbar(props) {
  const { cSection, setCSection } = props;

  return (
    <nav className="fluid-container mNavbar">
      <ul>
        <li className="mBrand">
          <button data-testid="developer">Matt&nbsp;Weber</button>
        </li>
        <li>
          <button
            data-testid="about"
            className={`${cSection === "about" && "navActive"}`}
            onClick={() => {
              setCSection("about");
            }}
          >
            About&nbsp;Me
          </button>
        </li>
        <li>
          <button
            data-testid="portfolio"
            className={`${cSection === "portfolio" && "navActive"}`}
            onClick={() => {
              setCSection("portfolio");
            }}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            data-testid="contact"
            className={`${cSection === "contact" && "navActive"}`}
            onClick={() => {
              setCSection("contact");
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            data-testid="resume"
            className={`${cSection === "resume" && "navActive"}`}
            onClick={() => {
              setCSection("resume");
            }}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
