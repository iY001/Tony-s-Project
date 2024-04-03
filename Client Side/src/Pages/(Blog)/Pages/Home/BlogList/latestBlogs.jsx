import React, { useState } from "react";
import { Link } from 'react-router-dom';

const BlogPost = ({ id,image, title, date, tags }) => {
  return (
    <Link to={`/blog/details/${id}`} className="card flex flex-col md:flex-row md:gap-5 md:font-bold  md:mx-auto lg:w-[70%] my-10 cursor-pointer  bg-white drop-shadow-md p-1">
      <div className="imgSection md:w-2/4">
        <img
          src={image}
          className="aspect-video object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="titleSection flex flex-col justify-between gap-3 pr-3 md:w-3/4">
        {tags && tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className="text-xl sm:text-3xl md:text-4xl">{title}</h2>
        <p className="font-mono text-end">{date}</p>
      </div>
    </Link>
  );
};

const LatestBlogs = () => {

  const blogData = [
    {
      image: "/assets/cover-1.jpg",
      title: "How to calculate Magnetic flux density.",
      date: "12/11/2023",
      tags: ["#Magnetic-Flux", "#Physics"]
    },
    {
      image: "/assets/cover-2.jpg",
      title: "How to calculate Magnetic flux density.",
      date: "12/11/2023",
      tags: ["#Magnetic-Flux", "#Physics"]
    },
    {
      image: "/assets/cover-1.jpg",
      title: "How to calculate Magnetic flux density.",
      date: "12/11/2023",
      tags: ["#Magnetic-Flux", "#Physics"]
    },
    {
      image: "/assets/cover-2.jpg",
      title: "How to calculate Magnetic flux density.",
      date: "12/11/2023",
      tags: ["#Magnetic-Flux", "#Physics"]
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl m-5  font-bold ">Latest Blogs</h2>
      <div className="w-full mx-auto flex items-center  flex-wrap">
        {blogData.map((blog, index) => (
          <BlogPost
            key={index}
            id={index}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            tags={blog.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
