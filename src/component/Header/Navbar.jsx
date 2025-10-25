import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex-center flex-col gap-8 Electrolize bg-transparent electrolize py-4 mb-10 bg-linear-200 from-netural to-black/10">
        <a href={"#main"}>
          <li>Home</li>
        </a>
        <a href={"#about"}>
          <li>About Me</li>
        </a>
        <a href={"#portfolio"}>
          <li>Portfolio</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
