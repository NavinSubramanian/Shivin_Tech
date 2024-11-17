import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import CourseListItem from "../Components/CourseListItem";

import CourseImage from "../Assets/Images/Pixel_Working_04.jpg";
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

  useEffect(()=> {
    console.log(courses);
  }, courses)

  return (
    <>
      <Header />

      <div className="topCourse">
        <div className="topCourseContent">
          <h1>Shivin Tech Courses</h1>
          <p>Explore the various courses that can benefit you the best</p>
          <button className="topCourseButton">Get Started</button>
        </div>
        <img
          className="topCourseImage"
          src={CourseImage}
          alt="Shivin Tech Courses Illustration"
        />
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
