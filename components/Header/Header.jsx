const Header = () => {
  return (
    <header className="flex items-center p-5">
      <div>
        <div className="w-7 h-1 rounded-sm bg-black"></div>
        <div className="w-7 h-1 rounded-sm bg-black my-1"></div>
        <div className="w-7 h-1 rounded-sm bg-black"></div>
      </div>
      <h1 className="ml-5 text-lg md:text-2xl">this is where we tell stories</h1>
      <button className="ml-auto hidden md:block bg-black px-3 md:px-5 py-1 rounded-sm text-white">
        login
      </button>
    </header>
  );
};

export default Header;
