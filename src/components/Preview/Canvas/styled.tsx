import styled from "styled-components";
import {Alert} from "antd";

const CanvasWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    
    .canvas-container {
        border: 1px dashed #646446;
        margin: auto;
    }
    
    &.active .canvas-container {
        border-color: #e4201b;
    }
`;

const EditorPreview = styled.div`
    margin: auto;
    max-width: 100%;
`;

const EditTextWrapper = styled.div`
    .ant-card-head-title {
        padding: 0;
        font-size: 14px !important;
    }
    .ant-card-head{
        background-color: #d8d8d8 !important;
        padding: 0 !important;
        min-height: 0;
    }
    .ant-form-item-label{
        width: 100% ! important;
    }
`;

const AlertMessage = styled(Alert)`
    text-align: center;
    font-size: 12px;
    border-color: #d8d8d8;
    background: #eff2f8;
    border-style: dashed;
    text-transform: uppercase;
    padding: 15px;
    margin-top: 20px;
    
    @media screen and (max-width: 1440px) {
        font-size: 11px;
    }
    
    @media screen and (max-width: 420px) {
        font-size: 11px;
        margin-top: 5px;
    }
`;

export {
    CanvasWrapper,
    EditorPreview,
    AlertMessage,
    EditTextWrapper
}

