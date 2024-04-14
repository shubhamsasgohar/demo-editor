import React from 'react';
import {StepNumber, StepTitle, StepTitleExtra} from './styled';

const StepHeading = (props: any) => {
    if (props.hideTitle) {
        return null;
    }
    return (
        <React.Fragment>
            {
                props.number &&
                <StepNumber color={props.color}>Step {props.number}</StepNumber>
            }
            <StepTitle ref={props.headingRef} style={{ display: props.hideTitle ? 'none' : 'block'}}>
                <div style={{ justifyContent: 'space-between', display:'flex',width:props.rightExtra ? '100%' : '100%', alignItems: 'center' }}>
                    <p>{props.title}</p>
                </div>
            </StepTitle>

        </React.Fragment>
    )
};

export default StepHeading;