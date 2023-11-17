import Image from "next/image";
import s from "./rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={s.rightbar}>
      <div className={s.item}>
        <div className={s.bgCont}>
          <Image src="/astronaut.png" alt="bg image" fill />
        </div>
        <div className={s.text}>
          <p className={s.notif}>Available Now</p>
          <h3 className={s.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <p className={s.subt}>It takes only 5 minutes to learn</p>
          <p className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste,
            molestias exercitationem dolorem ratione natus laboriosam architecto
            doloremque, sed quos praesentium nihil consectetur? Consequuntur
            eaque, debitis optio maxime culpa corrupti?
          </p>
          <button className={s.btn}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={s.item}>
        <div className={s.text}>
          <p className={s.notif}>Available Now</p>
          <h3 className={s.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <p className={s.subt}>It takes only 5 minutes to learn</p>
          <p className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste,
            molestias exercitationem dolorem ratione natus laboriosam architecto
            doloremque, sed quos praesentium nihil consectetur? Consequuntur
            eaque, debitis optio maxime culpa corrupti?
          </p>
          <button className={s.btn}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
