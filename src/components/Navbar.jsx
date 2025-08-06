import logo from "../assets/logo.png";
import amrutam from "../assets/amrutam.png";
import search from "../assets/search.png";
import msg from "../assets/msg.png";
import bell from "../assets/bell.png";
import profileImage from "../assets/profile.png";
import setting from "../assets/setting.png";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="top-0 h-[62px] w-full bg-white shadow-sm px-4 py-2 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Logo and Brand */}
        <img src={logo} alt="Company Logo" className="h-14 w-14" />
        <img
          src={amrutam}
          alt="Amrutam"
          className="h-12 w-32 md:h-12 md:w-40 logoname-hide"
        />

        {/* Menu Icon */}
        <div className="w-11 h-11 md:w-16 md:h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-6 h-6 ${isOpen ? "text-[#28643B]" : "text-gray-400"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>

        {/* Search Input */}
        <div className="w-full flex items-center bg-gray-100 rounded-md px-3 py-2 search-hide">
          <img src={search} alt="Search Icon" className="w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search here"
            className="flex-1 bg-transparent outline-none text-sm poppins-medium placeholder-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Message Icon */}
        <div className="relative cutome-hide">
          <img src={msg} alt="Messages" />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-[#BC0000] rounded-full" />
        </div>

        {/* Notification Icon */}
        <div className="relative cutome-hide">
          <img src={bell} alt="Notifications" />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-[#BC0000] rounded-full" />
        </div>

        {/* User Info */}
        <div className="text-right">
          <p className="md:text-base pf-name poppins-semi text-[#28643B]">
            Liam Michael
          </p>
          <p className="text-xs poppins-medium text-gray-500">Admin</p>
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />

        {/* Settings Icon */}
        <img src={setting} alt="Settings" className="hidden md:inline-block" />
      </div>
    </nav>
  );
}
