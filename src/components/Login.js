import React, { Component } from 'react';
import { clearAuthState, login ,loginGoogle} from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState())
  }
  

  handleEmailChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username && password) {
      this.props.dispatch(login(username, password));
    }
  };

  render() {

    const {error, inProgress, isLoggedIn} = this.props.auth;
    const {from} = this.props.location.state || {from : {pathname:'/'}};

    if (isLoggedIn){
      return <Redirect to={from} />
    }

    return (
      <div>
      <form className="login-form">
        <span className="login-signup-header">Login</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            required
            onChange={this.handleEmailChange}
            value={this.state.username}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ?
          <button onClick={this.handleFormSubmit} disabled={inProgress}>Logging in...</button>:
          <button onClick={this.handleFormSubmit} disabled={inProgress}>Log In</button>
          }
          
        </div>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Login);
