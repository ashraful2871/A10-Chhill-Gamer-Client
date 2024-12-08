import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ReviewDetails = () => {
  const detailsData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const userEmail = user?.email;
  const userName = user?.displayName;

  const { title, name, image, genres, email, description, year, rating } =
    detailsData;

  const watchListItems = {
    title,
    name,
    image,
    genres,
    email,
    description,
    year,
    rating,
    userEmail,
    userName,
  };

  const handleWatchList = () => {
    fetch("https://assignment-10-eight-phi.vercel.app/watch_list", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchListItems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added to your watch list successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  useEffect(() => {
    setLoading(false);
  }, [detailsData]);
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
        <title>Review Details | Chill Gamer</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="card card-compact w-[800px] bg-base-100 p-4 border-2">
          <figure>
            <img className=" rounded-xl" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center text-4xl font-bold">
              {title}
            </h2>
            <p className="text-lg font-semibold">Genres: {genres}</p>
            <p className="text-lg font-semibold">Publishing Year: {year}</p>
            <p className="text-lg font-semibold">Reviewer Name: {name}</p>
            <p className="text-lg font-semibold">Email: {email}</p>
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
            <p className="text-lg font-semibold">
              Description: <br /> {description}
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={handleWatchList}
                className="btn btn-neutral font-bold text-base text-white"
              >
                Add to WatchList
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
