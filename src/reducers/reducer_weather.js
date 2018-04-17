import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  // console.log("Action received", action);

  // Don't do State.push :ccc
  // Redux uses setState, NEVER STATE = something
  // Need a new instance of state
  // ES6 ... it is dope
  // push would of manipulated, concat creates a new instance
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // [city, city, city]
  }
  return state;
}

// We only care about action.payload.data
