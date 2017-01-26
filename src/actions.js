/*
 * action types
 */
export const PUSH_SCREEN = 'PUSH_SCREEN'
export const POP_SCREEN = 'POP_SCREEN'
export const POP_SCREEN = 'SET_EVENTS'

/*
 * action creators
 */
export const push_screen = (screen_name) => {
  return { type: PUSH_SCREEN, screen_name }
}
export const pop_screen = () => {
  return { type: POP_SCREEN }
}
export const set_events = () => {
  return { type: SET_EVENTS }
}
