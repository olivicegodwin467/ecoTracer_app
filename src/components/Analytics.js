import React from "react";

const Analytics = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Analytics</h2>
      <p className="text-gray-700">
        Analytics features such as graphs and emissions calculations will be implemented here.
      </p>
      <div className="mt-6">
        {/* Placeholder for charts or graphs */}
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Graph placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
