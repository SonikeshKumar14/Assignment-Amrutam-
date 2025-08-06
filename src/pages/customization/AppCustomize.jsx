import FAQList from "@/components/customization/FAQList";
import Header from "@/components/customization/Header";
import AddNewFAQ from "@/components/faq/AddNewFAQ";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AppCustomize() {
  const [active, setActive] = useState("Consumer");
  const [activeHead, setActiveHead] = useState("");
  const [addFAQ, setAddFAQ] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    const clickedText = e.target.textContent;
    setActive(clickedText);
  };

  const selectorCall = (headVal) => {
    setActiveHead(headVal);
  };

  const handleAddFAQ = () => {
    setAddFAQ(true);
  };

  return (
    <main aria-label="Customize Application" className="bg-[#f9f9f9] min-h-screen">
      <Helmet>
        <title>Customize App - FAQ Management</title>
        <meta name="description" content="Customize your application settings including FAQ management for doctors and consumers." />
      </Helmet>

      <Header selectorCall={selectorCall} />

      {!addFAQ ? (
        <>
          {activeHead === "FAQ" && (
            <>
              <nav
                aria-label="FAQ Audience Toggle"
                className="flex justify-around bg-white p-4 mt-4 rounded-2xl poppins-medium text-base text-[#9999A3]"
                onClick={handleClick}
              >
                <p
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => e.key === "Enter" && setActive("Consumer")}
                  className={`cursor-pointer text-sm md:text-base hover:text-[#3A643B] ${
                    active === "Consumer"
                      ? "text-[#3A643B] underline underline-offset-8 decoration-2"
                      : ""
                  }`}
                  aria-label="Consumer FAQs"
                >
                  Consumer
                </p>
                <p
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => e.key === "Enter" && setActive("Doctor")}
                  className={`cursor-pointer text-xs md:text-base hover:text-[#3A643B] ${
                    active === "Doctor"
                      ? "text-[#3A643B] underline underline-offset-8 decoration-2"
                      : ""
                  }`}
                  aria-label="Doctor FAQs"
                >
                  Doctor
                </p>
              </nav>

              <section aria-labelledby="faq-list-section">
                {active === "Consumer" && <FAQList handleAddFAQ={handleAddFAQ} />}
              </section>
            </>
          )}
        </>
      ) : (
        <section aria-label="Add FAQ Section">
          <AddNewFAQ handleBack={() => setAddFAQ(false)} />
        </section>
      )}
    </main>
  );
}
