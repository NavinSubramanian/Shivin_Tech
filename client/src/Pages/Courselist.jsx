import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import Header from "../Components/Header";
import CourseListItem from "../Components/CourseListItem";

import CourseImage from "../Assets/Images/certificate.png";
import Footer from "../Components/Footer";

const Courselist = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses"); // Replace with your API URL
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    console.log(courses);
  }, courses);

  return (
    <>
      <Header />

      <div className="courseHeaders">
        <p className="hyperLinkNavs">
          <Link to="/">Home</Link>
          &gt; All Courses
        </p>
      </div>

      <div className="topCourse">
        <div className="topCourseContent">
          <h1>Shivin Tech Courses</h1>
          <p>
            Explore the various courses that can benefit you the best for the
            placement
          </p>
          <h3>Top Skills</h3>
          <div className="topSkills">
            <div>
              <FontAwesomeIcon icon={faBolt} />
              <p>Be day-1 job ready</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBolt} />
              <p>Cheap courses</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBolt} />
              <p>Learn from industry Experts</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBolt} />
              <p>Learn anytime anywhere</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="topCourseImage"
            src={CourseImage}
            alt="Shivin Tech Courses Illustration"
          />
          <p>
            <FontAwesomeIcon icon={faCircleCheck} />
            Completion certificate is awarded on every course completion
          </p>
        </div>
      </div>

      <div className="courseListContainer">
        {courses.map((course) => (
          <CourseListItem
            key={course._id}
            title={course.title}
            subtitle={course.subtitle}
            imageUrl={course.imageUrl}
            duration={course.duration}
            time={course.time}
            rating={course.rating}
            about={course.about}
            rate={course.rate}
            courseLink={course.courseLink}
            chapters={course.chapters}
            coursetype={course.coursetype}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Courselist;
