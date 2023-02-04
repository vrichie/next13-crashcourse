import Link from "next/link";
import React from "react";
import { FancyButton } from "react_button_component_demo";
const Header = () => {
  return (
    <div className="p-5 bg-blue-500">
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Header;
