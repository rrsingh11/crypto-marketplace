import React from "react";
import "./footerNew.css";
import Footer_log from '../assets/footer_logo.png'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="footer-column">
          <div className="footer-widget link-widget">
            <div className="footer-title">
              <h2>Usefull Links</h2>
              <div className="separator"></div>
            </div>
            <ul className="list-links">
              <li>
                <a href="apply-listing.html">Apply for Listing</a>
              </li>
              <li>
                <a href="agreement.html">User Agreement</a>
              </li>
              <li>
                <a href="privacy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="fee-structure.html">Fee Structure</a>
              </li>
              <li>
                <a href="disclaimer.html">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-widget link-widget">
            <div className="footer-title">
              <h2>Link</h2>
              <div className="separator"></div>
            </div>
            <ul className="list-links">
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="bitbe-level.html">Bitbe Group</a>
              </li>
              <li>
                <a href="ibaf-about.html">IBAF</a>
              </li>
              <li>
                <a href="bitbedefi.html">BitbeDefi</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-widget info-widget">
            <div className="footer-title">
              <h2 >Get In Touch</h2>
              <div className="separator"></div>
            </div>
            <ul className="info-list">
              <li>
                <span>Email:</span>bitbegroup@gmail.com
              </li>
              <li>
                <span>Address:</span>International Blockchain Assembely
                Foundation <br /> Soeul, South Korea.
              </li>
            </ul>
            <img alt="logo" src={Footer_log}/>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="csection">
              <div className="copyright">
                Copyrights &copy; 2022 All Rights Reserved by{" "}
                <a href='/'>Bitbe groups.</a>
              </div>
            </div>
            {/* <div className="cards-column">
              <div className="cards">
                <img src="images/resource/cards.png" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;