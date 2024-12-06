import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const BlogList = ({ onOpenPopup }) => {
  return (
    <>
      <Header onOpenPopup={onOpenPopup} />

      <div className="blogPageBody">
        <h2>Read our Latest Blogs</h2>
        <p>
          Stay updated with the latest trends, tips, and insights in web
          development, programming, and more.
        </p>
        <div class="blog-section">
          <div class="featured-article">
            <img
              src="https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg"
              alt="Featured"
              class="featured-image"
            />
            <div class="content">
              <small>
                <p class="category">Tech</p>
                <p className="category">Innovation</p>
              </small>
              <h1 class="title">FullStack Development</h1>
              <p class="description">
              Explore the essentials of full stack development and how mastering both front-end and back-end technologies can propel your career.
              </p>
              <div class="info">
                <Link to="/blogs/1" className="dropMessage">
                  Read More
                </Link>
                <span class="date">Nov 24, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="blogGrid">
            <div class="blog-card">
              <img
                src="https://trendnologies.com/wp-content/uploads/2024/10/j2ee-training-in-bangalore-tib.jpg"
                alt="Blog 1"
              />
              <div class="blog-info">
                <h3>Java - J2EE</h3>
                <div className="blog-sub">
                  <p style={{ fontSize: "12px" }}>
                    <i>Nov 20, 2024</i>
                  </p>
                  <p className="Min_Read">10 min read</p>
                </div>
                <p>
                Learn how Java's J2EE platform simplifies the development of robust, scalable web applications for enterprise-level projects.
                </p>
                <Link to="/blogs/2" class="read-more">
                  Read More →
                </Link>
              </div>
            </div>
            <div class="blog-card">
              <img
                src="https://threeglogic.com/admin/assets/admin/blog_img/10470635%20Reasons%20To%20Hire%20A%20PHP%20Development%20Company%20For%20Your%20Website.png"
                alt="Blog 2"
              />
              <div class="blog-info">
                <h3>PHP</h3>
                <div className="blog-sub">
                  <p style={{ fontSize: "12px" }}>
                    <i>Dec 01, 2024</i>
                  </p>
                  <p className="Min_Read">7 min read</p>
                </div>
                <p>
                Discover how PHP is powering dynamic websites and applications with its server-side scripting capabilities.
                </p>
                <Link to="/blogs/3" class="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogList;
