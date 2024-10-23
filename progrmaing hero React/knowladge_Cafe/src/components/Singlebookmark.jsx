import PropTypes from "prop-types";

const Singlebookmark = ({ bookamrk }) => {
  const { title } = bookamrk;

  return (
    <div className="bg-yellow-100 rounded-lg gap-3 shadow-lg shadow-[#cfdacac9] my-4 p-4">
      <h1>{title}</h1>
    </div>
  );
};
Singlebookmark.propTypes = {
  bookamrk: PropTypes.object.isRequired,
};
export default Singlebookmark;
