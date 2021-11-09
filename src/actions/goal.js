import { GOAL_CREATE } from "./actionTypes"

export function createGoal(goal) {
    return { type: GOAL_CREATE, goal }
}
