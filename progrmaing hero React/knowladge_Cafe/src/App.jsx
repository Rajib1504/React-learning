import { useState } from "react";
import "./App.css";
import Blog from "./components/blogs/Blog";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";
function App() {
  const [bookamrk, setBookmark] = useState([]);
  const [timeCount, setTimeCount] = useState(0);
  const handeltoAddBookmar = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookamrk, blog];
    setBookmark(newBookmarks);
    // console.log(id);
    // const removeBookmark = bookamrk.filter((b) => b.id !== id);
    // setBookmark(removeBookmark);
  };
  const removeBookmark =(prompt) =>{
    // console.log(prompt)
    const removebookmark = [...bookamrk,prompt]
    setBookmark(removebookmark);

  }

  const handleToCountTime = (time) => {
    const newTime = timeCount + time;
    setTimeCount(newTime);
  };

  return (
    <>
      <div className=" max-w-screen-lg mx-auto">
        <Header></Header>
        <main className="border-2 border-black md:flex">
          <Blog
            handeltoAddBookmar={handeltoAddBookmar}
            handleToCountTime={handleToCountTime}
            removeBookmark={removeBookmark}
          ></Blog>
          <Bookmarks bookamrk={bookamrk} timeCount={timeCount}></Bookmarks>
        </main>
      </div>
    </>
  );
}

export default App;
