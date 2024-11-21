import React, { useState, useEffect } from "react";
import axios from "axios"; // For making API calls
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMap,
  faTags,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fetch suggestions from the backend
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/courses/search?query=${searchTerm}`
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

  // Website URL

  const website_url = 'http://localhost:3000'; // Needs to be changed for the navigation to work

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
          src="https://icons.veryicon.com/png/o/miscellaneous/hfy/temporary-1.png"
          alt="Main Logo"
        />
        <div className="searchBar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Want to learn?"
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
        <div className="navLinks">
          <h3><Link to='/'>Home</Link></h3>
          <h3><Link to='/about'>About Us</Link></h3>
          <h3><Link to='/courses'>Courses</Link></h3>
          <h3><a href='http://localhost:3000#blogs'>Blogs</a></h3>
          <h3><a href="http://localhost:3000#contact">Contact Us</a></h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
