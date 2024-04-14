import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import {Row, Form, Drawer, Button, Affix, Layout, Typography, Col, Input} from 'antd';
import {FormInstance} from 'antd/lib/form';
import {FormItem} from "./components/Customize/TextEditor/styled";
import fabric from "./CanvasFabric";

const { Header } = Layout;
const { Title } = Typography;

export const FormContext = React.createContext<FormInstance<any> | null>(null);

const Editor: React.FC = () => {
    const customizeStepRef = useRef(null);
    const [form] = Form.useForm();
    const canvas  = useSelector((s: any) => (s.editor.canvasObject), shallowEqual);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        let text = event.target.value;
        if(canvas){
            let hasObject = false;
            let currentObject = null;

            for (const object of canvas._objects) {
                hasObject = true;
                currentObject = object;
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
                // @ts-ignore
                fillColor: {
                    code: 'PMS WHITE',
                    hexCode: 'FFFFFF'
                },
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


    return (
        <Layout>
            <Header style={{ textAlign: 'center', background: '#fff' }}>
                <Title level={2} style={{ lineHeight: '64px', margin: 0, color: 'rgba(0, 0, 0, 0.85)' }}>
                    Product Editor Demo
                </Title>
            </Header>

            <div>
                {/*<button onClick={add}>Add</button>*/}
                <FormItem label="Add Text" style={{marginRight: 10}}>
                    <Row className="align-items-center">
                        <Col span={24} className="add-element" style={{margin:'5px 0'}} >
                            <Input
                                inputMode={'text'}
                                placeholder={'Enter Demo text'}
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                </FormItem>
            </div>

            {/*<Container id="product-editor-container">*/}
            {/*    <Row>*/}
                    {/*<PreviewWrapper span={11}>*/}
                    {/*    <PreviewAffix>*/}
                    {/*        <StepCard hideTitle={true} color={{bodyBackground: "#f9fafc"}}>*/}
                    {/*            <Preview/>*/}
                    {/*        </StepCard>*/}
                    {/*    </PreviewAffix>*/}
                    {/*</PreviewWrapper>*/}
                    {/*<StepsWrapper span={13}>*/}
                    {/*    <Form*/}
                    {/*        form={form}*/}
                    {/*        layout="vertical"*/}
                    {/*        id={"editor-form"}*/}
                    {/*    >*/}
                    {/*        <FormContext.Provider value={form}>*/}
                    {/*            <StepCard*/}
                    {/*                title="Choose Your Style"*/}
                    {/*                number={1}*/}
                    {/*                id={'upload-custom-design-step'}*/}
                    {/*                color={{background: "#673ab7"}}*/}
                    {/*            >*/}
                    {/*            <ChooseApparelStyle/>*/}
                    {/*            </StepCard>*/}
                    {/*            <StepCard*/}
                    {/*                title="Choose Your Apparel"*/}
                    {/*                number={2}*/}
                    {/*                id={'upload-custom-design-step'}*/}
                    {/*                color={{background: "#673ab7"}}*/}
                    {/*            >*/}
                    {/*                <ChooseApparel/>*/}
                    {/*            </StepCard>*/}
                    {/*            <StepCard*/}
                    {/*                title={'Choose Your Colors'}*/}
                    {/*                number={3}*/}
                    {/*                color={{background: "#fec304"}}*/}
                    {/*            >*/}
                    {/*                <EditColors/>*/}
                    {/*            </StepCard>*/}

                    {/*            <StepCard*/}
                    {/*                innerRef={customizeStepRef}*/}
                    {/*                title={'Customize Your Apparel'}*/}
                    {/*                number={4}*/}
                    {/*                color={{background: "#f67e21"}}*/}
                    {/*            >*/}
                    {/*                <Customize />*/}
                    {/*            </StepCard>*/}
                    {/*        </FormConext.Provider>*/}
                    {/*    </Form>*/}
                    {/*</StepsWrapper>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </Layout>


    );
}

export default Editor;
