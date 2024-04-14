import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {Row, Col, Input, Tooltip, Form, Button, ColorPicker, theme, ColorPickerProps, Divider} from 'antd';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {
    BoldOutlined,
    ItalicOutlined,
    UnderlineOutlined,
} from "@ant-design/icons/lib";
import Card from '../Card';
import {
    SelectFont,
    FontSize,
    TextStyle,
    Slider,
    FormItem,
    FormDiv,
    FontRotation,
    CurvedButton,
} from './styled';
import EditColors from "../../EditColors";
import {cyan, generate, green, presetPalettes, red} from "@ant-design/colors";
import fabric from '../../../CanvasFabric';
import actions from "../../../redux/actions";
import { debounce } from 'lodash';

const TextEditor = ({fromPreview = false, ...rest}: {
    fromPreview: boolean
    style?: any;
}) => {

    const dispatch = useDispatch();

    const editTextComponent  = useSelector((s: any) => (s.editor.editTextComponent), shallowEqual);

    const canvas  = useSelector((s: any) => (s.editor.canvasObject), shallowEqual);

    const [inputValue, setInputValue] = useState('');
    const [isTrimDragging, setIsTrimDragging] = useState(false);
    const { token } = theme.useToken();

    const fonts = [
        { id: 0, fontKey: "Collegium", name: "Collegium" },
        { id: 1, fontKey: "Inspiration", name: "Inspiration" },
        { id: 2, fontKey: "NCAABaylorBearsFootball", name: "NCAA BB Football" },
        { id: 3, fontKey: "justanotherhand", name: "Just Another Hand" },
        { id: 4, fontKey: "HighSchoolUSASans", name: "High School USA Sans" },
        { id: 5, fontKey: "akmyprince", name: "AKMy Prince" },
        { id: 6, fontKey: "akzidenz-grotesk_bqregular", name: "Akzidenz" }
    ];

    type Presets = Required<ColorPickerProps>['presets'][number];

    const genPresets = (presets = presetPalettes) =>
        Object.entries(presets).map<Presets>(([label, colors]) => ({
            label,
            colors,
        }));

    const customPanelRender: ColorPickerProps['panelRender'] = (
        _,
        { components: { Picker, Presets } },
    ) => (
        <Row justify="space-between" wrap={false}>
            <Col span={12}>
                <Presets />
            </Col>
            <Divider type="vertical" style={{ height: 'auto' }} />
            <Col flex="auto">
                <Picker />
            </Col>
        </Row>
    );
    const presets = genPresets({
        primary: generate(token.colorPrimary),
        red,
        green,
        cyan,
    });

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        let text = event.target.value;
        if(canvas){
            let hasObject = false;
            let currentObject = null;

            for (const object of canvas._objects) {
                // if(object.id == field){
                    hasObject = true;
                    currentObject = object;
                // }
            }
            let fontFamily = "Bebas Neue Pro Bold";
            const textObject = new fabric.Text(text, {
                // @ts-ignore
                id: 1,
                // @ts-ignore
                subId: "field",
                text: text,
                // @ts-ignore
                left: 200,
                top: 50,
                fill: "#000000",
                // fill: "#FFFFFF",
                // @ts-ignore
                fillColor: {
                    code: 'PMS WHITE',
                    hexCode: 'FFFFFF'
                },
                // fillColor: EisDarkColored ? {
                //     code: 'PMS WHITE',
                //     hexCode: 'FFFFFF'
                // } : {
                //     code: 'PMS BLACK',
                //     hexCode: '000000'
                // },
                stroke: "#000",
                strokeWidth: 0,
                textAlign: "center",
                originX: "center",
                scaleX:1,
                scaleY:1,
                fontSize: 50,
                fontFamily,
            });
            if(!hasObject){
                canvas.add(textObject);
                canvas.requestRenderAll();
            }
            else{
                canvas.setActiveObject(currentObject);
                currentObject.text = text;
                canvas.requestRenderAll();
            }
        }
        setInputValue(text);
    };


    const onChooseFontFamily = (font: string) => {
        let key = 'FontFamily';
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        // const previousObject = editTextComponent;
        // console.log('newEditTextComponent', newEditTextComponent )
        const _setFontFamily = (object: any) => {
            object.set("fontFamily", font).setCoords();
            canvas.requestRenderAll();
        }
        if (typeof activeObject !== "undefined") {
            _setFontFamily(activeObject);
            const newEditTextComponent = {...editTextComponent, selectedFont: font};
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));

        }
    }
    const onFontSizeChange = (size: any) => {
        let key = 'FontSize';
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        debouncedLog(size)
    }
    const debouncedLog = debounce((size: any) => {
        const activeObject = canvas.getActiveObject();
        const _setFontSize = (object: any) => {
            var cusSize=Math.round((size || 0) / object.scaleY) || 40;
            object.set("fontSize", cusSize).setCoords();
            canvas.requestRenderAll();
        }
        if (typeof activeObject !== "undefined") {
            _setFontSize(activeObject);
            const newEditTextComponent = {...editTextComponent, fontSize: size};
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));
        }
    }, 1000);

    const onChangeTextColor = (color: any) => {
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        const _setColor = (object: any) => {
            if (object) {
                object.set("fill", `${color.toHexString()}`) .setCoords();
                canvas.requestRenderAll();
                const newEditTextComponent = {...editTextComponent, textColor: color.toHexString()};
                // @ts-ignore
                dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));                //recordHistory(key, colorObject, activeObject, newEditTextComponent, previousObject);
            }
        }

        if (typeof activeObject !== "undefined") {
            _setColor(activeObject);
        }
    }

    const toggleBold = () => {
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        const toggle = !editTextComponent.isBold;
        const newEditTextComponent = {...editTextComponent,  isBold: toggle};
        const _setBold = (object: any) => {
            object.set("fontWeight", toggle ? 'bold' : 'normal').setCoords();
            canvas.requestRenderAll();
        }
        if (typeof activeObject !== "undefined") {
            _setBold(activeObject);
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));
        }
    }

    const toggleItalic = () => {
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        const toggle = !editTextComponent.isItalic;
        const newEditTextComponent = {...editTextComponent, isItalic: toggle};
        const _setItalic = (object: any) => {
            object.set("fontStyle", toggle ? 'italic' : 'normal').setCoords();
            canvas.requestRenderAll();
        }
        if (typeof activeObject !== "undefined") {
            _setItalic(activeObject);
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));

        }
    }

    const toggleUnderline = () => {
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        const toggle = !editTextComponent.isUnderline;
        const newEditTextComponent = {...editTextComponent, isUnderline: toggle};
        const _setUnderline = (object: any) => {
            object.set("underline", toggle).setCoords();
            canvas.requestRenderAll();
        }

        if (typeof activeObject !== "undefined") {
            _setUnderline(activeObject);
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));
        }
    }

    const onOutlineChange = (value: any) => {
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        const _setOutline = (object: any) => {
            object.set("strokeWidth", value).setCoords();
            canvas.requestRenderAll();
        }
       if (typeof activeObject !== "undefined") {
            _setOutline(activeObject);
           setIsTrimDragging(true);
       }

    }
    const onFinalOutlineChange = (value: any) => {
        if (isTrimDragging) {
            onOutlineChange(value);
            const newEditTextComponent = {...editTextComponent, outline: value};
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));
            setIsTrimDragging(false);
        }

    }

    const onRotationChange = (value: any) => {
        const activeObject = canvas.getActiveObject();
        if(!activeObject){
            return;
        }
        const _setRotation = (object: any) => {
            object.set("angle", value).setCoords();
            canvas.requestRenderAll();
        }
        if (typeof activeObject !== "undefined") {
            _setRotation(activeObject);
        }
        const newEditTextComponent = {...editTextComponent, rotate: value};
        // @ts-ignore
        dispatch(actions.editorActions.setEditTextComponent(newEditTextComponent));
    }

    return (
        <Card title={(
            <>
                Edit Text
            </>
        )} {...rest}>
            <Row>
                <Col span={10}>
                    <FormDiv style={{marginRight: 10}}>
                        <div className="ant-col ant-form-item-label">
                            <label style={{height: 'auto'}} title="Font Size">
                                Font Family {fromPreview}
                            </label>
                        </div>
                        <SelectFont
                            showSearch
                            defaultValue=""
                            value={editTextComponent.selectedFont}
                            size={'large'}
                            placeholder="-- Select Font --"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                // @ts-ignore
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                // @ts-ignore
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                           // style={{fontFamily: SEeditTextComponent.selectedFont}}
                           onChange={(font: any) => onChooseFontFamily(font.toString())}
                            getPopupContainer={trigger => trigger.parentNode}
                        >
                            {fonts.map((font) => (
                                        <SelectFont.Option key={font.fontKey} style={{fontFamily: font.fontKey}}
                                                   value={font.fontKey}>
                                    {font.name}
                                </SelectFont.Option>
                            ))}
                        </SelectFont>
                    </FormDiv>
                </Col>
                <Col span={8}>

                    <FormItem label={
                        <span>
                            Font Size
                        </span>
                    }
                          style={{marginRight: 10, marginBottom: "0 !important"}} className="ipad-mr-0">
                        <FontSize
                            min={5}
                            size={'large'}
                            onChange={(size) => {onFontSizeChange(size)}}
                            value={editTextComponent.fontSize}
                        />
                    </FormItem>
                </Col>
                <Col span={6}>
                    <FormItem label="Color">
                        <ColorPicker
                            onChangeComplete={(color) => onChangeTextColor(color)}
                            defaultValue={token.colorPrimary} // Type assertion here
                            styles={{ popupOverlayInner: { width: 480 } }}
                            presets={presets}
                            panelRender={customPanelRender}
                        />
                    </FormItem>
                </Col>
                <Col span={10}>
                    <FormItem label="Font Style">
                        <TextStyle
                            size={'large'}
                            onClick={() => toggleBold()}
                            className={editTextComponent.isBold ? 'active' : ''}
                        >
                            <BoldOutlined/>
                        </TextStyle>
                        <TextStyle
                            size={'large'}
                            onClick={() => toggleItalic()}
                            className={editTextComponent.isItalic ? 'active' : ''}
                        >
                            <ItalicOutlined/>
                        </TextStyle>
                        <TextStyle
                            size={'large'}
                            onClick={() => toggleUnderline()}
                            className={editTextComponent.isUnderline ? 'active' : ''}
                        >
                            <UnderlineOutlined/>
                        </TextStyle>
                    </FormItem>
                </Col>
                <>
                    <Col span={8}>
                        <FormItem label="Trim" style={{marginRight: 10}}>
                            <Row className="align-items-center">
                                <Col span={9}>
                                    {/*<PMSPicker*/}
                                    {/*    iconBackground={SEeditTextComponent.outlineColor.hexCode}*/}
                                    {/*    onChooseColor={(c: any) => onChangeOutlineColor(c)}*/}
                                    {/*    customIcon={<FontColorsOutlined/>}*/}
                                    {/*/>*/}
                                </Col>
                                <Col span={15}>
                                    <Slider
                                        step={0.1}
                                        max={5}
                                        onChange={(value: any) => onOutlineChange(value)}
                                        onChangeComplete={(value: any) => onFinalOutlineChange(value)}
                                        // value={editTextComponent.outline}
                                    />
                                </Col>
                            </Row>
                        </FormItem>
                    </Col>

                    <Col span={6}>
                        <FormItem label="Rotation">
                            <Row className="align-items-center">
                                <Col span={20} className="align-items-center">
                                    <FontRotation span={24}>
                                        <Slider
                                            style={{width: '100%'}}
                                            max={360}
                                            onChange={(value: any) => onRotationChange(value)}
                                            value={editTextComponent.rotate}
                                        />
                                    </FontRotation>
                                </Col>
                                <Col span={4}></Col>
                            </Row>
                        </FormItem>
                    </Col>
                    <Col span={16}>
                        <FormItem label="Add Text" style={{marginRight: 10}}>
                            <Row className="align-items-center">
                                <Col span={24} className="add-element" style={{margin:'5px 0'}} >
                                    <Input
                                        inputMode={'text'}
                                        placeholder={'Enter Text'}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                        </FormItem>
                    </Col>
                </>
            </Row>
        </Card>
    )
};

export default TextEditor;
