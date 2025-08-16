import { translate } from "@/i18n/index";
import { NavLink } from "react-router-dom";

export function NavBooks() {
  return (
    <nav className="flex items-center gap-4 ">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `block px-2 py-1  transition-colors duration-300 cursor-pointer ${
            isActive ? "bg-indigo-600" : "bg-transparent hover:bg-indigo-600"
          }`
        }
      >
        <h2 className="font-bold">{translate("AVAILABLE_BOOKS")}</h2>
      </NavLink>
      <NavLink
        to={"/reading-list"}
        className={({ isActive }) =>
          `block px-2 py-1  transition-colors duration-300 cursor-pointer ${
            isActive ? "bg-indigo-600" : "bg-transparent hover:bg-indigo-600"
          }`
        }
      >
        <h2 className="font-bold">{translate("READING_LIST")}</h2>
      </NavLink>
    </nav>
  );
}
