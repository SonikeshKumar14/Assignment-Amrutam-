import { useNavigate } from "react-router-dom";
import SwitchButton from "../ui/SwitchButton";
import { useState } from "react";

export function CommissionProduct() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  return (
    <section aria-label="Default Product Commission Settings" className="w-full space-y-6">
      {/* Add Button */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/affiliate/commission/specialcommission")}
          className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md cursor-pointer"
        >
          Add Special Commission
        </button>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2 className="poppins-medium text-base text-[#333448]">
            Default Product Commission
          </h2>
          <SwitchButton On={toggle} setOff={setToggle} />
        </div>

        {/* Form Card */}
        {toggle && (
          <div className="bg-white rounded-xl p-4 sm:p-8 space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Select */}
              <div className="relative">
                <label
                  htmlFor="product-select"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]"
                >
                  Product
                </label>
                <select
                  id="product-select"
                  className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select any
                  </option>
                  <option value="all">Applies to all products</option>
                </select>
              </div>

              {/* Percentage Select */}
              <div className="relative">
                <label
                  htmlFor="percentage-select"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]"
                >
                  Percentage<span className="text-[#FF0000]">*</span>
                </label>
                <select
                  id="percentage-select"
                  aria-required="true"
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
              <button className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md">
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
