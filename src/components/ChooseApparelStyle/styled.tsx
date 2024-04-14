import styled from "styled-components";
import {Image, Button, Tabs} from "antd";
import Card from "../Card";

const ChooseTabs = styled(Tabs)`  
    .custom-tabs-pane {
        .ant-tabs-nav-list {
        
            .ant-tabs-tab-active {
                border-color : #d8d8d8cf !important;
            }
        }
        .ant-tabs-content-holder {
            overflow-y: unset;
            padding-top: 12px;
        }
    }

    .ant-tabs-content-holder {
        .ant-tabs-content {
            .ant-tabs-tabpane { 
                 height: 420px;
            }
        }
        overflow-y: scroll;
        background-color: #f3f3f7;
        padding: 0 10px 4px;
    }
    
    .ant-tabs-nav {   
        margin: 0;
         
        .ant-tabs-nav-wrap {
            .ant-tabs-nav-list {
                .ant-tabs-tab {
                    padding: 10px 20px;
                    border-color: #f3f3f7;
                    background: #fff;
                    border-width: 2px;
                    display: -ms-inline-grid;
                    display: inline-table;
                    
                    .ant-tabs-tab-btn {
                        color: #000;
                    }
                }
                .ant-tabs-tab-active {
                    background: #f3f3f7;
                }
            }
        }
        
        :before {
            border-bottom: none;
        }
    }
    
    @media screen and (max-width: 480px) {
       .ant-tabs-content {
            .ant-tabs-tabpane { 
                 height: 300px;
            }
        }
    }
    
    @media screen and (min-width: 768px) {
        .custom-tabs-pane{
            .ant-tabs-nav-list {
                width: 100%;
                overflow-x: auto;
             
                .ant-tabs-tab {
                    flex: 1;
                    text-align: center;
                }
           } 
        }
    }
`;

const CardStyle = styled(Card)`

    .product-card-image{
        height: 200px;
        width: 100%;
        padding: 2px; 
        object-fit: contain;   
    }
    @media screen and (max-width: 1440px) {
    .product-card-image{
         height: 200px;
       }
    }
    
    @media screen and (max-width: 480px) {
        .product-card-image{
           height: 110px;
         }
    }


`

const ChooseTemplate = styled(Button)`    
    @media screen and (max-width: 1440px) {
        font-size: 11px;
        padding: 5px 7px;
    }
    
    @media screen and (max-width: 1367px) {
        margin-top: 0px;
        font-size: 10px;
        padding: 2px 7px;
    }
`;

const TemplateWrapper = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: auto;
    margin: auto;
    width: 100%;
    overflow: hidden;
    padding: 0px;
`;

const TemplateImage = styled(Image)`
    height: 150px;
    width: 100%;
    padding: 10px;
    
    @media screen and (max-width: 1440px) {
       height: 135px;
    }
    
    @media screen and (max-width: 480px) {
       height: 110px;
    }
`;

const TemplateTitle = styled.div`
    white-space: normal;
    font-size: 12px;
    width: 100%;
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

export {
    ChooseTabs as Tabs,
    ChooseTemplate,
    TemplateImage,
    TemplateWrapper,
    TemplateTitle,
    CheckIcon,
    CardStyle

}
