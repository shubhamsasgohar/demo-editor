export interface EditorState {
    canvasObject: any;
    editTextComponent: {
        style:any,
        svgColorId:any,
        colorMap:any,
        layerColor:any,
        textColor:any,
        outlineColor:any,
        currentCanvasObject: any,
        selectedFont: string,
        fontSize: number,
        isBold: boolean,
        isItalic: boolean,
        isUnderline: boolean,
        rotate: number,
        outline: number,
        diameter:number
        flipped:boolean
    };
}
