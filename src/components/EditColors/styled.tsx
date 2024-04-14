import styled from "styled-components";
import {Button, Input} from 'antd';

const ColorPicker = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props: any) => props.color ? props.color : '#fff'};
    color: #fff;
    border-width: 2px;
    border-color: #fff;
    
    &:hover, &:focus {
        background: ${(props: any) => props.color ? props.color : '#fff'};
        color: #fff;
        border-color: #fff;
    }
`;

const ColorInput = styled(Input)`
    margin-bottom: 2px;
    
    .ant-input-group-addon {
        background: transparent;
        border: none;
        padding: 0 5px;
    }
    
    .ant-input-lg {
        border-style: dashed;
        color: rgb(101 99 99);
    }
    
    @media screen and (max-width: 1440px) {
        .ant-btn-lg {
            width: 35px;
            height: 35px;
            min-width: 35px;
        }
        
        .ant-input-lg {
            font-size: 13px;
        }
    }
         
    @media screen and (max-width: 420px) {
        .ant-input-group-addon {
            padding: 0 5px 0 5px;
        }
    }
`;

const ProductLabel = styled.div`
    padding: 10px 0px;
    font-size: 14px;
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 10px;
    text-transform: uppercase;
`;
const AddElement = styled(Button)`
    height: unset !important;
    padding: 4px 15px;
    font-size: 12px !important;
`;

const RenderColorPickersWrapper = styled.div`
    padding: 0 50px;
    
    @media screen and (max-width: 1700px) {
        padding: 0 20px;
    }
    
    @media screen and (max-width: 480px) {
        padding: 0 0 10px 0;
    }
`;

export {
    AddElement,
    ColorPicker,
    ColorInput,
    ProductLabel,
    RenderColorPickersWrapper
}