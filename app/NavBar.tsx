import Link from "next/link";
import React from "react";
import { BsFillBugFill } from "react-icons/bs";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b-2 py-9 items-center px-5">
      <Link href="/">
        <BsFillBugFill />
      </Link>
      <ul className="flex space-x-6">
        <li className="text-zinc-500 hover:text-zinc-800 transition-colors">
          Dashboard
        </li>
        <li>Issues</li>
      </ul>
    </nav>
  );
};

export default NavBar;
