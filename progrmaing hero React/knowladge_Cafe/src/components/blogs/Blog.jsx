import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./blog/SingleBlog";

const Blog = ({ handeltoAddBookmar, handleToCountTime }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="md:w-2/3 w-full border-2 border-blue-300 text-center">
      <h1 className="text-2xl"></h1>
      {blog.map((blg) => (
        <SingleBlog
          key={blg.id}
          blogSingle={blg}
          handeltoAddBookmar={handeltoAddBookmar}
          handleToCountTime={handleToCountTime}
        ></SingleBlog>
      ))}
    </div>
  );
};
Blog.propTypes = {
  handeltoAddBookmar: PropTypes.func.isRequired,
  handleToCountTime: PropTypes.func.isRequired,
};

export default Blog;
