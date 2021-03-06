import React from "react";
import { GoEyeClosed } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa";

const Footer = ({ closeFooter }) => {
  return (
    <footer className="footer">
      <div class="c-btn btn-two" onClick={closeFooter}>
        <span>
          <GoEyeClosed className="close-icon" />
        </span>
      </div>
      <h2>Welcome, friend!</h2>
      <p>
        This is an experimental project. Arhis Alight {<FaRegCopyright />} 2021
      </p>
    </footer>
  );
};

export default Footer;
