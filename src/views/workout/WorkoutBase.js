import React from "react";
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './Workout.css';

function WorkoutBase(props) {
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

    return (
        <div class="wrapper">
            <div class="container">
                <YouTube
                    videoId={props.videoId || 'v7AYKMP6rOE'}
                    opts={opts}
                    onReady={_onReady}
                />
            </div>
            <div class="container-col">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
            </div>
        </div>
    );
}

export default WorkoutBase;

WorkoutBase.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

WorkoutBase.defaultProps = {
    title: 'Yoga for beginners',
    description: "Yoga is a vast collection of spiritual techniques and practices aimed at integrating mind, body, and spirit to achieve a state of enlightenment or oneness with the universe. What is normally thought of as “yoga” in the West is really Hatha Yoga, one of the many paths of yoga. The different paths of yoga emphasize different approaches and techniques but ultimately lead to the same goal of unification and enlightenment. Hatha Yoga attains the union of mind-body-spirit through a practice of asanas (yoga postures), pranayama (yoga breathing), mudra (body gestures), and shatkarma (internal cleansing). These physical practices are used to purify the body and cultivate prana (life-force energy). Modern Hatha Yoga does not emphasize many of these esoteric practices and instead focuses more on the physical yoga postures. Regardless of what your goals or intentions are for starting, just the yoga poses themselves is a fantastic form of mental and physical exercise."
}