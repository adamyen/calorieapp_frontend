import React from 'react';
import {connect} from 'react-redux';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
    Page404,
    Navbar,
    Login,
    Signup,
    Settings,
    Goal,
    History,
    MealPlan,
    MealPlanResult,
    WalkFitness,
    DanceFitness,
    HRX,
} from './components';
import { Home } from './views';
import { Workout } from './views/workout';
import { authenticateUser } from './actions/auth';
import { getAuthTokenFromLocalStorage } from './helpers/utils';

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
            <Navbar />
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path ="/login" component={Login}/>
                <Route path ="/signup" component={Signup}/> 
                <Route path ="/mealPlan" component={MealPlan}/>
                <Route path ="/mealPlanResult" component={MealPlanResult}/>
                <Route path ="/walkfitness" component={WalkFitness}/>
                <Route path ="/dancefitness" component={DanceFitness}/>
                <Route path ="/hrx" component={HRX}/>
                <Route path ="/yoga" component={Workout}/>

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
