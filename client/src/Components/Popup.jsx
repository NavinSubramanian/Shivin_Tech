import axios from "axios";
import React, { useState, useEffect } from "react";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    course: "",
    mode: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://shivin-tech-backend.vercel.app/api/enquiries",
        formData
      );
      setErrorMessage("");
      setSuccessMessage(
        "Successfully submitted, our team will reach you out soon."
      );
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
      setSuccessMessage("");
    }
  };

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <button className="popupCloseButton" onClick={onClose}>
          &times;
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <img
          className="popupLogo"
          src="https://yourlogo.com/logo.png"
          alt="Logo"
        />
        <form className="popupForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter your department"
            required
          />
          <select
            required
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="" disabled>
              -- Course --
            </option>
            <option value="fsd-java">Full Stack Development - Java</option>
            <option value="fsd-.net">Full Stack Development - .Net</option>
            <option value="fsd-python">Full Stack Development - Python</option>
            <option value="fsd-mern">
              Full Stack Development - Mern Stack
            </option>
            <option value="ui/ux">UI/UX Designing</option>
            <option value="software testing">Software Testing</option>
            <option value="aws and devops">AWS and DevOps</option>
            <option value="data science">Data Science</option>
            <option value="data analyst">Data Analyst</option>
            <option value="production support">Production Support</option>
          </select>
          <select
            required
            id="mode"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
          >
            <option value="" disabled>
              -- Mode of Study --
            </option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <textarea
            placeholder="Message us..."
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="popupSubmitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
