import search from "../../assets/search.png";
import refresh from "../../assets/product/refresh.png";
import dwnld from "../../assets/product/Vector.png";
import updown from "../../assets/product/updown.png";
import { useState } from "react";
import ReplaceFAQ from "./ReplaceFAQ";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import PopUpFAQ from "./PopUpFAQ";

const faqTabs = ["Consultation", "Shop", "Wallet", "Forum", "Additional"];

const faqData = [
  "What types of consultations are available?",
  "Can I get refund for the wallet money?",
  "What is the Amrutam Forum?",
  "Can I pause the audio consultation?",
  "Can I pause the audio consultation?",
  "Is there a minimum duration for an audio consultation?",
  "Is there a minimum duration for an audio consultation?",
  "What is the Amrutam Forum?",
];

export default function FaqList({ handleAddFAQ }) {
  const [active, setActive] = useState(faqTabs[0]);
  const [showPopup, setShowPopup] = useState(false);
  const [showlistPopup, setShowlistPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredFAQs = faqData.filter((faq) =>
    faq.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleFAQs = searchTerm ? filteredFAQs : faqData.slice(0, 8);

  const handleTabs = (e) => {
    const clickedText = e.target.textContent;
    if (faqTabs.includes(clickedText)) {
      setActive(clickedText);
    }
  };

  const handleCheckboxClick = (index) => {
    setSelectedIndex(index);
    setShowPopup(true);
  };

  const handleCancel = () => {
    setSelectedIndex(null);
    setShowPopup(false);
  };

  const handleReplace = () => {
    setShowPopup(false);
    setShowlistPopup(true);
  };

  const closeModel = () => {
    setSelectedIndex(null);
    setShowlistPopup(false);
  };

  return (
    <section className="bg-white rounded-xl mt-4 px-4 py-5 relative" aria-label="FAQ List Section">
      {/* Header Section */}
      <header className="flex items-center mb-4 justify-between">
        <div className="flex items-center space-x-12">
          <h1 className="text-sm pl-2 poppins-medium">FAQ List</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
              <img
                src={search}
                alt="Search"
                className={`w-4 h-4 mr-1 transition-opacity duration-200 ${searchTerm ? "invisible" : "visible"}`}
              />
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none text-sm w-full placeholder-[#28643B4D] text-[#28643B4D]"
              />
            </div>

            <div className="hidden sm:flex bg-gray-100 p-2 sm:items-center rounded-md">
              <img
                src={refresh}
                alt="Refresh FAQs"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleAddFAQ}
            className="bg-[#3A643B] hidden sm:inline-block text-white px-6 py-2 text-sm rounded-sm ml-4"
          >
            Add New FAQ
          </button>

          <div className="p-2.5 bg-gray-100 rounded-sm hidden sm:inline-block">
            <img src={updown} alt="Sort" />
          </div>

          <div className="p-2.5 bg-gray-100 rounded-sm">
            <img src={dwnld} alt="Download FAQs" />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav
        className="flex justify-around border-b border-gray-200 mb-2 mt-6 text-sm"
        onClick={handleTabs}
        aria-label="FAQ Categories"
      >
        {faqTabs.map((tab, i) => (
          <button
            key={i}
            className={`text-sm md:text-base pb-2 poppins-medium ${
              active === tab
                ? "text-[#3A643B] underline underline-offset-8 decoration-2"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* FAQ List */}
      <ul className="divide-y divide-gray-200" role="list">
        {visibleFAQs.length > 0 ? (
          visibleFAQs.map((question, i) => (
            <li
              key={i}
              className="flex items-center justify-between px-2 py-3 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <span className="cursor-move text-gray-400" aria-hidden="true">⋮⋮</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#3A643B]"
                  checked={selectedIndex === i}
                  onChange={() => handleCheckboxClick(i)}
                  aria-label={`Select FAQ: ${question}`}
                />
                <span className="text-sm text-[#414141] poppins-medium">
                  {question}
                </span>
              </div>
              <ChevronDown className="text-gray-500" aria-hidden="true" />
            </li>
          ))
        ) : (
          <li className="text-center text-sm text-gray-400 py-4">
            No matching FAQs found.
          </li>
        )}
      </ul>

      {/* Pagination (only show when not searching) */}
      {!searchTerm && (
        <nav className="flex justify-between items-center text-xs text-gray-500 poppins-medium mt-4" aria-label="FAQ Pagination">
          <span>Rows per page: 8</span>
          <div className="flex items-center space-x-2">
            <ChevronLeft />
            <span className="px-2 py-1 border border-gray-300 rounded-sm">1</span>
            <ChevronRight />
          </div>
        </nav>
      )}

      {/* Popups */}
      {showPopup && (
        <PopUpFAQ handleCancel={handleCancel} handleReplace={handleReplace} />
      )}
      {showlistPopup && <ReplaceFAQ onClose={closeModel} />}
    </section>
  );
}
