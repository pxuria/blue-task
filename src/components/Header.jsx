import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#FBFAFB] py-6">
      <nav className="container mx-auto px-10 w-full flex justify-between items-start">
        <div className="flex items-center gap-8">
          <NavLink
            to={"/"}
            className="relative px-4 py-2 rounded-md bg-white isolate z-10 border-2 border-primary before:absolute before:w-full transition-all duration-500 before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white text-base font-normal"
          >
            افزودن تسهیلات
          </NavLink>

          <NavLink
            to={"/facilities"}
            className="no-underline text-muted font-normal text-base transition-all duration-200 ease-in hover:text-primary leading-loose relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:rounded-[2px] before:bg-secondary before:-bottom-1 before:left-1/2 before:transition-all before:duration-[400ms] before:hover:w-full before:hover:left-0"
          >
            لیست تسهیلات
          </NavLink>
        </div>

        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="" width={60} height={60} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
