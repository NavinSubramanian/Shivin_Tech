import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMap,
  faTags,
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import mainLogo from '../Assets/Images/mainLogo.jpeg'

const Header = () => {
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
          <p>+91 92830 72832</p>
          <div></div>
          <FontAwesomeIcon icon={faMap} />
          <p>81 Cross Street, Main Road 5th No.18</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTags} />
          <p>Prices may vary due to running deals!</p>
        </div>
      </div>
      <div className="bottomNav">
        <img
          src={mainLogo}
          alt="Main Logo"
          onClick={()=>{navigate('/')}}
        />
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
          <button type="submit">Explore</button>

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
        <button className="menuToggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
          <h3><Link to='/'>Home</Link></h3>
          <h3><Link to='/about'>About Us</Link></h3>
          <h3><Link to='/courses'>Courses</Link></h3>
          <h3><a href='http://localhost:3000#blogs'>Blogs</a></h3>
          <h3><a href="http://localhost:3000#contact">Contact Us</a></h3>
        </nav>
      </div>
    </header>
  );
};

export default Header;
