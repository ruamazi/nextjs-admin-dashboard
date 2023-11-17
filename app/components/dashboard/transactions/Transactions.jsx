import Image from "next/image";
import s from "./transactions.module.css";
const Transactions = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Latest Transactions</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={s.user}>
                <Image
                  className={s.userImg}
                  src={"/z.jpg"}
                  alt="user image"
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${s.status} ${s.pending}`}>Pending </span>
            </td>
            <td className={s.date}>25.03.1991</td>
            <td className={s.amount}>$25</td>
          </tr>

          <tr>
            <td>
              <div className={s.user}>
                <Image
                  className={s.userImg}
                  src={"/noavatar.png"}
                  alt="user image"
                  width={40}
                  height={40}
                />
                Leo Messi
              </div>
            </td>
            <td>
              <span className={`${s.status} ${s.cancelled}`}>Cancelled</span>
            </td>
            <td className={s.date}>25.03.2023</td>
            <td className={s.amount}>$999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
