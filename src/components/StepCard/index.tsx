import React from 'react';
import {Card} from './styled';
import Heading from "./Heading";

interface StepCardProps {
    number?: number;
    title?: string;
    color?: {
        bodyBackground?: string;
        background?: string;
        text?: string;
        paddingBottom?:string;
    };
    id?: string;
    extra?: React.ReactNode;
    children?: React.ReactNode;
    innerRef?: any;
    hideTitle?: boolean;
}

const StepCard = (
    {
        number,
        title,
        color,
        children,
        innerRef,
        hideTitle,
        id,
        extra,
        ...rest
    }: StepCardProps) =>
    <Card
        id={id}
        title={<Heading
            headingRef={innerRef}
            number={number}
            title={title}
            color={color}
            rightExtra={extra}
            hideTitle={hideTitle}
        />}
        {...rest}
    >
        {children}
    </Card>;

export default StepCard;