import React from 'react';
import { Itembox, Card } from '../components';
import YogaClasses from '../config/Yoga';
import Workouts from '../config/Workout';

class Home extends React.PureComponent {
    render() {
        return (
            <div className="base">
                <div className="home__section">
                    <Card src="/images/Meal-Plan.jpeg" title="Customize Meal Plan" description="Your personal meal plan will be designed by our professional trainer." url="mealPlan"/>
                    {YogaClasses.map(props => (<Card {...props} />))}
                </div>
                <div className="body__infoText2">
                    <h2>Must Try Workouts</h2>
                    <div className="f6-display">
                        {Workouts.map(w => (<Itembox {...w} />))}
                    </div>
                </div>
                <div className="body__infoText2">
                    <h2>Belly Burn Workouts</h2>
                    <div className="f6-display">
                        <Itembox src="/images/R31.jpg" title="Abs Smash" />
                        <Itembox src="/images/R32.jpg" title="Core Conditioning"/>
                        <Itembox src="/images/R33.jpg" title="HIIT: Belly Burn"/>
                        <Itembox src="/images/R34.jpg" title="Fit 30: Belly Burn"/>
                    </div>
                </div>
                <div className="body__infoText2">
                    <h2>Workouts by Trainer</h2>
                    <div className="f6-display">
                        <Itembox src="/images/R41.jpg" title="HIIT with Olivia" />
                        <Itembox src="/images/R42.jpg" title="Groove with Tom"/>
                        <Itembox src="/images/R43.jpg" title="Daily Yoga with Anil"/>
                        <Itembox src="/images/R44.jpg" title="Dance with Simran"/>
                    </div>
                </div>
                <div className="body__infoText2">
                    <h2>Dance & Burn Calories</h2>
                    <div className="f6-display">
       
                        <Itembox src="/images/R51.jpg" title="Cardio Tone & Dance" />
                        <Itembox src="/images/R52.jpg" title="Dance: Bolly Punjabi"/>
                        <Itembox src="/images/R53.jpg" title="Beginner Cardio Dance"/>
                        <Itembox src="/images/R54.jpg" title="Dance for Joy #6"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
