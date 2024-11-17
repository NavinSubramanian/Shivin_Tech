import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMap, faTags, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
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
            <img src="https://icons.veryicon.com/png/o/miscellaneous/hfy/temporary-1.png" alt="Main Logo" />
            <div className="searchBar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder='Want to learn?'/>
                <button type='submit'>Explore</button>
            </div>
            <div className="navLinks">
                <h3>Home</h3>
                <h3>About Us</h3>
                <h3>Courses</h3>
                <h3>Blogs</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
    </header>
  )
}

export default Header