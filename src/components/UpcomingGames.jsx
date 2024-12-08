import React, { useEffect, useState } from "react";
import UpcomingGamesCard from "./UpcomingGamesCard";
import { Fade } from "react-awesome-reveal";

const UpcomingGames = () => {
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-eight-phi.vercel.app/upcoming_games")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingGames(data);
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
      {upcomingGames.map((game, idx) => (
        <Fade cascade>
          <UpcomingGamesCard key={idx} game={game}></UpcomingGamesCard>
        </Fade>
      ))}
    </div>
  );
};

export default UpcomingGames;
