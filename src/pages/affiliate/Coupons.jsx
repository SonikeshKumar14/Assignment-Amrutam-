import { Helmet } from "react-helmet";
import CoupanCart from "@/components/coupans/CoupanCart";
import { CoupanDefault } from "@/components/coupans/CoupanDefault";
import CoupanSpecial from "@/components/coupans/CoupanSpecial";

export default function Coupons() {
  return (
    <>
      <Helmet>
        <title>Coupons | Affiliate Dashboard</title>
        <meta
          name="description"
          content="Manage your default, special, and cart-based coupons in the affiliate dashboard."
        />
        <meta
          name="keywords"
          content="affiliate coupons, discount, cart coupons, default coupons, special coupons"
        />
      </Helmet>

      <div>
        <CoupanDefault />
        <CoupanCart />
        <CoupanSpecial />
      </div>
    </>
  );
}
