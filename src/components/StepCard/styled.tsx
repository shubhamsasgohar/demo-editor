import styled from 'styled-components';
import {Card} from 'antd';

const StyledCard = styled(Card)`
    border: none;
    line-height : 0.1;

    .ant-card-head {
        padding: 0;
        min-height: auto;
        border: none;
        background: #d8d8d8;
        font-size: 18px
    }
    .ant-card-head-title {
        padding: 0;
        display: flex;
        font-weight: 500;
        
        span {
            white-space: nowrap;
        }
    }
    .ant-card-extra {
        padding: 0 15px;
        display: flex;    
    }
    .ant-card-body {
        padding: 5px 15px 5px 15px;
    }
    
    .ant-card-extra {
        padding: 10px 20px;
        margin: 3px;    
        a {
            color: #e4201b;
        }
    }
    
    @media screen and (max-width: 1440px) {
        .ant-card-head-title {
            font-size: 17px;
        }
    }
        
    @media screen and (max-width: 420px) {
        .ant-card-head-title {
            font-size: 15px;
        }
    }
`;

const StepNumber = styled.span`
    background: ${(props: any) => typeof props.color !== "undefined" && props.color.background ? props.color.background : '#7c9b5d'};
    color: ${(props: any) => typeof props.color !== "undefined" && props.color.text ? props.color.text : '#fff'};
    padding: 10px 25px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
        
    @media screen and (max-width: 1440px) {
        padding: 7px 20px;
    }
       
    @media screen and (max-width: 420px) {
        padding: 7px 20px;
    }
`

const StepTitle = styled.div`
    padding: 0px 20px;
    text-transform: capitalize;
    background: #d8d8d8;
    width: 100%;
    display: flex!important;
    align-items: center;
    position: relative;
         
    @media screen and (max-width: 1440px) {
        padding: 7px 20px;
    }
    
    @media screen and (max-width: 420px) {
        padding: 10px 20px;
        justify-content: space-between;
        
        span {
            white-space: nowrap;
        }
    }
`

const StepTitleExtra = styled.div`
    // position: absolute;
    // right: 0;
    // top: 50%;
    // transform: translate(-50%, -50%);
        margin: 0 0 0 auto%;
    a {
        color: #000 !important;
        font-weight: 500;
    }
    
    a:active, a:hover{
      color: #ffffff !important;
    }
    
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        top: 20px;
    }
`;

export {
    StyledCard as Card,
    StepNumber,
    StepTitle,
    StepTitleExtra,
}
