import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span
              style={{
                color: "#A569BD",
                fontFamily: '"Luckiest Guy", cursive',
              }}
            >
             ecomm
            </span>
           
          </h1>
          <p>
            Welcome to ecomm, your number one source for all things fashion.
            We're dedicated to providing you the best of clothing and
            accessories, with a focus on dependability, customer service, and
            uniqueness.
          </p>
          <div className="contact">
            <span>
              <i className="fa fa-phone" />
              &nbsp; +91 1234567890
            </span>
            <span>
              <i className="fa fa-envelope" />
              &nbsp; support@Ecomm.com
            </span>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fa fa-github" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter" />
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h2 style={{ marginLeft: 35 }}>HELPFUL LINKS</h2>
          <br />
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="#accessories-section">Accessories</a>
            </li>
            <li>
              <a href="#clothing-section">Clothing</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section partner">
          <h2 style={{ marginLeft: 35 }}>OUR PARTNERS</h2>
          <br />
          <ul>
            <li>
              <a href="#">Zara</a>
            </li>
            <li>
              <a href="#">Pantalones</a>
            </li>
            <li>
              <a href="#">Levis</a>
            </li>
            <li>
              <a href="#">UCB</a>
            </li>
            <li>
              <a href="#">+ Many More</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>CONTACT US</h2>
          <br />
          <form>
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email address..."
            />
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
              defaultValue={""}
            />
            <button type="submit" className="btn btn-big">
              <i className="fa fa-envelope" style={{ marginRight: 10 }} />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
