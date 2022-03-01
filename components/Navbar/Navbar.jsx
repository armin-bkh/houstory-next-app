import Link from "next/link";

const links = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "blogs", href: "/blogs" },
  { id: 3, title: "about", href: "/about" },
  { id: 4, title: "contact", href: "/contact" },
  { id: 5, title: "login", href: "/login" },
];

const Navbar = ({ isShow, setIsShow }) => {
  return (
    <>
      <div
        className={`z-40 fixed duration-700 ease-in-out w-full lg:w-1/2 bg-neutral-700 h-screen flex justify-center items-center top-0 transition-all ${
          isShow ? "left-0" : "-left-full"
        }`}
      >
        <nav>
          <ul>
            {links.map((link) => (
              <li
                className="text-white hover:scale-125 transition"
                key={link.id}
                onClick={()=> setIsShow(false)}
              >
                <Link href={link.href}>
                  <a className="px-4 py-1 inline-block">{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`z-40 fixed h-screen duration-700 ease-in-out bg-menu-bg bg-cover w-1/2 transition-all top-0 ${
          isShow ? "-right-full lg:right-0" : "-right-full"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
