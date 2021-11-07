import React from 'react';
import { useHistory } from 'react-router-dom';
import './Itembox.css';

function Itembox(props) {
    let history = useHistory();
    function handleClick() {
        const url = props.url || '/yoga';
        history.push(url);
    }
    
    return (
        <div onClick={handleClick}>
            <figure className="f6-song-img-2">
            <img className="songbox__img" src={props.src} alt="" />
                <figcaption>
                    <h4 className="caption-name" style={{color:'black'}}>{props.title}</h4>
                </figcaption>
            </figure>
        </div>
    )
}

export default Itembox;