import s from "./sidebar.module.css";
import { menuItems } from "./menuItems";
import MenuLink from "./menu-link/MenuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { auth, signOut } from "../../../auth";

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className={s.container}>
      <div className={s.user}>
        <Image
          className={s.userImg}
          src={user?.img ? user.img : "/noavatar.png"}
          alt="profile picture"
          width={50}
          height={50}
        />
        <div className={s.userDetail}>
          <span className={s.username}>{user.username}</span>
          <span className={s.title}>Administrator</span>
        </div>
      </div>

      <ul className={s.ul_container}>
        {menuItems.map((item, i) => (
          <li key={i} className={s.li_con}>
            <span className={s.categ}>{item.title}</span>
            {item.list.map((link, i) => (
              <MenuLink key={i} item={link} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={s.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
