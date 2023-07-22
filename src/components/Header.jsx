import { Link, NavLink } from "react-router-dom";
import { HouseLine, HamburgerIcon } from "../assets";
import { navbarLinks } from "../data/index";

const Header = ({ hamburger }) => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <Link
        to={"/"}
        className="flex flex-1 flex-row items-center justify-between hover:text-primary-400 duration-200 transition all"
      >
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-11 h-11" alt="" src={HouseLine} />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-row items-center justify-end gap-36 text-sm text-primary-900 sm:flex">
        <ul className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
          {navbarLinks.map((item, i) => (
            <li className="relative leading-[22px]" key={i}>
              <NavLink>{item}</NavLink>
            </li>
          ))}
        </ul>
        {!hamburger && (
          <button className="cursor-pointer border-none p-0 bg-transparent hidden flex-row items-center justify-center lg:flex">
            <img src={HamburgerIcon} alt="" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
