"use client";
import { useState } from "react";
import { loginUser } from "../../lib/actions";
import s from "./loginForm.module.css";

const LoginForm = () => {
  const [err, setErr] = useState();
  const handleLogin = async (formData) => {
    const data = await loginUser(formData);
    if (data?.error) {
      setErr(data.error);
    }
  };
  return (
    <form className={s.form} action={handleLogin}>
      <h1>Login</h1>
      <input
        className={s.inpt}
        type="text"
        placeholder="Username"
        name="username"
        required
      />
      <input
        className={s.inpt}
        type="password"
        placeholder="Password"
        name="password"
        required
      />

      <button className={s.btn}>Enter</button>
      {err && <p className={s.err}>{err}</p>}
    </form>
  );
};

export default LoginForm;
