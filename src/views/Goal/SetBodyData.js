import React, { useState } from "react";
import { Card } from '../../components';

function SetBodyData(props) {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [calculated, setCal] = useState(false);

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
                <button onClick={() => setCal(true)}>
                    Calculate
                </button>
            </div>
            {calculated && (
                <MealPlan
                    age={age}
                    gender={gender}
                    weight={weight}
                    height={height}
                />
            )}
        </div>
    );
}

function MealPlan(props) {
    const rates = calculations(
        parseInt(props.age),
        props.gender.toUpperCase(),
        parseInt(props.weight),
        parseInt(props.height)
    );
    const foods = getFood();
    const proteinDescription1 = proteinsPercent(foods.protein['calories'], rates.breakfast, (foods.veg['calories'] + foods.grain['calories']));
    const proteinDescription2 = proteinsPercent(foods.protein2['calories'], rates.otherMeal, (foods.veg2['calories'] + foods.grain2['calories']));
    return (
        <div>
            <div className="border">
                <h3 className="text-white">Your metabolic rate: {rates.metabolicRate}</h3>
                <h3 className="text-white">Breakfast suggest calories: {rates.breakfast}</h3>
                <h3 className="text-white">Lunch and dinner suggest calories: {rates.otherMeal}</h3>
            </div>
            <h2>BURNOUT suggested meal plan</h2>
            <h3>Breakfast</h3>
            <div className="home__section">
                <Card
                    src={foods.veg['image']}
                    title={foods.veg['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={foods.grain['image']}
                    title={foods.grain['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={foods.protein['image']}
                    title={foods.protein['name']}
                    description={proteinDescription1}
                    disableClick
                />
            </div>
            <h3>Lunch and dinner</h3>
            <div className="home__section">
                <Card
                    src={foods.veg2['image']}
                    title={foods.veg2['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={foods.grain2['image']}
                    title={foods.grain2['name']}
                    description="Serving: 1"
                    disableClick
                />
                <Card
                    src={foods.protein2['image']}
                    title={foods.protein2['name']}
                    description={proteinDescription2}
                    disableClick
                />
            </div>
            <div className="enroll">
                <button onClick={() => console.log('>>>>>>>>')}>
                    Enroll with this meal plan
                </button>
            </div>
        </div>
    );
}

function calculations(age, gender, weight, height) {
    const metabolicRate = () => gender === "M"
        ? 66.47 + 13.7 * weight + 5 * height - 6.8 * age
        : 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;

    const breakfast = () => gender === "M"
        ? (66.47 + 13.7 * weight + 5 * height - 6.8 * age)/4
        : (655.1 + 9.6 * weight + 1.8 * height - 4.7 * age)/4;

    const otherMeal = () => gender === "M"
        ? (66.47 + 13.7*weight + 5*height - 6.8*age)*3/8
        : (655.1 + 9.6*weight + 1.8*height - 4.7*age)*3/8;

    return {
        metabolicRate: metabolicRate(),
        breakfast: breakfast(),
        otherMeal: otherMeal(),
    }
};

const proteinsPercent = (proteinCal, targetCal, consumedCal) => {
    const cal = (targetCal - consumedCal) / proteinCal;
    return `Serving: ${Math.round(cal * 100) / 100}`
}

function getFood() {
    const randomVeggie = () => {
        const vegArray = [{image: "/images/Green1.jpeg", name: "Arugula", calories: 80}, {image: "/images/Green2.jpeg", name: "Spinach", calories: 80}, {image: "/images/Green3.jpeg", name: "Romaine", calories: 80}, {image: "/images/Green4.jpeg", name: "Cress", calories: 80}]
        return vegArray[Math.floor(Math.random() * vegArray.length)];
    }

    const randomGrain = () => {
        const grainArray = [{image: "/images/Grain4.jpeg", name: "Saffron Basmati Rice", calories: 150}, {image: "/images/Grain3.jpeg", name: "Brown Basmati Rice", calories: 140}, {image: "/images/Grain2.jpeg", name: "Black Lentils", calories: 120}, {image: "/images/Grain1.jpeg", name: "RightRice", calories: 130}]
        return grainArray[Math.floor(Math.random() * grainArray.length)];
    }

    const randomProtein = () => {
        const proArray = [{image: "/images/Protein1.jpeg", name: "Chicken", calories: 260}, {image: "/images/Protein2.jpeg", name: "Beef", calories: 280}, {image: "/images/Protein3.jpeg", name: "Fish", calories: 250}, {image: "/images/Protein4.jpeg", name: "Pork", calories: 300}]
        return proArray[Math.floor(Math.random() * proArray.length)];
    }

    return {
        veg: randomVeggie(),
        grain: randomGrain(),
        protein: randomProtein(),
        veg2: randomVeggie(),
        grain2: randomGrain(),
        protein2: randomProtein(),
    }
}

export default SetBodyData;