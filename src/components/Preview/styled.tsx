import styled from 'styled-components';
import {List, Image, Button} from 'antd';
import {Col} from 'antd';

const PreviewColorsHeader = styled.div`
    background: #000;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin: auto;
    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
    
    .ant-image {
        width: 45px;
        height: 45px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media screen and (max-width: 1367px) {
        width: 28px;
        height: 28px;
        top: -16px;
        .ant-image {
            width: 28px;
            height: 28px;
        }
    }
`;

const PreviewColorProductIcon = styled(Image)`
    width: 30px;
    height: 30px;
    
    @media screen and (max-width: 1367px) {
        width: 16px;
        height: 16px;
    }
`;

const PreviewColorButtonsList = styled(List)`
    margin-bottom: 10px;
    
    .ant-list-empty-text  {
        display: none;
    }
    
    .ant-list-header, .ant-list-footer {
        border: none;
        text-align: center;
        padding: 10px 16px !important;
    }
    
    .ant-list-items {
        display: flex;
        justify-content: flex-start;
        
        .ant-list-item {
            width: 50%;
            border-bottom: none!important; 
            padding: 0px 10px;
            span {
                width: 100%;
            }
            
            &.edit-color-action {
                justify-content: center;
                
                button.ant-btn {
                    width: 50%;
                }
            }
            
            .ant-btn {
                box-shadow: 1px 1px black;
                color: #000000;
            }
            
            .ant-btn:hover {
                color: #ffffff;
            }
        }
    }
    
    .ant-btn {
        line-height: 22px;
        font-size: 10px;
        padding: 5px 7px;
    }

    @media screen and (max-width: 1367px) {
        .ant-list-header {
            padding: 5px 16px !important;
        }
        
        .ant-list-footer {
            font-size: 10px
        }
        
        .ant-btn {
            font-size: 10px;
            padding: 5px 7px;
        }
    }
    
     @media screen and (max-width: 1440px) {
        
        .ant-list-footer {
            font-size: 8px;
            padding: 6px 12px !important;
        }
     }
`;

interface PreviewColorButtonProps {
    active: boolean | string;
}

const PreviewColorButton = styled(Button)`
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000 !important;
    border-color: #e4201b;
    
    &:hover, &:focus {
        border-color: #e4201b;
        background: #e4201b;
        color: #ffffff;
    }
  
    @media screen and (max-width: 1440px) {
        font-size: 12px;
        height: 32px;
    }
    
    @media screen and (max-width: 1367px) {
        height: 32px;
    }
`;

const PreviewColorHexCircle = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
`;

const LayerStackWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: auto;
    flex-direction: column;
    position: relative;
    z-index: 0;
    
    // IE 10 and 11
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        display: -ms-inline-grid;
    }
`;

const SvgLayer = styled.svg`
    position: absolute;
    top: 0;
    z-index: 2;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    mix-blend-mode: multiply;
    
    //IE 9 and down
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    
    // IE 10 and 11
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        opacity: 0.5;
    }
`;

const Embed = styled.object`
    width: 100%;
    height: 82vh;
    
    &.uniform {
        height: 41vh;
    }
    
    @supports (-webkit-touch-callout: none) {
        height: 100%!important;
        
        &.uniform {
            height: 100%!important;
        }
    }
`
const ColStyle = styled(Col)`
   
      @media screen and (max-width: 520px) {
        // max-height:70vh;
        // overflow-y: scroll; 
    }
`


export {
    PreviewColorsHeader,
    PreviewColorProductIcon,
    PreviewColorButtonsList,
    PreviewColorHexCircle,
    PreviewColorButton,
    LayerStackWrapper,
    SvgLayer,
    Embed,
    ColStyle,
};
