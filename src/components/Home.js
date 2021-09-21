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
                <div className="home__section">
                    <Card src="/images/R54.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                    <Card src="/images/R54.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                    <Card src="/images/R54.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                </div>
                <div className="home__section">
                <Card src="/images/R52.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                <Card src="/images/R52.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                <Card src="/images/R52.jpg" title="Yoga for Beginners" description="A collection of dumbbell workouts by your favorite trainers specific to particular muscle group."/>
                </div>

                <div className="body__infoText2">
                <h2>Latest Releases</h2>
                <div className="f6-display">
       
                <Itembox/>
                <Itembox/>
                <Itembox/>
                <Itembox/>
                
            
                 </div>

                </div>
                <div className="body__infoText2">
                <h2>Latest Releases</h2>
                <div className="f6-display">
       
                <Itembox/>
                <Itembox/>
                <Itembox/>
                <Itembox/>
                
            
                 </div>

                </div>
                <div className="body__infoText2">
                <h2>Latest Releases</h2>
                <div className="f6-display">
       
                <Itembox/>
                <Itembox/>
                <Itembox/>
                <Itembox/>
                
            
                 </div>

                </div>
                <div className="body__infoText2">
                <h2>Latest Releases</h2>
                <div className="f6-display">
       
                <Itembox/>
                <Itembox/>
                <Itembox/>
                <Itembox/>
                
            
                 </div>

                </div>

                <div className="body__infoText2">
                <h2>Latest Releases</h2>
                <div className="f6-display">
       
                <Itembox/>
                <Itembox/>
                <Itembox/>
                <Itembox/>
                
            
                 </div>

                </div>

                <div className="body__infoText2">
                <h2>Latest Releases</h2>
                <div className="f6-display">
       
                <Itembox/>
                <Itembox/>
                <Itembox/>
                <Itembox/>
                
            
                 </div>

                </div>
        </div>

            

            
        );
    }
}

export default Home;