import { ADD_CALORIES } from './actionTypes';

export function addCalories(calories) {
    return { type: ADD_CALORIES, calories }
}

