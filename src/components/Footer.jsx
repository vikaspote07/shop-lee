import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-purple-400">ecomm</span>
          </h1>
          <p className="text-sm leading-relaxed mb-4">
            Welcome to ecomm, your number one source for all things fashion.
            We're dedicated to providing you the best of clothing and
            accessories, with a focus on dependability, customer service, and
            uniqueness.
          </p>
          <div className="space-y-2">
            <div>
              <i className="fa fa-phone mr-2" />
              +91 1234567890
            </div>
            <div>
              <i className="fa fa-envelope mr-2" />
              support@Ecomm.com
            </div>
          </div>
          <div className="flex mt-4 space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fa fa-github text-xl hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter text-xl hover:text-purple-400 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/home"
                className="hover:text-purple-400 text-white no-underline  transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#accessories-section"
                className="hover:text-purple-400 text-white no-underline transition duration-300"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#clothing-section"
                className="hover:text-purple-400 text-white no-underline transition duration-300"
              >
                Clothing
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:text-purple-400 text-white no-underline transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="hover:text-purple-400 text-white no-underline transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your email address..."
            />
            <textarea
              name="message"
              className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your message..."
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition duration-300"
            >
              <i className="fa fa-envelope mr-2" />
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
