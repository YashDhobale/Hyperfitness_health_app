import React from 'react';
import { FaHamburger, FaCarrot, FaFish } from "react-icons/fa";

const meals = [
  {
    icon: <FaHamburger size={40} color="#ff5733" />,
    name: 'Chicken Salad',
    calories: 350,
    vitamins: 'Vitamin A, Vitamin C',
    proteins: '30g',
    description: 'A healthy chicken salad with mixed greens, cucumbers, and a light vinaigrette dressing.',
    link: 'https://glovoapp.com/es/en/madrid/juicy-avenue?content=ensaladas-c.2808241933&section=ensaladas-s.5998584317'
  },
  {
    icon: <FaCarrot size={40} color="#ff5733" />,
    name: 'Vegetable Stir-Fry',
    calories: 200,
    vitamins: 'Vitamin A, Vitamin C, Vitamin K',
    proteins: '10g',
    description: 'A mix of traditional & leafy vegetables stir-fried with tofu in a light soy sauce.',
    link: 'https://glovoapp.com/es/en/madrid/salad-bowl-and-healthy-food-mad?content=carta-c.1492017739&section=nuestras-ensaladas-s.3148884958'
  },
  {
    icon: <FaFish size={40} color="#ff5733" />,
    name: 'Grilled Salmon',
    calories: 450,
    vitamins: 'Vitamin D, Omega-3 fatty acids',
    proteins: '40g',
    description: 'Grilled salmon fillet served with steamed broccoli, lettuce, cucumber and quinoa.',
    link: 'https://glovoapp.com/es/en/madrid/juicy-poke-bowls?content=poke-bowls-1200-ml-c.2808245578&section=poke-bowls-1200-ml-s.5998592360'
  }
];

function MealRecommendation() {
  return (
    <div className="meal-recommendation">
      <h2>Full Meal Recommendations</h2>
      <div className="meal-list">
        {meals.map((meal, index) => (
          <div key={index} className="meal-card">
            <div className="icon">{meal.icon} </div>
            <h3>{meal.name}</h3>
            <p><strong>Description:</strong> {meal.description}</p>
            <p><strong>Calories:</strong> {meal.calories} kcal</p>
            <p><strong>Vitamins:</strong> {meal.vitamins}</p>
            <p><strong>Proteins:</strong> {meal.proteins}</p>
            <button 
              className="meal-button" 
              onClick={() => window.open(meal.link, "_blank")}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealRecommendation;