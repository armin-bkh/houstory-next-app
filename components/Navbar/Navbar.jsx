import Link from "next/link";
import { HomeIcon, NewspaperIcon, PhoneIcon } from "@heroicons/react/outline";
import { UserGroupIcon, FingerPrintIcon } from "@heroicons/react/solid";

const links = [
  { id: 1, title: "home", href: "/", icon: HomeIcon },
  { id: 2, title: "blogs", href: "/blogs", icon: NewspaperIcon },
  { id: 3, title: "about", href: "/about", icon: UserGroupIcon },
  { id: 4, title: "contact", href: "/contact", icon: PhoneIcon },
  { id: 5, title: "registery", href: "/auth/registery", icon: FingerPrintIcon },
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
              <NavItem
                key={link.id}
                link={link}
                Icon={link.icon}
                handleClose={() => setIsShow(false)}
              />
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

const NavItem = ({ Icon, link, handleClose }) => {
  return (
      <li
        className="text-white hover:scale-125 transition"
        key={link.id}
        onClick={handleClose}
      >
        <Link href={link.href}>
          <a className="px-4 py-1 inline-flex items-center">
            <Icon className="mr-2 w-5" />
            {link.title}
          </a>
        </Link>
      </li>
  );
};
