import PropTypes from "prop-types";
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
const SingleBlog = ({ blogSingle, handeltoAddBookmar,removeBookmark, handleToCountTime }) => {
  // console.log(handeltoAddBookmar);
  const [statusBookmark, setStatusBookmark] = useState(false);
  const {title, cover_img, author_img, reading_time, post_date, author } =
    blogSingle;
  return (
    <div className="flex justify-center ">
      <div className="m-2 border-2 shadow-lg shadow-[#cfdacac9]">
        <img className="rounded-lg mb-2" src={cover_img} alt="" />
        <div className="flex justify-between items-center">
          <div className="flex  justify-around gap-4 items-center ">
            <img className="w-12" src={author_img} alt="" />
            <div>
              <h2 className="text-lg">{author}</h2>
              <p className="text-gray-700 text-sm">{post_date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700 text-sm">0{reading_time} min read</p>
            <button onClick={() =>{ 
              handeltoAddBookmar(blogSingle)
              removeBookmark(blogSingle)
              setStatusBookmark(!statusBookmark)
              }}>

            {statusBookmark?<FaBookmark className="mr-2"></FaBookmark>:<CiBookmark className="mr-2"></CiBookmark>}
            </button>
          </div>
        </div>
        <p className="text-4xl my-5 ">{title}</p>
        <a
          className="text-blue-700 hover:underline"
          onClick={() => handleToCountTime(reading_time)}
          href="#"
        >
          Mark as read
        </a>
      </div>
    </div>
  );
};
SingleBlog.propTypes = {
  blogSingle: PropTypes.object.isRequired,
  handeltoAddBookmar: PropTypes.func.isRequired,
  handleToCountTime: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
};
export default SingleBlog;
