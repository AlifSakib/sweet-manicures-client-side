import React from "react";
import useTitle from "../../hooks/useTitle";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Services from "./Services";
import Updates from "./Updates";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <AboutMe></AboutMe>
      <Updates></Updates>
    </div>
  );
};

export default Home;
