import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMedDevice, setIsMedDevice] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMedDevice(window.innerWidth < 891);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMedDevice) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  const pathParts = location.pathname.split("/").filter((part) => part !== "");

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the very top */}
      <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Below Navbar: Sidebar and Main content */}
      <div className="flex flex-1 overflow-hidden transition-all duration-300 ease-in-out">
        
        {/* to close sidebar when click on outside */}
        {isSidebarOpen && isMedDevice && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed top-0 left-0 w-full h-full z-40"
          />
        )}
        
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-64" : "w-0"
          } ${isMedDevice ? "fixed top-0 left-0 z-50 h-full" : ""}`}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            isMedDevice={isMedDevice}
            setIsOpen={setIsSidebarOpen}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-scroll transition-all duration-300 ease-in-out p-4">
          {/* Breadcrumb */}
          {pathParts.length > 0 && (
            <div className="text-[15px] text-[#666876] mb-4 poppins-medium flex items-center gap-1 flex-wrap">
              {pathParts.map((part, index) => {
                const isLast = index === pathParts.length - 1;
                return (
                  <div key={index} className="flex items-center gap-1">
                    <span className={isLast ? "text-[#28643B]" : ""}>
                      {part.charAt(0).toUpperCase() + part.slice(1)}
                    </span>
                    {index < pathParts.length - 1 && (
                      <ChevronRight className="w-4 h-4 mx-2.5 text-[#666876]" />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Page content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
