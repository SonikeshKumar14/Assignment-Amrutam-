import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ReplaceFAQ({ onClose }) {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const questions = [
    "What types of consultations are available?",
    "Can I get refund for the wallet money?",
    "What is the Amrutam Forum?",
    "Can I pause the audio consultation?",
    "Can I pause the audio consultation?",
    "Is there a minimum duration for an audio consultation?",
    "Is there a minimum duration for an audio consultation?",
    "What is the Amrutam Forum?",
  ];

  // Toggle function
  const toggleQuestion = (index) => {
    if (selectedQuestions.includes(index)) {
      setSelectedQuestions(selectedQuestions.filter((i) => i !== index));
    } else {
      setSelectedQuestions([...selectedQuestions, index]);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-center poppins-medium text-lg mb-4">
          Select the question that you would like to replace it with
        </h2>

        <div className="space-y-3">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b pb-3 cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              <div className="flex items-center gap-3 dmsans-medium w-full">
                <div>
                  <input
                    type="checkbox"
                    checked={selectedQuestions.includes(idx)}
                    onChange={() => toggleQuestion(idx)}
                    className="w-4 h-4 mt-[6px] accent-[#3A643B]"
                  />
                </div>
                <span className="text-sm text-[#414141]">{q}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="text-[#3A643B] border border-[#3A643B] px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Selected indexes:", selectedQuestions);
              onClose();
            }}
            disabled={selectedQuestions.length === 0}
            className={`px-4 py-2 rounded-md text-white ${
              selectedQuestions.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#3A643B]"
            }`}
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
}
