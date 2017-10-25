export const toggleMenu = () => ({ type: 'TOGGLE_MENU' });
export const addNote = number => ({ number, type: 'ADD_NOTE' });
export const deleteNote = id => ({ type: 'DELETE_NOTE', id });
export const changeNoteText = (id, text) => ({ id, text, type: 'CHANGE_NOTE_TEXT' });
