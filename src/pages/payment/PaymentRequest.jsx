import { Helmet } from "react-helmet";
import search from "../../assets/search.png";
import plus from "../../assets/product/plus.png";
import refresh from "../../assets/product/refresh.png";
import dwnld from "../../assets/product/Vector.png";
import profile from "../../assets/profile.png";
import updown from "../../assets/product/updown.png";
import { useState } from "react";

export default function PaymentRequest() {
  const tableHeaders = [
    "Doctor Name",
    "Email-id",
    "Mobile",
    "Amount Withdrawal",
    "Requested Date",
    "Wallet Amount",
    "Details",
    "Status",
    "Approval Date",
  ];

  const data = [
    {
      name: "Model Wiza",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "4,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Paid",
      approvalDate: "October, 2023",
    },
    {
      name: "Sournya Mathewari",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Decline",
      approvalDate: "July, 2023",
    },
    {
      name: "Margis O'Reiley",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "4,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Decline",
      approvalDate: "November, 2023",
    },
    {
      name: "Lucas Legros",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "4,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Decline",
      approvalDate: "November, 2023",
    },
    {
      name: "Shansite Ziemann",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Paid",
      approvalDate: "December, 2023",
    },
    {
      name: "Willom Stephan",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Paid",
      approvalDate: "December, 2023",
    },
    {
      name: "Smith Birkin",
      email: "dlinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "Feb 2024",
      wallet: "30,000",
      status: "Paid",
      approvalDate: "",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const dataToShow = searchTerm ? filteredData : data.slice(0, 7);

  return (
    <main
      className="bg-white rounded-xl mt-2"
      aria-label="Pending Payment Requests"
    >
      <Helmet>
        <title>Payment Request | Affiliate Dashboard</title>
        <meta
          name="description"
          content="View and manage affiliate payment withdrawal requests from doctors with status, wallet amount, and approval details."
        />
      </Helmet>

      <header className="flex p-4 items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <h1 className="hidden sm:inline sm:text-sm poppins-medium">
            Pending Payment Request
          </h1>

          <div
            className="flex items-center bg-gray-100 rounded-md px-2 py-1"
            aria-label="Search Box"
          >
            {searchTerm === "" ? (
              <img src={search} alt="Search Icon" className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4" />
            )}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search here"
              className="bg-transparent outline-none text-sm px-2 poppins-medium placeholder-[#28643B4D] text-[#28643B4D]"
              aria-label="Search Payment Requests"
            />
          </div>

          <div
            className="bg-gray-100 p-2.5 rounded-sm icon-py-hide"
            aria-label="Add New Request"
          >
            <img src={plus} alt="Add" />
          </div>
          <div
            className="bg-gray-100 p-2.5 rounded-sm icon-py-hide"
            aria-label="Refresh Table"
          >
            <img src={refresh} alt="Refresh" />
          </div>
        </div>

        <div className="flex space-x-4">
          <div
            className="bg-gray-100 p-2.5 rounded-sm icon-py-hide"
            aria-label="Sort"
          >
            <img src={updown} alt="Sort" />
          </div>
          <div className="bg-gray-100 p-2.5 rounded-sm" aria-label="Download">
            <img src={dwnld} alt="Download" />
          </div>
        </div>
      </header>

      <section
        className="overflow-x-auto max-w-full px-4"
        aria-labelledby="payment-table"
      >
        <table
          className="min-w-[1200px] w-full text-xs poppins-medium whitespace-nowrap"
          role="table"
        >
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3">
                <input type="checkbox" aria-label="Select All Rows" />
              </th>
              {tableHeaders.map((header, idx) => (
                <th
                  key={idx}
                  className="text-left text-gray-700 px-2 py-3 whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataToShow.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    aria-label={`Select row for ${item.name}`}
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <img
                      src={profile}
                      className="w-6 h-6 rounded-full"
                      alt={`${item.name} profile`}
                    />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.mobile}</td>
                <td className="px-4 py-3">{item.withdrawal}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.wallet}</td>
                <td
                  className="px-4 py-3 text-green-600 cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  View All
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`${
                      item.status === "Paid" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.approvalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="flex items-center justify-between poppins-medium text-xs p-5">
        <p className="text-[#9C9C9C]">Rows per page: {"5"}</p>
        <div className="flex">
          <button className="text-sm" aria-label="Previous Page">
            {"<"}
          </button>
          <span
            className="px-2 py-1 rounded-xs border border-gray-500"
            aria-label="Current Page"
          >
            {"1"}
          </span>
          <button className="text-sm" aria-label="Next Page">
            {">"}
          </button>
        </div>
      </footer>
    </main>
  );
}
