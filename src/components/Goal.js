import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { searchUsers } from '../actions/search';
// import {clearAuthState} from '../actions/auth';
import {clearsearchstate} from '../actions/search';
import { editHistory } from '../actions/history';
import {addTotal} from '../actions/food';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

class Goal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          date:'',
          burnin: '',
          burnout:0,
          total:0,
          editMode: false,
        };
      }
    

    handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText)
         
        this.props.dispatch(searchUsers(searchText));
        
      };

   

    countTotal = (calories) => {
        
        const { user } = this.props.auth;
        const { dispatch } = this.props;
        const {total} = this.state
        

        dispatch(addTotal(parseInt(calories)+parseInt(total)));
        this.setState({
            total:parseInt(calories)+parseInt(total)
        })

        console.log(this.state.date)
        
        // dispatch(addLike(commentId, 'Comment', user._id,postId));
        

    }


    clearSearch = () => {
        this.props.dispatch(clearsearchstate([]))
        console.log("UNMOUNT")

    }

    handleChange = (fieldName,val) => {

        this.setState({
            [fieldName]: val
        })

        console.log(this.state.burnout)
    
      }

    
  handleSave = () => {

    const {date,total,burnout} = this.state;

    const {user} = this.props.auth;

    this.props.dispatch(editHistory(date.toString().slice(0,10).split(' '),total,burnout,user._id))

  }

    
    
    render() {
        const { auth,results } = this.props;
        const { user } = this.props.auth;
        const { dispatch } = this.props;
        const {total} = this.props;
        // const overall = 0;
        
        
        return (
            <div>
            <div>
                {auth.user.name}
               
            </div>
            <div>
                 <DatePicker selected={this.state.date} onChange={date => this.setState({date})} minDate={new Date()} maxDate={new Date()}/>
            </div>
            {/* <form className="login-form"> */}
            <div className="header__input">
            <SearchIcon/>
          <input placeholder="Search" onChange={this.handleSearch} style={{border:'none',backgroundColor:'transparent',outlineWidth:'0',width:'500px'}}/>
          {results.length > 0 && (
            <div className="search-results" style={{marginTop:'90px'}}>
              <ul>
                {results.slice(0,5).map((user) => (
                  <li className="search-results-row" key={user._id} onClick={this.clearSearch}>
                    
                    <div onClick={() => this.countTotal(user.Calories)}>
                    <span>{user.Food}.......{user.Calories}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="field">
          <div className="field-label">Burn Out</div>
          
            <input
              type="text"
              onChange={(e) => this.handleChange('burnout',e.target.value)}
              value={this.state.burnout}
            />
          
          
        </div>

        <div className="btn-grp">
        <button className="button save-btn" onClick={this.handleSave} >Save</button>
        </div>
        
        <div style={{marginTop:'300px'}}>
            
            Total Intake......{this.state.total}
        </div>
        <div>
            
            Date......{this.state.date.toString().slice(0,10).split(' ')}
        </div>
        <div>
            Total BurnOut......{this.state.burnout}

                </div>
            <div>
                Difference........{this.state.burnout.length > 0 && parseInt(this.state.total)-parseInt(this.state.burnout)}
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