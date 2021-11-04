import React,{ Component } from 'react';
import YouTube from 'react-youtube';

class HRX extends Component {
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
            <h1> HRX 101 </h1>
            <h4>
                HRX Workout is based on a strength training module. 
                It is designed keeping in mind all age groups and involves working on specific 
                muscles using weights and various movements. <br></br>
                Try this 30 min HRX Workout with Cult Fit to start burning some fat!
            </h4>
            <br></br>
            <YouTube videoId="zu1ALQbKU18" opts={opts} onReady={this._onReady} />
        </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default HRX