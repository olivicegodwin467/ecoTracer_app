import React, { useState, useEffect } from "react";

const TrackerForm = () => {
  const [formData, setFormData] = useState({
    activity: "",
    quantity: "",
    date: "",
  });

  const [logs, setLogs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogs([...logs, formData]);
    setFormData({ activity: "", quantity: "", date: "" });
  };

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
    setLogs(savedLogs);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(logs));
  }, [logs]);
  

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Log Your Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Activity</label>
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="E.g., Fertilizer Use"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="E.g., 50 kg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Add Activity
        </button>
      </form>

      <h3 className="text-xl font-bold text-gray-800 mt-6">Logged Activities</h3>
      <ul className="mt-4 space-y-2">
        {logs.map((log, index) => (
          <li
            key={index}
            className="border border-gray-300 p-2 rounded bg-gray-50 flex justify-between"
          >
            <span>{log.activity} - {log.quantity} on {log.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackerForm;
