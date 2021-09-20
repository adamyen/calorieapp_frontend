import React from 'react';
import {connect} from 'react-redux';
// import Home from './Home';

import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom';

import {Home, Page404,Navbar, Login,Signup} from './';
import PropTypes from 'prop-types';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        {/* <Home /> */}

      <Switch>
      <Route exact path ="/" render={(props) => {
          return <Home {...props}/>
        }}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/signup" component={Signup}/> 
        <Route component={Page404}/>

      </Switch>
        

      </div>
      </Router>
    );
  }
}

function mapStateToProps (state){

  return {

  }

}
export default connect(mapStateToProps)(App);

