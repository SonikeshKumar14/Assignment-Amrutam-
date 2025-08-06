import { useState } from "react";
import CoupanHead from "./CoupanHead";
import CoupanTable from "./CoupanTable";

export default function CoupanSpecial() {
  const [searchTerm, setSearchTerm] = useState("");

  const doctorInfo = [
    { name: "Alina Mathew", product: "Naria Sandariya Malt", limit: 1, percent: 30 },
    { name: "Jack Rock", product: "Naria Sandariya Malt", limit: 10, percent: 30 },
    { name: "Alina Mathew", product: "Naria Sandariya Malt", limit: 4, percent: 30 },
    { name: "Alina Mathew", product: "Naria Sandariya Malt", limit: 20, percent: 30 },
    { name: "Jack Rock", product: "Naria Sandariya Malt", limit: 6, percent: 30 },
  ];

  const filteredData = doctorInfo.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dataToShow = searchTerm ? filteredData : doctorInfo.slice(0, 5);

  return (
    <section className="bg-white rounded-xl mt-6" aria-label="Special Coupons">
      <header>
        <CoupanHead searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      <main>
        <CoupanTable data={dataToShow} />
      </main>

      {!searchTerm && (
        <footer className="flex items-center justify-between poppins-medium text-xs p-5" aria-label="Pagination Controls">
          <p className="text-[#9C9C9C]">Rows per page: {"5"}</p>
          <nav aria-label="Pagination Navigation" className="flex">
            <button className="text-sm" aria-label="Previous Page">{"<"}</button>
            <span className="px-2 py-1 rounded-xs border border-gray-500">{"1"}</span>
            <button className="text-sm" aria-label="Next Page">{">"}</button>
          </nav>
        </footer>
      )}
    </section>
  );
}
