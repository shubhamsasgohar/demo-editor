import styled from 'styled-components';
import {Card} from 'antd';

const StyledCard = styled(Card)`
    border-radius: 10px 10px 0 0;
    border: 1px solid #d4d4d4;

    .ant-card-head {
        font-size: 15px !important;
        border-radius: ${(props: any) => props.title ? '10px 10px 0 0': '10px'};
        border-bottom: 2px solid #d4d4d4 !important;
        background: #eff2f8 !important;
        padding: 5px !important;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6c8895;
    }
    
    .ant-card-body {
        // border-radius: ${(props: any) => props.title ? '0 0 10px 10px': '10px'};
        border-radius: 0;
        background: #f8f9fb;
        
        .ant-input-group-wrapper:last-child {
            margin-bottom: 0;
        }
    }
        
    @media screen and (max-width: 1440px) {
        .ant-card-head {
            padding: 6px;
            font-size: 13px;
        }
        
        .ant-card-body {
            padding: 15px;
        }
    }
    
    .ant-card-head-title{
        white-space : normal
    }
        
    @media screen and (max-width: 420px) {
        .ant-card-body {
            padding: 10px 10px 0 10px;
        }
    }
`;

export {
    StyledCard
}