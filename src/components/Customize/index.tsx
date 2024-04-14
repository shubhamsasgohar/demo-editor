import React,{useState,useEffect} from 'react';
import {Input, Row} from 'antd';
import { Col } from './styled';
import TextEditor from './TextEditor';
// import AddMoreText from './AddMoreText';


const DesktopView = ({}) => {
    return (
    <Row>
        <Col span={14}>
            <TextEditor fromPreview={false} style={{marginBottom: 0}}/>
        </Col>
        <>
        <Col span={14}>
            {/*<AddMoreText/>*/}
        </Col>
        </>
    </Row>
)};

const CustomizeCard = ({children, isMobile, ...rest}: any) => {
    return <DesktopView {...rest}/>
};

export default CustomizeCard;