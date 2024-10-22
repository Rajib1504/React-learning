import "./App.css";
import Blog from "./components/blogs/Blog";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="border-2 border-black md:flex">
        <Blog></Blog>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
