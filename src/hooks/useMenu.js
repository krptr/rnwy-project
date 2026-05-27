import { useState } from "react";

function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function updateMenu() {
    setIsMenuOpen((prevMenu) => !prevMenu);
  }

  return { isMenuOpen, updateMenu };
}

export { useMenu };
