import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { signUp, setUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, photo, email, password);

    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasMinLength = /.{6,}/;

    if (!hasMinLength.test(password)) {
      setError("password must be 6 character or longer");
      return;
    }

    if (!hasUppercase.test(password)) {
      setError("must be one uppercase letter");
      return;
    }

    if (!hasLowercase.test(password)) {
      setError("must be one lowercase letter");
      return;
    }

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Successfully Signed Up", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
        setUser(user.result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Sign Up | Chill Gamer</title>
      </Helmet>

      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
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
              <p className="text-center mt-2 text-red-600">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-base font-bold text-white">
                Sign Up
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
            <span>Already have an account? </span>
            <Link className="text-red-600 font-semibold" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
