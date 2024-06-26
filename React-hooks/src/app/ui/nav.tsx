"use client";
import { navLinks } from "@/config/paths";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex nav-width  p-2 items-center gap-2 overflow-x-scroll overflow-y-hidden overflow-hidden">
      {navLinks.map((link) => {
        return (
          <li className="list-none" key={link.name}>
            <Link
              href={link.pathname}
              className={clsx("font-medium", {
                "font-bold  text-blue-300": link.pathname == pathName,
              })}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};
export default Nav;
