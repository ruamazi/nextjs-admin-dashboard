import { createUser } from "../../../lib/actions";
import s from "./addUserPage.module.css";

const AddUserPage = () => {
  return (
    <div className={s.container}>
      <form className={s.form} action={createUser}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="12"
          placeholder="Adress"
        />
        <input
          type="text"
          placeholder="Enter URL of a your picture"
          name="img"
        />
        <button className={s.submitBtn}>Sumbit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
