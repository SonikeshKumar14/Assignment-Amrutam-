import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewFAQ(props) {
  const [platform, setPlatform] = useState("Consumer Web");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [addToHomepage, setAddToHomepage] = useState(false);
  const navigate = useNavigate();

  const handleClear = () => {
    setTitle("");
    setQuestion("");
    setAnswer("");
    setAddToHomepage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log({
      platform,
      title,
      question,
      answer,
      addToHomepage,
    });
  };

  const handleBack = () => {
    if (props.handleBack) props.handleBack();
  };

  return (
    <section className="bg-white mt-4 rounded-xl p-6 sm:p-10 space-y-7 w-full">
      <h2 className="poppins-medium text-lg text-[#333448]">Add New FAQ</h2>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="platform"
              className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]"
            >
              Select Platform <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              id="platform"
              className="w-full border-[1.5px] border-[#F1F1F1] p-3 rounded-lg poppins-regular text-sm text-[#333448] bg-white"
              value={platform}
              disabled
            />
          </div>

          {/* Title */}
          <div className="relative">
            <label
              htmlFor="faq-title"
              className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]"
            >
              Select Title <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              id="faq-title"
              placeholder="Enter FAQ title"
              className="w-full border-[1.5px] border-[#F1F1F1] p-3 rounded-lg poppins-regular text-sm text-[#333448] bg-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Homepage Toggle */}
        <fieldset className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="add-homepage"
            checked={addToHomepage}
            onChange={(e) => setAddToHomepage(e.target.checked)}
            className="w-4 h-4 rounded-full border border-[#3A643B] appearance-none checked:bg-[#3A643B] checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:rounded-full checked:before:bg-white checked:before:mx-auto checked:before:my-auto"
            style={{ display: "grid", placeItems: "center" }}
          />
          <label htmlFor="add-homepage" className="text-sm poppins-medium text-[#333448]">
            Add to homepage as well
          </label>
        </fieldset>

        {/* Question & Answer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="faq-question"
              className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]"
            >
              Add Question <span className="text-[#FF0000]">*</span>
            </label>
            <textarea
              id="faq-question"
              rows={4}
              placeholder="Enter question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border-[1.5px] border-[#F1F1F1] p-3 rounded-lg poppins-regular text-sm text-[#333448] bg-white resize-none"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="faq-answer"
              className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]"
            >
              Add Answer <span className="text-[#FF0000]">*</span>
            </label>
            <textarea
              id="faq-answer"
              rows={4}
              placeholder="Enter answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full border-[1.5px] border-[#F1F1F1] p-3 rounded-lg poppins-regular text-sm text-[#333448] bg-white resize-none"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="text-sm text-gray-500 font-medium cursor-pointer mb-4"
          >
            ← Back
          </button>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={handleClear}
              className="bg-[#F3F3F3] text-[#333448] px-6 py-2 rounded-lg text-sm poppins-medium"
            >
              Clear all
            </button>
            <button
              type="submit"
              className="bg-[#3A643B] text-white px-6 py-2 rounded-lg text-sm poppins-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
