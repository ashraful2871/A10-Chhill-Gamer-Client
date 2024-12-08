import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HighestRatingCard = ({ ratingCard }) => {
  const { _id, image, title, genres, rating, year } = ratingCard;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border">
        <Fade cascade>
          <figure className="p-2">
            <img className="rounded-xl h-60" src={image} alt="Shoes" />
          </figure>
          <div className="card-body font-semibold">
            <h2 className="card-title">{title}</h2>
            <p>Genres: {genres}</p>
            <p className="text-lg font-semibold flex items-center gap-3">
              Rating:{" "}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>{" "}
              ({rating})
            </p>
            <p>PubLishing Year: {year}</p>
            <div className="card-actions justify-end">
              <Link to={`/review_details/${_id}`}>
                <button className="btn btn-neutral font-bold text-base text-white">
                  Explore Details
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HighestRatingCard;
