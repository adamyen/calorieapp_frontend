import React from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MealPlan from "./MealPlan";
import WorkoutPlan from "./WorkoutPlan";
import { addCalories } from '../../actions/calories';

function Details(props) {
    let history = useHistory();
    const consumedCalories = cal => {
        props.addCalories(['consumed', cal]);
        history.push('/history');
    }
    
    const component = props.goal.type === 'meal'
        ? (<MealPlan {...props.goal} consumedCalories={consumedCalories}/>)
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

const mapDispatchToProps = dispatch => ({
    addCalories: c => dispatch(addCalories(c))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
