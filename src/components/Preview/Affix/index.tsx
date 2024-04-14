import React, {useEffect} from 'react';
import {Affix} from 'antd';

type PreviewAffixProps = {
    children?: React.ReactNode; // You can include any other props here as needed
};
const PreviewAffix: React.FC<PreviewAffixProps> = ({ children }) => {
    useEffect(() => {
        // window.addEventListener("scroll", function (event) {
        //     const supportPageOffset = window.pageXOffset !== undefined;
        //     const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        //     const scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        //     const body = document.body;
        //     const html = document.documentElement;
        //     const footer = document.getElementsByTagName('footer').item(0);
        //     const productEditorContainer = document.getElementById('product-editor-container');
        //     const productPreviewWrapper = document.getElementsByClassName('product-preview-wrapper').item(0);
        //     const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        //     const windowHeight = window.innerHeight;
        //     // @ts-ignore
        //     const footerHeight = Math.max(footer.scrollHeight, footer.offsetHeight);
        //     // @ts-ignore
        //     const editorHeight = Math.max(productEditorContainer.scrollHeight, productEditorContainer.offsetHeight);
        //     // @ts-ignore
        //     const previewHeight = Math.max(productPreviewWrapper.scrollHeight, productPreviewWrapper.offsetHeight);
        //     const previewMargin = (windowHeight - previewHeight);
        //     if (scrollTop >= documentHeight - windowHeight - footerHeight + previewMargin) {
        //         // @ts-ignore
        //         productPreviewWrapper.classList.add("footer-reached");
        //     } else {
        //         // @ts-ignore
        //         productPreviewWrapper.classList.remove("footer-reached");
        //     }
        // });
    })
    return (
        <Affix offsetTop={0} className="product-preview-wrapper" style={{display: 'block'}}>
            {children}
        </Affix>
    )
};

export default PreviewAffix;
