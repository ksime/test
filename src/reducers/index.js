export default (state = {}, action) => {
  if (action.type === 'TOGGLE_MENU') {
    const toggledNote = { showPanel: !state.showPanel };
    const newState = Object.assign({}, state, toggledNote);
    return newState;
  }
  return state;
};
