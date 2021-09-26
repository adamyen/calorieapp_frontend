import { combineReducers } from "redux";
import auth from './auth';
import search from './search';
import food from './food';

export default combineReducers({
    auth,
    search,
    food
})