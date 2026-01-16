import React, { useState } from 'react';
import './App.css';
import { FaWalking, FaBicycle, FaDumbbell, FaUtensils } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const dummyData = {
  caloriesSpent: [
    { day: 'Mon', value: 500 },
    { day: 'Tue', value: 600 },
    { day: 'Wed', value: 700 },
    { day: 'Thu', value: 550 },
    { day: 'Fri', value: 650 },
    { day: 'Sat', value: 750 },
    { day: 'Sun', value: 800 }
  ],
  walkingDistance: [
    { day: 'Mon', value: 3 },
    { day: 'Tue', value: 4 },
    { day: 'Wed', value: 5 },
    { day: 'Thu', value: 4.5 },
    { day: 'Fri', value: 5.2 },
    { day: 'Sat', value: 6 },
    { day: 'Sun', value: 6.5 }
  ],
  cyclingDistance: [
    { day: 'Mon', value: 8 },
    { day: 'Tue', value: 9 },
    { day: 'Wed', value: 10 },
    { day: 'Thu', value: 9.5 },
    { day: 'Fri', value: 10.2 },
    { day: 'Sat', value: 11 },
    { day: 'Sun', value: 12 }
  ],
  proteinIntake: [
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 110 },
    { day: 'Wed', value: 120 },
    { day: 'Thu', value: 115 },
    { day: 'Fri', value: 130 },
    { day: 'Sat', value: 140 },
    { day: 'Sun', value: 145 }
  ],
  vitaminIntake: [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 22 },
    { day: 'Wed', value: 24 },
    { day: 'Thu', value: 23 },
    { day: 'Fri', value: 25 },
    { day: 'Sat', value: 27 },
    { day: 'Sun', value: 30 }
  ],
  carbsIntake: [
    { day: 'Mon', value: 200 },
    { day: 'Tue', value: 210 },
    { day: 'Wed', value: 220 },
    { day: 'Thu', value: 215 },
    { day: 'Fri', value: 230 },
    { day: 'Sat', value: 240 },
    { day: 'Sun', value: 250 }
  ]
};

function CalorieTracker() {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const toggleChart = (metricKey) => {
    setSelectedMetric(selectedMetric === metricKey ? null : metricKey);
  };

  const metrics = [
    { name: "Calories Spent", key: "caloriesSpent", value: 550, icon: <FaDumbbell size={40} color="#ff6347" /> },
    { name: "Walking Distance", key: "walkingDistance", value: 5, icon: <FaWalking size={40} color="#1e90ff" /> },
    { name: "Cycling Distance", key: "cyclingDistance", value: 10, icon: <FaBicycle size={40} color="#ff4500" /> },
    { name: "Protein Intake", key: "proteinIntake", value: 120, icon: <FaUtensils size={40} color="#8a2be2" /> },
    { name: "Vitamin Intake", key: "vitaminIntake", value: 25, icon: <FaUtensils size={40} color="#ff0" /> },
    { name: "Carbs Intake", key: "carbsIntake", value: 250, icon: <FaUtensils size={40} color="#f4a300" /> }
  ];

  return (
    <div className="App2">
      <div className="stats">
        {metrics.map((metric) => (
          <div 
            key={metric.key} 
            className="stat-card" 
            onClick={() => toggleChart(metric.key)}
          >
            <h2>{metric.name}</h2>
            <p>{metric.value} {metric.key.includes("Distance") ? "km" : metric.key.includes("Intake") ? "g" : "kcal"}</p>
            <div className="icon-container">{metric.icon}</div>
          </div>
        ))}
      </div>

      {selectedMetric && (
        <div className="chart-container">
          <h3>Weekly Performance: {metrics.find(m => m.key === selectedMetric).name}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyData[selectedMetric]}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="value" stroke="#ff6347" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default CalorieTracker;
