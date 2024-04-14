import * as Types from './types';
import ActionTypes from './action-types';

export const setEditTextComponent = (editTextComponent: any): ActionTypes => ({
    type: Types.SET_EDIT_TEXT_COMPONENT,
    editTextComponent,
});

export const setCanvasObject = (canvasObject: any): ActionTypes => ({
    type: Types.SET_CANVAS_OBJECT,
    canvasObject,
});

