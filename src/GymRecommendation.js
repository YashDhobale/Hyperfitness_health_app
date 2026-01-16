import React from "react";
import "./App.css";
import { FaDumbbell, FaCrutch, FaHammer } from "react-icons/fa";

const exercises = [
  {
    name: "Push-Ups",
    count: 30,
    caloriesBurnt: 100,
    time: "5 min",
    icon: <FaDumbbell size={40} color="#ff5733" />,
  },
  /* {
    name: "Cardio",
    count: "2 km",
    caloriesBurnt: 250,
    time: "15 min",
    icon: <FaRunning size={40} color="#1e90ff" />,
  }, */
  {
    name: "BicepCurl",
    count: "3x30",
    caloriesBurnt: 300,
    time: "20 min",
    icon: <FaCrutch size={40} color="#ffcc00" />,
  },
  {
    name: "HammerCurl",
    count: "3x30",
    caloriesBurnt: 400,
    time: "30 min",
    icon: <FaHammer size={40} color="#00bfff" />,
  },
  {
    name: "DragCurl",
    count: "3x30",
    caloriesBurnt: 80,
    time: "20 min",
    icon: <FaDumbbell size={40} color="#32cd32" />,
  },
];

function GymRecommendation() {
  return (
    <div className="App3">
      {/* <header className="App-header">
        <h1>Gym Exercise Recommendation System</h1>
      </header> */}

      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <div className="icon">{exercise.icon}</div>
            <h2>{exercise.name}</h2>
            <p><strong>Count:</strong> {exercise.count}</p>
            <p><strong>Calories Burnt:</strong> {exercise.caloriesBurnt} kcal</p>
            <p><strong>Time:</strong> {exercise.time}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default GymRecommendation;