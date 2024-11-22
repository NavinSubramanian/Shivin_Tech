import React from "react";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import About1 from "../Assets/Images/about-1.png";
import About2 from "../Assets/Images/about-2.png";
import About3 from "../Assets/Images/home.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="aboutWrapper">
        <div className="about_container1">
          <div className="textAbout">
            <p style={{ marginTop: "30px" }}>ABOUT US</p>
            <h1>Get to know more about our company</h1>
            <p>
              At Shivin Tech, our job is to empower students and professionals
              to excel in their career journeys. We focus on delivering
              high-quality, result-oriented courses that bridge the gap between
              knowledge and real-world application. By combining expert
              guidance, practical insights, and tailored support, we ensure each
              learner is equipped with the tools and confidence to achieve their
              career goals and secure their dream placements.
            </p>
          </div>
          <img className="about" src={About1} alt="about1" />
        </div>

        <div className="about_container2">
          <img className="about2" src={About2} alt="" />
          <div className="about2p">
            <h1 style={{ marginTop: "30px" }}>History of our Company</h1>
            <p style={{ marginTop: "10px", maxWidth: "600px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              error sit consequuntur enim veniam, commodi similique sed incidunt
              nam tempora sint obcaecati nisi temporibus fuga voluptatum odit,
              in vel ipsa pariatur recusandae dolores? Ex, cum atque molestiae
              autem nihil corporis. <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus non rem dolor. Facere veritatis cupiditate laudantium,
              optio dignissimos architecto adipisci consequatur ea vitae commodi
              illum! Sunt fuga, ducimus atque earum recusandae similique dolorum
              mollitia quia corporis. Optio, unde dignissimos! Impedit!
            </p>
          </div>
        </div>

        <div className="about_container3" style={{ marginTop: "50px" }}>
          <img src={About3} alt="" draggable="false" />

          <div className="servicesTextLeft">
            <h1>We Provide Awesome Services</h1>
            <img src={About3} alt="" draggable="false" />
            <p>
              Experience the extraordinary with our services. We don't just meet
              expectations—we exceed them. Discover a world where quality,
              reliability, and innovation come together to create truly awesome
              solutions for all your needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
