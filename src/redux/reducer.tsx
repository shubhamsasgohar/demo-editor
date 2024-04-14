import { combineReducers } from 'redux';
import editorReducer from './editor/reducer';

export default combineReducers({
    editor: editorReducer,
});
