import doctorImage from "../../assets/profile/doc.png";
import imageFirst from "../../assets/product/image.png";
import imageScnd from "../../assets/product/image2.png";
import imageTrd from "../../assets/product/image5.png";
import upArr from "../../assets/product/icons.png";
import dnArr from "../../assets/product/icons2.png";

export default function DashProfd() {
  const doctorProfile = [
    { name: "Dr. Meenal", rating: 8, icon: upArr },
    { name: "Dr. Pallavi", rating: 1, icon: upArr },
    { name: "Dr. Sapna", rating: 2, icon: dnArr },
  ];

  const productlist = [
    { product: "Amrutam Nari Sandarya Malt", icon: imageFirst },
    { product: "Amrutam Bhringraj Hair Therapy", icon: imageScnd },
    { product: "Amrutam Lozenge Malth", icon: imageTrd },
  ];

  return (
    <section
      aria-label="Dashboard Doctor and Product Performance"
      className="flex flex-col md:flex-row gap-6 w-full mt-4 poppins-medium"
    >
      {/* Left Section - Doctors */}
      <section aria-label="Top Affiliate Doctors" className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-base font-medium text-[#333448] mb-2">Top Affiliate Doctors</h2>
        <div className="bg-white rounded-2xl border p-4 md:p-5 space-y-4 shadow-sm">
          {doctorProfile.map((person, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between flex-wrap gap-1 sm:gap-3"
            >
              <div className="flex items-center gap-1 sm:gap-3 flex-1 min-w-[200px]">
                <span className="hidden sm:inline-block text-sm font-medium">{`${idx + 1}.`}</span>
                <img
                  className="w-6 h-6 sm:w-9 sm:h-9 rounded-full"
                  src={doctorImage}
                  alt={`Profile of ${person.name}`}
                />
                <div className="text-xs sm:text-sm text-[#333448]">
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-[#33354880] hidden sm:inline-block text-xs">
                    Gynecology + 2 others
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center text-xs sm:text-sm px-1 sm:px-2 py-1 rounded-md ${
                  person.icon === upArr ? "bg-[#ABE9CA]" : "bg-[#F3B5B5]"
                }`}
              >
                <img
                  src={person.icon}
                  className="w-4 h-4 mr-1"
                  alt={person.icon === upArr ? "Increased rating" : "Decreased rating"}
                />
                <span
                  className={`font-medium ${
                    person.icon === upArr ? "text-[#15C26B]" : "text-[#DD3131]"
                  }`}
                >
                  +{person.rating}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Section - Products */}
      <section aria-label="Top Affiliate Products" className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-base font-medium text-[#333448] mb-2">Top Affiliate Products</h2>
        <div className="bg-white rounded-2xl border p-4 md:p-5 space-y-4 shadow-sm">
          {productlist.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-[#333448]">
              <span className="font-medium">{`${idx + 1}.`}</span>
              <img
                className="w-6 h-6 sm:w-9 sm:h-9 rounded-full"
                src={item.icon}
                alt={`${item.product} image`}
              />
              <p className="truncate">{item.product}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
