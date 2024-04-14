import {all, fork} from 'redux-saga/effects';
import editor from './editor/sagas';

export default function* root() {
    yield all([
        fork(editor),
    ]);
}
