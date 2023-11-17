import Sidebar from "../components/dashboard/sidebar/Sidebar";
import NavBar from "../components/dashboard/navbar/Navbar";
import Footer from "../components/dashboard/footer/Footer";
import s from "./dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.menu}>
        <Sidebar />
      </div>
      <div className={s.content}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
