import profile from "../assets/imges/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-centerd border-b-2 border-gray m-2 px-2">
      <h1 className="text-2xl m-3">Knowledge Cafe</h1>
      <hr />
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
