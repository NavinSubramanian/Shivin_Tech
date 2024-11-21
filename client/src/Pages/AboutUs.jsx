import React from "react";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import About1 from '../Assets/Images/about-1.png';
import About2 from '../Assets/Images/about-2.png';
import About3 from '../Assets/Images/home.jpg';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="aboutWrapper">
        <div className="about_container1">
          <div className="textAbout">
            <h1 style={{ marginTop: "30px" }}>ABOUT US</h1>
            <h2>About Us : Get to know more about our company</h2>
            <p>
              At Geetha Jewellers, we uphold the values of integrity,
              creativity, and customer satisfaction. We are passionate about
              crafting timeless jewelry that honors life's special moments. Our
              mission is to deliver the finest quality pieces by merging
              traditional techniques with modern elegance, ensuring that each
              creation is a symbol of beauty and lasting value.
            </p>
          </div>
          <img className="about" src={About1} alt="about1" />
        </div>

        <div className="about_container2">
          <img className="about2" src={About2} alt="" />
          <div className="about2p">
            <h1 style={{ marginTop: "30px" }}>History of our Company</h1>
            <p style={{ marginTop: "10px", maxWidth: "600px" }}>
              In 1998, Vivek Kanna founded Geetha Jewellers with a vision for
              unparalleled craftsmanship and a dedication to quality. What began
              as a modest family enterprise has since evolved into a renowned
              name in the jewelry world, celebrated for its distinctive designs
              and outstanding customer service. <br />
              <br />
              <br />
              Our diverse clientele includes both trend-savvy individuals
              seeking contemporary designs and traditionalists who appreciate
              classic elegance. We strive to meet the needs of every customer,
              creating pieces that resonate with both modern tastes and timeless
              sensibilities.
            </p>
          </div>
        </div>

        <div className="about_container3" style={{ marginTop: "50px" }}>
          <img src={About3} alt="" draggable="false" />

          <div className="servicesTextLeft">
            <h1>We Provide Awesome Services</h1>
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
