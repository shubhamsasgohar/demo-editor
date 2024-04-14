import styled from "styled-components";
import {Radio, Checkbox, Button, Image, Tag} from 'antd';

const RadioGroup = styled(Radio.Group)`
    display: flex;
    align-items: center;
`;

const StyledRadio = styled(Radio)`
    border: 1px solid #e4201b;
    border-radius: 4px;
    padding: 4px 15px;
    text-transform: uppercase;
    color: #e4201b;
    height: 32px;
    font-weight: 500;
    
    .ant-radio {
        .ant-radio-inner{
            border-radius: 0!important;
            font-family: "Font Awesome 5 Free";
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
            font-weight: 900;
            
            &::after {
                content: "\\f00c";
                border-radius: 0!important;
                background: #fff;
                font-size: 11px;
                top: 1px;
                left: 1.5px;
            }
        }
    }
    
    &.ant-radio-wrapper-checked {
        background: #e4201b;
        color: #fff;
    }
    
    &.ant-radio-wrapper-checked:hover {
        background: #ffffff;
        color: #e4201b;
    }
    
    @media screen and (max-width: 420px) {
        padding: 5px 10px;
    }
`;

const StyledCheckbox = styled(Checkbox)`
    border: 1px solid #e4201b;
    border-radius: 4px;
    padding: 4px 15px;
    text-transform: uppercase;
    margin-top: 10px;
    position: relative;
    left: 0;
    color: #e4201b;
    height: 32px;
    font-weight: 500;
    
    .ant-checkbox {
        .ant-checkbox-inner{
            border-radius: 0!important;
            font-family: "Font Awesome 5 Free";
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
            font-weight: 900;
            background: #fff;
            
            &::after {
                content: "\\f00c";
                border-radius: 0!important;
                background: #fff;
                font-size: 11px;
                top: 1px;
                left: 1px;
                transform: inherit;
            }
        }
    }
    
    &.active {
        background: #e4201b;
        color: #fff;
    }
    
  
        
    @media screen and (max-width: 420px) {
        padding: 5px 10px;
    }
`;

const OrSeparator = styled.label`
    background: #e9eff1;
    padding: 7px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 0;
`;

const ApparelWrapper = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: auto;
    margin: auto;
    width: 100%;
    overflow: hidden;
    padding:0;
`;

const ApparelImage = styled(Image)`
    height: 200px !important;
    width: 100%;
    padding: 15px;
    object-fit: contain;
    
    @media screen and (max-width: 1440px) {
       height: 200px;
    }
`;

const ApparelImage_110 = styled(Image)`
    height: 150px;
    width: 100%;
    padding: 15px;
    object-fit: contain;
    
    @media screen and (max-width: 1440px) {
       height: 110px;
    }
`;

const ApparelTitle = styled.div`
    white-space: normal;
    font-size: 14px;
    width: 100%;
    font-weight: 500;
    
    @media screen and (max-width: 1440px) {
       font-size: 13px;
    }
    
    @media screen and (max-width: 480px) {
       font-size: 12px;
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

const JerseyImage = styled(Image)`
    height: 75px;
    width: auto;
    padding: 20px 10px 0px 10px;
    
    @media screen and (max-width: 1440px) {
       height: 70px;
    }
    
    @media screen and (max-width: 480px) {
       height: 70px;
    }
`;

const ShortImage = styled(Image)`
    height: 75px;
    width: auto;
    padding: 0px 10px 20px 10px;
    
    @media screen and (max-width: 1440px) {
       height: 70px;
    }
    
    @media screen and (max-width: 480px) {
       height: 70px;
    }
`;

const ReversibleLayerTag = styled(Tag)`
    top: 0;
    right: 0;
    position: absolute !important;
    margin: 0;
    font-size: 10px;
    font-weight: 500;
`;

export {
    RadioGroup,
    StyledRadio as Radio,
    StyledCheckbox as Checkbox,
    OrSeparator,
    ApparelWrapper,
    ApparelImage,
    ApparelImage_110,
    ApparelTitle,
    CheckIcon,
    JerseyImage,
    ShortImage,
    ApparelImageWrapper,
    ReversibleLayerTag as Tag
}