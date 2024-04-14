import styled from 'styled-components';
import {Col} from 'antd';
import Card from './Card';

const ColStyled = styled(Col)`
     padding: 10px 0px 10px 0;
    
    @media screen and (min-width: 1024px) {
        padding: 2px 15px 2px 0;
    }
    
     @media screen and (max-width: 420px) {
        padding: 10px 0 10px 0;
    }
`;


const AddTextCard = styled(Card)`
  @media screen and (max-width: 420px) {
        .ant-card-body {
            padding: 10px 10px 10px 10px;
        }
    }
    
`;

export {
    ColStyled as Col,
    AddTextCard
}
