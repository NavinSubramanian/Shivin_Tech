import body from "../Assets/Images/landing-image-1.png";
import about from "../Assets/Images/tempgroup.png";
import arrow from "../Assets/Images/arrow.png";
import leftarrow from "../Assets/Images/left-arrow.png";
import rightarrow from "../Assets/Images/right-arrow.png";

import { FaChalkboardTeacher, FaBriefcase, FaLightbulb } from "react-icons/fa";
import { FaUserTie, FaClock, FaBook, FaDollarSign } from "react-icons/fa";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";
import Reveal from "../Components/Utils/Reveal";

const Homepage = ({ onOpenPopup }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://shivin-tech-backend.vercel.app/api/contact",
        formData
      );
      setResponseMessage(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setResponseMessage("Failed to submit the form. Please try again.");
      console.error(error);
    }
  };

  const featuredCourses = [
    {
      category: "Development",
      title: "Full stack - Mern stack",
      info: "Build dynamic web applications using MongoDB, Express.js, React, and Node.js for seamless front-end and back-end integration.",
      lessons: 12,
      duration: "6 hr 40 mins",
      rating: "Best Seller",
      link: "/courses/full-stack-mern",
      imgSrc:
        "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
    },
    {
      category: "Data",
      title: "Data Science",
      info: "Analyze, visualize, and interpret complex datasets using advanced tools and techniques to drive informed decision-making.",
      lessons: 12,
      duration: "14 hr 20 mins",
      rating: "Best Seller",
      link: "/courses/data-science",
      imgSrc:
        "https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg",
    },
    {
      category: "Design",
      title: "UI/UX Designing",
      info: "Craft intuitive and visually appealing user interfaces while enhancing user experiences through thoughtful design.",
      lessons: 12,
      duration: "5 hr 45 mins",
      link: "/courses/ui-ux",
      rating: "Best Seller",
      imgSrc:
        "https://new.mobitouch.pl/wp-content/uploads/2023/09/UI-Designera_-Blog-Main.jpg",
    },
  ];

  const features = [
    {
      icon: <FaUserTie style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Experienced mentor",
      description:
        "All the mentors are very experienced in the industry, get interesting experiences by studying here.",
      color: "#0000FF",
      borderColor: "#0000FF",
    },
    {
      icon: <FaClock style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Placement Guarantee",
      description:
        "We ensure your success with guaranteed placements, personalized training, and industry-ready skills.",
      color: "#FF007F",
      borderColor: "#FF007F",
    },
    {
      icon: <FaBook style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Free Resources",
      description:
        "For every class you will get the resources which you can read according to your interests.",
      color: "#FFA500",
      borderColor: "#FFA500",
    },
    {
      icon: <FaDollarSign style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Affordable Prices",
      description:
        "Studying here is very affordable, and you will get features that are very helpful for your learning process.",
      color: "#00FF00",
      borderColor: "#00FF00",
    },
  ];

  const testimonials = [
    {
      name: "Jayasree",
      role: "Fullstack - Java",
      feedback: (
        <>
          The best platform for learning Selenium and Java, where the <b>trainers are highly supportive</b>. Even after completing the course, their guidance and responsiveness have been exceptional.
        </>
      ),
      date: "20/8/2023",
      image: "https://i.pinimg.com/736x/35/28/bd/3528bdb208de23338919adc00eeefa48.jpg",
    },
    {
      name: "Saatwik",
      role: "AWS and Dev-ops",
      feedback: (
        <>
          <b>The trainers were incredibly knowledgeable</b>, and the flexible
          class timings made it easy to balance my studies with work.
        </>
      ),
      date: "20/9/2024",
      image: "https://i.pinimg.com/236x/2e/44/f3/2e44f3552b32a499b75411bfab6c2d3b.jpg",
    },
    {
      name: "Krithika Natarajan",
      role: "Selinium Python",
      feedback: (
        <>
          Our trainer, has helped us learn more about Python and has given us <b>daily assignments</b> to help us become stronger Python programmers.
        </>
      ),
      date: "20/9/2024",
      image: "https://static.fandomspot.com/images/07/7845/01-yukinoshita-yukino-girl-black-hair-anime-oregairu.jpg",
    },
  ];

  return (
    <>
      <Header onOpenPopup={onOpenPopup} />

      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <Reveal animation="slideFromLeft">
            <h1>
            From <span className="highlight">training to <br /> placement</span>, we're with <br />you every step - <span className="highlight"> Shivin Tech</span>
            </h1>
          </Reveal>

          <Reveal animation="slideFromLeft">
            <img
              src={body}
              alt="Student"
              className="profile-image profile-image-2"
            />
          </Reveal>

          <Reveal animation="slideFromLeft">
            <p className="description">
              Unlock your potential with our affordable, flexible, and hands-on
              learning experience designed to boost your skills and career in
              Information Technology.
            </p>
          </Reveal>

          <Reveal animation="slideFromLeft">
            <div className="button-group">
              <button
                className="get-started"
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Get Started
              </button>
              <a href="#about" className="know-more">
                <button>Know More</button>
              </a>
            </div>
          </Reveal>

          <div className="tags">
            <span className="tag">
              <FaChalkboardTeacher style={{ color: "#FFD700" }} />
              Public Speaking
            </span>
            <span className="tag">
              <FaBriefcase style={{ color: "orange" }} />
              Career-Oriented
            </span>
            <span className="tag">
              <FaLightbulb style={{ color: "#B4708D" }} />
              Creative Thinking
            </span>
          </div>
        </div>

        <Reveal animation="slideFromRight">
          <img
            src={body}
            alt="Student"
            className="profile-image profile-image-1"
          />
        </Reveal>
      </section>

      <section className="slider_section">
        <p className="small-sub">Where Our Achievers Shine</p>
        <div className="mainSlider">
          <div>
            <div className="sliderItem" style={{ "--position": 1 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 2 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 3 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 4 }}>
              <img
                src="https://logos-world.net/wp-content/uploads/2023/03/Cognizant-Logo.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 5 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 6 }}>
              <img
                src="https://www.cdnlogo.com/logos/c/78/capgemini-201x.svg"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 7 }}>
              <img
                src="https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 8 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ramco_Systems_logo.png/1200px-Ramco_Systems_logo.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 9 }}>
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/HTC-logo.png"
                alt=""
              />
            </div>
            <div className="sliderItem" style={{ "--position": 10 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/1200px-Qualcomm-Logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <Reveal animation="slideFromLeft" classn="abt-left">
          <img src={about} alt="about" />
        </Reveal>
        <div className="abt-right">
          <Reveal animation="fadeIn">
            <p className="small-sub">About us</p>
          </Reveal>
          <Reveal animation="fadeIn">
            <h1>Why we <span className="highlight"> excel at</span> what we do</h1>
          </Reveal>
          <Reveal animation="fadeIn">
            <p>
            At VR Shivin Technologies, we pride ourselves on our practical, hands-on training approach that bridges the gap between classroom learning and real-world challenges. Our training programs are designed to give you a 360-degree understanding of cutting-edge technologies, ensuring that you’re not just job-ready but future-ready.
              <br />
              <br />
              What sets us apart is our commitment to real-time exposure and practical learning. Our courses are crafted to include day-to-day course plans, comprehensive lab handouts, and real-time projects and case studies to ensure that you gain in-depth knowledge of the subject matter. With experienced trainers from top MNCs, we bring corporate expertise into every session, preparing you for the challenges of the IT world.
            </p>
          </Reveal>
          <div className="features-list">
            <div className="feature-item">
              <img src={arrow} alt="" />
              Scalable Solutions
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Immediate Results
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Industry Expertise
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Significant Growth
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Dedicated Support
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Full Flexibility
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="works">
        <Reveal animation="fadeIn" classn="works-container">
          <div className="works-cont">
            <p className="small-sub">How it works</p>
            <h1>
              Your <span className="highlight"> Learning Journey</span>
              <br />
              Made Easy
            </h1>
            <p className="works-description">
              Discover, Enroll, Learn: Unlock your creativity with ease. Dive
              into engaging lessons led by experts, access materials,
              participate in activities, and receive personalized feedback.
              Whether beginner or experienced, we provide the tools for your
              writing journey.
            </p>
          </div>
        </Reveal>

        <Reveal animation="fadeIn" classn="steps-section">
          {[
            {
              stepNumber: "01",
              title: "Choose Your Course",
              description:
                "Explore our wide range of courses, tailored to suit your needs, and select the one that best fits your goals.",
            },
            {
              stepNumber: "02",
              title: "Enquire and Connect",
              description:
                "Submit an enquiry for the chosen course. Our team will reach out to discuss timings, payments, and your preferred mode of study.",
            },
            {
              stepNumber: "03",
              title: "Learn and Engage",
              description:
                "Immerse yourself in interactive lessons and activities with our experienced mentors, engaging sessions, and a wealth of resources to achieve your goals.",
            },
          ].map((step, index) => (
            <div className="step-item">
              <div className="step-header">
                <div className="step-number">{step.stepNumber}</div>
                <div className="dotted-line"></div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="courses">
        <div className="courses-intro">
          <Reveal animation="fadeIn">
            <p className="small-sub">Featured Courses</p>
          </Reveal>
          <Reveal animation="fadeIn">
            <h1 className="main-Title">Browse our popular courses</h1>
          </Reveal>
          <Reveal animation="fadeIn">
            <p className="course-Para">
              Discover our curated selection of featured courses, meticulously
              crafted to provide you with the essential skills and knowledge to
              excel. With expert instruction and interactive learning
              experiences, our featured courses offer unparalleled opportunities
              to expand your creative horizons and transform your passion for
              writing into tangible success.
            </p>
          </Reveal>
        </div>
        <div className="course-cards">
          {featuredCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <img
                src={course.imgSrc}
                alt={course.title}
                className="course-image"
              />
              <div className="course-content">
                <div className="course-header">
                  <span className="category">{course.category}</span>
                  <p className="rating">
                    ⭐ {course.rating}
                  </p>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-info">{course.info} </p>
                <button
                  className="c-button"
                  onClick={() => {
                    navigate(`${course.link}`);
                  }}
                >
                  Enroll!
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="arrow-section-top">
          <button
            className="all-courses"
            onClick={() => {
              navigate("/courses");
            }}
          >
            Explore all courses
          </button>
        </div>

        <div className="arrow-section">
          <img src={leftarrow} alt="" />
          <img src={rightarrow} alt="" />
        </div>
      </section>

      <section className="why">
        <Reveal animation="fadeIn" classn="why-header">
            <p className="small-sub">Why Choose Us</p>
            <h1 className="why-title">
              The Benefits You Get When
              <br />
              You Study at <span className="highlight">Shivin tech</span>
            </h1>
        </Reveal>

        <Reveal animation="slideFromLeft" classn="features-container">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              style={{
                borderTop: `4px solid ${feature.borderColor}`,
              }}
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="testimonials">
        <Reveal animation="fadeIn">
          <p className="small-sub">See what our clients say</p>
        </Reveal>
        <Reveal animation="fadeIn">
          <h1 className="section-title">Testimonials</h1>
        </Reveal>
        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="profile-pic"
                />
                <div>
                  <h3 className="client-name">{testimonial.name}</h3>
                  <p className="client-role">{testimonial.role}</p>
                </div>
              </div>
              <p className="feedback">
                {testimonial.feedback.length > 30 
                  ? `${testimonial.feedback.slice(0, 30)}...` 
                  : testimonial.feedback}
              </p>
              <p className="feedback-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-us" id="contact">
        <div className="cont-left">
          <p>Contact us</p>
          <h1>Get in touch with us today</h1>
          <p style={{marginTop:'15px'}}>
            Any form of doubts are accepted and our team are always ready to
            answer you questions!
          </p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="form-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-row-last">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-row">
              <textarea
                placeholder="Message"
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-row">
              <button type="submit" className="form-button">
                Send a Message <span className="arrow">↗</span>
              </button>
            </div>
            {responseMessage && (
              <p className="response-message">{responseMessage}</p>
            )}
          </form>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94998.08862409573!2d80.01591526877414!3d12.848280374734525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7d92614c87d%3A0x1c023f745c85a3dc!2sSHIVIN%20TECH%20Urapakkam!5e0!3m2!1sen!2sin!4v1732172530909!5m2!1sen!2sin"
          width="60%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
