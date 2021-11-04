import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class MealPlan extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        age: '',
        gender: '',
        weight: '',
        height: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        window.location.href=`/mealPlanResult?age=${this.state.age}&gender=${this.state.gender}&weight=${this.state.weight}&height=${this.state.height}`
    };


    handleAgeChange = (e) => {
        this.setState({
        age: e.target.value,
        });
    };
    handleGenderChange = (e) => {
        this.setState({
        gender: e.target.value,
        });
    };
    handleWeightChange = (e) => {
        this.setState({
        weight: e.target.value,
        });
    };
    handleHeightChange = (e) => {
        this.setState({
        height: e.target.value,
        });
    };
    
    render() {
        return (
        <div>
            <form className="login-form">
            <span className="login-signup-header">Personal Data</span>
            <div className="field">
                <input
                type="text"
                placeholder="Age"
                required
                onChange={this.handleAgeChange}
                value={this.state.age}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Gender (M/F)"
                required
                onChange={this.handleGenderChange}
                value={this.state.gender}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Weight (kg)"
                required
                onChange={this.handleWeightChange}
                value={this.state.weight}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Height (cm)"
                required
                onChange={this.handleHeightChange}
                value={this.state.height}
                />
            </div>
            <div className="field">
                <button onClick={this.handleFormSubmit} disabled={false}>
                    Calculate
                </button>
            </div>
            </form>
            <h1>Calories Chart</h1>
            <h1>_____________________________________________________________________________________</h1>
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
export default connect(mapStateToProps)(MealPlan);
