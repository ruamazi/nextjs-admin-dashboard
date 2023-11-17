"use client";
import { usePathname } from "next/navigation";
import s from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className={s.container}>
      <div className={s.title}>{pathName.split("/").pop()}</div>
      <div className={s.menu}>
        <div className={s.search}>
          <MdSearch cursor={"pointer"} />
          <input className={s.input} type="text" placeholder="Search..." />
        </div>
        <div className={s.icons}>
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
