import * as Types from './types';

export interface SetEditTextComponent {
    type: typeof Types.SET_EDIT_TEXT_COMPONENT,
    editTextComponent: any
}

export interface SetCanvasObject {
    type: typeof Types.SET_CANVAS_OBJECT,
    canvasObject: any
}


type ActionTypes = SetEditTextComponent | SetCanvasObject;


export default ActionTypes;
