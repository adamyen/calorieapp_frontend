import React from "react";
import { Card } from '../../components';

function ChooseGoal(props) {
    return (
        <div className="container">
            <Card src="/images/R11.jpg" title="Gain Muscle" onClick={() => props.onClick(1)}/>
            <Card src="/images/R12.jpg" title="Lose Weight" onClick={() => props.onClick(2)}/>
        </div>
    );
}

export default ChooseGoal;