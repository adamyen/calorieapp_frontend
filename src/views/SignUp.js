import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { startSignUp, signup } from '../actions/auth';
import { Redirect } from 'react-router-dom';

function SignUp(props) {
  let history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFormSubmit = async () => {
    if (email && password && confirmPassword && username) {
      try {
        await props.dispatch(startSignUp());
        await props.dispatch(signup({ email, password, username }));
        history.push('/');
      } catch(e) {
        console.log('Error: ', e);
      }
    }
  };

  if (props.auth.isLoggedIn){
    return <Redirect to="/" />
  }

  return (
    <div>
      <form className="login-form">
        <span className="login-signup-header">Signup</span>
        {props.auth.error && <div className="alert error-dailog">{props.auth.error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password"
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <div className="field">
          <button onClick={onFormSubmit} disabled={props.auth.inProgress}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(SignUp);
