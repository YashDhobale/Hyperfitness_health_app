import React, { useState } from "react";
import { FaWalking, FaBicycle, FaCar } from "react-icons/fa";

const TravelCalculator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [mode, setMode] = useState("walking");

  const modeOptions = {
    walking: { label: "Walking", icon: <FaWalking />, calorieRate: 50 },
    bicycling: { label: "Bicycling", icon: <FaBicycle />, calorieRate: 30 },
    driving: { label: "Driving", icon: <FaCar />, calorieRate: 5 },
  };

  const modestart = {
    MoncloaMetro: { label: "Moncloa Metro", icon: <FaWalking />, calorieRate: 50 },
    IESEBusinessSchool: { label: "IESE Business School", icon: <FaBicycle />, calorieRate: 30 },
    SolMetro: { label: "Sol Metro", icon: <FaCar />, calorieRate: 5 },
  };

  const modeend = {
    ArguellesMetro: { label: "Arguelles Metro", icon: <FaWalking />, calorieRate: 50 },
    IESEBusinessSchool: { label: "IESE Business School", icon: <FaBicycle />, calorieRate: 30 },
    SolMetro: { label: "Sol Metro", icon: <FaCar />, calorieRate: 5 },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto space-y-6 border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-blue-600">🚀 Travel Distance Calculator</h1>

      {/* Start Location Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Start Location</label>
        <select
          className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        >
          <option value="">Select Start Location</option>
          {Object.keys(modestart).map((key) => (
            <option key={key} value={key}>{modestart[key].label}</option>
          ))}
        </select>
      </div>

      {/* End Location Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">End Location</label>
        <select
          className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        >
          <option value="">Select End Location</option>
          {Object.keys(modeend).map((key) => (
            <option key={key} value={key}>{modeend[key].label}</option>
          ))}
        </select>
      </div>

      {/* Mode of Transport Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Mode of Transportation</label>
        <select
          className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          {Object.keys(modeOptions).map((key) => (
            <option key={key} value={key}>{modeOptions[key].label}</option>
          ))}
        </select>
      </div>

      {/* Button */}
      <button
        onClick={() => window.location.href = "/mapo.png"}
        className="bg-blue-500 text-white font-semibold p-3 w-full rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Calculate
      </button>
    </div>
  );
};

export default TravelCalculator;