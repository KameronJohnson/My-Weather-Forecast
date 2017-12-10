import { FETCH_WEATHER } from "../actions/index";

//default state for this reducer is an array because we'll have multiple cities
export default function(state = [], action) {
    // console.log("Action received:", action);
    switch (action.type) {
    case FETCH_WEATHER:
        // concat instead of push so state isn't mutated.
        // return state.concat([action.payload.data]);
        // or es6 way
        return [ action.payload.data, ...state ]; // return [city,city,city] not [city, [city,city]]
    }
    return state;
}