import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

function Card(props){
    let history = useHistory();

    function handleClick() {
        history.push("/yoga");
    }

    return (
        <div
            className='card'
            onClick={handleClick}
        >
            <img src={props.src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Card;