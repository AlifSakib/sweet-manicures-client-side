import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data.data);
      });
  }, [user?.email]);

  const handleDelete = (myReview) => {
    fetch(`http://localhost:5000/reviews/${myReview._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Deleted");
          const deletedData = data.data;
          console.log(deletedData);
        }
      });
  };

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 md:grid-cols-2">
          {myReviews.map((myReview) => (
            <MyReview
              key={myReview._id}
              myReview={myReview}
              handleDelete={handleDelete}
            ></MyReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
