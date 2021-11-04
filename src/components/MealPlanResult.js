import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
// import GoogleLogin from 'react-google-login';

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

    render() {
        
        const search = this.props.location.search; // returns the URL query String
        const params = new URLSearchParams(search); 
        const age = params.get('age'); 
        const gender = params.get('gender'); 
        const weight = params.get('weight'); 
        const height = params.get('height'); 

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
            <h2>Common Grains</h2>
            <div className="home__section">
                <Card src="/images/Grain4.jpeg" title="Saffron Basmati Rice" description="Calories: 150"/>
                <Card src="/images/Grain3.jpeg" title="Brown Basmati Rice" description="Calories: 140"/>
                <Card src="/images/Grain2.jpeg" title="Black Lentils" description="Calories: 120"/>
                <Card src="/images/Grain1.jpeg" title="RightRice" description="Calories: 130"/>
            </div>

            <h2>Common Veggies</h2>
            <div className="home__section">
                <Card src="/images/Green1.jpeg" title="Arugula" description="Calories: 80"/>
                <Card src="/images/Green2.jpeg" title="Spinach" description="Calories: 80"/>
                <Card src="/images/Green3.jpeg" title="Romaine" description="Calories: 80"/>
                <Card src="/images/Green4.jpeg" title="Cress" description="Calories: 80"/>
            </div>

            <h2>Common Proteins</h2>
            <div className="home__section">
                <Card src="/images/Protein1.jpeg" title="Chicken" description="Calories: 260"/>
                <Card src="/images/Protein2.jpeg" title="Beef" description="Calories: 280"/>
                <Card src="/images/Protein3.jpeg" title="Fish" description="Calories: 250"/>
                <Card src="/images/Protein4.jpeg" title="Pork" description="Calories: 300"/>
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
