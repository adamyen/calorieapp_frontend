import React from 'react';
import {connect} from 'react-redux';
// import Home from './Home';

import jwtDecode from 'jwt-decode';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {Home, Page404,Navbar, Login,Signup,Settings,Goal,History} from './';
import { WorkoutBase } from '../views/workout';
import {authenticateUser} from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';


const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};



class App extends React.Component {

  componentDidMount() {
    
    const token = getAuthTokenFromLocalStorage();

    if (token) {
      const user = jwtDecode(token);

      console.log('user', user);

      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
        
          <Navbar />

        <Switch>
          <Route exact path ="/" render={(props) => (<Home {...props}/>)}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/yoga" component={WorkoutBase} />
            <PrivateRoute
                  path="/settings"
                  component={Settings}
                  isLoggedIn={this.props.auth.isLoggedIn}
            />
            <PrivateRoute
                  path="/goal"
                  component={Goal}
                  isLoggedIn={this.props.auth.isLoggedIn}
            />
            <PrivateRoute
                  path="/history"
                  component={History}
                  isLoggedIn={this.props.auth.isLoggedIn}
            />
          <Route component={Page404}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps (state){
  return {
    auth: state.auth,
    profile:state.profile
  }
}
export default connect(mapStateToProps)(App);

