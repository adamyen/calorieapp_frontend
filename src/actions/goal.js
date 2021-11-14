import { CREATE_GOAL } from "./actionTypes"

export function createGoal(goal) {
    return { type: CREATE_GOAL, goal }
}
