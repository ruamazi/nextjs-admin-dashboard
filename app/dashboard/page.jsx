import Card from "../components/dashboard/card/Card";
import Rightbar from "../components/dashboard/rightbar/Rightbar";
import Chart from "../components/dashboard/chart/Chart";
import Transactions from "../components/dashboard/transactions/Transactions";
import s from "./dashboard.module.css";
const DashboardPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <div className={s.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={s.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
