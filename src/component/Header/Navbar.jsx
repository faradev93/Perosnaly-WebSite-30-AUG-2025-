import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex-center flex-col gap-8 Electrolize bg-transparent electrolize py-4 mb-10 bg-linear-200 from-netural to-black/10">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About Me</li>
        </Link>
        <Link to={"/portfolio"}>
          <li>Portfolio</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
