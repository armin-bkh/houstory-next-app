import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialMedia = [
  {
    href: "https://www.github.com/armin-bkh",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/arminbkh",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/rminbkh/",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-neutral-100 py-5 text-sm">
      <p className="mb-3">
        thanks{" "}
        <a
          className="text-blue-500"
          target="_blank"
          href="https://www.freerealapi.com"
        >
          www.freerealapi.com
        </a>{" "}
        for their api
      </p>
      <p>Armin Bakhshi</p>
      <nav className="w-full">
        <ul className="flex justify-evenly items-center mt-5">
          {socialMedia.map((link) => (
            <li
              className="text-xl md:text-2xl text-gray-500 hover:text-black transition"
              key={link.href}
            >
              <a href={link.href}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
