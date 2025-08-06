import { useState, useEffect } from "react";

export default function DashboardTime() {
  const dashTime = ["Today So Far", "Week So Far", "Month So Far", "Custom"];
  const [activeDashTime, setActiveDashTime] = useState(dashTime[2]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 653);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDashTime = (e) => {
    const clickedText = e.target.dataset.fulltext;
    if (dashTime.includes(clickedText)) {
      setActiveDashTime(clickedText);
    }
  };

  return (
    <section
      aria-label="Dashboard Time Filter"
      className="h-[50px] rounded-2xl bg-white"
    >
      <div
        className="flex items-center px-1 md:px-0 py-3 justify-around poppins-medium text-[14px] md:text-base text-[#33344880]"
        onClick={handleDashTime}
      >
        {dashTime.map((item, idx) => {
          const shortText = item.split(" ")[0]; // Get first word only
          const isActive = activeDashTime === item;
          return (
            <span
              key={idx}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              data-fulltext={item}
              className={`cursor-pointer hover:text-[#3A643B] pt-1 md:pt-0 focus:outline-none ${
                isActive
                  ? "text-[#3A643B] underline underline-offset-8 decoration-2"
                  : ""
              }`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleDashTime(e);
                }
              }}
            >
              {isMobile ? shortText : item}
            </span>
          );
        })}
      </div>
    </section>
  );
}
