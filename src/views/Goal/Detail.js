import React from "react";
import { connect } from 'react-redux';
import MealPlan from "./MealPlan";
import WorkoutPlan from "./WorkoutPlan";

function Details(props) {
    const component = props.goal.type === 'meal'
        ? (<MealPlan {...props.goal}/>)
        : (<WorkoutPlan {...props.goal}/>)
    return (
        <div className="container-col">
            {component}
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    goal: state.goal.find(g => g.id === props.location.state),
});

export default connect(mapStateToProps)(Details);
