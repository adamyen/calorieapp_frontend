import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { searchUsers } from '../actions/search';

class Goal extends Component {
    handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText)
         
        this.props.dispatch(searchUsers(searchText));
        
      };
    

    render() {
        const { auth,results } = this.props;
        
        return (
            <div>
            <div>
                {auth.user.name}
               
            </div>
            <div>
                 {auth.user.height}
            </div>

            <div className="header__input">
            <SearchIcon/>
          <input placeholder="Search" onChange={this.handleSearch} style={{border:'none',backgroundColor:'transparent',outlineWidth:'0',width:'500px'}}/>
          {results.length > 0 && (
            <div className="search-results" style={{marginTop:'90px'}}>
              <ul>
                {results.slice(0,5).map((user) => (
                  <li className="search-results-row" key={user._id}>
                    <Link to={`/user/${user._id}`}>
                    
                    <span>{user.Food}.......{user.Calories}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
           
        );
    }
}



function mapStateToProps(state) {
    return {
      auth: state.auth,
      results: state.search.results,
    };
  }
  
  export default connect(mapStateToProps)(Goal);