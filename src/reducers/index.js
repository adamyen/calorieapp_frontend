import { combineReducers } from "redux";
import auth from './auth';
import search from './search';
import food from './food';
import history from './history';

export default combineReducers({
    auth,
    search,
    food,
    history,
})