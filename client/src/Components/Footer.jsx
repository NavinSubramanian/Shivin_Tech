import React from "react";

import Arc1 from '../Assets/Images/arc-1.png'
import Arc2 from '../Assets/Images/arc-2.png'

const Footer = () => {
  return (
    <footer className="footerBody">
      <div className="footerBodyContent">
        <div className="footerAboutSection">
          <h2>VR Shivin</h2>
          <p>
          To empower students to excel in placements with expert-led courses in aptitude, technical skills, soft skills, and interview preparation, offered online and offline.
          </p>
        </div>

        <div className="footerLinksSection">
          <div className="footerLinksColumn">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
          <div className="footerLinksColumn">
            <h3>Overview</h3>
            <ul>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Bootcamp</a>
              </li>
              <li>
                <a href="#">Our Graduates</a>
              </li>
            </ul>
          </div>
          <div className="footerLinksColumn">
            <h3>Explore Us</h3>
            <ul>
              <li>
                <a href="#">Our Career</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerContactSection">
          <h3>Connect Us</h3>
          <ul>
            <li>admin@xyz.com</li>
            <li>021 - 654 - 249</li>
            <li>Serpong, South Tangerang</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footerBottom">
        <p>Copyright © 2024 • A Product of thefanzer.com</p>
      </div>
      <img src={Arc1} className="footerArcs Arc1" alt="" />
      <img src={Arc2} className="footerArcs Arc2" alt="" />
    </footer>
  );
};

export default Footer;
