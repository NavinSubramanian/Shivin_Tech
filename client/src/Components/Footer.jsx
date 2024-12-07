import React from "react";

import Arc1 from '../Assets/Images/arc-1.png'
import Arc2 from '../Assets/Images/arc-2.png'
import { Link } from "react-router-dom";

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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">Career</Link>
              </li>
              <li>
                <Link to="/about">Placements</Link>
              </li>
            </ul>
          </div>
          <div className="footerLinksColumn">
            <h3>Overview</h3>
            <ul>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <a href="/about">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footerLinksColumn">
            <h3>Explore Us</h3>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerContactSection">
          <h3>Connect Us</h3>
          <ul>
            <li>admin@xyz.com</li>
            <li>+91 93453 77563</li>
            <li>VR Shivin Tech, Urapakkam</li>
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
