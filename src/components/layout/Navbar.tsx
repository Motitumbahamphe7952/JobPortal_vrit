import { Briefcase } from "lucide-react";
import FlexRow from "../common/FlexRow";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const dropdown = [
    {
      path: "/",
      label: "Home",
      enabled: "true",
    },
    {
      path: "/jobs",
      label: "Jobs",
      enabled: "true",
    },
    {
      path: "/about",
      label: "About Us",
      enabled: "true",
    },
    {
      path: "/contact",
      label: "Contact Us",
      enabled: "true",
    },
  ];

  return (
    <FlexRow
      className={
        "w-full h-auto py-2 flex justify-between items-center z-100 transition-colors duration-300 px-30 bg-white border-b-2"
      }
    >
      <FlexRow className="items-center h-auto gap-2">
        <Briefcase size={32} />
        <span className="text-xl font-medium">CareerSathi</span>
      </FlexRow>

      <FlexRow className="gap-4 ml-12">
        {dropdown.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className="px-4 py-4 text-lg"
          >
            {item.label}
          </NavLink>
        ))}
      </FlexRow>

      <FlexRow className="items-center gap-4 relative">
        <button className="text-primary font-medium hidden sm:inline cursor-pointer px-4 py-2 border-2 rounded-xs border-gray-200">
          Login
        </button>
        <span className="bg-gradient-primary hover:bg-secondary text-white text-[10px] sm:text-[16px] md:text-[18px] md:font-medium px-4 py-2 rounded-xs leading-tight whitespace-nowrap cursor-pointer">
          Register
        </span>
      </FlexRow>
    </FlexRow>
  );
};

export default NavBar;
