import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully login", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid Email & Password", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully login", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login | Chill Gamer</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-base font-bold text-white">
                Login{" "}
              </button>
            </div>
          </form>
          <div className="divider -mt-2">Or</div>
          <div className="text-center mb-5 text-3xl">
            <button onClick={handleGoogleLogin}>
              <FcGoogle />
            </button>
          </div>
          <div className="text-center mb-5">
            <span>Do not have an account? </span>
            <Link className="text-red-600 font-semibold" to="/sign_up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
