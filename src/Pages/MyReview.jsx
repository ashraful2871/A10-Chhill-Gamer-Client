import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Helmet } from "react-helmet";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://assignment-10-eight-phi.vercel.app/my_reviews?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  //Delete
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-white font-bold text-xl",
        cancelButton: "btn btn-error mr-5 text-white font-bold text-xl",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You want to delete this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(id);
          fetch(`https://assignment-10-eight-phi.vercel.app/reviews/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setReviews(reviews.filter((review) => review._id !== id));
            });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>My Review | Chill Gamer</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table border border-gray-300 border-collapse">
          {/* head */}
          <thead className="text-center bg-neutral text-white font-bold text-lg">
            <tr>
              <th className="border border-gray-300">Serial No.</th>
              <th className="border border-gray-300">Title</th>
              <th className="border border-gray-300">Rating</th>
              <th className="border border-gray-300">Description</th>
              <th className="border border-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* row 2 */}
            {reviews.map((review, idx) => (
              <tr
                key={idx}
                className="hover text-center font-semibold text-base"
              >
                <th className="border border-gray-300">{idx + 1}</th>
                <td className="border border-gray-300 w-48">{review.title}</td>
                <td className="border border-gray-300">{review.rating}</td>
                <td className="border border-gray-300">{review.description}</td>
                <td className="border border-gray-300 flex gap-2">
                  <Link to={`/update_review/${review._id}`}>
                    {" "}
                    <button className="btn text-primary text-2xl font-bold">
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn text-error font-bold text-2xl"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
