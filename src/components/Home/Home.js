import React from "react";
import useTitle from "../../hooks/useTitle";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
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
      <Contact></Contact>
      <Updates></Updates>
    </div>
  );
};

export default Home;
