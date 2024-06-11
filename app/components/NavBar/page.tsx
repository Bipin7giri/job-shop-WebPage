// components/Navbar.tsx

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex
      p-4 items-center  bg-blue-300  md:m-auto sm:m-auto"
    >
      <ul className="flex  justify-between w-1/2">
        {/* left */}
        <li>
          <Link href="/">
            <ul>Home</ul>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <ul>about</ul>
          </Link>
        </li>
      </ul>
      {/* right */}
      <ul className="flex justify-end w-1/2">
        <li>
          <Link href="/profile">
            <ul>profile</ul>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
