import s from "./login.module.css";
import LoginForm from "../components/login/LoginForm";
const LoginPage = () => {
  return (
    <div className={s.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
