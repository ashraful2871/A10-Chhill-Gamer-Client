import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaStar, FaUsers, FaGlobe, FaCommentDots } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <Fade cascade damping={0.2}>
      <div className="bg-base-100 text-base-content py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
            <FaStar className="text-4xl text-yellow-500" />
            <h3 className="mt-4 text-xl font-semibold">Trusted Reviews</h3>
            <p className="text-center mt-2">
              Genuine feedback from verified users.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
            <FaUsers className="text-4xl text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold">Community Insights</h3>
            <p className="text-center mt-2">
              A vibrant community sharing real experiences.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
            <FaGlobe className="text-4xl text-green-500" />
            <h3 className="mt-4 text-xl font-semibold">Global Reach</h3>
            <p className="text-center mt-2">
              Reviews from users across the globe.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
            <FaCommentDots className="text-4xl text-purple-500" />
            <h3 className="mt-4 text-xl font-semibold">Interactive Feedback</h3>
            <p className="text-center mt-2">
              Share your thoughts and engage with others.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WhyChooseUs;
