import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
    Page404,
    Navbar,
    Login,
    Signup,
    Settings,
    MealPlan,
    MealPlanResult,
} from './components';
import { Home, History, Workout, GoalSetting, GoalDetail } from './views';
import { authenticateUser } from './actions/auth';
import { getAuthTokenFromLocalStorage } from './helpers/utils';

const PrivateRoute = (privateRouteProps) => {
    const { isLoggedIn, path, component: Component } = privateRouteProps;
    const renderPage = props => isLoggedIn
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }}/>);
    return (
        <Route path={path} render={renderPage} />
    );
};

class App extends React.PureComponent {
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
    const { isLoggedIn } = this.props.auth;
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path ="/login" component={Login}/>
                <Route path ="/signup" component={Signup}/> 
                <Route path ="/mealPlan" component={MealPlan}/>
                <Route path ="/mealPlanResult" component={MealPlanResult}/>
                <Route path ="/workout" component={Workout}/>

                <PrivateRoute
                    path="/settings"
                    component={Settings}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/goal"
                    component={GoalSetting}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/goal_detail"
                    component={GoalDetail}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/history"
                    component={History}
                    isLoggedIn={isLoggedIn}
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
