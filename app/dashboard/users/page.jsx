import s from "./users.module.css";
import Search from "../../components/dashboard/search/Search";
import Pagination from "../../components/dashboard/pagination/Pagination";

import Link from "next/link";
import Image from "next/image";
import { getAllUsers } from "../../lib/data";
import { deleteUser } from "../../lib/actions";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const users = await getAllUsers(q, page);

  return (
    <div className={s.container}>
      <div className={s.top}>
        <Search placeholder={"Search for a user..."} />
        <Link href="/dashboard/users/add">
          <button className={s.addBtn}>Add New</button>
        </Link>
      </div>
      <div className={s.bottom}>
        <table className={s.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className={s.user}>
                    <Image
                      src={user.img ? user.img : "/noavatar.png"}
                      alt="user image"
                      width={40}
                      height={40}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td> {user.isAdmin ? "Admin" : "Client"} </td>
                <td> {user.isActive ? "Active" : "Away"} </td>
                <td>
                  <div className={s.actionBtns}>
                    <Link href={"/dashboard/users/" + user.id}>
                      <button className={` ${s.view}`}>View</button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" value={user.id} name="id" />
                      <button className={` ${s.delete}`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={users.length} />
      </div>
    </div>
  );
};

export default UsersPage;
