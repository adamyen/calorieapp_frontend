import React, { Component } from 'react';
import {Itembox} from './';
class Yoga extends Component {
    render() {
        return (
            <div style={{position:"fixed",left: '50%',transform: 'translate(-50%)',textAlign:"center"}}>
                <h1>Different Levels Of Yoga</h1>
                <div className="f6-display">
       
                    <Itembox src="/images/R11.jpg" title="Yoga for Beginner" />
                    <Itembox src="/images/R12.jpg" title="Yoga for Intermediate" />
                    <Itembox src="/images/R13.jpg" title="Yoga for Advanced"/>
                
                </div>
            </div>
        )
    }
}

export default Yoga