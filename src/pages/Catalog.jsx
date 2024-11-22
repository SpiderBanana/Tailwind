import React from "react";
import { useNavigate } from "react-router-dom";

const CatalogPage = () => {
  const navigate = useNavigate();

  const filters = [
    { name: "All", count: 2, active: true },
    { name: "To improve", count: 245, active: false },
    { name: "Pending", count: 23, active: false },
    { name: "To review", count: 1, active: false },
    { name: "Done", count: 2, active: false },
  ];

  const products = [
    {
      title: "Trottinette électrique Xiaomi Mi Electric Scooter 3",
      updated: "Last updated 18 hours ago",
      created: "Create 2 May 2024",
      progress: 20,
      status: "To improve",
      statusIcon: "/toreview.png",
      statusColor: "text-blue-500 bg-blue-100",
    },
    {
      title: "Trottinette électrique Xiaomi Mi Electric Scooter 3",
      updated: "Last updated 18 hours ago",
      created: "Create 2 May 2024",
      progress: 40,
      status: "Error",
      statusIcon: "/error.png",
      statusColor: "text-red-500 bg-red-100",
    },
    {
      title: "Trottinette électrique Xiaomi Mi Electric Scooter 3",
      updated: "Last updated 18 hours ago",
      created: "Create 2 May 2024",
      progress: 60,
      status: "Pending",
      statusIcon: "/pending.png",
      statusColor: "text-yellow-500 bg-yellow-100",
    },
    {
      title: "Trottinette électrique Xiaomi Mi Electric Scooter 3",
      updated: "Last updated 18 hours ago",
      created: "Create 2 May 2024",
      progress: 80,
      status: "In progress",
      statusIcon: "/inprogress.png",
      statusColor: "text-purple-500 bg-purple-100",
    },
    {
      title: "Trottinette électrique Xiaomi Mi Electric Scooter 3",
      updated: "Last updated 18 hours ago",
      created: "Create 2 May 2024",
      progress: 100,
      status: "To review",
      statusIcon: "/toreview.png",
      statusColor: "text-yellow-600 bg-yellow-100",
    },
    {
      title: "Trottinette électrique Xiaomi Mi Electric Scooter 3",
      updated: "Last updated 18 hours ago",
      created: "Create 2 May 2024",
      progress: 100,
      status: "Done",
      statusIcon: "/done.png",
      statusColor: "text-green-500 bg-green-100",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5 bg-[#EEF1FF] p-6">
        <h1
          className="text-5xl font-black text-center"
          style={{
            background: "linear-gradient(to right, #463ADD, #FF00FB)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          TAILWIND
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="flex justify-between items-center">
          {/* Back and Title */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-gray-500"
              onClick={() => navigate('/')}
            >
              <img
                src="/arrow-left.png"
                alt="Back icon"
                className="w-4 h-4"
              />
              <span>Back</span>
            </button>
            <div className="border-l border-gray-300 h-5"></div>
            <h2 className="text-2xl font-semibold">Christmas 2024</h2>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-[#EEF1FF] text-[#4C48DA] px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-gray-100">
              <img
                src="/plus-icon.png"
                alt="Add icon"
                className="w-4 h-4"
              />
              Add product
            </button>
            <button className="border border-gray-300 px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-gray-100">
              <img
                src="/upload.png"
                alt="Export icon"
                className="w-4 h-4"
              />
              Export
            </button>
            <button className="border border-gray-300 px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-gray-100">
              <img
                src="/settings.png"
                alt="Settings icon"
                className="w-4 h-4"
              />
              Settings
            </button>
          </div>
        </div>

        {/* Line above filters */}
        <div className="border-t border-gray-200 mt-6"></div>

        {/* Filters */}
        <div className="flex items-center gap-8 mt-4">
          {filters.map((filter, index) => (
            <div
              key={index}
              className={`relative text-sm font-medium flex flex-col items-center ${
                filter.active
                  ? "text-[#463ADD]"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <button className="px-4 py-1 focus:outline-none">
                {filter.name}
                {filter.count > 0 && (
                  <span
                    className={`ml-2 text-xs ${
                      filter.active
                        ? "bg-[#463ADD] text-white"
                        : "bg-gray-200 text-gray-600"
                    } px-2 py-0.5 rounded-full`}
                  >
                    {filter.count}
                  </span>
                )}
              </button>
              {filter.active && (
                <div className="h-0.5 w-full bg-[#463ADD] rounded-md mt-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Line below filters */}
        <div className="border-t border-gray-200"></div>

        {/* Search and Filter */}
        <div className="flex items-center justify-end gap-4 mt-4">
          <div className="relative">
            <img
              src="/search.png"
              alt="Search icon"
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search product"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            <img
              src="/filter.png"
              alt="Filter icon"
              className="w-4 h-4"
            />
          </button>
          <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            <img
              src="/list-filter.png"
              alt="List filter icon"
              className="w-4 h-4"
            />
          </button>
        </div>

{/* Product List */}
<div className="mt-6 space-y-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              <input type="checkbox" className="mr-4" />
              <img
                src="/trottinette.png"
                alt="Trottinette"
                className="w-16 h-16 object-contain mr-4"
              />
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">
                    {product.updated} | {product.created}
                  </p>
                </div>
                <div className="relative w-1/3 h-2 bg-gray-200 rounded-full ml-6">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      width: `${product.progress}%`,
                      backgroundColor:
                        product.status === "Error"
                          ? "#F87171"
                          : product.status === "Pending"
                          ? "#FBBF24"
                          : product.status === "To improve"
                          ? "#3B82F6"
                          : "#34D399",
                    }}
                  ></div>
                </div>
              </div>
              <div
                className={`flex items-center gap-2 px-4 py-1 rounded-md text-sm font-medium ${product.statusColor} ml-8`}
              >
                <img
                  src={product.statusIcon}
                  alt={`${product.status} icon`}
                  className="w-4 h-4"
                />
                {product.status}
              </div>
              <button className="ml-6 hover:scale-105 transition-transform duration-200">
                <img
                  src="/more-horizontal.png"
                  alt="More options"
                  className="w-4 h-4"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6 gap-4 animate-fade-in">
          <span className="text-sm text-gray-500">Page 1 sur 4</span>
          <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
            <option>100 per page</option>
          </select>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button className="p-2 hover:bg-gray-100 rounded-md">&laquo;</button>
            <button className="p-2 hover:bg-gray-100 rounded-md">&lt;</button>
            <button className="p-2 hover:bg-gray-100 rounded-md">&gt;</button>
            <button className="p-2 hover:bg-gray-100 rounded-md">&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;