import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./blog/SingleBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="md= w-9/12 border-2 border-blue-300 text-center">
      <h1 className="text-2xl">Blog:{blog.length}</h1>
      {blog.map((blg) => (
        <SingleBlog key={blg.id} blogSingle={blg}></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
