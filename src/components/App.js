import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';

import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {Navbar} from './Navbar';

const Login = () => {
  return(<div>
    Login
  </div>)
    
  
}

const SignUp = () => {
  return (
  <div>
    SignUp
  </div>)
}


class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Home /> */}

        <ul>
          <li>
            <Link to="/">Home
            </Link>
          </li>
          <li>
            <Link to="/login">Login
            </Link>
          </li>
          <li>
            <Link to="/signup">SignUp
            </Link>
          </li>
        </ul>

        <Route exact path ="/" component={Home}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/signup" component={SignUp}/>

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

