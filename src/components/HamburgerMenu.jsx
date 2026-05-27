import { NavLink } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { getNavlinkClassForMobile } from "../utils/navbar-utils/get-navlink-class";
import { geThemeIcon, getThemeText } from "../utils/navbar-utils/get-theme";
import { MdOutlineCancel } from "react-icons/md";

function SideMenu({ updateMenu }) {
  const { theme, cycleTheme } = useTheme();

  return (
    <aside className="fixed top-0 right-0 h-screen w-72 z-40 bg-background shadow-lg rounded-l-2xl md:hidden">
      <div className="flex justify-end items-center p-4">
        <button onClick={updateMenu}>
          <MdOutlineCancel size={36} className="text-on-background" />
        </button>
      </div>
      <nav className="flex flex-col gap-2 p-4 mt-4">
        <NavLink
          to="/"
          className={getNavlinkClassForMobile}
          onClick={updateMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={getNavlinkClassForMobile}
          onClick={updateMenu}
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={getNavlinkClassForMobile}
          onClick={updateMenu}
        >
          Cart
        </NavLink>
        <NavLink
          to="/orders"
          className={getNavlinkClassForMobile}
          onClick={updateMenu}
        >
          Orders
        </NavLink>

        <button
          aria-label="Toggle Theme"
          onClick={cycleTheme}
          className="flex gap-2 items-center px-6 py-3 text-on-surface hover:bg-outline-variant rounded-2xl w-full"
        >
          <span>{geThemeIcon(theme)}</span>
          <span className="text-base tracking-widest">
            {getThemeText(theme)}
          </span>
        </button>
      </nav>
    </aside>
  );
}

export { SideMenu };
