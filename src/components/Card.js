import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

function Card(props){
    console.log('>>>> Card props', props)
    let history = useHistory();

    function handleClick() {
        if (props.disableClick) {
            return;
        }
        if (props.onClick) {
            props.onClick();
        } else {
            const url = props.url || '/workout';
            history.push(url, props.locationState);   
        }
    }

    return (
        <div
            className='card'
            onClick={handleClick}
            style={{width: props.width, height: props.height}}
        >
            <img src={props.src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                {props.description && (<h4>{props.description}</h4>)}
            </div>
        </div>
    )
}

export default Card;