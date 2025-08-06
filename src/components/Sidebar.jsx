import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

import dashImage from "../assets/dash.png";
import doctorImage from "../assets/doctor.png";
import patientImage from "../assets/patient.png";
import specialityImage from "../assets/speciality.png";
import referImage from "../assets/refer.png";
import concernImage from "../assets/concern.png";
import coupanImage from "../assets/coupan.png";
import appontImage from "../assets/appont.png";

export default function Sidebar({ isOpen, isMedDevice, setIsOpen }) {
  const location = useLocation();
  const isAffiliateActive = location.pathname.startsWith("/affiliate");
  const isPaymentActive = location.pathname.startsWith("/affiliate/payment");
  const isCustomActive = location.pathname.startsWith("/customization/app");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(true);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const affiliateLinks = [
    { name: "Dashboard", path: "/affiliate/dashboard" },
    { name: "Commission", path: "/affiliate/commission" },
    { name: "Coupons", path: "/affiliate/coupons" },
    { name: "Doctors", path: "/affiliate/doctors" },
  ];

  const paymentLinks = [
    { name: "PaymentPending", path: "/affiliate/payment/paymentpending" },
    { name: "PaymentHistory", path: "/affiliate/payment/paymenthistory" },
  ];

  const customLinks = [
    { name: "Web", path: "/customization/web" },
    { name: "App", path: "/customization/app" },
  ];

  return (
    <div
      className={`h-full mt-5 bg-white w-64 space-y-2 rounded-r-3xl overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full overflow-y-auto p-4 custom-scrollbar">
        <h2 className="text-[15px] poppins-medium mb-4">Main</h2>

        <div className="space-y-1 text-[#333548BF] poppins-medium">
          {/* Static Links */}
          {[
            { name: "Dashboard", icon: dashImage },
            { name: "Doctors", icon: doctorImage },
            { name: "Patients", icon: patientImage },
            { name: "Appointments", icon: appontImage },
            { name: "Speciality", icon: specialityImage },
            { name: "Coupons", icon: coupanImage },
            { name: "Concerns", icon: concernImage },
            { name: "Refferal", icon: referImage },
          ].map((item, idx) => (
            <Link
              to={`/${item.name.toLowerCase()}`}
              key={idx}
              className="text-[15px] flex items-center mb-6"
            >
              <div className="w-[40px] h-[40px] bg-gray-100 rounded-[8px] p-[9.5px] flex items-center justify-center mr-2">
                <img
                  src={item.icon}
                  className="w-[21px] h-[21px] object-cover rounded-[4px]"
                  alt=""
                />
              </div>
              {item.name}
            </Link>
          ))}

          {/* Affiliate Collapsible Section */}
          <div className="text-[15px] mb-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsAffiliateOpen((prev) => !prev)}
            >
              <div className="w-[40px] h-[40px] bg-gray-100 rounded-[8px] p-[9.5px] flex items-center justify-center mr-2">
                <img
                  src={referImage}
                  className="w-[21px] h-[21px] object-cover rounded-[4px]"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <span
                  className={`${
                    isAffiliateOpen && isAffiliateActive
                      ? "text-[#28643B]"
                      : "text-[#333548BF]"
                  }`}
                >
                  Affiliate
                </span>
                {isAffiliateOpen ? (
                  <ChevronDown
                    className={`w-4 h-4 ${
                      isAffiliateOpen && isAffiliateActive
                        ? "text-[#28643B]"
                        : "text-[#333548BF]"
                    }`}
                  />
                ) : (
                  <ChevronRight
                    className={`w-4 h-4 ${
                      isAffiliateOpen && isAffiliateActive
                        ? "text-[#28643B]"
                        : "text-[#333548BF]"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* Sub-links */}
            {isAffiliateOpen && (
              <div className="ml-12 mt-4 space-y-4 text-sm text-gray-700">
                {affiliateLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => isMedDevice && setIsOpen(false)}
                    className={`block poppins-regular ${
                      location.pathname.startsWith(item.path)
                        ? "text-[#28643B]"
                        : "text-[#666876]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Payment Subsection (Nested) */}
                <div>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsPaymentOpen((prev) => !prev)}
                  >
                    <span
                      className={`poppins-regular ${
                        isPaymentActive ? "text-[#28643B]" : "text-[#666876]"
                      }`}
                    >
                      Payment
                    </span>
                    {isPaymentOpen ? (
                      <ChevronDown className="w-4 h-4 text-[#28643B]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#666876]" />
                    )}
                  </div>

                  {isPaymentOpen && (
                    <div className="ml-2 mt-3 space-y-3">
                      {paymentLinks.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className={`block poppins-regular text-sm ${
                            location.pathname === item.path
                              ? "text-[#28643B]"
                              : "text-[#666876]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Customization Collapsible Section */}
          <div>
            <div className="text-[15px] mb-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsCustomOpen((prev) => !prev)}
              >
                <div className="w-[40px] h-[40px] bg-gray-100 rounded-[8px] p-[9.5px] flex items-center justify-center mr-2">
                  <img
                    src={referImage}
                    className="w-[21px] h-[21px] object-cover rounded-[4px]"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`${
                      isCustomOpen && isCustomActive
                        ? "text-[#28643B]"
                        : "text-[#333548BF]"
                    }`}
                  >
                    Customization
                  </span>
                  {isCustomOpen ? (
                    <ChevronDown
                      className={`w-4 h-4 ${
                        isCustomOpen && isCustomActive
                          ? "text-[#28643B]"
                          : "text-[#333548BF]"
                      }`}
                    />
                  ) : (
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isCustomOpen && isCustomActive
                          ? "text-[#28643B]"
                          : "text-[#333548BF]"
                      }`}
                    />
                  )}
                </div>
              </div>

              {/* Sub-links */}
              {isCustomOpen && (
                <div className="ml-12 mt-4 space-y-4 text-sm text-gray-700">
                  {customLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className={`block poppins-regular ${
                        location.pathname.startsWith(item.path)
                          ? "text-[#28643B]"
                          : "text-[#666876]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
