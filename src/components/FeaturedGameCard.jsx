import React from "react";
import { Fade } from "react-awesome-reveal";

const FeaturedGameCard = ({ game }) => {
  const { name, thumbnail, rating, price } = game;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border">
        <Fade cascade>
          <figure className="p-2">
            <img className="rounded-xl h-60" src={thumbnail} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{name}</h2>
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
            <p className="font-semibold text-xl ">Price: ${price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral font-bold text-base text-white">
                Buy Now
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FeaturedGameCard;
