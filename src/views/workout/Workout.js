import React from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import Whatshot from '@material-ui/icons/Whatshot';
import { addCalories } from '../../actions/calories';
import './Workout.css';

function Workout(props) {
    let history = useHistory();

    const opts = {
        height: '507',
        width: '832',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const workoutComplete = () => {
        props.addCalories(['burned', props.location.state.calories]);
        history.push('/history');
    }

    const { videoId, title, description, calories } = props.location.state;
    return (
        <div className="wrapper">
            <div className="container">
                <YouTube
                    videoId={videoId || 'v7AYKMP6rOE'}
                    opts={opts}
                    onReady={_onReady}
                />
            </div>
            <div className="container-col">
                <h2>{title}</h2>
                <div className="container">
                    <Whatshot fontSize="large" style={{fill: 'red'}}/>
                    <h3 className="h3-color">{`${calories} Calories`}</h3>
                </div>
                <h4>{description}</h4>
                <button className="btn" onClick={workoutComplete}>
                    Workout Completed
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addCalories: c => dispatch(addCalories(c))
});

export default connect(null, mapDispatchToProps)(Workout);
