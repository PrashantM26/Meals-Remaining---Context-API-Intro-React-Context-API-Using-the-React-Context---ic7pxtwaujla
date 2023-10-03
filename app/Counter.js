'use client'
import React from "react";
import MealsProvider from './MealsProvider';

const Counter = () => {
    const { meals } = useContext(MealsProvider);
    const remainingMeals = meals.filter((meal) => !meal.ticked).length;
    return (
        <div>
            <h3>Meals Remaining: {remaingMeals}</h3>
        </div>
    )
}

export default Counter;
