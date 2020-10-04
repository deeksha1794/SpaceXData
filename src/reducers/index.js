import {
   combineReducers
} from "redux";

const spaceXState = (state = {}, action) => {
   switch (action.type) {
      case 'GET_SPACEX.REQUEST':
         return Object.assign({}, state, {
            inProgress: true
         });
      case 'GET_SPACEX.SUCCESS':
         return Object.assign({}, state, action.payload, {
            inProgress: false,
            error: undefined
         });
      case 'GET_SPACEX.FAILURE':
         return Object.assign({}, state, action.payload, {
            inProgress: false
         });
      default:
         return state;
   }
};
export default combineReducers({
   spaceXState
})