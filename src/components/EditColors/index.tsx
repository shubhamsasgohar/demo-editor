import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import actions from "../../redux/actions";
import { Col, ColorPicker, Divider, Row, Space, theme } from 'antd';
import type { ColorPickerProps } from 'antd';
import { generate, green, presetPalettes, red, cyan } from '@ant-design/colors';
import {Color} from "antd/es/color-picker";


const EditColors = () => {
    const dispatch = useDispatch();
    const editTextComponent  = useSelector((s: any) => (s.editor.editTextComponent), shallowEqual);
    type Presets = Required<ColorPickerProps>['presets'][number];

    const genPresets = (presets = presetPalettes) =>
        Object.entries(presets).map<Presets>(([label, colors]) => ({
            label,
            colors,
        }));

    const HorizontalLayoutDemo = () => {
            const onColorChange = (id: string, Color: Color) => {
            const newColorMap = {...editTextComponent.colorMap, [id]: Color.toHexString()};
            console.log('newColorMap', newColorMap)
            // @ts-ignore
            dispatch(actions.editorActions.setEditTextComponent({
                ...editTextComponent,
                layerColor: Color.toHexString(),
                svgColorId: id,
                colorMap: newColorMap
            }));
        };

        const { token } = theme.useToken();

        const presets = genPresets({
            primary: generate(token.colorPrimary),
            red,
            green,
            cyan,
        });

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

        return (
            <div>
                {Object.entries(editTextComponent.colorMap).map(([id, color], index) => (
                    <div key={id}>
                        <h4>Color {index + 1} : {color as string}</h4>
                        <ColorPicker
                            onChangeComplete={(color) => onColorChange(id, color)}
                            defaultValue={color as string} // Type assertion here
                            styles={{ popupOverlayInner: { width: 480 } }}
                            presets={presets}
                            panelRender={customPanelRender}
                        />
                    </div>
                ))}
            </div>
            // <ColorPicker
            //     onChangeComplete={onColorChange}
            //     defaultValue={token.colorPrimary}
            //     styles={{ popupOverlayInner: { width: 480 } }}
            //     presets={presets}
            //     panelRender={customPanelRender}
            // />
        );
    };


    return (
        <React.Fragment>
            {
                <>
                    <Space direction="vertical">
                        <Space>
                            {/*<span>Choose Your Print Color:</span>*/}
                            <HorizontalLayoutDemo />
                        </Space>
                    </Space>
                </>
            }
        </React.Fragment>
    )
};

export default EditColors;

