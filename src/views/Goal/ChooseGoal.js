import React from "react";
import { connect } from 'react-redux';
import { Card } from '../../components';

function ChooseGoal(props) {
    return (
        <div>
            <div className="container">
                <Card src="/images/R11.jpg" title="Gain Muscle" onClick={() => props.onClick(1)}/>
                <Card src="/images/R12.jpg" title="Lose Weight" onClick={() => props.onClick(2)}/>
            </div>
            {props.goal.length !== 0 && (
                <div className="container-col">
                    <h2>Goals</h2>
                    <div className="container">
                        {props.goal.map(g => {
                            const title = g.type === 'meal' ? 'Meal Plan' : 'Workout Plan';
                            const imgSrc = g.type === 'meal' ? '/images/Meal-Plan.jpeg' : '/images/R43.jpg';
                            return (
                                <Card
                                    title={title}
                                    src={imgSrc}
                                    url="/goal_detail"
                                    locationState={g.id}
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
    ...state
});

export default connect(mapStateToProps)(ChooseGoal);