"use client";

import Link from "next/link";
import React from "react";
import { BsFillBugFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
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
    <nav className="flex space-x-6 border-b-2 py-8 items-center px-6">
      <Link href="/">
        <BsFillBugFill />
      </Link>
      <ul className="flex space-x-8">
        {links.map((link) => (
          <li
            className={classNames({
              "text-zinc-900": link.href === pathName,
              "text-zinc-500": link.href !== pathName,
              "hover:text-zinc-800 transition-colors text-xl items-center":
                true,
            })}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
