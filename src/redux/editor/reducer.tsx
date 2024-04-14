import * as Types from './types';
import {EditorState} from './interfaces';


export default (state: EditorState = {
    canvasObject: null,
    editTextComponent: {
        style:'Style0/Style0-Jersey.svg',
        svgColorId: '',
        colorMap:{},
        layerColor:'',
        textColor:
        {
            code: 'PMS WHITE',
            hexCode: 'ffffff'
        },
        outlineColor:
        {
            code: 'PMS BLACK',
            hexCode: '000000'
        },
        currentCanvasObject: null,
        selectedFont: 'Bebas Neue Pro Bold',
        fontSize: 40,
        isBold: false,
        isItalic: false,
        isUnderline: false,
        rotate:  0,
        outline: 0,
        diameter: 100,
        flipped: false,
    },

}, action: any) => {
    switch (action.type) {
        case Types.SET_EDIT_TEXT_COMPONENT:
            return {
                ...state,
                editTextComponent: {
                    ...state.editTextComponent,
                    ...action.editTextComponent
                }
            };
        case Types.SET_CANVAS_OBJECT:
            return {
                ...state,
                canvasObject: action.canvasObject,
            };
        default:
            return state;
    }
};
