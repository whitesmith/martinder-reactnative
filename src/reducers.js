import { combineReducers } from 'redux'
import { PUSH_SCREEN, POP_SCREEN } from './actions'

/*
{
  navigationState: {index: 0, routes: [{key: 'main'}]}
}
*/
const defaultNavigationState = {index: 0, routes: [{key: 'Screen1'}]}

function navigationState(previousNavigationState = defaultNavigationState, action) {
  switch (action.type) {
    case PUSH_SCREEN:
      new_state = {
        index: previousNavigationState.index+1,
        routes: [...previousNavigationState.routes, {key: action.screen_name}]
      }
      return new_state
    case POP_SCREEN:
      new_routes = [...previousNavigationState.routes];
      new_routes.pop();
      new_state = {
        index: previousNavigationState.index-1,
        routes: new_routes
      }
      return new_state
    default:
      return defaultNavigationState
  }
}

const MartinderApp = combineReducers({
  navigationState
})

export default MartinderApp
