import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const darkClass = document.documentElement.classList.contains("dark");
    setIsDark(darkClass);
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const image = formData.get("image");
    const rating = formData.get("rating");
    const year = formData.get("year");
    const genres = formData.get("genres");
    const email = formData.get("email");
    const name = formData.get("name");
    const description = formData.get("description");

    const addReview = {
      title,
      image,
      rating,
      year,
      genres,
      email,
      name,
      description,
    };

    fetch("https://assignment-10-eight-phi.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Review Added Successfully", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          e.target.reset();
        }
      });
    setLoading(false);
  };

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
        <title>Add Review | Chill Gamer</title>
      </Helmet>

      <div
        className={`card md:p-10 w-full shrink-0 ${
          isDark ? "bg-[#333333]" : "bg-dark shadow-2xl"
        }`}
      >
        <div>
          {" "}
          <h2 className="text-center text-5xl font-bold">
            {" "}
            <Typewriter words={["Add Review"]} />
          </h2>
        </div>
        <form
          onSubmit={handleAddReview}
          className="card-body md:grid  md:grid-cols-2 gap-5"
        >
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">ImageURL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="ImageURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">Rating </span>
            </label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              placeholder="1-5"
              className="input input-bordered"
              onChange={(e) => {
                if (e.target.value > 5) {
                  e.target.value = 5;
                }
              }}
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Publishing year
              </span>
            </label>
            <input
              type="number"
              name="year"
              placeholder="Ex: 2021, 2024"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">Genres </span>
            </label>
            <select
              name="genres"
              className="select select-bordered font-semibold"
              required
            >
              <option value="" disabled selected>
                Select Genres
              </option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control col-span-1 md:col-span-2">
            <label className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Review Description
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-36"
              placeholder="describe your review...."
            ></textarea>
          </div>

          <div className="form-control mt-6 md:col-span-2">
            <button className="btn btn-neutral text-base text-white font-bold">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddReview;
