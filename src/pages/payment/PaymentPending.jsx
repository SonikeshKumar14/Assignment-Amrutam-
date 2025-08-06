import { Helmet } from "react-helmet";
import search from "../../assets/search.png";
import plus from "../../assets/product/plus.png";
import refresh from "../../assets/product/refresh.png";
import dwnld from "../../assets/product/Vector.png";
import profile from "../../assets/profile.png";
import updown from "../../assets/product/updown.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PaymentPending() {
  const tableHeaders = [
    "Doctor Name",
    "Email-id",
    "Mobile",
    "Amount Withdrawal",
    "Requested Date",
    "Wallet Amount",
    "Details",
    "Approval",
  ];

  const data = [
    {
      name: "Isabel Wiza",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "4,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
    {
      name: "Soumya Maheswari",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
    {
      name: "Margie O'Reilley",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "4,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
    {
      name: "Lucas Legros",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "4,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
    {
      name: "Shanelle Ziemann",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
    {
      name: "William Stephan",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
    {
      name: "Smith Birkin",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      withdrawal: "5,290",
      date: "1 Feb 2024",
      wallet: "30,000",
    },
  ];
 
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const dataToShow = searchTerm ? filteredData : data.slice(0, 7);

  return (
    <main className="bg-white rounded-xl mt-2" role="main">
      <Helmet>
        <title>Pending Payment Requests | Dashboard</title>
        <meta
          name="description"
          content="Manage and view pending payment requests from doctors. Review withdrawal amounts and approve or decline."
        />
      </Helmet>

      <header className="flex p-4 items-center justify-between">
        <section className="flex items-center space-x-4 flex-1">
          <h1 className="hidden sm:inline sm:text-sm poppins-medium">
            Pending Payment Request
          </h1>

          <form
            role="search"
            className="flex items-center bg-gray-100 rounded-md px-2 py-1"
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            {
              searchTerm === "" ?  <img src={search} alt="" className="w-4 h-4" /> : <div className="w-4 h-4"/>
            }
            <input
              id="search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search here"
              className="bg-transparent outline-none text-sm px-2 poppins-medium placeholder-[#28643B4D] text-[#28643B4D]"
            />
          </form>

          <button className="bg-gray-100 p-2.5 rounded-sm icon-py-hide" aria-label="Add New">
            <img src={plus} alt="Add" />
          </button>
          <button className="bg-gray-100 p-2.5 rounded-sm icon-py-hide" aria-label="Refresh List">
            <img src={refresh} alt="Refresh" />
          </button>
        </section>

        <section className="flex space-x-4">
          <button className="bg-gray-100 p-2.5 rounded-sm icon-py-hide" aria-label="Sort">
            <img src={updown} alt="Sort" />
          </button>
          <button className="bg-gray-100 p-2.5 rounded-sm" aria-label="Download">
            <img src={dwnld} alt="Download" />
          </button>
        </section>
      </header>

      <section className="overflow-x-auto max-w-full px-4">
        <table className="min-w-[900px] w-full text-xs poppins-medium whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3" scope="col">
                <input type="checkbox" aria-label="Select all rows" />
              </th>
              {tableHeaders.map((header, idx) => (
                <th
                  key={idx}
                  className="text-left text-gray-700 px-2 py-3 whitespace-nowrap"
                  scope="col"
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
                  <input type="checkbox" aria-label={`Select row ${idx + 1}`} />
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
                <td className="px-4 py-3 text-green-600 cursor-pointer">
                  <button className="underline">View All</button>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button className="text-[#3A643B] text-xs">Accept</button>
                  <button className="text-[#E23442] text-xs">Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="flex items-center justify-between poppins-medium text-xs p-5">
        <p className="text-[#9C9C9C]">Rows per page: 5</p>
        <nav aria-label="Pagination" className="flex items-center space-x-2">
          <button aria-label="Previous Page">
            <ChevronLeft />
          </button>
          <span className="px-2 py-1 rounded-xs border border-gray-500">1</span>
          <button aria-label="Next Page">
            <ChevronRight />
          </button>
        </nav>
      </footer>
    </main>
  );
}
