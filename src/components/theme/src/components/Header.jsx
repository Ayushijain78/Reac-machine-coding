import React from "react";
import { useTheme } from "./hooks/theme-context";

const Header = () => {
  const { theme, handleThemeChange } = useTheme();
  return (
    <header className={`header`}>
      <div>About us</div>
      <div>Contact</div>
      <div
        onClick={() => {
          handleThemeChange();
        }}
      >
        Theme Toggle
      </div>
    </header>
  );
};

export default Header;
