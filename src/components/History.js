import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import {getHistory,clearHistoryState} from '../actions/history';
import Widgets1 from './Widgets1.js'

class History extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          date:''
        };
      }
    handleSave = () => {

        const {date} = this.state;
    
        const {user} = this.props.auth;
        

        // const {history} = this.props.history
    
        this.props.dispatch(getHistory(date.toString().slice(0,10),user._id))
    
      }

    componentWillUnmount(){
        this.props.dispatch(clearHistoryState())
    }
    
    render() {
        const {history} = this.props.history;
        return (
            <div>
                This is History
                <div>
                 <DatePicker selected={this.state.date} onChange={date => this.setState({date})} maxDate={new Date()}/>
                </div>
                <div className="btn-grp">
        <button className="button save-btn" onClick={this.handleSave} >Check</button>
        </div>
        <div>
            
            Date......{this.state.date.toString().slice(0,10)}
            
            <div>
                History..........{history._id}
            </div>
            <div>
                History..........{history.caloriesgain}
            </div>
            
            
        </div>
        <Widgets1/>

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