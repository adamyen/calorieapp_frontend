import { combineReducers } from "redux";
import auth from './auth';
import search from './search';
import food from './food';
import history from './history';
import goal from './goal';
import calories from "./calories";

export default combineReducers({
    auth,
    search,
    food,
    history,
    goal,
    calories,
})