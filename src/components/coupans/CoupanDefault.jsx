import { useNavigate } from "react-router-dom";
import SwitchButton from "../ui/SwitchButton";
import { useState } from "react";

export function CoupanDefault() {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  return (
    <section
      className="w-full space-y-6"
      aria-labelledby="default-coupons-heading"
    >
      {/* Add Button */}
      <div className="flex justify-end">
        <button
          className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md cursor-pointer"
          aria-label="Add special condition"
        >
          Add Special Condition
        </button>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2
            id="default-coupons-heading"
            className="poppins-medium text-base text-[#333448]"
          >
            Default Coupons
          </h2>
          <SwitchButton On={toggle} setOff={setToggle} />
        </div>

        {/* Form Card */}
        {toggle && (
          <div className="bg-white rounded-xl p-4 sm:p-8 space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Product Select */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                  Product
                </label>
                <select
                  aria-label="Product Selection"
                  className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select any
                  </option>
                  <option value="all">Applies to all products</option>
                </select>
              </div>

              {/* Usage Limit */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                  Usage Limit<span className="text-[#FF0000]">*</span>
                </label>
                <select
                  aria-label="Usage Limit"
                  className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select a Percentage
                  </option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>
                </select>
              </div>

              {/* Percentage Select */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                  Percentage<span className="text-[#FF0000]">*</span>
                </label>
                <select
                  aria-label="Percentage Selection"
                  className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select a Percentage
                  </option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>
                </select>
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md"
                aria-label="Update default coupon"
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
