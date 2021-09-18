
import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

function mapStateToProps (state){

  return {

  }

}
export default connect(mapStateToProps)(App);

