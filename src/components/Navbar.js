import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { logoutUser } from '../actions/auth';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  render() {
    const { auth } = this.props;

    return (
      
      <nav className="header">
        <div className="header__left" style={{display:'flex',justifyContent:'space-evenly'}}>
          <Link to="/">
            <img
              alt="logo"
              src="/images/burnlogo2.jpeg"
              style={{height:'50px'}}
            />
          </Link>
        </div>
        {auth.isLoggedIn &&
        <div className="header__middle" style={{marginLeft:'70px'}}>
          <div className="header__option ">
            <Link to="/">
            <HomeIcon fontSize="large"/>
            </Link>
          </div>
          <div className="header__option ">
            <Link to="/goal">
            <FlagIcon fontSize="large"/>
            </Link>
          </div>
           <div className="header__option ">
             <Link to="/history">
            <SubscriptionsOutlinedIcon fontSize="large"/>
            </Link>
          </div>
         </div> }
        <div className="header__right">
        <div className="header__info">

          <div className="nav-links" >
            <ul>
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/login" style={{color:'gray',marginLeft:'10px',fontWeight:'bolder'}}>Login</Link>
                </li>
              )} 
              
              {auth.isLoggedIn && 
              <li onClick={this.logOut} style={{color:'gray',marginLeft:'0px',fontWeight:'bolder'}}>Logout</li> 
               }
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/signup" style={{color:'gray',marginLeft:'10px', marginRight: '10px',fontWeight:'bolder'}} >Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        </div>
      </nav>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);


