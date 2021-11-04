import React from 'react';
import './Card.css';

function Card({src,title,description,price,url}){
    return (
        <div className='card' onClick={ ()=>{window.location.href=`/${url}`} }>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                {/* <h3>{}</h3> */}

            </div>



        </div>
    )
}

export default Card;