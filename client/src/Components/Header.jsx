import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMagnifyingGlass,
  faBars,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Link, useNavigate } from "react-router-dom";

import mainLogo from "../Assets/Images/mainLogo.jpeg";

const Header = ({ onOpenPopup }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://shivin-tech-backend.vercel.app/api/courses/search?query=${searchTerm}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="topNav">
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>+91 93453 77563</p>
          <FontAwesomeIcon icon={faPhone} />
          <p>+91 93453 77563</p>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>infotech@gmail.com</p>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com/vr_shivin.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ padding: "6px" }} />
          </a>
          <a href="https://wa.me/917904262162" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ padding: "6px 8px  " }}
            />
          </a>
          <a href="https://wa.me/917904262162" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} style={{ padding: "6px" }} />
          </a>
        </div>
      </div>
      <div className="bottomNav">
        <img
          src={mainLogo}
          alt="Main Logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
          <div className="socialIcons mobSocial">
            <FontAwesomeIcon icon={faInstagram} style={{ padding: "6px" }} />
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ padding: "6px 8px  " }}
            />
            <FontAwesomeIcon icon={faWhatsapp} style={{ padding: "6px" }} />
          </div>
          <button className="dropMessage mobButton">
            Drop a Message &nbsp; &#8599;
          </button>
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>
            <Link to="/about">About Us</Link>
          </h3>
          <h3>
            <Link to="/courses">Courses</Link>
          </h3>
          <h3>
            <Link to="/blogs">Blogs</Link>
          </h3>
          <h3>
            <a href="https://shivintechnologies.in#contact">Contact Us</a>
          </h3>
        </nav>
        <div className="searchBar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onFocus={() => setShowSuggestions(true)}
          />

          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((course) => (
                <li
                  key={course.id}
                  onClick={() => {
                    navigate(`/courses/${course.courseLink}`);
                  }}
                >
                  {course.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="dropMessage lapButton" onClick={onOpenPopup}>
          Drop a Message &nbsp; &#8599;
        </button>
        <button className="menuToggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
