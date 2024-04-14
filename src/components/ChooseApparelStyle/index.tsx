import React, {useEffect, useState} from 'react';
import {Spin, Row, Col, Button, Popover} from 'antd';
import {ChooseTemplate, Tabs, TemplateImage, CardStyle , TemplateTitle, TemplateWrapper, CheckIcon} from "./styled";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import actions from "../../redux/actions";

const {TabPane} = Tabs;

const ChooseApparelStyle = () => {
    const dispatch = useDispatch();
    const editTextComponent  = useSelector((s: any) => (s.editor.editTextComponent), shallowEqual);


    // @ts-ignore
    const styles = window.styles;
    // @ts-ignore
    var productTypeSelectedStyles = window.productTypeSelectedStyles;
    const [activeCard, setActiveCard] = useState();

    const onSelectTemplate = (template: any) => {
        setActiveCard(template.id);
        // @ts-ignore
        dispatch(actions.editorActions.setEditTextComponent({
            ...editTextComponent,
            style: template.svgName,
            colorMap: template.colorMap,
            svgColorId: '',
        }));
    };

    const templates = [
        {
            id: 0,
            adsImageName: "Style0/Style0-Jersey.jpg",
            imageName: "Style0/Style0-Jersey.jpg",
            svgName: "Style0/Style0-Jersey.svg",
            name: "Custom Hunter Camo Adult Youth Unisex Basketball Jersey - Reversible Uniform",
            skuNumber: "BA35",
            slug: "custom-hunter-camo-adult-youth-unisex-basketball-jersey-reversible-uniform",
            type: "JERSEY",
            colorMap : {
                "Color_3_00000054983513451159156840000005116481591636025013_": "#66C0D1",
                "Color_2_00000134211702034933699740000002909974329881221305_": "#2D2B2A",
                "Color_1_00000150087909070130400120000014954931110250983042_": "#FCFCFC"
            }
        },
        {
            id: 1,
            adsImageName: "Style1/Style1-Jersey.jpg",
            imageName: "Style1/Style1-Jersey.jpg",
            svgName: "Style1/Style1-Jersey.svg",
            name: "Custom Hunter Camo Adult Youth Unisex Basketball Jersey - Reversible Uniform",
            skuNumber: "BA35",
            slug: "custom-hunter-camo-adult-youth-unisex-basketball-jersey-reversible-uniform",
            type: "JERSEY",
            colorMap : {
                "Color_3": "#EABCDC",
                "Color_2": "#BB3D25",
                "Color_1_00000026865007635053321360000015726106073855848580_": "#F4F4F4"
            }
        },
        {
            id: 2,
            adsImageName: "Style2/Style2-Jersey.jpg",
            imageName: "Style2/Style2-Jersey.jpg",
            svgName: "Style2/Style2-Jersey.svg",
            name: "Custom Pixelated Camo Adult Youth Unisex Basketball Jersey - Reversible Uniform",
            skuNumber: "BA51",
            slug: "custom-pixelated-camo-adult-youth-unisex-basketball-jersey-reversible-uniform",
            type: "JERSEY",
            colorMap : {
                "Color_3": "#F4F4F4",
                "Color_2": "#1E223C",
                "Color_1": "#90AEE2"
            }
        },
        {
            id: 3,
            adsImageName: "Style3/Style3-Jersey.jpg",
            imageName: "Style3/Style3-Jersey.jpg",
            svgName: "Style3/Style3-Jersey.svg",
            name: "Custom Military Camo Adult Youth Unisex Basketball Jersey - Reversible Uniform",
            skuNumber: "BA64",
            slug: "custom-military-camo-adult-youth-unisex-basketball-jersey-reversible-uniform",
            type: "JERSEY",
            colorMap : {
                "Color_3_00000181796004705482777670000010410085112061544852_": "#C84448",
                "Color_2_00000096773107330741946300000016807000130045313155_": "#F4F4F4",
                "Color_1_00000065778354812324660300000006583918278438239373_": "#F4F4F4"
            }
        },
        {
            id: 4,
            adsImageName: "Style4/Style4-Jersey.jpg",
            imageName: "Style4/Style4-Jersey.jpg",
            svgName: "Style4/Style4-Jersey.svg",
            name: "Custom Vivid Camo Adult Youth Unisex Basketball Jersey - Reversible Uniform",
            skuNumber: "BA65",
            slug: "custom-vivid-camo-adult-youth-unisex-basketball-jersey-reversible-uniform",
            type: "JERSEY",
            colorMap : {
                "Color_3_00000026161976057432823130000009743913958064727718_": "#C09C62",
                "Color_2_00000023964115633458049420000014365729066205034115_": "#F4F4F4",
            }
        },
        {
            id: 5,
            adsImageName: "Style5/Style5-Jersey.jpg",
            imageName: "Style5/Style5-Jersey.jpg",
            svgName: "Style5/Style5-Jersey.svg",
            name: "Custom Magnified Camo Adult Youth Unisex Basketball Jersey - Reversible Uniform",
            skuNumber: "BA66",
            slug: "custom-magnified-camo-adult-youth-unisex-basketball-jersey-reversible-uniform",
            type: "JERSEY",
            colorMap : {
                "Color_3_00000181796004705482777670000010410085112061544852_": "#C84448",
                "Color_2_00000119827207184775886030000012494797607183382206_": "#F4F4F4",
            }
        }
    ];
    return (
        <React.Fragment>
            <Tabs
                    defaultActiveKey=""
                    centered
                    type="card"
                >
                <TabPane tab="" key="">
                    <Row>
                        {templates && templates.map((template: any) => (
                            <Col span={8} key={template.id} className="p-1">
                                <CardStyle
                                    className=""
                                    onClick={() => onSelectTemplate(template)}
                                    image={"http://localhost:3000/images/"+template.imageName}
                                    // image={"https://img.sportsgearswag.com/fit-in/350x350/product/"+template.imageName}
                                    clicked={activeCard == template.id}
                                    title={template.skuNumber}
                                    setOriginalImage={true}
                                />
                            </Col>
                        ))}
                    </Row>
                </TabPane>
            </Tabs>
        </React.Fragment>
    )
};

export default ChooseApparelStyle;

