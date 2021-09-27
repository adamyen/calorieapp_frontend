import React from 'react';
import './Card.css';

function Card1({src,title,description,price}){
    return (
        <div className='card'>
            
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                

            </div>

        </div>
    )
}

export default Card1;