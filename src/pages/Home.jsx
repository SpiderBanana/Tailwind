import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const catalogs = [
    {
      title: "Christmas 2024",
      tags: ["Sneakers", "Boots"],
      createdDate: "12.27.2024",
      productsCount: 254,
    },
    {
      title: "A very big title for a catalog with many thing",
      tags: ["Sneakers", "Boots", "Belt", "Socks", "+3"],
      createdDate: "12.27.2024",
      productsCount: 254,
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
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <h3 className="text-3xl font-semibold text-[#1E1F24]">
            My Catalogs
          </h3>
          <button
            className="bg-[#463ADD] text-white px-6 py-2 text-sm rounded-md flex items-center justify-center hover:bg-purple-700"
            onClick={() => navigate('/catalog')}
          >
            <img
              src="/Vector.png"
              alt="plus icon"
              className="w-4 h-4 mr-2"
            />
            Create catalog
          </button>
        </div>

        {/* Horizontal Line */}
        <div className="border-b border-gray-200 my-4"></div>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create Catalog Card */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <p className="font-semibold text-lg mb-2">Create catalog</p>
              <p className="text-gray-500 text-sm">
                Create new catalog to add products and generate content.
              </p>
            </div>
            <button
              className="bg-[#463ADD] text-white mt-4 px-4 py-2 text-sm rounded-md flex items-center justify-center hover:bg-purple-700"
              onClick={() => navigate('/catalog')}
            >
              <div className="flex items-center">
                <img
                  src="/Vector.png"
                  alt="plus icon"
                  className="w-4 h-4 mr-2"
                />
                <span>Create catalog</span>
              </div>
            </button>
          </div>

          {/* Catalog Cards */}
          {catalogs.map((catalog, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-2 truncate">
                  {catalog.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {catalog.tags.map((tag, idx) => (
                    <button
                      key={idx}
                      className="text-sm border border-gray-300 rounded-md px-4 py-0.5 bg-white hover:bg-gray-100"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Created on {catalog.createdDate}
                </p>
                <p className="text-sm font-semibold">
                  {catalog.productsCount} products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;