import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpecialCommission() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product: "",
    productPercent: "",
    doctor: "",
    doctorPercent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { product, productPercent, doctor, doctorPercent } = formData;

    if (!product || !productPercent || !doctor || !doctorPercent) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission
    alert(JSON.stringify(formData, null, 2));

    // You can replace the above with actual API call
  };

  return (
    <div className="space-y-4">
      <h2 className="poppins-medium text-base text-[#333448]">
        Add Special Commission
      </h2>

      {/* Form Card */}
      <div className="bg-white rounded-xl p-4 sm:p-8 space-y-9">
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Product Select */}
          <div className="relative">
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
            >
              <option value="" disabled>
                Please select any
              </option>
              <option value="all">Applies to all products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
            </select>
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
              Product<span className="text-[#FF0000]">*</span>
            </label>
          </div>

          {/* Product Percentage */}
          <div className="relative">
            <select
              name="productPercent"
              value={formData.productPercent}
              onChange={handleChange}
              className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Doctor Select */}
          <div className="relative">
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
            >
              <option value="" disabled>
                Please select a Doctor
              </option>
              <option value="all">Applies to all Doctors</option>
              <option value="doctor1">Doctor 1</option>
              <option value="doctor2">Doctor 2</option>
            </select>
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs poppins-medium text-[#333448]">
              Doctor<span className="text-[#FF0000]">*</span>
            </label>
          </div>

          {/* Doctor Percentage */}
          <div className="relative">
            <select
              name="doctorPercent"
              value={formData.doctorPercent}
              onChange={handleChange}
              className="w-full border-[1.5px] border-gray-200 p-2 rounded-lg poppins-regular text-sm text-[#797979]"
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

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 poppins-medium text-sm"
          >
            ← Back
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#3A643B] text-white poppins-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
