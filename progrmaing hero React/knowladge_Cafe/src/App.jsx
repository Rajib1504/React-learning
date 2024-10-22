import "./App.css";
import Blog from "./components/blogs/Blog";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div>
        <Bookmarks></Bookmarks>
        <Blog></Blog>
      </div>
    </>
  );
}

export default App;
