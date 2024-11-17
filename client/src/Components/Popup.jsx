import React, { useState, useEffect } from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <button className="popupCloseButton" onClick={onClose}>
          &times;
        </button>
        <img
          className="popupLogo"
          src="https://yourlogo.com/logo.png"
          alt="Logo"
        />
        <form className="popupForm">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone number" required />
          <select required>
            <option value="">-- Select Branch --</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
          <select required>
            <option value="">-- Select Type --</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
          <textarea placeholder="Message us..." required></textarea>
          <button type="submit" className="popupSubmitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
