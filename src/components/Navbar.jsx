import "./components.css";
import logo from "../assets/mastanaNavLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPos = window.scrollY || document.documentElement.scrollTop;
    var threshold = 300;
    var maxOpacity = 0.7;
    var gradientOpacity = Math.min((scrollPos - threshold) / threshold, maxOpacity);
    var width = window.innerWidth;
  
    if (width > 767) {
      if (scrollPos > threshold) {
        navbar.style.backgroundImage = `linear-gradient(rgba(122,26,111, ${gradientOpacity}), rgba(122,26,111, ${gradientOpacity}))`;
      } else {
        navbar.style.backgroundImage = 'linear-gradient(rgba(4, 9, 30, 0), rgba(4, 9, 30, 0))';
      }
    }
  });

  // var navLinks = document.getElementById("navLinks");
  return (
    <Navbar
      class="navbar"
      fixed="top"
    >
      <a href="/">
        <img src={logo} alt="mastana logo" />
      </a>
      {!menu && (
        <div className="nav-links" id="navLinks">
          <FontAwesomeIcon
            icon={faXmark}
            className="fa crossmark"
            size="1x"
            onClick={() => setMenu(!menu)}
          />
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            {/* <li>
            <a href="">Events</a>
          </li> */}
            <li>
              <a href="#charity">Charity</a>
            </li>
            <li>
              <a href="#committee">Committee</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#sponsor">Sponsors</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
      {menu && (
        <FontAwesomeIcon
          icon={faBars}
          className="fa bars"
          color="black"
          size="2x"
          onClick={() => setMenu(!menu)}
        />
      )}
    </Navbar>
  );
}
