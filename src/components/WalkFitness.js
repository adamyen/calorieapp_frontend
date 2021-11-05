import React,{ Component } from 'react';
import YouTube from 'react-youtube';

class WalkFitness extends Component {
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
                Walking is a great way to improve or maintain your overall health.<br></br>
                Try this 20 min indoor fat burning workout with growwithjo to start burning some fat!
            </h4>
            <br></br>
            <YouTube videoId="nmNCH-Ueq8E" opts={opts} onReady={this._onReady} />
        </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default WalkFitness