import React,{ Component } from 'react';
import YouTube from 'react-youtube';

class DanceFitness extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
        <div style={{position:"fixed",top: '50%',left: '50%',transform: 'translate(-50%,-50%)',textAlign:"center"}}>
            <h1> WalkFitness 101 </h1>
            <h4>
                If you are looking for something more intense, Dance Fitness is a great choice! <br></br>
                Dance fitness is a type of exercise class that incorporates some or many forms of dance.<br></br>
                Try this 15 min Dance Fitness Workout with Pamela to start burning some fat!
            </h4>
            <br></br>
            <YouTube videoId="Cw-Wt4xKD2s" opts={opts} onReady={this._onReady} />
        </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default DanceFitness