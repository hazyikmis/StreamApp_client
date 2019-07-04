/*
import { EDIT_STREAM } from "../actions/types";
//sample code
//Array-based approach:
const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });

    default:
      return state;
  }
};

//Object-based approach: (SIMPLER THAN THE ARRAY BASED APPR ABOVE)
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      //const newState = { ...state };
      //newState[action.payload.id] = action.payload;
      //return newState;
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

//KEY INTERPOLATION:
//try on the console
const animalSounds = {cat: "meow", dog: "bark"};
const animal = "lion";
const sound = "roar";
{...animalSounds, [animal] : sound}
*/

/*
## RESTful Actions

Action..........................Method......Route...........Response
====================............========....============....==================
List all records................GET........./streams........Array of records
Get one particular record.......GET........./streams/:id....Single record
Create record...................POST......../streams........Single record
Update a record-all properties..PUT........./streams/:id....Single record
Update a record-some properties.PATCH......./streams/:id....Single record
Delete a record.................DELETE....../streams/:id....Nothing

*/

import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  //IMPORTANT NOTE: In all cases, "action.payload" contains the data returned from
  //api call in the actions/index.js + apis/streams.js
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //payload includes just "id" - check actions/index.js
      //in order to delete, we have installed lodash: "npm install --save lodash"
      //action.payload is equal to id
      return _.omit(state, action.payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

//lodash function: _.mapKeys(arrOfObjects, key) returns objectsOfObjects
//try the code below on console:
/*
>colors = [{id: "1", hue: "red"}, {id: "2", hue: "blue"}, {id: "3", hue: "green"}];
>_.mapKeys(colors, "id");
this returns:
{1:{id: "1", hue: "red"}, 2:{id: "2", hue: "blue"}, 3:{id: "3", hue: "green"}}



*/
