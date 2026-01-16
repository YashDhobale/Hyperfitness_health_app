import React, { useState } from "react";
import TravelCalculator from "./TravelCalculator";
import './App.css';
import MealRecommendation from './MealRecommendation';
import CalorieTracker from "./CalorieTracker";
import GymRecommendation from "./GymRecommendation";
// import logo from "./logo.png";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="HyperFitness Freak Logo" className="logo" /> */}
        <div className="header-content">
        <h1>HyperFitness Freak</h1>
        <button className="sign-in-btn" onClick={handleSignIn}>
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </button>
        </div>
      </header>
      
      <div className="content">
        <section className="section calorie-tracker">
          <h2>CALORIE TRACKER</h2>
          <p>This is where you can track your daily Nutrients intake and expenditure. Clicking any card also provides you your weekly performance. We plan to add advanced analytics predicting optimal Future Target spend as well as Detailed Historical Performance .</p>
          <br></br>
          <CalorieTracker/>
        </section>
        
        <section className="section food-delivery">
          <h2>HEALTHY MEAL SUGGESTIONS</h2>
          <p>Order your meals from this section. Choose healthy options for better fitness results. We provide healthy meals delivered to your doorsteps. Through API, we can directly place the order with the delivery app without the user having to worry about the restaurant, dish etc, thus seamlessly integrating food choices through a single click</p>
          <MealRecommendation/>
        </section>

        <section className="section gym-situation">
          <h2>GYM WORKOUT SCHEDULE</h2>
          <p>Check the current status of your gym. For now, it suggests the exercises, the count and expected calorie burn based on past performance and target. We plan to add a gym occupancy feature too through which people will be able to access occupancy of gyms at any point in time and find optimal time for going to gym</p>
          <br></br>
          <GymRecommendation/>
        </section>

        <section className="section travel-calorie-calculator">
        <h2>TRAVEL CALORIE CALCULATOR</h2>
          <p>Calculate the expected calories you will burn while traveling. Whether you’re walking, biking, or hiking—track your activity in real-time, and based on the different routes available, you can get expected calorie burn so that you can take precise choices</p>
          <br></br>
          <TravelCalculator/>
        </section>
      </div>

      

    </div>

   /*  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <TravelCalculator />
    </div> */
  );
}

export default App;