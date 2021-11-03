import React, { Component } from 'react';
import ImgSlider from './ImgSlider';
import Widgets from './Widgets';
import Card from './Card';
import {Itembox} from './';


class Home extends Component {
    render() {
        return (
            <div>
                <ImgSlider />
                {/* <Widgets /> */}
                <div className="f6-display">
                    <Card src="/images/R11.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                    <Card src="/images/R12.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                    <Card src="/images/R13.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                </div>
                <div className="f6-display">
                <Card src="/images/R21.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                <Card src="/images/R22.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                <Card src="/images/R23.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                </div>

                <div className="body__infoText2">
                <h2>5 Must Try Workouts</h2>
                <div className="f6-display">
       
                <Itembox src="/images/R21.jpg" title="Walk Fitness" />
                <Itembox src="/images/R22.jpg" title="Dance Fitness"/>
                <Itembox src="/images/R23.jpg" title="HRX"/>
                <Itembox src="/images/R24.jpg" title="Yoga"/>
                
            
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