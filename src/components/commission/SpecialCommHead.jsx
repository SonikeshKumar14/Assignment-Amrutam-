import search from "../../assets/search.png";
import plus from "../../assets/product/plus.png";
import refresh from "../../assets/product/refresh.png";
import dwnld from "../../assets/product/Vector.png";

export default function SpecialCommHead({ searchTerm, setSearchTerm }) {
  return (
    <header className="flex p-4 items-center" aria-labelledby="special-coupons-heading">
      {/* Left */}
      <div className="flex flex-1 items-center space-x-16">
        <h1
          id="special-coupons-heading"
          className="md:text-base poppins-medium pl-2 text-xs sm:text-sm hidden sm:inline-block"
        >
          Special Coupons
        </h1>

        <div className="flex items-center bg-gray-100 rounded-md p-2 w-[200px] sm:w-[240px]">
          {searchTerm === "" ? (
            <img src={search} alt="Search icon" className="w-4 h-4" />
          ) : (
            <div className="w-4 h-4" />
          )}
          <input
            type="text"
            placeholder="Search here"
            aria-label="Search special coupons"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm px-2 poppins-medium placeholder-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF]"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-center justify-between logo-btw">
        <div className="flex space-x-4">
          <button
            className="bg-gray-100 p-2.5 rounded-sm icon-cpn"
            aria-label="Add special coupon"
          >
            <img src={plus} alt="" />
          </button>
          <button
            className="bg-gray-100 p-2.5 rounded-sm icon-cpn"
            aria-label="Refresh special coupons"
          >
            <img src={refresh} alt="" />
          </button>
        </div>
        <button
          className="bg-gray-100 p-2.5 rounded-sm"
          aria-label="Download special coupons"
        >
          <img src={dwnld} alt="" />
        </button>
      </div>
    </header>
  );
}
