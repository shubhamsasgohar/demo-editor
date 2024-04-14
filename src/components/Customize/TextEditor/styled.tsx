import styled from "styled-components";
import {
    Select,
    InputNumber,
    Button,
    Slider,
    Form, Col, Row
} from 'antd';

const DisabledArea = styled.div`
 &::before {
    background: rgb(0 0 0 / 50%);
    content: "Complete Step 5";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px 5px 0 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    padding: 0 50px;
    text-align: center;
 }
`;
const CurveWraper = styled(Row)`
.ant-form-item-label {
    right:35px
}

`;

const CurvedButton = styled.div`
    button {
        position:relative;
        height:37px;
        font-size:15px;
        font-weight: 500;
   
    }
    .top-arc {
        border: 1px solid #000;
        display: inline-block;
        min-width: 16px;
        min-height: 16px;
        padding: 0.5em;
        border-radius: 50%;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom:transparent;
        position:absolute;
        top:5px;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        max-width: 65%;
    }
`;

const MobileCurvedButton = styled.div`
    button {
        position:relative;
        width:37px;
        height:37px;
        font-size:15px;
        font-weight: 500;
   
    }
    .top-arc {
        border: 1px solid #000;
        display: inline-block;
        min-width: 16px;
        min-height: 16px;
        padding: 0.5em;
        border-radius: 50%;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom:transparent;
        position:absolute;
        top:5px;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        max-width: 65%;
    }
`;

const DisabledAreaText = styled.div`

`;

const SelectFont = styled(Select)`
    width: 100%;
`;

const FontSize = styled(InputNumber)`
    width: 100%;
    input{
     padding : 15.7px;
    }
`;

const TextStyle = styled(Button)`
    margin-right: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
    &.active {
        border: 1px solid #ed2619;
        color: #e4201b;
    }
    
    @media screen and (max-width: 420px) {
        padding: 10px;
    }
    
    @media screen and (max-width: 1367px) {
        padding: 6.4px 9px;
    }
`;

const StyledSlider = styled(Slider)`
    .ant-slider-step {
        background: #99acb7;
    }
`;

const FormItem = styled(Form.Item)`
    margin-bottom: 10px;
    
    .ant-form-item-label {
     padding-bottom: 2px;
      text-align: inherit !important;
      
        label {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 1440px) {
        margin-bottom: 10px;
    }
    
    @media screen and (max-width: 1367px) {
        .ant-form-item-label {
            label {
                font-size: 12px !important;
            }
        }
    }
    
    @media screen and (max-width: 420px) {
        margin-bottom: 10px;
    }
`;

const FormDiv = styled.div`
    margin-bottom: 10px;
    
    .ant-form-item-label {
        padding-bottom: 2px;
        text-align: inherit !important;
        label {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 1440px) {
        margin-bottom: 10px;
    }
    
    @media screen and (max-width: 1367px) {
        .ant-form-item-label {
            label {
                font-size: 12px !important;
            }
        }
    }
    
    @media screen and (max-width: 420px) {
        margin-bottom: 10px;
    }
`;

const TooltipButton = styled(Button)`
    padding: 0px 10px 8px;
    margin: -12px 0px -8px;
    height: auto;
    width: auto;
    color: #ff0108;
    font-size: 22px;
    
    @media screen and (max-width: 420px) {
        font-size: 12px;
    }
    
    &:hover, &:active, &:visited, &:focus {
        color: #ff0108;
    }
`;

const WrapZoom = styled(Col)`
    .ant-form-item-label{
        flex: 0 0 100%;
        width:100%;
        text-align: inherit;
    }
`;


const FontRotation = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 420px) and (max-width: 1366px) {
        height: 28px;
    }
    
    @media screen and (max-width: 420px) {
        height: 32px;
    }
`

export {
    SelectFont,
    FontSize,
    TextStyle,
    FormItem,
    TooltipButton,
    DisabledArea,
    DisabledAreaText,
    FontRotation,
    StyledSlider as Slider,
    FormDiv,
    CurvedButton,
    CurveWraper,
    WrapZoom,
    MobileCurvedButton
}
