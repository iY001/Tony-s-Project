import React from "react";
import imgPost from "../Hero/heroAsets/heroImgPlastine.jpg";

const LatestBlogs = () => {
  return (
    <div>
      <h2 className="text-3xl m-5  font-bold ">Latest Blogs</h2>
      <div className="w-11/12 mx-auto">
        <div className="card flex flex-col md:flex-row md:gap-5 md:font-bold  md:mx-auto lg:w-3/4 ">
          <div className="imgSection md:w-2/4">
            <img
              src={imgPost}
              className="aspect-video object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="titleSection flex flex-col justify-between gap-3 pr-3 md:w-3/4">
            <h3 className="font-light text-lg sm:text-2xl ">#Magnetic-Flux</h3>
            <h2 className="text-xl sm:text-3xl md:text-4xl">
              How to calculate Magnetic flux density.
            </h2>
            <p className="font-mono text-end">12/11/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
