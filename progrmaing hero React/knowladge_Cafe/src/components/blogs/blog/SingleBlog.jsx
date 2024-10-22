import PropTypes from "prop-types";
const SingleBlog = ({ blogSingle }) => {
  console.log(blogSingle);
  const { title, cover_img, author_img, reading_time, post_date, author } =
    blogSingle;
  return (
    <div className="flex justify-center ">
      <div className="w-2/3">
        <img src={cover_img} alt="" />
        <div className="flex justify-between items-center">
          <div className="flex  justify-around gap-4 items-center ">
            <img className="w-12" src={author_img} alt="" />
            <div>
              <h2 className="text-lg">{author}</h2>
              <p className="text-gray-700 text-sm">{post_date}</p>
            </div>
          </div>
          <div className="">
            <p className="text-gray-700 text-sm">0{reading_time} min read</p>
          </div>
        </div>
        <p className="text-2xl ">{title}</p>
      </div>
    </div>
  );
};
SingleBlog.propTypes = {
  blogSingle: PropTypes.object.isRequired,
};
export default SingleBlog;
