'use client'
import React from "react";
const { meals, tickMeal } = useContext(MealsContext);

const MealsList = () => {
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
