import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/AllReviewCard";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllReview = () => {
  const loadedAllReview = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [genre, setGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadedAllReview) {
      setReviews(loadedAllReview);
      setLoading(false);
    }
  }, [loadedAllReview]);

  useEffect(() => {
    const sortReviews = async () => {
      setLoading(true);
      const res = await fetch(
        `https://assignment-10-eight-phi.vercel.app/reviews?sortBy=${sortBy}&order=${order}&genre=${genre}`
      );
      const data = await res.json();
      setReviews(data);
      setLoading(false);
    };
    sortReviews();
  }, [sortBy, order, genre]);

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
        <title>All Review | Chill Gamer</title>
      </Helmet>
      <div className="flex justify-between">
        <details className="dropdown mb-12 w-1/2">
          <summary className="btn btn-neutral m-1 text-base font-bold text-white">
            Sort By Rating or Year
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a
                onClick={() => {
                  setSortBy("rating");
                  setOrder("desc");
                }}
                className="text-base font-semibold"
              >
                Rating (High to Low)
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSortBy("year");
                  setOrder("asc");
                }}
                className="text-base font-semibold"
              >
                Year (Old to new)
              </a>
            </li>
          </ul>
        </details>

        <select
          className="select select-bordered font-bold w-1/2 max-w-xs"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option className="text-base font-semibold" value={"All"}>
            All Genre
          </option>
          <option className="text-base font-semibold" value={"Action"}>
            Action
          </option>
          <option className="text-base font-semibold" value={"RPG"}>
            RPG
          </option>
          <option className="text-base font-semibold" value={"Adventure"}>
            Adventure
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reviews.map((review, idx) => (
          <Fade cascade damping={0.2}>
            <AllReviewCard key={idx} review={review}></AllReviewCard>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default AllReview;
