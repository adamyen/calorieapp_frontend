import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './Card.css';

function Card(props){
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
                <div className="flex-row">
                    <h3>{props.title}</h3>
                    {props.check && (<CheckCircleIcon />)}
                </div>
                {props.description && (<h4>{props.description}</h4>)}
            </div>
        </div>
    )
}

Card.propTypes = {
    disableClick: PropTypes.bool,
    onClick: PropTypes.func,
    url: PropTypes.string,
    src: PropTypes.string,
    locationState: PropTypes.shape({}),
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    check: PropTypes.bool,
    description: PropTypes.string,
}

export default Card;
