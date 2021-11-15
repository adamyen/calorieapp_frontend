import React from "react";
import Fastfood from '@material-ui/icons/Fastfood';
import { Card } from '../../components';

export default function MealPlan(props) {
    console.log('>>> props', props);
    const { veg, veg2, grain, grain2, protein, protein2 } = props.foods;
    const bfCal = veg.calories + grain.calories + protein.calories;
    const ldCal = veg2.calories + grain2.calories + protein2.calories;

    const mealPressed = cal => {
        props.consumedCalories && props.consumedCalories(cal)
    };

    return (
        <div>
            <div className="border">
                <h3 className="text-white">Your metabolic rate: {props.rates.metabolicRate}</h3>
                <h3 className="text-white">Breakfast suggest calories: {props.rates.breakfast}</h3>
                <h3 className="text-white">Lunch and dinner suggest calories: {props.rates.otherMeal}</h3>
            </div>
            <h2>BURNOUT suggested meal plan</h2>
            <div
                className="container"
                onClick={() => mealPressed(bfCal)}
            >
                <h3>Breakfast</h3>
                <Fastfood
                    fontSize="large"
                    style={{
                        fill: 'green',
                        marginLeft: '5px',
                        marginRight: '5px'
                    }}/>
                <h3 className="meal-text-green">{`${bfCal} calories`}</h3>
            </div>
            <div className="home__section">
                <Card
                    src={veg['image']}
                    title={veg['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={grain['image']}
                    title={grain['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={protein['image']}
                    title={protein['name']}
                    description={props.proteinDescription1}
                    disableClick
                />
            </div>
            <div
                className="container"
                onClick={() => mealPressed(ldCal)}
            >
                <h3>Lunch and dinner</h3>
                <Fastfood
                    fontSize="large"
                    style={{
                        fill: 'green',
                        marginLeft: '5px',
                        marginRight: '5px'
                    }}/>
                <h3 className="meal-text-green">{`${ldCal} calories`}</h3>
            </div>
            <div className="home__section">
                <Card
                    src={veg2['image']}
                    title={veg2['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={grain2['image']}
                    title={grain2['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={protein2['image']}
                    title={protein2['name']}
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
