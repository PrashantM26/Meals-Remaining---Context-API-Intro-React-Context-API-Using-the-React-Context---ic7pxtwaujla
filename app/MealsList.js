'use client'
import React from "react";
import MealsProvider from './MealsProvider';

const MealsList = () => {
    const { meals, tickMeal } = useContext(MealsProvider);
    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.id}>
                        <input 
                            type="checkbox"
                            checked={meal.ticked}
                            onChange={() => tickMeal(meal.id)}
                        />
                        {meal.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MealsList;
