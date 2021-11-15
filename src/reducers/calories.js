import { ADD_CALORIES } from '../actions/actionTypes';

const initialState = {
    0: { burned: 0, consumed: 0 },
    1: { burned: 0, consumed: 0 },
    2: { burned: 0, consumed: 0 },
    3: { burned: 0, consumed: 0 },
    4: { burned: 0, consumed: 0 },
    5: { burned: 0, consumed: 0 },
    6: { burned: 0, consumed: 0 },
};

export default function calories(state = initialState, action) {
    switch (action.type) {
        case ADD_CALORIES:
            const dayOfWeek = new Date().getDay();
            const newCalories = state[dayOfWeek][action.calories[0]] + action.calories[1]
            return {
                ...state,
                [dayOfWeek]: {
                    ...state[dayOfWeek],
                    [action.calories[0]]: newCalories
                }
            };
        default:
            return state;
    }
}
