import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const SingleBlog = ({ blogSingle, handeltoAddBookmar, handleToCountTime }) => {
  console.log(handeltoAddBookmar);
  const { title, cover_img, author_img, reading_time, post_date, author } =
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
            <button onClick={() => handeltoAddBookmar(blogSingle)}>
              <CiBookmark className="mr-2"></CiBookmark>
            </button>
          </div>
        </div>
        <p className="text-4xl my-5 ">{title}</p>
        <a
          className="text-blue-700 hover:underline"
          onClick={() => handleToCountTime(blogSingle)}
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
};
export default SingleBlog;
