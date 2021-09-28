import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import {getHistory,clearHistoryState} from '../actions/history';
import Widgets1 from './Widgets.js'

class History extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          date:'',
          checker:0
          
        };
      }
    handleSave = () => {

        const {date} = this.state;
        const {checker} = this.state
    
        const {user} = this.props.auth;
        const {history} = this.props.history;
        

        // const {history} = this.props.history
    
        this.props.dispatch(getHistory(date.toString().slice(0,10),user._id))

        this.setState({
            checker:1
        })
        
    
      }

    componentWillUnmount(){
        this.props.dispatch(clearHistoryState([],0,0))
    }
    
    render() {
        const {history} = this.props.history;
        const {error} = this.props.auth;
        const {caloriesgain} = this.props.history;
        const {caloriesburn} = this.props.history;
        return (
            <div>
                <div className="goal-form" style={{width:'600px',height:'250px',marginLeft:'100px'}} >
                <span className="goal-signup-header">History</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field2">
                    <div style={{marginBottom:'-10px',color:'rgba(121, 121, 121)',marginTop:'30px',marginLeft:'3px',fontSize:'16px'}}>Select Date</div>
                        <DatePicker selected={this.state.date} onChange={date => this.setState({date})} maxDate={new Date()}/>
                    </div>
                    <div className="field">
                        <button className="button save-btn" onClick={this.handleSave} >Check</button>
                    </div>
                <div>
            
                </div>
       
            
            
        
        </div> 
   
    <div className="home__section" style={{width:'600px',marginLeft:'70px',marginTop:'-70px'}}>
        <div className='card'>
            
            <div className="card__info" style={{width:'600px'}}>
            
            <h2>Date</h2><h4>{this.state.date.toString().slice(0,10)}</h4>
            <h2>Calories Gain</h2><h4>{caloriesgain}</h4>
            <h2>Calories Burn</h2><h4>{caloriesburn}</h4>
            
            
            
            </div>

        </div>
    </div>
    
        <Widgets1 style={{marginTop:'1000px'}}/>
    </div>

           
        );
    }
}
function mapStateToProps(state) {
    return {
      auth: state.auth,
      history:state.history

      
    };
  }
  
  export default connect(mapStateToProps)(History);