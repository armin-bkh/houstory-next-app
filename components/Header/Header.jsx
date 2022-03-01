import Navbar from "components/Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <header className="flex sticky top-0 z-50 items-center p-5 overflow-hidden bg-neutral-100 shadow">
        <button
          className="relative z-50"
          onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        >
          <div
            className={`w-7 h-1 rounded-sm bg-black ${
              isShow && "w-6"
            } transition-all`}
          ></div>
          <div
            className={`w-7 h-1 rounded-sm bg-black ${
              isShow && "w-5"
            } my-1 transition-all`}
          ></div>
          <div className={`w-7 h-1 rounded-sm bg-black transition-all`}></div>
        </button>
        <h1 className="ml-5 text-lg md:text-2xl">
          this is where we tell stories
        </h1>
        <button
          className="ml-auto hidden md:block bg-black px-3
         md:px-5 py-1 rounded-sm text-white hover:outline-offset-2
          outline-2 hover:outline hover:outline-black"
        >
          login
        </button>
      </header>
      <Navbar isShow={isShow} setIsShow={setIsShow} />
    </>
  );
};

export default Header;
