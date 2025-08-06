import { useState } from "react";
import CommissionTable from "./CommissionTable";
import SpecialCommHead from "./SpecialCommHead";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CommissionSpecial() {
  const [searchTerm, setSearchTerm] = useState("");

  const doctorInfo = [
    { name: "Alina Mathew", product: "Naria Sandariya Malt", limit: 1, percent: 30 },
    { name: "Jack Rock", product: "Naria Sandariya Malt", limit: 10, percent: 30 },
    { name: "Alina Mathew", product: "Naria Sandariya Malt", limit: 4, percent: 30 },
    { name: "Alina Mathew", product: "Naria Sandariya Malt", limit: 20, percent: 30 },
    { name: "Jack Rock", product: "Naria Sandariya Malt", limit: 6, percent: 30 },
    { name: "John Doe", product: "XYZ Syrup", limit: 2, percent: 25 },
    { name: "Jane Smith", product: "VitaminX", limit: 5, percent: 40 },
  ];

  const filteredData = doctorInfo.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dataToShow = searchTerm ? filteredData : doctorInfo.slice(0, 5);

  return (
    <section
      className="bg-white rounded-xl mt-2"
      aria-labelledby="commission-special-title"
    >
      {/* Header with Search */}
      <SpecialCommHead searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Table */}
      <CommissionTable data={dataToShow} />

      {/* Pagination */}
      {!searchTerm && (
        <nav
          className="flex items-center justify-between poppins-medium text-xs p-5"
          role="navigation"
          aria-label="Pagination Navigation"
        >
          <p className="text-[#9C9C9C]">Rows per page: 5</p>
          <div className="flex items-center space-x-2">
            <button
              className="text-sm text-gray-500"
              aria-label="Previous Page"
              disabled
            >
              <ChevronLeft/>
            </button>
            <span
              className="px-2 py-1 rounded-xs border border-gray-500"
              aria-current="page"
            >
              1
            </span>
            <button
              className="text-sm text-gray-500"
              aria-label="Next Page"
              disabled
            >
             <ChevronRight />
            </button>
          </div>
        </nav>
      )}
    </section>
  );
}
