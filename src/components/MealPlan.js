import React, { Component } from 'react';
import { clearAuthState, login, loginGoogle } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from './Card';
// import GoogleLogin from 'react-google-login';

class MealPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email: '',
        password: '',
        };
    }

    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }

    handleEmailChange = (e) => {
        this.setState({
        email: e.target.value,
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
        password: e.target.value,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log('this.emailInputRef', this.emailInputRef);
        //console.log('this.passwordInputRef', this.passwordInputRef);
        console.log(this.state);
        const { email, password } = this.state;

        if (email && password) {
        this.props.dispatch(login(email, password));
        }
    };

    render() {
        const { error, inProgress, isLoggedIn } = this.props.auth;
        const { from } = this.props.location.state || { from: { pathname: '/' } };

        if (isLoggedIn) {
        return <Redirect to={from} />;
        }

        return (
        <div>
            <form className="login-form">
            <span className="login-signup-header">Personal Data</span>
            <div className="field">
                <input
                type="text"
                placeholder="Age"
                required
                onChange={this.handleEmailChange}
                value={this.state.email}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Gender (M/F)"
                required
                onChange={this.handlePasswordChange}
                value={this.state.password}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Weight (kg)"
                required

                onChange={this.handlePasswordChange}
                value={this.state.password}
                />
            </div>
            <div className="field">
                <input
                type="text"
                placeholder="Height (cm)"
                required
                onChange={this.handlePasswordChange}
                value={this.state.password}
                />
            </div>
            <div className="field">
                {inProgress ? (
                <button onClick={this.handleFormSubmit} disabled={inProgress}>
                    Setting up your personal meal plan...
                </button>
                ) : (
                <button onClick={this.handleFormSubmit} disabled={inProgress}>
                    Save
                </button>
                )}
            </div>
            </form>
            <h2>Common Grains</h2>
            <div className="home__section">
                <Card src="/images/Grain4.jpeg" title="Saffron Basmati Rice" description="Calories: 150"/>
                <Card src="/images/Grain3.jpeg" title="Brown Basmati Rice" description="Calories: 140"/>
                <Card src="/images/Grain2.jpeg" title="Black Lentils" description="Calories: 120"/>
                <Card src="/images/Grain1.jpeg" title="RightRice" description="Calories: 130"/>
            </div>

            <h2>Common Veggies</h2>
            <div className="home__section">
                <Card src="/images/Green1.jpeg" title="Arugula" description="Calories: 80"/>
                <Card src="/images/Green2.jpeg" title="Spinach" description="Calories: 80"/>
                <Card src="/images/Green3.jpeg" title="Romaine" description="Calories: 80"/>
                <Card src="/images/Green4.jpeg" title="Cress" description="Calories: 80"/>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps)(MealPlan);
