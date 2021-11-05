import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class MealPlanResult extends Component {
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        window.location.href=`/mealPlan`
    };

    metabolicRate = (age, gender, weight, height) => {
        if (gender === "M") {
            return 66.47 + 13.7*weight + 5*height - 6.8*age
        }
        return 655.1 + 9.6*weight + 1.8*height - 4.7*age
    };

    breakfast = (age, gender, weight, height) => {
        if (gender === "M") {
            return (66.47 + 13.7*weight + 5*height - 6.8*age)/4
        }
        return (655.1 + 9.6*weight + 1.8*height - 4.7*age)/4
    };

    otherMeal = (age, gender, weight, height) => {
        if (gender === "M") {
            return (66.47 + 13.7*weight + 5*height - 6.8*age)*3/8
        }
        return (655.1 + 9.6*weight + 1.8*height - 4.7*age)*3/8
    };

    randomVeggie() {
        const vegArray = [{image: "/images/Green1.jpeg", name: "Arugula", calories: 80}, {image: "/images/Green2.jpeg", name: "Spinach", calories: 80}, {image: "/images/Green3.jpeg", name: "Romaine", calories: 80}, {image: "/images/Green4.jpeg", name: "Cress", calories: 80}]
        return vegArray[Math.floor(Math.random() * vegArray.length)]
    }

    randomGrain() {
        const grainArray = [{image: "/images/Grain4.jpeg", name: "Saffron Basmati Rice", calories: 150}, {image: "/images/Grain3.jpeg", name: "Brown Basmati Rice", calories: 140}, {image: "/images/Grain2.jpeg", name: "Black Lentils", calories: 120}, {image: "/images/Grain1.jpeg", name: "RightRice", calories: 130}]
        return grainArray[Math.floor(Math.random() * grainArray.length)]
    }

    randomProtein() {
        const proArray = [{image: "/images/Protein1.jpeg", name: "Chicken", calories: 260}, {image: "/images/Protein2.jpeg", name: "Beef", calories: 280}, {image: "/images/Protein3.jpeg", name: "Fish", calories: 250}, {image: "/images/Protein4.jpeg", name: "Pork", calories: 300}]
        return proArray[Math.floor(Math.random() * proArray.length)]
    }

    protiensPercent = (protienCal, targetCal, consumedCal) => {
        const leftCal = targetCal - consumedCal
        return `Serving: ${leftCal/protienCal}`
    }

    render() {
        
        const search = this.props.location.search; // returns the URL query String
        const params = new URLSearchParams(search); 
        const age = params.get('age'); 
        const gender = params.get('gender'); 
        const weight = params.get('weight'); 
        const height = params.get('height');
        const veg = this.randomVeggie()
        const grain = this.randomGrain()
        const protein = this.randomProtein()
        const veg2 = this.randomVeggie()
        const grain2 = this.randomGrain()
        const protein2 = this.randomProtein()
        const breakfastCal = this.breakfast(age, gender, weight, height)
        const otherCal = this.otherMeal(age, gender, weight, height)

        return (
        <div>
            <form className="login-form">
            <span className="login-signup-header">Personal Data</span>
            <div className="field">
                <input
                type="text"
                placeholder="Age"
                required
                value={age}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Gender (M/F)"
                required
                value={gender}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Weight (kg)"
                required
                value={weight}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Height (cm)"
                required
                value={height}
                />
            </div>
            <div className="field">
                <button onClick={this.handleFormSubmit} disabled={false}>
                    Reset
                </button>
            </div>
            </form>
            <h1>Your metabolic rate:{this.metabolicRate(age, gender, weight, height)}</h1>
            <h1>Breakfast suggest calories:{breakfastCal}</h1>
            <h1>Lunch and dinner suggest calories:{otherCal}</h1>
            <h2>BURNOUT suggested meal plan</h2>
            <h3>Breakfast</h3>
            <div className="home__section">
                <Card src={veg['image']} title={veg['name']} description="Serving: 1"/>
                <Card src={grain['image']} title={grain['name']} description="Serving: 1"/>
                <Card src={protein['image']} title={protein['name']} description={this.protiensPercent(protein['calories'], breakfastCal, (veg['calories'] + grain['calories']))}/>
            </div>
            <h3>Lunch and dinner</h3>
            <div className="home__section">
                <Card src={veg2['image']} title={veg2['name']} description="Serving: 1"/>
                <Card src={grain2['image']} title={grain2['name']} description="Serving: 1"/>
                <Card src={protein2['image']} title={protein2['name']} description={this.protiensPercent(protein2['calories'], otherCal, (veg2['calories'] + grain2['calories']))}/>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps)(MealPlanResult);
