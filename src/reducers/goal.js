import { CREATE_GOAL } from "../actions/actionTypes";

const initialState = [];

export default function goal(state = initialState, action) {
    switch (action.type) {
        case CREATE_GOAL:
            const goal = state;
            const newGoal = { ...action.goal, id: goal.length + 1 };
            goal.push(newGoal);
            return goal;
        default:
            return state;
    }
}
