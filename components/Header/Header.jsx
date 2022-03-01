import Navbar from "components/Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <header className="flex items-center p-5 overflow-hidden">
        <button
          className="z-50"
          onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        >
          <div
            className={`w-7 h-1 rounded-sm ${
              isShow ? "bg-white" : "bg-black"
            } transition-all`}
          ></div>
          <div
            className={`w-7 h-1 rounded-sm ${
              isShow ? "bg-white" : "bg-black"
            } my-1 transition-all`}
          ></div>
          <div
            className={`w-7 h-1 rounded-sm ${
              isShow ? "bg-white" : "bg-black"
            } transition-all`}
          ></div>
        </button>
        <h1 className="ml-5 text-lg md:text-2xl">
          this is where we tell stories
        </h1>
        <button className="ml-auto hidden md:block bg-black px-3 md:px-5 py-1 rounded-sm text-white">
          login
        </button>
      </header>
      <Navbar isShow={isShow} />
    </>
  );
};

export default Header;
