import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Blog</h1>
    </div>
  );
};

export default Blog;
