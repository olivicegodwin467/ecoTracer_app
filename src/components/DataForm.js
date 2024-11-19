import React, { useState } from "react";

const DataForm = ({ addData }) => {
  const [entry, setEntry] = useState({ crop: "", quantity: "", climateImpact: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.crop && entry.quantity && entry.climateImpact) {
      addData(entry);
      setEntry({ crop: "", quantity: "", climateImpact: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Crop Name</label>
        <input
          type="text"
          name="crop"
          value={entry.crop}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter crop name"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={entry.quantity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter quantity"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Climate Impact</label>
        <input
          type="text"
          name="climateImpact"
          value={entry.climateImpact}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter climate impact (e.g., low, medium, high)"
        />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add Entry
      </button>
    </form>
  );
};

export default DataForm;
