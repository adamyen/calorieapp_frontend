import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

function Card({src,title,description,price,url}){
    return (
        <div className='card' onClick={ ()=>{window.location.href=`/${url}`} }>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Card;