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
import 'react-datepicker/dist/react-datepicker.css';
import {makeStyles} from '@material-ui/core/styles';
import Card1 from './Card1';
import Widgets from './Widgets.js';


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

    this.props.dispatch(editHistory(date.toString().slice(0,10),total,burnout,user._id))

  }

    
    
    render() {
        const { auth,results } = this.props;
        const { user } = this.props.auth;
        const { dispatch } = this.props;
        const {total} = this.props;
        // const overall = 0;
        const {error} = this.props.auth;
        
        
        return (
            <div>
                
           <div className="goal-form" style={{width:'600px',height:'400px',marginLeft:'100px'}} >
           <span className="login-signup-header">Today's Calories</span>
            {error && <div className="alert error-dailog">{error}</div>}
            <div className="field">
                <div style={{marginBottom:'-10px',color:'rgba(121, 121, 121)',marginTop:'30px',marginLeft:'3px',fontSize:'16px'}}>Select Date</div>
                 <DatePicker selected={this.state.date} onChange={date => this.setState({date})} minDate={new Date()} maxDate={new Date()} />
            </div>
            {/* <form className="login-form"> */}
            
            <div className="field">
            {/* <SearchIcon/> */}
          <input placeholder="Select Food" onChange={this.handleSearch} />
          {results.length > 0 && (
            <div className="search-results" style={{marginTop:'305px',width:'345px'}}>
              <ul>
                {results.slice(0,5).map((user) => (
                  <li className="search-results-row" key={user._id} onClick={this.clearSearch}>
                    
                    <div onClick={() => this.countTotal(user.Calories)}>
                    <span>{user.Food} ({user.Calories})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        

        <div className="field">
          {/* <div className="field-label">Burn Out</div> */}
                    
            {this.state.burnout > 0? (<input
              type="text"
              onChange={(e) => this.handleChange('burnout',e.target.value)}
              value={this.state.burnout}
              placeholder='Burn Out'
            />) : (<input
            type="text"
            onChange={(e) => this.handleChange('burnout',e.target.value)}
            value=''
            placeholder='Burn Out'
          />)}
            
          
          
        </div>
        
        <div className="field">
        <button className="button save-btn" onClick={this.handleSave} >Save</button>
        </div>
        

        </div>
        <div className="home__section" style={{width:'600px',marginLeft:'70px',marginTop:'-70px'}}>
                {/* <Card1 src="/images/R52.jpg" title="Summary" description=''/> */}
                <div className='card'>
            
                <div className="card__info" style={{width:'600px'}}>
                
                <h2>Calories Gain</h2><h4>{this.state.total}</h4>
                <h2>Calories Burnt</h2><h4>{this.state.burnout}</h4>
                <h2>Difference</h2><h4>{this.state.burnout.length > 0 && parseInt(this.state.total)-parseInt(this.state.burnout)}</h4>
                

            </div>

        </div>
        
        
                
                </div>
                
                <Widgets style={{marginTop:'1000px'}}/>
        
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