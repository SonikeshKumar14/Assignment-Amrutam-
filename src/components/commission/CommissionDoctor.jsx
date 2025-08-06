import { useState } from "react";
import SwitchButton from "../ui/SwitchButton";

export function CommissionDoctor() {
  const [toggle, setToggle] = useState(true);
  
  return (
    <section
      className="w-full space-y-6 mt-4"
      aria-label="Default Doctor Commission Section"
    >
      {/* Heading */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2 className="poppins-medium text-base text-[#333448]">
            Default Doctor Commission
          </h2>
          <SwitchButton On={toggle} setOff={setToggle} />
        </div>

        {/* Form Card */}
        {toggle && (
          <div className="bg-white rounded-xl p-4 sm:p-8 space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Doctor Select */}
              <div className="relative">
                <select
                  className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                  defaultValue=""
                  aria-label="Select Doctor"
                >
                  <option value="" disabled>
                    Please select any
                  </option>
                  <option value="all">Applies to all the Doctors</option>
                </select>
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                  Doctor
                </label>
              </div>

              {/* Percentage Select */}
              <div className="relative">
                <select
                  className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                  defaultValue=""
                  aria-label="Select Commission Percentage"
                >
                  <option value="" disabled>
                    Please select a Percentage
                  </option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>
                </select>
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                  Percentage<span className="text-[#FF0000]">*</span>
                </label>
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md"
                aria-label="Update Commission"
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
