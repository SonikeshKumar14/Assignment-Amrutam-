import { Link } from "react-router-dom";
import { Smile } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col mt-4 justify-center items-center h-full text-center px-4">
      <Smile className="w-16 h-16 text-green-600 mb-4" />
      <h1 className="text-4xl font-bold text-[#333448] mb-2">Page Not Found</h1>
      <p className="text-lg text-[#666876] mb-4">
        This page is <span className="font-semibold">not part of my task</span> 😊
      </p>
      <p className="text-sm text-[#666876] mb-6">
        I have built UI only of those pages that were asked in the task 3.
      </p>
      <Link
        to="/affiliate/dashboard"
        className="inline-block bg-[#3A643B] text-white text-sm px-6 py-2 rounded-md transition hover:bg-[#2f5131]"
      >
        Go to Affiliate 👉 Dashboard
      </Link>
    </div>
  );
}
