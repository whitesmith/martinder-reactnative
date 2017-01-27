import { combineReducers } from 'redux'
import { PUSH_SCREEN, POP_SCREEN, SET_EVENTS} from './actions'

/*
{
  navigationState: {index: 0, routes: [{key: 'main'}]}
}
*/
const defaultNavigationState = {index: 0, routes: [{key: 'EventList'}]}

function navigationState(previousNavigationState = defaultNavigationState, action) {
  switch (action.type) {
    case PUSH_SCREEN:
      new_state = {
        index: previousNavigationState.index+1,
        routes: [...previousNavigationState.routes, {key: action.screen_name}]
      }
      return new_state
    case POP_SCREEN:
      if(previousNavigationState.index == 0){
        return previousNavigationState;
      } else{
        new_routes = [...previousNavigationState.routes];
        new_routes.pop();
        new_state = {
          index: previousNavigationState.index-1,
          routes: new_routes
        }
        return new_state;
      }
    default:
      return defaultNavigationState
  }
}


function events(previousEvents = [], action){
  switch (action.type) {
    case SET_EVENTS:
      return action.events;
    default:
      return previousEvents;
  }
}

const MartinderApp = combineReducers({
  navigationState,
  events
})

export default MartinderApp
