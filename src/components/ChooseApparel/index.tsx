import React, {useEffect, useState} from 'react';
import {CheckOutlined} from '@ant-design/icons';
import {
    RadioGroup,
    Radio,
    Checkbox,
    OrSeparator,
    ApparelWrapper,
    ApparelImage,
    ApparelImage_110,
    ApparelTitle,
    CheckIcon,
    JerseyImage,
    ShortImage,
    ApparelImageWrapper,
    Tag
} from './styled';
import {Col, Row} from "antd";

const ChooseApparel = () => {



    // @ts-ignore
    const defaultApparelStyle = window.categoryDefaultApparelStyle;

    const [apparelType, setApparelType] = useState(defaultApparelStyle);

    const selectApparel = async (type: string, reversible: boolean) => {
        setApparelType(type);
    };


    return (
        <React.Fragment>
            <Row>
                <Col span={8} className="p-2">
                    <ApparelWrapper
                        className={'card-active'}
                        onClick={() => selectApparel("JERSEY", false)}
                    >
                        <ApparelImage
                            preview={false}
                            src={'https://demo-editor-2cs5t6y9x-shubhams-projects-4d2fa22f.vercel.app/images/Style0/Style0-Jersey.jpg'}
                        />
                        {apparelType == 'JERSEY'
                            ?
                            <CheckIcon>
                                <CheckOutlined/>
                            </CheckIcon>
                            : ''
                        }

                        <ApparelTitle>Jersey</ApparelTitle>

                    </ApparelWrapper>
                </Col>

                <Col span={8} className="p-2">
                        <ApparelWrapper
                            className={'card-active'}
                            onClick={() => selectApparel("Uniform", true)}
                        >
                            <ApparelImage
                                preview={false}
                                src={'https://demo-editor-2cs5t6y9x-shubhams-projects-4d2fa22f.vercel.app/images/Style0/Style0-Uniform.jpg'}
                            />
                            {apparelType == 'Uniform'
                                ?
                                <CheckIcon>
                                    <CheckOutlined/>
                                </CheckIcon>
                                : ''
                            }

                            <ApparelTitle>Uniform</ApparelTitle>

                        </ApparelWrapper>
                    </Col>
            </Row>
        </React.Fragment>
    )
};

export default ChooseApparel;

