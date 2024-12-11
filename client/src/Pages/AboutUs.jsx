import React from "react";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import One from "../Assets/Images/one.png";
import Two from "../Assets/Images/two.png";
import Three from "../Assets/Images/three.png";
import Reveal from "../Components/Utils/Reveal";

const AboutUs = ({ onOpenPopup }) => {
  return (
    <>
      <Header onOpenPopup={onOpenPopup} />
      <div className="aboutWrapper">
        <div className="about_container1">
          <Reveal animation="slideFromLeft" classn="textAbout">
            <div>
              <p style={{ marginTop: "30px" }}>ABOUT US</p>
              <h1>Get to know more <span className="highlight">about our company</span> and our <span className="highlight">goals</span></h1>
            </div>
            <img src="https://lh5.googleusercontent.com/p/AF1QipPZ752L11QOuuy6xj4FCX1NpIhdCyvQWn8K-SXI=w203-h289-k-no" loading="lazy" className="about" alt="about1" />
          </Reveal>
          <Reveal animation="slideFromRight" classn="about1bottom">
            <p>
              Welcome to VR Shivin Technologies, a premier training and
              placement institute dedicated to transforming careers in the IT
              industry. Established in June 2021, we have quickly risen to
              prominence by successfully <b>placing 3000+ students</b> in top
              MNCs and leading IT companies. Our mission is simple yet powerful:
              to empower individuals with industry-relevant skills and connect
              them with the best opportunities for a brighter future.
            </p>
            <div className="aboutContents">
              <div>
                <h3>3.5</h3>
                <p>Years of Experiance</p>
              </div>
              <div>
                <h3>3000+</h3>
                <p>Students Placed</p>
              </div>
              <div>
                <h3>50+</h3>
                <p>MNC's companies placed</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>Trained Professionals</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="about_container2">
          <Reveal animation="slideFromLeft" classn="about2">
            <img src="https://lh5.googleusercontent.com/p/AF1QipMY0qPrcuGPt5yPe_jB7LOIB1crI20DHdHfrs3K=w203-h152-k-no" loading="lazy" alt="" />
          </Reveal>
          <Reveal animation="slideFromRight" classn="about2p">
            <h1 style={{ marginTop: "30px" }}>Company <span className="highlight">Culture</span></h1>
            <p style={{ marginTop: "10px", maxWidth: "700px" }}>
              Our courses are crafted to include day-to-day course plans,
              comprehensive lab handouts, and real-time projects and case
              studies to ensure that you gain in-depth knowledge of the subject
              matter. With experienced trainers from top MNCs, we bring
              corporate expertise into every session, preparing you for the
              challenges of the IT world.
              <br />
              <br />
              At VR Shivin Technologies, we don’t just teach; we build careers.
              Our relentless focus on placement success ensures that every
              student achieves their dream job. With a growing reputation and an
              expanding network of hiring partners, we are committed to scaling
              new heights and placing more individuals in their dream roles.
            </p>
          </Reveal>
        </div>

        <div className="about_container3" style={{ marginTop: "50px" }}>
          <Reveal animation="fadeIn" classn="servicesTextLeft">
            <h1><span className="highlight">What</span> Seperates Us</h1>
            <p>
              We make our commitment to real-time exposure and practical learning. Our courses are crafted to include day-to-day course plans, comprehensive lab handouts, and real-time projects and case studies to ensure that you gain in-depth knowledge of the subject matter. With experienced trainers from top MNCs, we bring corporate expertise into every session, preparing you for the challenges of the IT world.
            </p>
          </Reveal>
          <Reveal animation="fadeIn" classn="servicesProv">
            <div>
              <img src={One} alt="one" loading="lazy" />
              <p><b>Classroom Training:</b> Engaging and interactive sessions guided by expert instructors.</p>
            </div>
            <div>
              <img src={Two} alt="two" loading="lazy" />
              <p><b>Corporate Training:</b> Tailored programs to upskill professionals for career advancement.</p>
            </div>
            <div>
              <img src={Three} alt="three" loading="lazy" />
              <p><b>Video-Based Training:</b> Flexible learning options for remote learners.</p>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
