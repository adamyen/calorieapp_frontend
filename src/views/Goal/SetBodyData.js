import React, { useState } from "react";
import { connect } from 'react-redux';
import { createGoal } from '../../actions/goal';
import MealPlan from "./MealPlan";
import { generateMealPlanProps } from './helper';

function SetBodyData(props) {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [btnPressed, setBtnPressed] = useState(false);
    const [suggestions, setSuggestions] = useState({});

    const onCalculatePress = () => {
        setSuggestions(generateMealPlanProps(age, gender, weight, height));
        setBtnPressed(true);
    }

    const generateGoal = () => {
        props.createGoal({
            ...suggestions,
            age: age,
            gender: gender,
            weight: weight,
            height: height,
            type: 'meal',
        });
        props.popToTop();
    }

    return (
        <div className="container-col">
            <span className="login-signup-header">Input your body information</span>
            <div className="field">
                <input
                    type="text"
                    placeholder="Age"
                    required
                    onChange={i => setAge(i.target.value)}
                    value={age}
                />
            </div>
            <div className="field">
                <input
                    type="text"
                    placeholder="Gender (M/F)"
                    required
                    onChange={i => setGender(i.target.value)}
                    value={gender}
                />
            </div>
            <div className="field">
                <input
                    type="text"
                    placeholder="Weight (kg)"
                    required
                    onChange={i => setWeight(i.target.value)}
                    value={weight}
                />
            </div>
            <div className="field">
                <input
                    type="text"
                    placeholder="Height (cm)"
                    required
                    onChange={i => setHeight(i.target.value)}
                    value={height}
                />
            </div>
            <div className="field">
                <button onClick={onCalculatePress}>Calculate</button>
            </div>
            {btnPressed && (
                <MealPlan
                    {...suggestions}
                    enrollGoal={generateGoal}
                />
            )}
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    createGoal: goal => dispatch(createGoal(goal)),
});

export default connect(null, mapDispatchToProps)(SetBodyData);