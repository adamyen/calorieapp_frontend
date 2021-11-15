import React from "react";
import { Card } from '../../components';
import Workouts from '../../config/Workout';

function WorkoutPlan(props) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dailyWorkouts = days.map(() => {
        const i = Math.floor(Math.random() * Workouts.length);
        return Workouts[i];
    });
    const generateWorkouts = workouts => workouts.map((w, i) => (
        <div className="grid-container-col">
            <div className="grid-title">{days[i]}</div>
            <div className="grid-item">
                <Card
                    {...w}
                    disableClick={props.disableClick}
                />
            </div>
        </div>
    ));
    return (
        <div>
            <div className="grid-container">
                {generateWorkouts(props.workouts || dailyWorkouts)}
            </div>
            {props.enrollGoal && (
                <div className="enroll">
                    <button onClick={() => props.enrollGoal({ workouts: dailyWorkouts })}>
                        Enroll with this workout plan
                    </button>
                </div>
            )}
        </div>
    );
}

export default WorkoutPlan;
