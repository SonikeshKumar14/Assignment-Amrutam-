import DashBoardCoupan from "@/components/dashbaord/DashBoardCoupan";
import DashboardTime from "@/components/dashbaord/DashBoardTime";
import DashProfd from "@/components/dashbaord/DashProfd";
import { Helmet } from "react-helmet"; 

export default function Dashboard() {
  return (
     <section className="contents">
      <Helmet>
        <title>Affiliate Dashboard | Your Brand</title>
        <meta name="description" content="Track coupons, commissions, and profile stats in your affiliate dashboard." />
      </Helmet>

      <DashboardTime />
      <DashBoardCoupan />
      <DashProfd />
    </section>
  );
}
