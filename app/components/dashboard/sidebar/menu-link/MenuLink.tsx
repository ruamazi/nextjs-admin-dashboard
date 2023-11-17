"use client";
import Link from "next/link";
import s from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${s.container} ${pathName === item.path ? s.active : ""}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
