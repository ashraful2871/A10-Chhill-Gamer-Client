import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import HighestRatingCard from "./HighestRatingCard";
import { Fade } from "react-awesome-reveal";
import FeaturedGames from "./FeaturedGames";
import UpcomingGames from "./UpcomingGames";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import Slider from "./slider/Slider";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const loadedSixData = useLoaderData();
  const [highestRating, setHighestRating] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadedSixData) {
      setHighestRating(loadedSixData);
      setLoading(false);
    }
  }, [loadedSixData]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Chill Gamer</title>
      </Helmet>

      <div className="space-y-10">
        <div className="">
          <Slider></Slider>
        </div>

        <>
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center py-10">
              <Typewriter words={[" Highest Rated Game"]} />
            </h2>
            <hr className="border-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {highestRating.map((ratingCard) => (
              <Fade cascade damping={0.2}>
                <HighestRatingCard ratingCard={ratingCard}></HighestRatingCard>
              </Fade>
            ))}
          </div>

          <Link to="/all_review">
            <button className="btn btn-neutral text-white font-bold text-base mt-5">
              See More
            </button>
          </Link>
        </>

        <div className="space-y-5 text-center md:text-start">
          <h2 className="text-4xl md:text-5xl pt-12">Featured Deals</h2>
          <p>A selection of some of the best deals on OpenCritic</p>
        </div>
        <hr className="border-2" />
        <FeaturedGames></FeaturedGames>

        <div className="space-y-5 text-center md:text-start">
          <h2 className="text-4xl md:text-5xl pt-12">Upcoming Games</h2>
        </div>
        <hr className="border-2" />
        <UpcomingGames></UpcomingGames>

        <div className="space-y-5 text-center md:text-start">
          <h2 className="text-4xl md:text-5xl pt-12">Why Choose Us</h2>
        </div>
        <hr className="border-2" />
        <WhyChooseUs></WhyChooseUs>
      </div>
    </>
  );
};

export default Home;
