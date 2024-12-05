import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BlogPage = ({ onOpenPopup }) => {
  return (
    <>
      <Header onOpenPopup={onOpenPopup} />
      <div className="blogWrapper">
        <div class="blog-container">
          <p className="blogPageTags"><Link to='/'>Home</Link> &gt;&gt; AI</p>
          <header class="blog-header">
            <h1 class="blog-title">The Future of Artificial Intelligence</h1>
            <div class="blog-meta">
              <div class="author">
                <div>
                    <FontAwesomeIcon icon={faUser} />
                  <p class="publish-date">Shivin Tech</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendar} />
                  <p class="publish-date">Published on Nov 24, 2024</p>
                </div>
              </div>
            </div>
          </header>

          <div class="blog-image">
            <img src="https://via.placeholder.com/1200x600" alt="Blog Image" />
          </div>

          <article class="blog-content">
            <p>
              Artificial intelligence (AI) is revolutionizing the world as we
              know it. From healthcare to finance, AI has been driving
              innovation and reshaping industries. But what does the future hold
              for AI and its integration into our daily lives?
            </p>
            <p>
              As AI technology evolves, its potential applications grow
              exponentially. For example, AI is transforming medical diagnoses,
              enabling doctors to detect diseases earlier and with greater
              accuracy. In education, AI-powered tools personalize learning
              experiences for students, making education more accessible than
              ever before.
            </p>
            <blockquote>
              "AI is not just a tool but a catalyst for change in every aspect
              of human life."
            </blockquote>
            <p>
              Despite its benefits, the rise of AI raises questions about
              ethics, privacy, and job displacement. Governments and
              organizations must collaborate to establish guidelines that ensure
              AI is used responsibly and for the betterment of humanity.
            </p>
            <p>
              In conclusion, AI offers immense opportunities, but it also
              presents challenges. By addressing these challenges proactively,
              we can harness AI's power to create a better future for all.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
