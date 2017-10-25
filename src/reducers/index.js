export default (state = {}, action) => {
  if (action.type === 'TOGGLE_MENU') {
    const toggledNote = { showPanel: !state.showPanel };
    const newState = Object.assign({}, state, toggledNote);
    return newState;
  } else if (action.type === 'ADD_NOTE') {
    const newNote = {
      deleted: false,
      number: action.number,
      id: Math.random(),
      text: '',
    };
    const newState = Object.assign({}, state, {
      notes: [...state.notes, newNote],
    });
    return newState;
  } else if (action.type === 'DELETE_NOTE') {
    const changedNotes = state.notes.map((note) => {
      if (note.id !== action.id) {
        return note;
      }
      const deletedNote = note;
      deletedNote.deleted = !deletedNote.deleted;
      return deletedNote;
    });
    const newState = Object.assign({}, state, { notes: changedNotes });
    return newState;
  } else if (action.type === 'CHANGE_NOTE_TEXT') {
    const changedNotes = state.notes.map((note) => {
      if (note.text === action.text) {
        return note;
      }
      const deletedNote = note;
      deletedNote.text = action.text;
      return deletedNote;
    });
    const newState = Object.assign({}, state, { notes: changedNotes });
    return newState;
  }
  return state;
};
