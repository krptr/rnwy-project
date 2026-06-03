import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const iconClass = "text-on-background font-bold";

function geThemeIcon(theme) {
  if (theme == "light") {
    return <MdOutlineDarkMode className={iconClass} />;
  } else {
    return <MdOutlineLightMode className={iconClass} />;
  }
}

function getThemeText(theme) {
  if (theme === "light") {
    return "Dark theme";
  } else {
    return "Light theme";
  }
}

export { geThemeIcon, getThemeText };
