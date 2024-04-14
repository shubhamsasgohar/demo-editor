import React, {useEffect, useRef, useState} from 'react';
import {Row, Form, Drawer, Button, Affix, Layout, Typography} from 'antd';
import StepCard from './components/StepCard';
import {Container, PreviewWrapper, StepsWrapper} from './styled';
import {FormInstance} from 'antd/lib/form';
import PreviewAffix from "./components/Preview/Affix";
import Preview from './components/Preview';
import ChooseApparelStyle from "./components/ChooseApparelStyle";
import ChooseApparel from './components/ChooseApparel';
import EditColors from './components/EditColors';
import Customize from './components/Customize';

const { Header } = Layout;
const { Title } = Typography;

export const FormContext = React.createContext<FormInstance<any> | null>(null);

const Editor: React.FC = () => {
    const customizeStepRef = useRef(null);
    const [form] = Form.useForm();
    return (
        <Layout>
            <Header style={{ textAlign: 'center', background: '#fff' }}>
                <Title level={2} style={{ lineHeight: '64px', margin: 0, color: 'rgba(0, 0, 0, 0.85)' }}>
                    Product Editor Demo
                </Title>
            </Header>

            <Container id="product-editor-container">
                <Row>
                    <PreviewWrapper span={11}>
                        <PreviewAffix>
                            <StepCard hideTitle={true} color={{bodyBackground: "#f9fafc"}}>
                                <Preview/>
                            </StepCard>
                        </PreviewAffix>
                    </PreviewWrapper>
                    <StepsWrapper span={13}>
                        <Form
                            form={form}
                            layout="vertical"
                            id={"editor-form"}
                        >
                            <FormContext.Provider value={form}>
                                <StepCard
                                    title="Choose Your Style"
                                    number={1}
                                    id={'upload-custom-design-step'}
                                    color={{background: "#673ab7"}}
                                >
                                <ChooseApparelStyle/>
                                </StepCard>
                                <StepCard
                                    title="Choose Your Apparel"
                                    number={2}
                                    id={'upload-custom-design-step'}
                                    color={{background: "#673ab7"}}
                                >
                                    <ChooseApparel/>
                                </StepCard>
                                <StepCard
                                    title={'Choose Your Colors'}
                                    number={3}
                                    color={{background: "#fec304"}}
                                >
                                    <EditColors/>
                                </StepCard>

                                <StepCard
                                    innerRef={customizeStepRef}
                                    title={'Customize Your Apparel'}
                                    number={4}
                                    color={{background: "#f67e21"}}
                                >
                                    <Customize />
                                </StepCard>
                            </FormContext.Provider>
                        </Form>
                    </StepsWrapper>
                </Row>
            </Container>
        </Layout>


    );
}

export default Editor;
