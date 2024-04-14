import React, {useEffect, useState} from 'react';
import {CheckOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {
    ApparelWrapper,
    ApparelImage,
    ApparelTitle,
    CheckIcon,
    Tag
} from './styled';
import {Button, Col, Popover} from "antd";

const Card = ({placement = 'top', ...prop}: any) => {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        (!prop?.onlyHover) && setShowTooltip(prop.clicked);
    }, [prop.clicked]);

    return (
        <React.Fragment>
            <ApparelWrapper
                className={prop.className}
                onClick={prop.onClick}
            >
                {prop.tag && <Tag color={prop.TagColor ? prop.TagColor : '#6aa237'}>{prop.tag}</Tag>}
                <ApparelImage
                    className={"product-card-image"}
                    preview={false}
                    // src={editor.product.image}
                    src={prop.image}
                    style={prop.imageStyle ? prop.imageStyle : {}}

                />
                {prop.clicked && <CheckIcon>
                    <CheckOutlined/>
                </CheckIcon>}
            </ApparelWrapper>
        </React.Fragment>
    )
};

export default Card;

