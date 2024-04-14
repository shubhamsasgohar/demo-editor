import React, {useEffect, useState} from 'react';
import {Col, Row} from 'antd';
// import {EditorState} from "redux/editor/interfaces";
// import {useSelector} from "react-redux";
import Canvas from './Canvas';
// import EmbedFile from "./EmbedFile";
// import UploadDesign from "components/CustomDesign/UploadDesign";
// import ProductCarousel from "components/ProductCarousel";
import {ColStyle} from  './styled';



const Preview = (props: any) => {
    // const editor: EditorState = useSelector((s: any) => s.editor);
    const [selectedImage,setSelectedImage] = useState<any>('1_main')

    let relatedImagesDivMaxHeight = 400;
    let imageObject = {};

    return (
        <Row>
            <div className="related-img-wrapper">
            <ColStyle span={24} className={'custom-canves'}>
                <CondtionalCanvsRender imageObject={imageObject} selectedImage={selectedImage}  />
            </ColStyle>
            </div>
        </Row>

    )
};

export default Preview;

// conditional Rendering of canvas
const  CondtionalCanvsRender =({ imageObject ,selectedImage }:any) =>{
    return (
        <>
            {/*{imageObject && <SelectedImage selectedImage={selectedImage} imageObject={imageObject}/>}*/}
            <span id={"canvas-wraper"} className={ (selectedImage != '1_main' ) ? "hiden-canvas":"" }  >
                <Canvas/>
            </span>
        </>
    )
}
