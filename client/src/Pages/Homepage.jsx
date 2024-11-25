import body from "../Assets/Images/landing-image-1.png";
import about from "../Assets/Images/image1.png";
import arrow from "../Assets/Images/arrow.png";
import leftarrow from "../Assets/Images/left-arrow.png";
import rightarrow from "../Assets/Images/right-arrow.png";

import { FaChalkboardTeacher, FaBriefcase, FaLightbulb } from "react-icons/fa";
import { FaUserTie, FaClock, FaBook, FaDollarSign } from "react-icons/fa";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import axios from "axios";
import { useState, useRef } from "react";

const Homepage = () => {
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);

  const heroInView = useInView(heroRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const aboutInView = useInView(aboutRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const worksInView = useInView(worksRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

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
      rating: 4.8,
      reviews: "5.8K",
      price: 6000.0,
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
      rating: 4.8,
      link: "/courses/data-science",
      reviews: "5.8K",
      price: 30.0,
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
      rating: 4.8,
      reviews: "5.8K",
      price: 60.0,
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
      name: "Janet Stacy",
      role: "Software Developer",
      feedback: (
        <>
          A Perfect Launchpad for My IT Career! This{" "}
          <b> exceeded my expectations with its hands-on training </b> and
          dedicated support.
        </>
      ),
      date: "20/8/2024",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
      name: "Paul S",
      role: "Dev-ops Head ",
      feedback: (
        <>
          <b>The trainers were incredibly knowledgeable</b>, and the flexible
          class timings made it easy to balance my studies with work.
        </>
      ),
      date: "20/9/2024",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
      name: "Monica",
      role: "Junior Developer",
      feedback: (
        <>
          Thanks to their interview preparation and placement assistance,{" "}
          <b>I landed my first job</b> in tech!
        </>
      ),
      date: "20/9/2024",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Up Your <span className="highlight">Skills</span> <br />
            To <span className="highlight">Advance</span> Your{" "}
            <span className="highlight">
              <br />
              Career
            </span>{" "}
            Path
          </h1>

          <img
            src={body}
            alt="Student"
            className="profile-image profile-image-2"
          />

          <p className="description">
            Unlock your potential with our affordable, flexible, and hands-on
            learning experience designed to boost your skills and career in
            Information Technology.
          </p>

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

          <div className="tags">
            <span className="tag">Public Speaking</span>
            <span className="tag">Career-Oriented</span>
            <span className="tag">Creative Thinking</span>
          </div>
        </motion.div>

        <motion.div
          className="image-content"
          initial={{ opacity: 0, x: 50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={body}
            alt="Student"
            className="profile-image profile-image-1"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about" ref={aboutRef}>
        <motion.div
          className="abt-left"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={about} alt="about" />
        </motion.div>

        <motion.div
          className="abt-right"
          initial={{ opacity: 0, x: 50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="small-sub">About us</p>
          <h1>Why we excel at what we do</h1>
          <p>
            At Shivin Tech, we are driven by a passion for innovation, quality,
            and customer-centric solutions. Our mission is to provide
            exceptional services that address the unique challenges of our
            clients. Whether it's delivering personalized training, or
            implementing impactful strategies, we focus on fostering trust,
            ensuring satisfaction, and achieving long-term success.
            <br />
            <br />
            With a dedicated team of skilled professionals, we combine expertise
            and technology to deliver results that matter. We take pride in
            adapting to industry trends and exceeding expectations at every
            step. We empower individuals and businesses to thrive in an
            ever-evolving landscape.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <img src={arrow} alt="" />
              Ease of Scalability
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Instant Impact
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Experience
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Time Zones
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Full Flexibility
            </div>
            <div className="feature-item">
              <img src={arrow} alt="" />
              Proactive Support
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="works" ref={worksRef}>
        <motion.div
          className="works-container"
          initial={{ opacity: 0, y: 50 }}
          animate={worksInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="works-cont">
            <p className="small-sub">How it works</p>
            <h1>
              Your Learning Journey
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
        </motion.div>

        <motion.div
          className="steps-section"
          initial="hidden"
          animate={worksInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
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
            <motion.div
              className="step-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={worksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="step-header">
                <div className="step-number">{step.stepNumber}</div>
                <div className="dotted-line"></div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="courses">
        <div className="courses-intro">
          <p className="small-sub">Featured Courses</p>
          <h1>Browse our popular courses</h1>
          <p>
            Discover our curated selection of featured courses, meticulously
            crafted to provide you with the essential skills and knowledge to
            excel. With expert instruction and interactive learning experiences,
            our featured courses offer unparalleled opportunities to expand your
            creative horizons and transform your passion for writing into
            tangible success.
          </p>
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
                    ⭐ {course.rating} ({course.reviews})
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
        <div className="why-header">
          <p className="small-sub">Why Choose Us</p>
          <h1 className="why-title">
            The Benefits You Get When
            <br />
            You Study at Shivinntech
          </h1>
        </div>

        <div className="features-container">
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
        </div>
      </section>

      <section className="testimonials">
        <p className="small-sub">See what our clients say</p>
        <h1 className="section-title">Testimonials</h1>
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
              <p className="feedback">{testimonial.feedback}</p>
              <p className="feedback-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-us" id="contact">
        <div className="cont-left">
          <p>Contact us</p>
          <h1>Get in touch with us today</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.691235021843!2d80.08325160835386!3d12.992766833124152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528aa64f1f758b%3A0xbfca0f9632a31459!2sKundrathur%2C%20Chennai%2C%20Tamil%20Nadu%20600069!5e0!3m2!1sen!2sin!4v1732088006183!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
