import "./components.css";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <footer id="contact" className="pink-gradient">
        <div class="footer-top">
          <div class="footer-content">
            <h3>Contact Us</h3>
            <div class="footer-address">
              <p>University of Cambridge</p>
              <p>United Kingdom</p>
            </div>
            <div class="footer-email">
              <p>mastanacambridge@gmail.com</p>
            </div>
          </div>
          <div class="footer-content">
            <h3>Follow Us</h3>
            <div class="footer-socials">
              <a href="https://www.facebook.com/cuhcsmastana/" target="_blank">
                <FaFacebook/>
              </a>
              <a href="https://www.instagram.com/mastana_2024/" target="_blank">
                <FaInstagram/>
              </a>
              <a href="https://www.linkedin.com/company/mastana-university-of-cambridge/" target="_blank">
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Mastana</p>
        </div>
      </footer>
    </>
  );
}
