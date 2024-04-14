import React from 'react';
import {StyledCard} from './styled';

const CustomizeCard = ({children, ...rest}: any) => {
    return (
        <StyledCard bordered={false} {...rest}>
            {children}
        </StyledCard>
    )
};

export default CustomizeCard;