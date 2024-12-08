import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const GameWishList = () => {
  const { user } = useContext(AuthContext);
  const [watchLists, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://assignment-10-eight-phi.vercel.app/my_watch_list?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWatchList(data);
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
  return (
    <div>
      <Helmet>
        <title>Game Watch List | Chill Gamer</title>
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
            </tr>
          </thead>
          <tbody>
            {/* row 2 */}
            {watchLists.map((watchList, idx) => (
              <tr
                key={idx}
                className="hover text-center font-semibold text-base"
              >
                <th className="border border-gray-300">{idx + 1}</th>
                <td className="border border-gray-300">{watchList.title}</td>
                <td className="border border-gray-300">{watchList.rating}</td>
                <td className="border border-gray-300">
                  {watchList.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameWishList;
