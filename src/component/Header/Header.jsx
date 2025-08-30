import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Random } from "../../api/func";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const counter = Random();

  return (
    <header className="transition-all duration-500 ">
      <nav>
        <div className="flex justify-between items-center pl-5 pr-5 pt-2 mb-4 fixed top-0 left-0 w-full z-50">
          <div>
            <ul>
              <li>
                <img src="./fr-logo.png" width={40} />
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex-center gap-8 Electrolize electrolize py-4 md:visible max-md:hidden select-none">
              <a href={"#main"}>
                <li>Home</li>
              </a>

              <a href="#about">
                <li>About Me</li>
              </a>

              <Link to={"/portfolio"}>
                <li>Portfolio</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="md:hidden">
            <Hamburger
              size={20}
              duration={0.6}
              onToggle={() => {
                setOpen(!open);
              }}
            />
          </div>
        </div>

        <div className="md:hidden">{open && <Navbar />}</div>
        <Outlet />
      </nav>
    </header>
  );
};
export default Header;
