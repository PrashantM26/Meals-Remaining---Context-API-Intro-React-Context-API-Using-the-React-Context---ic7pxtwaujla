'use client'
import React from "react";
const { meals } = useContext(MealsContext);

const Counter = () => {
    const remainingMeals = meals.filter((meal) => !meal.ticked).length;
    return (
        <div>
            <h3>Meals Remaining: {remaingMeals}</h3>
        </div>
    )
}

export default Counter;
