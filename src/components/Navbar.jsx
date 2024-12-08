import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DarkController from "./DarkController";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();

    window.location.href = "/";
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all_review" className="font-bold">
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/add_review" className="font-bold">
          Add Review
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink to="/my_review" className="font-bold">
            My Reviews
          </NavLink>
        )}
      </li>
      <li>
        {user && (
          <NavLink to="/game_wishlist" className="font-bold">
            Game WatchList
          </NavLink>
        )}
      </li>
      {!user && (
        <li>
          <NavLink to="/sign_up" className="font-bold block md:hidden">
            Sign Up
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-extrabold">
          Chill Gamer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <span className="">
          {" "}
          <DarkController></DarkController>
        </span>
        {user?.email ? (
          <>
            <div
              className="tooltip tooltip-bottom hidden md:block"
              data-tip={`${user?.displayName}`}
            >
              <img
                className="rounded-full w-10 h-10"
                src={user.photoURL}
                alt=""
              />
            </div>

            <Link
              onClick={handleSignOut}
              to="/"
              className="btn btn-neutral text-base font-bold text-white"
            >
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-neutral text-base font-bold text-white"
            >
              Login
            </Link>
            <Link to="/sign_up">
              <button className="btn btn-neutral hidden md:block text-base font-bold text-white">
                {" "}
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
