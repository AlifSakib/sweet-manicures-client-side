import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center my-16">
        <MoonLoader color="#36d7b7" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="login"></Navigate>;
};

export default PrivateRoute;
