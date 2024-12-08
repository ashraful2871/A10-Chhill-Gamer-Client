import React, { useEffect, useState } from "react";
import FeaturedGameCard from "./FeaturedGameCard";
import { Fade } from "react-awesome-reveal";

const FeaturedGames = () => {
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-10-eight-phi.vercel.app/featured_games")
      .then((res) => res.json())
      .then((data) => {
        setGameData(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {gameData.map((game, idx) => (
        <Fade cascade damping={0.2}>
          <FeaturedGameCard key={idx} game={game}></FeaturedGameCard>
        </Fade>
      ))}
    </div>
  );
};

export default FeaturedGames;
