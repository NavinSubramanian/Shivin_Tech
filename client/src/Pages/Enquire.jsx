import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Prompt from "../Components/Prompt";

const Enquire = () => {
  const { name } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    course: `${name}`,
    mode: "",
    message: "",
  });

  const [showPrompt, setShowPrompt] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/enquiries",
        formData
      );
      setShowPrompt(true);
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        course: "",
        mode: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <>
      <Header />

      <div className="enquiry-container">
        <h2 className="enquiry-title">Enquiry Form</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter your department"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              placeholder={`${name}`}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="mode">Mode of Study</label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Mode
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {showPrompt && (
          <Prompt
            message="Our team will reach you out shortly. Thank you!"
            onClose={() => setShowPrompt(false)}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Enquire;
