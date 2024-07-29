import React from "react";
import "./Footer.css";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://example.com/message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageOutlinedIcon style={{ color: "black" }} />
          </a>
          <a
            href="https://example.com/camera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CameraAltOutlinedIcon style={{ color: "black" }} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon style={{ color: "black" }} />
          </a>
        </div>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/shipping">Shipping & Return</a>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
       
        <h1 className="Footer-desc">THE LAZY LUGGAGE</h1>
      </div>
    </footer>
  );
}

export default Footer;

