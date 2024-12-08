import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Home from "./components/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./provider/AuthProvider";
import AddReview from "./Pages/AddReview";
import MyReview from "./Pages/MyReview";
import GameWishList from "./Pages/GameWishList";
import AllReview from "./Pages/AllReview";
import Privet from "./privet/Privet";
import ReviewDetails from "./components/ReviewDetails";
import UpdateReview from "./components/UpdateReview";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-eight-phi.vercel.app/top_reviews"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign_up",
        element: <SignUp></SignUp>,
      },
      ,
      {
        path: "/all_review",
        element: <AllReview></AllReview>,
        loader: () =>
          fetch("https://assignment-10-eight-phi.vercel.app/reviews"),
      },
      {
        path: "/add_review",
        element: (
          <Privet>
            <AddReview></AddReview>
          </Privet>
        ),
      },
      {
        path: "/my_review",
        element: (
          <Privet>
            <MyReview></MyReview>
          </Privet>
        ),
      },
      {
        path: "/review_details/:id",
        element: (
          <Privet>
            <ReviewDetails></ReviewDetails>
          </Privet>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-eight-phi.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/game_wishlist",
        element: (
          <Privet>
            <GameWishList></GameWishList>
          </Privet>
        ),
      },
      {
        path: "/update_review/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-eight-phi.vercel.app/reviews/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
