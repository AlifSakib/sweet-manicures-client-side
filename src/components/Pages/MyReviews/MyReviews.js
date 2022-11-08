import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import MyReview from "./MyReview";
import NoReviews from "./NoReviews";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useTitle("My Reviews");

  const handleDelete = (myReview) => {
    fetch(`http://localhost:5000/reviews/${myReview._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Deleted");
          const remaining = myReviews.filter(
            (review) => review._id !== myReview._id
          );
          setMyReviews(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data.data);
      });
  }, [user?.email, logOut]);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 md:grid-cols-2">
          {myReviews.length > 0 ? (
            myReviews.map((myReview) => (
              <MyReview
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
              ></MyReview>
            ))
          ) : (
            <NoReviews></NoReviews>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
