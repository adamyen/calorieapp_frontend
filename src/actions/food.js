import {UPDATE_TOTAL} from "./actionTypes";

export function addTotal(total) {
    return {
      type: UPDATE_TOTAL,
      total

    };
  }