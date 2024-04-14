import styled from 'styled-components';
import {Col} from 'antd';

const Container = styled.div`
    // border-top: 1px solid #ddd;
  .price-chart-row {
    margin-bottom: 3px;
  }
`;

const PreviewWrapper = styled(Col)`
    background: #f9fafc;
    border-right: 1px solid #edeef0;
`;

const StepsWrapper = styled(Col)`
    
`;

export {
    Container,
    PreviewWrapper,
    StepsWrapper
}