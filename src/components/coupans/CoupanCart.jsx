import { useState } from "react";
import SwitchButton from "../ui/SwitchButton";

export default function CoupanCart() {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="space-y-4 mt-4" aria-labelledby="default-cart-discount-heading">
      <div className="flex justify-between">
        <h2
          id="default-cart-discount-heading"
          className="poppins-medium text-base text-[#333448]"
        >
          Default Cart Discount
        </h2>
        <SwitchButton On={toggle} setOff={setToggle} />
      </div>

      {toggle && (
        <form className="bg-white rounded-xl p-4 sm:p-8 space-y-9">
          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Product Select */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                Product Name<span className="text-[#FF0000]">*</span>
              </label>
              <select
                className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                defaultValue=""
              >
                <option value="" disabled>Please select any</option>
                <option value="all">Applies to all products</option>
              </select>
            </div>

            {/* Doctor Select */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                Doctor Name<span className="text-[#FF0000]">*</span>
              </label>
              <select
                className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                defaultValue=""
              >
                <option value="" disabled>Please select a Doctor</option>
                <option value="">Raju</option>
              </select>
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Usage Limit */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                Usage Limit<span className="text-[#FF0000]">*</span>
              </label>
              <select
                className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                defaultValue=""
              >
                <option value="" disabled>Please select a Percentage</option>
                <option value="3">3%</option>
              </select>
            </div>

            {/* Percentage */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
                Percentage<span className="text-[#FF0000]">*</span>
              </label>
              <select
                className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
                defaultValue=""
              >
                <option value="" disabled>Please select a Percentage</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
              </select>
            </div>
          </fieldset>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
