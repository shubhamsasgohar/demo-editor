import styled from "styled-components";
import {Radio, Checkbox, Button, Image, Tag, Select, Modal} from 'antd';

const ApparelWrapper = styled(Button)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: auto;
    margin: auto;
    width: 100%;
    overflow: hidden;
    padding:0;
    align-items: center;
    
    .ant-image{
        width:100%;
    }
`;

const AddElement = styled(Button)`
    height: unset !important;
    padding: 4px 15px;
    font-size: 14px !important;
    margin-bottom: 10px;
`;

const SelectColor = styled(Select)`
    margin-top: 10px;
    width: 100%;
`;

const ApparelImage = styled(Image)`
    
    height: 150px;
    
    @media screen and (max-width: 1440px) {
       height: 150px;
    }
    
    @media screen and (max-width: 480px) {
       height: 150px;
    }
`;

const ModalItem = styled(Modal)`

    button.ant-modal-close .ant-modal-close-x {
        width: 35px !important;
        height: 45px !important;
        line-height: 44px !important;
    }
    
    button.ant-modal-close .ant-modal-close-x .ant-modal-close-icon {
        color: #FFF;
        font-size: 20px;
    }
    
    .compare-material-header {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #FF3049;
        color: #fff;
        justify-content: center;
        font-size: 24px;
        text-shadow: -1px 2px 3px #000;
        font-weight: 600;
        height: 50px;
    }

    .compare-box-one, .compare-box-two {
        width: 49%;
        text-align: center;
    }
    
    .compare-slash {
        width: 1%;
        text-align: center;
        font-stretch: 48px;
        font-size: 56px;
        height: 100%;
        line-height: 42px;
        margin-left: -10px;
        font-weight: 600;
        text-shadow: none;
    }
    
    .comapare-sublimated-image, .comapare-embroidered-image {
        position: relative;
    }
    
    .material-image-title {
        position: absolute;
        bottom: 0;
        height: 40px;
        text-align: center;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .inner-material-title {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
    }
    .material-text-points h5 {
        text-align: center;
    }
    .material-text-points ul {
        list-style-type: disc !important;
        padding-left: 20px !important;
    }
    .compare-material-footer {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #FF3049;
        text-align: center;   
        font-weight: 600;
        min-height: 50px;
    }
    .compare-material-footer .compare-material-footer-text {
        padding: 20px 70px;
        color: #fff;
    }
    .compare-material-footer .compare-material-footer-text a {
        color: #FFDD5E;
    }
    
    @media screen and (max-width: 1440px) {
    
    }
    
    @media screen and (max-width: 480px) {
       .compare-material-footer .compare-material-footer-text {
            padding: 20px 20px !important;
       }   
       .compare-material-header {
            font-size: 18px !important;
       }
       button.ant-modal-close .ant-modal-close-x {
            width: 25px !important;
            height: 40px !important;
            line-height: 42px !important;
       }
       button.ant-modal-close .ant-modal-close-x .ant-modal-close-icon {
            color: #FFF;
            font-size: 17px !important;
       }
       .compare-material-footer {
            text-align: left !important;
       }
       
    }
    
`;

const ApparelTitle = styled.div`
    white-space: normal;
    font-size: 12px;
    width: 100%;
    font-weight: 500;
    padding: 2px;
    
    
    
    .print-title{
        position: relative;
    }
    .print-question-icon{
        position: absolute;
        bottom: -4px !important;
        right: 0px;
    }
    @media screen and (max-width: 1367px) {
        .print-question-icon{
            bottom: 0 !important;
        }
    }
`;

const CheckIcon = styled.div`
    :after {
        top: 0px;
        left: 0px;
        z-index: 1;
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 36px 36px 0 0;
        border-color: #e4201b transparent transparent transparent;
    }
    
    span {
        position: absolute;
        left: 2px;
        top: 2px;
        z-index: 2;
        font-size: 19px;
        color: #ffffff;
    }
`;


const ApparelImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


const ReversibleLayerTag = styled(Tag)`
    top: 0;
    right: 0;
    position: absolute !important;
    z-index: 2;
    margin: 0;
    font-size: 10px;
    font-weight: 500;
`;
const IconQuestion = styled.span`
    font-size:16px;
    color: #e4201c;
`;

export {
    ApparelWrapper,
    ApparelImage,
    ApparelTitle,
    CheckIcon,
    ApparelImageWrapper,
    IconQuestion,
    ReversibleLayerTag as Tag,
    SelectColor,
    ModalItem,
    AddElement
}