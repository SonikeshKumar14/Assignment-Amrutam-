import { Helmet } from "react-helmet";
import { CommissionDoctor } from "@/components/commission/CommissionDoctor";
import { CommissionProduct } from "@/components/commission/CommissionProduct";
import CommissionSpecial from "@/components/commission/CommissionSpecial";

export default function Commission() {
  return (
    <section>
      <Helmet>
        <title>Commission</title>
        <meta name="description" content="Set and manage default product and doctor commissions for affiliates." />
      </Helmet>

      <CommissionProduct />
      <CommissionDoctor />
      <CommissionSpecial />
    </section>
  );
}
