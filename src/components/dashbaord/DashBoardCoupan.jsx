import calenderIcon from "../../assets/calendar.png";
import noRefundIcon from "../../assets/nonrefund.png";
import emptyWalletIcon from "../../assets/emptywallet.png";
import profileAddIcon from "../../assets/profileadd.png";

export default function DashBoardCoupan() {
  const dashCoupan = [
    { name: "Total Coupans clicks", num: 255, icon: calenderIcon },
    { name: "Total Orders", num: 55, icon: noRefundIcon },
    { name: "Toal Revenue", num: 5540, icon: emptyWalletIcon },
    { name: "Total Doctors", num: 5, icon: profileAddIcon },
  ];

  return (
    <section
      aria-label="Dashboard Coupons Summary"
      className="flex flex-wrap gap-2 justify-center mt-3"
    >
      {dashCoupan.map((item, idx) => (
        <div
          key={idx}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[237px] bg-white rounded-xl border p-5"
        >
          <p className="mb-6 poppins-medium text-[16px] text-[#333448]">
            {item.name}
          </p>
          <div className="flex items-center space-x-2 pt-1">
            <div className="w-11 h-11 bg-[#FDF8E5] rounded-[16px] flex items-center justify-center p-2 border border-[#E3E3E3]">
              <img src={item.icon} alt={item.name + " icon"} />
            </div>
            <p className="poppins-semi text-[28px] text-[#3A643B]">
              {item.num}{" "}
              <span className="text-xs poppins-medium text-[#7D7D7D]">
                /month
              </span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
