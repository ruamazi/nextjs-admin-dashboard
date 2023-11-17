import s from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={s.container}>
      <div className={s.logo}>M•A</div>
      <div className={s.text}>&copy; {year} All rights reserver </div>
    </div>
  );
};

export default Footer;
