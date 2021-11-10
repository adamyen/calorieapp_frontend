import React from "react";
import { Card } from '../../components';

export default function MealPlan(props) {
    return (
        <div>
            <div className="border">
                <h3 className="text-white">Your metabolic rate: {props.rates.metabolicRate}</h3>
                <h3 className="text-white">Breakfast suggest calories: {props.rates.breakfast}</h3>
                <h3 className="text-white">Lunch and dinner suggest calories: {props.rates.otherMeal}</h3>
            </div>
            <h2>BURNOUT suggested meal plan</h2>
            <h3>Breakfast</h3>
            <div className="home__section">
                <Card
                    src={props.foods.veg['image']}
                    title={props.foods.veg['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={props.foods.grain['image']}
                    title={props.foods.grain['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={props.foods.protein['image']}
                    title={props.foods.protein['name']}
                    description={props.proteinDescription1}
                    disableClick
                />
            </div>
            <h3>Lunch and dinner</h3>
            <div className="home__section">
                <Card
                    src={props.foods.veg2['image']}
                    title={props.foods.veg2['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={props.foods.grain2['image']}
                    title={props.foods.grain2['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={props.foods.protein2['image']}
                    title={props.foods.protein2['name']}
                    description={props.proteinDescription2}
                    disableClick
                />
            </div>
            {props.enrollGoal && (
                <div className="enroll">
                    <button onClick={() => props.enrollGoal(props)}>
                        Enroll with this meal plan
                    </button>
                </div>
            )}
        </div>
    );
}
