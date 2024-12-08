import React from "react";
import { Fade } from "react-awesome-reveal";

const UpcomingGamesCard = ({ game }) => {
  const { name, thumbnail, releaseStatus } = game;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border">
        <Fade cascade>
          <figure className="p-2">
            <img className="rounded-xl h-60" src={thumbnail} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{name}</h2>
            <p className="font-semibold text-xl ">
              Release Date: {releaseStatus}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default UpcomingGamesCard;
