import React, { Component } from 'react';
import { connect } from 'react-redux';
import {clearAuthState, editUser} from '../actions/auth'

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '',
      weight:'',
      goal:'',
      target:'',
      editMode: false,
    };
  }

  handleChange = (fieldName,val) => {

    this.setState({
        [fieldName]: val
    })

  }
  
  handleSave = () => {

    const {height, weight, goal, target} = this.state;

    const {user} = this.props.auth;

    this.props.dispatch(editUser(height,weight,goal,target,user._id))

  }

  componentWillUnmount(){
      this.props.dispatch(clearAuthState())
  }

  render() {
    const { user,error } = this.props.auth;
    const { editMode } = this.state;
    console.log('wewewwewew',user.weight)

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error ===false && <div className="alert success-dailog">Successfully Updated Profile</div>}

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

         <div className="field">
          <div className="field-label">Name</div>
          
            <div className="field-value">{user.name}</div>
          
        </div>

        <div className="field">
          <div className="field-label">Height</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('height',e.target.value)}
              value={this.state.height}
            />
          ) : (
            <div className="field-value">{user.height}</div>
          )}
        </div>

        <div className="field">
          <div className="field-label">Weight</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('weight',e.target.value)}
              value={this.state.weight}
            />
          ) : (
            
            <div className="field-value">{user.weight}</div>
          )}
        </div>

        <div className="field">
          <div className="field-label">Goal</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('goal',e.target.value)}
              value={this.state.goal}
            />
          ) : (
            
            <div className="field-value">{user.goal}</div>
          )}
        </div>

        <div className="field">
          <div className="field-label">Target Weight</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('target',e.target.value)}
              value={this.state.target}
            />
          ) : (
            
            <div className="field-value">{user.target}</div>
          )}
        </div>


        {/* {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('password',e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('confirmPassword',e.target.value)}
              value={this.state.confirmPassword}
            />
          </div>
        )} */}

        <div className="btn-grp">
            {editMode ? <button className="button save-btn" onClick={this.handleSave} >Save</button> :
            <button className="button edit-btn" onClick={() => this.handleChange('editMode',true)}>Edit Profile</button> }
        </div>

        {editMode && <div className="go-back" onClick={() => this.handleChange('editMode',false)}>
            Go Back</div>}

       
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Settings);
