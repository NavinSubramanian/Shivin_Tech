import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCalendarDays,
  faClock,
  faCircleCheck,
  faCircleExclamation,
  faHeadphones,
  faForwardFast,
  faMobileScreen,
  faPeopleArrows,
  faBolt,
  faCertificate,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SeperateCourse = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const chapters = [
    { id: 1, title: 'Introduction' },
    { id: 2, title: 'Getting Started' },
    { id: 3, title: 'What is HTML' },
    { id: 4, title: 'HTML Basics' },
  ];

  return (
    <>
      <Header />

      <div className="courseHeaders">
        <p className="hyperLinkNavs">
          <Link to="/courses">Courses</Link>
          &gt; {name}
        </p>

        <h1>
          <span>Full Stack Development Java:</span> Merging creativity and code
          to build immersive digital experiences.
        </h1>
      </div>

      <div className="courseContainer">
        <div className="scrollableColumn">
          <div className="thumbnailsCourse">
            <div>
              <FontAwesomeIcon icon={faStar} />
              4.6
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} />2 Weeks
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} />
              6hr 30mins
            </div>
          </div>
          <img
            src="https://vtricks.in/lms/public/frontend/infixlmstheme/img/blog/full-stack-web-development.jpg"
            alt="Course"
            className="courseImage"
          />
          <h2>About this course</h2>
          <p>
            Embark on a journey through the dynamic world of Full Stack
            Development, where every line of code opens a doorway to endless
            possibilities. In this captivating field, developers are invited to
            craft digital experiences that bring imagination to life through the
            seamless integration of front and back-end technology.
          </p>
          <h2>After completing the course you will be able to</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Build Complete Web Applications from Front to Back
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Gain Insight into User-Centered Design and Experience
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Strengthen Problem-Solving and Coding Skills
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Master Core Technologies Across the Full Stack
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Develop an Appreciation for Scalable and Efficient Architecture
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              100% placement guarantee
            </li>
          </ul>
          <h2>Requirements</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleExclamation} />
              We don't require any prior experience. Just bring your passion for
              learning!
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleExclamation} />
              Access to the Internet.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleExclamation} />
              Availability to come to the training center.
            </li>
          </ul>
          <h2>Chapters</h2>
          <div className="lesson-list">
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className={`lesson-item`}>
              <div className="lesson-info">
                <span className="lesson-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="lesson-title">{chapter.title}</span>
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="fixedColumn">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHeadphones} />
              English, Tamil
            </li>
            <li>
              <FontAwesomeIcon icon={faFastForward} />
              Beginners & Intermediate
            </li>
            <li>
              <FontAwesomeIcon icon={faMobileScreen} />
              Access on mobile and desktop
            </li>
            <li>
              <FontAwesomeIcon icon={faPeopleArrows} />
              One-to-one effective training
            </li>
            <li>
              <FontAwesomeIcon icon={faBolt} />
              Full-time access
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} />
              Certificate on completion
            </li>
          </ul>
          <hr />
          <p className="price">
            ₹1099 <span>₹4999.00</span>
          </p>
          <hr />
          <button className="enroll-button" onClick={()=>navigate(`/courses/fsd/enquire`)}>Enquire Today</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SeperateCourse;
