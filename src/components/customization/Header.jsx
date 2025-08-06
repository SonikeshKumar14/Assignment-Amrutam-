import { useEffect, useState } from "react";

export default function Header({ selectorCall }) {
  const selectors = ["Banners", "Per Page Products", "Ingredients", "FAQ"];
  const [activeSelector, setActiveSelector] = useState(selectors[3]);

  const handleSelector = (e) => {
    const clickedText = e.target.textContent;
    if (selectors.includes(clickedText)) {
      setActiveSelector(clickedText);
    }
  };

  useEffect(() => {
    selectorCall(activeSelector);
  }, [activeSelector]);

  return (
    <nav
      aria-label="Customization sections"
      className="flex bg-white rounded-2xl text-xs sm:text-sm md:text-base space-x-8 p-4 poppins-medium text-[#9999A3]"
    >
      {selectors.map((item, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => setActiveSelector(item)}
          aria-label={`Switch to ${item}`}
          aria-current={activeSelector === item ? "page" : undefined}
          className={`cursor-pointer bg-transparent border-none outline-none hover:text-[#3A643B] ${
            activeSelector === item
              ? "text-[#3A643B] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
