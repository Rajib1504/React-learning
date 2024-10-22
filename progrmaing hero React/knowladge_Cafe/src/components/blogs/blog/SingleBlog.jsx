import PropTypes from "prop-types";
const SingleBlog = ({ blogSingle }) => {
  console.log(blogSingle);
  const { title, cover_img } = blogSingle;
  return (
    <div>
      <img className="w-72" src={cover_img} alt="" />
      <h1 className="text-left">{title}</h1>
    </div>
  );
};
SingleBlog.propTypes = {
  blogSingle: PropTypes.object.isRequired,
};
export default SingleBlog;
