import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ footerRef }) => {
  return (
    <footer ref={footerRef} className="bg-base-200 text-base-content border-t">
      <div className="bg-base-200 content p-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Exclusive Gaming Insights & Deals
          </h2>
          <p className="mt-2">
            Be the first to know about hidden tricks, new releases, and
            exclusive discounts. Subscribe and stay ahead in the game!
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full md:w-1/3 bg-base-100 text-base-content"
            />
            <button className="btn btn-neutral text-base font-bold text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col gap-5 md:flex-row justify-evenly bg-base-200 text-base-content">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Chill Gamer</h3>
          <p>Contact: chillgamer@contact.com</p>
          <img
            className="h-20"
            src="https://i.ibb.co.com/K6RyWdf/chill-gamer-removebg.png"
            alt="Chill Gamer Logo"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">Navigate</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="all_review">All Reviews</Link>
            </li>
            <li>
              <Link to="add_review">Add Reviews</Link>
            </li>
            <li>
              <Link to="my_review">My Reviews</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Benefits</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>Exclusive Gaming Discounts</li>
            <li>Community Forums</li>
            <li>Live Streaming Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-xl" />
            <a href="mailto:chillgamer@contact.com" className="hover:underline">
              chillgamer@contact.com
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhone className="text-xl" />
            <a href="tel:+1234567890" className="hover:underline">
              +1 234-567-890
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Social Media</h3>
          <div className="flex gap-3 mt-2">
            <a
              className="text-2xl"
              href="https://x.com/ashraful72871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="text-2xl"
              href="https://www.facebook.com/ashraful2871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="text-2xl"
              href="https://www.instagram.com/ashrafulislam2871/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-base-200 p-4 text-center">
        <p>Copyright © 2024 Chill Gamer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
