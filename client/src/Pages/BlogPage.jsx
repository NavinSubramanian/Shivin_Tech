import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { blogData } from "../Components/Utils/BlogData";
import { Link } from "react-router-dom";

const BlogPage = ({ onOpenPopup }) => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <Header onOpenPopup={onOpenPopup} />
      <div className="blogWrapper">
        <div className="blog-container">
          <p className="blogPageTags">
            <Link to="/">Home</Link> &gt;&gt; {blog.title}
          </p>
          <header className="blog-header">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
              <div className="author">
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  <p className="publish-date">{blog.author}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p className="publish-date">Published on {blog.date}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="blog-image">
            <img src={blog.imageUrl} alt="Blog" />
          </div>

          <article className="blog-content">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
