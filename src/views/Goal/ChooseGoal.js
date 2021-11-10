import React from "react";
import { connect } from 'react-redux';
import { Card } from '../../components';

function ChooseGoal(props) {
    return (
        <div>
            <div className="container">
                <Card src="/images/R11.jpg" title="Workout Planner" onClick={() => props.onClick(1)}/>
                <Card src="/images/R12.jpg" title="Meal Planner" onClick={() => props.onClick(2)}/>
            </div>
            {props.goals.length !== 0 && (
                <div className="container-col">
                    <h2>Goals</h2>
                    <div className="container">
                        {props.goals.map(g => {
                            const title = g.type === 'meal' ? 'Meal Plan' : 'Workout Plan';
                            const imgSrc = g.type === 'meal' ? '/images/Meal-Plan-2.jpeg' : '/images/R42.jpg';
                            return (
                                <Card
                                    title={title}
                                    src={imgSrc}
                                    url="/goal_detail"
                                    locationState={g.id}
                                    width={500}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    goals: state.goal,
});

export default connect(mapStateToProps)(ChooseGoal);