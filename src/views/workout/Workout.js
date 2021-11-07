import React from "react";
import YouTube from 'react-youtube';
import './Workout.css';

function Workout(props) {
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

    const { videoId, title, description } = props.location.state;
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
                <h4>{description}</h4>
            </div>
        </div>
    );
}

export default Workout;
