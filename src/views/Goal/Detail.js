import React from "react";
import { connect } from 'react-redux';
import MealPlan from "./MealPlan";

function Details(props) {
    return (
        <div className="container-col">
            <MealPlan {...props.goal}/>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    goal: state.goal.find(g => g.id === props.location.state),
});

export default connect(mapStateToProps)(Details);
