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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt
          repudiandae, odit ipsa nisi inventore. Nihil, eos laudantium sit
          doloribus inventore suscipit deserunt dolores! Mollitia aut odio
          numquam culpa earum!
        </p>
        <div class="blog-section">
          <div class="featured-article">
            <img
              src="https://via.placeholder.com/700x400"
              alt="Featured"
              class="featured-image"
            />
            <div class="content">
              <small>
                <p class="category">
                  Tech
                </p>
                <p className="category">
                  Innovation
                </p>
              </small>
              <h1 class="title">The Future of AI and Humanity</h1>
              <p class="description">
                Discover how artificial intelligence is shaping our world and
                what it means for the future of humanity.
              </p>
              <div class="info">
                    <Link to='/blogs/1' className="dropMessage">Read More</Link>
                    <span class="date">Nov 24</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="blogGrid">
            <div class="blog-card">
              <img
                src="https://img.freepik.com/free-photo/online-blog_53876-123696.jpg"
                alt="Blog 1"
              />
              <div class="blog-info">
                <h3>Lorem Ipsum is best</h3>
                <div className="blog-sub">
                  <p style={{ fontSize: "12px" }}>
                    <i>Nov 20, 2020</i>
                  </p>
                  <p className="Min_Read">10 min read</p>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/blogs/1" class="read-more">
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
