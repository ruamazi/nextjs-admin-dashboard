import Image from "next/image";
import s from "./singleUser.module.css";
import { getSingleUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await getSingleUser(id);

  return (
    <div className={s.container}>
      <div className={s.infoCont}>
        <div className={s.imgCont}>
          <Image
            className={s.img}
            src={`${user?.img ? user.img : "/noavatar.png"}`}
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
        {user.username}
      </div>

      <form className={s.form} action={updateUser}>
        <input type="hidden" name="id" value={user.id} />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder={user.username} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder={user.email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <label htmlFor="address">Address</label>
        <textarea type="address" name="address" placeholder={user.address} />
        <label htmlFor="isAdmin">Is Admin?</label>
        <select name="isAdmin">
          <option value={false} selected={!user.isAdmin}>
            No
          </option>
          <option value={true} selected={user.isAdmin}>
            Yes
          </option>
        </select>
        <label htmlFor="isActive">Is Active?</label>
        <select name="isActive">
          <option value={false} selected={!user.isActive}>
            No
          </option>
          <option value={true} selected={user.isActive}>
            Yes
          </option>
        </select>
        <input type="text" name="img" placeholder={"Enter Image URL"} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
