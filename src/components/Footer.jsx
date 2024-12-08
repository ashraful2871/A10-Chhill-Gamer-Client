import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t">
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
      <div className="p-10 grid grid-cols-1 md:grid-cols-5 gap-8 bg-base-200 text-base-content">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Chill Gamer</h3>
          <p>Contact: chillgamer@contact.com</p>
          <img
            className="h-20"
            src="https://i.ibb.co.com/K6RyWdf/chill-gamer-removebg.png"
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">Navigate</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>Home</li>
            <li>All Reviews</li>
            <li>Add Reviews</li>
            <li>My Reviews</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>Privacy</li>
            <li>Terms of Service</li>
            <li>FAQ</li>
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
          <h3 className="font-bold text-lg">Social Media</h3>
          <div className="flex gap-3 mt-2">
            <a
              className="text-2xl"
              href="https://x.com/ashraful72871"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="text-2xl"
              href="https://www.facebook.com/ashraful2871"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="text-2xl"
              href="https://www.instagram.com/ashrafulislam2871/"
              target="_blank"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-base-200 p-4 text-center">
        <p>Copyright © 2024 Quest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
