import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCalendarDays,
  faClock,
  faCircleCheck,
  faCircleExclamation,
  faHeadphones,
  faFastForward,
  faMobileScreen,
  faPeopleArrows,
  faBolt,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Reveal from "../Components/Utils/Reveal";

const SeperateCourse = ({ onOpenPopup }) => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://shivin-tech-backend.vercel.app/api/courses/${name}` // Replace with your API URL
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [name]);

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  const chapters = [
    { id: 1, title: "Introduction to the Course" },
    { id: 2, title: "Fundamentals and Basic Concepts" },
    { id: 3, title: "Practical Training with Real-Life Examples" },
    { id: 4, title: "Progressive Skill Building" },
    { id: 5, title: "Collaborative Projects" },
    { id: 6, title: "Final Project" },
    { id: 7, title: "Certification Process" },
    { id: 8, title: "Post-Course Support" },
  ];

  return (
    <>
      <Header onOpenPopup={onOpenPopup} />

      <div className="courseHeaders">
        <p className="hyperLinkNavs">
          <Link to="/courses">Courses</Link>
          &gt; {course.title}
        </p>
        <Reveal animation="fadeIn">
          <h1>
            <span>{course.title}:</span> {course.subtitle}
          </h1>
        </Reveal>
      </div>

      <div className="courseContainer">
        <div className="scrollableColumn">
          <Reveal animation="fadeIn" classn="thumbnailsCourse">
            <div>
              <FontAwesomeIcon icon={faStar} />
              {course.rating}
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} />
              {course.duration}
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} />
              {course.time}
            </div>
          </Reveal>
          <Reveal animation="slideFromLeft" classn="courseImage">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="courseImage"
            />
          </Reveal>
          <Reveal animation="fadeIn">
            <h2>About this course</h2>
          </Reveal>
          <Reveal animation="fadeIn">
            <p style={{fontWeight:'300'}}>{course.about}</p>
          </Reveal>
          <Reveal animation="fadeIn">
            <h2>After completing the course you will be able to</h2>
          </Reveal>
          <Reveal animation="fadeIn">
            <ul>
              {course.benefits.map((item, ind) => {
                return (
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal animation="fadeIn">
            <h2>Requirements</h2>
          </Reveal>
          <Reveal animation="fadeIn">
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
          </Reveal>
          <h2>Course Structure</h2>
          <div className="lesson-list">
            {chapters.map((chapter, index) => (
              <div key={chapter.id} className="lesson-item">
                <div className="lesson-info">
                  <span className="lesson-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
            ₹{course.rate} <span>₹{course.originalPrice}</span>
          </p>
          <hr />
          <button
            className="enroll-button"
            onClick={() => navigate(`/courses/${name}/enquire`)}
          >
            Enquire Today
            <div class="shine"></div>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SeperateCourse;
