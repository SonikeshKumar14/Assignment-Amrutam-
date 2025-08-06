export default function PopUpFAQ({handleCancel, handleReplace}) {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl px-8 py-6 w-[360px] text-center">
        <p className="text-sm text-red-500 mb-2">
          Homepage already has maximum number of FAQ's.
        </p>
        <p className="text-base text-[#414141] font-medium mb-6">
          Would you like to replace it instead ?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="border border-[#3A643B] text-[#3A643B] px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleReplace}
            className="bg-[#3A643B] text-white px-4 py-2 rounded-md"
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
}
