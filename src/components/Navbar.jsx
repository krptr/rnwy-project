import { Link, NavLink } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { getNavlinkClass } from "../utils/get-navlink-class";
import { geThemeIcon } from "../utils/get-theme";
import { LuBell } from "react-icons/lu";
import { navButtonClass, navIconClass } from "../utils/constants";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useMenu } from "../hooks/useMenu";
import { MdOutlineMenu } from "react-icons/md";
import { SideMenu } from "./HamburgerMenu";

function Navbar() {
  const { theme, cycleTheme } = useTheme();
  const { isMenuOpen, updateMenu } = useMenu();

  return (
    <>
      <header className="bg-surface/90 backdrop-blur flex justify-between font-sans items-center px-4 py-4 lg:px-32 lg:py-4 border-b border-outline-variant z-20 sticky top-0">
        <div>
          <Link to="/">
            <span className="text-on-background text-2xl font-black font-display tracking-tight">
              RNWY<span className="text-primary">.</span>
            </span>
          </Link>
        </div>

        <nav aria-label="Header Navigation" className="hidden md:flex gap-8">
          <NavLink to="/" className={getNavlinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={getNavlinkClass}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={getNavlinkClass}>
            Cart
          </NavLink>
          <NavLink to="/orders" className={getNavlinkClass}>
            Orders
          </NavLink>
        </nav>

        {/* Header Buttons */}
        <div className="hidden md:flex gap-2">
          {/* Theme Button */}
          <button
            aria-label="Toggle Theme"
            onClick={cycleTheme}
            className={navButtonClass}
          >
            {geThemeIcon(theme)}
          </button>

          {/* View Cart */}
          <button className={navButtonClass}>
            <MdOutlineShoppingCart
              aria-label="View Cart"
              className={navIconClass}
            />
          </button>

          {/* Notification Bell */}
          <button className={navButtonClass}>
            <LuBell aria-label="Order Notifications" className={navIconClass} />
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="block relative z-50 md:hidden">
          <button
            onClick={updateMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            className={navButtonClass}
          >
            {!isMenuOpen && (
              <MdOutlineMenu size={36} className="text-on-background" />
            )}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={updateMenu}
            role="button"
            aria-label="Close-menu"
            tabIndex={0}
          />
          <SideMenu updateMenu={updateMenu} />
        </>
      )}
    </>
  );
}

export { Navbar };
