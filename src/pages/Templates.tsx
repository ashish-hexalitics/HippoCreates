// import React from "react";

import { useNavigate } from "react-router-dom";

function Template() {
  const templates = [
    { id: 1, name: "Template 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Template 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Template 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Template 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Template 5", image: "https://via.placeholder.com/150" },
    // Add more templates as needed
  ];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        className="bg-[#3f9997] text-white font-medium rounded-md w-full p-2 mb-6"
        onClick={() => navigate("/admin/create/template")}
      >
        Create Your Template
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {template.name}
              </h2>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition">
                Select Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Template;
