import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import LatestBlogs from "./BlogList/latestBlogs";
import MainNavbar from "../../../../components/MainNavbar";

function Home() {
  return (
    <>
      <Hero />
      <LatestBlogs />
    </>
  );
}

export default Home;
