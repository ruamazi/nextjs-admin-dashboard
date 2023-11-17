import { MdSupervisedUserCircle } from "react-icons/md";
import s from "./card.module.css";

const Card = () => {
  return (
    <div className={s.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={s.text}>
        <p className={s.title}>Total Users</p>
        <p className={s.number}>6.250</p>
        <p className={s.detail}>
          <span className={s.positive}>12%</span> more than previous week
        </p>
      </div>
    </div>
  );
};

export default Card;
