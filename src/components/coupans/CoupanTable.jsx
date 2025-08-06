import frame from "../../assets/product/Frame.png";
import profile from "../../assets/profile.png";

export default function CoupanTable({ data }) {
  const tableHeader = [
    "Doctor Name",
    "Product Name",
    "Usage Limit",
    "Percentage",
    "Action",
  ];

  return (
    <div className="w-full overflow-x-auto poppins-medium">
      <table
        className="min-w-full border-collapse"
        aria-label="Coupon usage data table"
      >
        <thead>
          <tr className="border-b border-gray-200">
            {tableHeader.map((item, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <img
                    src={profile}
                    className="rounded-full w-6 h-6"
                    alt={`${item.name} profile`}
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                {item.product}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                {item.limit}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                {`${item.percent}%`}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                <img
                  src={frame}
                  className="h-5 w-5"
                  alt={`Action icon for ${item.name}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
