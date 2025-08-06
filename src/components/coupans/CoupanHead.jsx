import search from "../../assets/search.png";
import plus from "../../assets/product/plus.png";
import refresh from "../../assets/product/refresh.png";
import dwnld from "../../assets/product/Vector.png";

export default function CoupanHead({ searchTerm, setSearchTerm }) {
  return (
    <header className="flex p-4 items-center" aria-label="Coupon Header">
      {/* left */}
      <div className="flex flex-1 items-center space-x-16">
        <h1 className="md:text-base poppins-medium pl-2 text-xs sm:text-sm hidden sm:inline-block">
          Special Coupons
        </h1>

        <form
          role="search"
          className="flex items-center bg-gray-100 rounded-md p-2"
          onSubmit={(e) => e.preventDefault()} // Prevent page reload
        >
          {searchTerm === "" ? (
            <img src={search} alt="Search icon" className="w-4 h-4" />
          ) : (
            <div className="w-4 h-4" />
          )}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search here"
            aria-label="Search coupons"
            className="flex-1 bg-transparent outline-none text-sm px-2 poppins-medium placeholder-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF]"
          />
        </form>
      </div>

      {/* right */}
      <div className="flex flex-1 items-center justify-between">
        <div className="flex space-x-4">
          <button
            className="bg-gray-100 p-2.5 rounded-sm icon-cpn"
            aria-label="Add new coupon"
          >
            <img src={plus} alt="Add icon" />
          </button>

          <button
            className="bg-gray-100 p-2.5 rounded-sm icon-cpn"
            aria-label="Refresh coupons"
          >
            <img src={refresh} alt="Refresh icon" />
          </button>
        </div>

        <button
          className="bg-gray-100 p-2.5 rounded-sm"
          aria-label="Download coupons"
        >
          <img src={dwnld} alt="Download icon" />
        </button>
      </div>
    </header>
  );
}
