import PropTypes from "prop-types";
import Singlebookmark from "./Singlebookmark";

const Bookmarks = ({ bookamrk, timeCount }) => {
  // console.log(timeCount);

  return (
    <div className=" w-full md:w-2/6 text-center">
      {/* time  */}
      <div className="bg-blue-100 rounded-xl  shadow-lg shadow-[#cfdacac9] p-4 mb-4">
        <h1 className="text-2xl">Total Reading time:{timeCount}</h1>
      </div>

      {/* blogs  */}
      <div className="bg-blue-100 rounded-xl  shadow-lg shadow-[#cfdacac9] p-4 ">
        <h1 className="text-2xl text-center">
          Bookmarked Blog: {bookamrk.length}
        </h1>
      </div>

      {bookamrk.map((singelb, i) => (
        <Singlebookmark key={i} bookamrk={singelb}></Singlebookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookamrk: PropTypes.array.isRequired,
  timeCount: PropTypes.number.isRequired,
};

export default Bookmarks;
