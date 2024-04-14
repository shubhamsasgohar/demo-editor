import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
// import {EditorState, ProductPosition} from "redux/editor/interfaces";
import LayerStack from "../LayerStack";
import {CanvasWrapper, EditorPreview, AlertMessage, EditTextWrapper} from "./styled";
import fabric from "../../../CanvasFabric";
// import actions from "redux/actions";
// import OverlayLoading from 'components/Loader/OverlayLoading';
import useWindowDimensions from "../../hooks/useWindowDimensions";
// import {isMobile, isTablet} from "react-device-detect";
// import PreviewAction from "components/Preview/PreviewAction";
// import DefaultBasketballObjects from "defaults/basketball";
// import DefaultBaseballObjects from "defaults/baseball";
// import DefaultVolleyballObjects from "defaults/volleyball";
// import CustomDesign from "components/CustomDesign";
// import TextEditor from "components/Customize/TextEditor";
// import ProductInterface from "ProductInterface";
// import {ChnageCanvasHieght,renderCanvas ,addfuctionOnload} from "actions";
// import ZoomPriview from 'components/Zoom';

import {EditorState} from "../../../redux/editor/interfaces";
import actions from "../../../redux/actions";


const Canvas = () => {

    const dispatch = useDispatch();

    const windowDimensions = useWindowDimensions();

    const editorPreviewRef = useRef(null);

    const canvasRef = useRef(null);

    const editor: EditorState = useSelector((s: any) => s.editor);

    // const canvasData = editor.canvasObject;
    const [PageLoaded, setPageLoaded] = useState(false);

    const [oldProductId , setoldProductId] = useState<any>();

    // console.log('editor.product', editor.product);
    // useEffect(()=>{
    //    changeSize(editor);
    // },[editor.product,editor.isCustomDesign, editor.isUniform,editor.relatedProduct ,  editor.canvasObject  ])

    // const changeSize = async (editorData:any) =>{
    //     if (canvasRef != null && editorPreviewRef != null && canvasData !== null ){
    //         document.querySelector("#canvas-wraper")?.classList.remove("hiden-canvas");
    //         const $cardHeader = document.querySelector('.product-preview-wrapper .ant-card-head');
    //         let editorPreviewN= ReactDOM.findDOMNode(editorPreviewRef.current);
    //         const canvasN = ReactDOM.findDOMNode(canvasRef.current);
    //         let HeightWidth = await ChnageCanvasHieght(editorPreviewN,canvasN,windowDimensions,editorData);
    //         canvasData.setWidth(HeightWidth.width);
    //         canvasData.setHeight(HeightWidth.height);
    //         canvasData.requestRenderAll();
    //     }
    // }

    const initCanvas = () => {
        const $cardHeader = document.querySelector('.product-preview-wrapper .ant-card-head');
        const editorPreviewNode = ReactDOM.findDOMNode(editorPreviewRef.current);
        const canvasNode = ReactDOM.findDOMNode(canvasRef.current);
        let currentCanvasData = {
            version: "4.3.1",
            objects: [],
        };

        if (typeof editor.canvasObject !== "undefined" && editor.canvasObject && typeof editor.canvasObject.upperCanvasEl === "object") {
            console.log('if type of currentCanvasData');
            if(currentCanvasData.objects.length <= 0){
                console.log('inner if type of currentCanvasData');
                currentCanvasData = editor.canvasObject.toJSON([
                    'id', 'subId', 'fillColor', 'strokeColor'
                ]);
                console.log('last currentCanvasData', currentCanvasData);

            }
            editor.canvasObject.dispose();
        }


        let productHeight = 793;
        let productWidth = 1064;


        let alreadyOccupiedHeight = 0;
        // @ts-ignore;
        let width = editorPreviewNode.clientWidth;

        const productWidthChangePercentage = Math.abs(100 - (width / productWidth * 100));
        let height = productHeight - (productHeight * productWidthChangePercentage / 100);

        const allowedPreviewAreaHeight = windowDimensions.height - alreadyOccupiedHeight;
        if(height > allowedPreviewAreaHeight) {
            // If the height is greater then available preview which will crop the apparel from footer so resizing the are based on it.
            console.log('product height exceeds the allowed height');
            const productHeightChangePercentage = Math.abs(100 - (allowedPreviewAreaHeight / height * 100));
            width = width - (width * productHeightChangePercentage / 100);
            height = allowedPreviewAreaHeight;
        }


        // @ts-ignore
        editorPreviewNode.style.width = `${width}px`
        // @ts-ignore
        editorPreviewNode.style.height = `${height}px`;

        // @ts-ignore;
        const canvas = new fabric.Canvas(canvasNode, {
            height,
            width,
        });

        // const currentCanvasData = editor.canvasData[editor.productPosition[editor.product.type.key]];


        canvas.loadFromJSON(currentCanvasData, canvas.renderAll.bind(canvas));
        return canvas;
    }


    //
    useEffect(() => {
        // @ts-ignore
        dispatch(actions.editorActions.setCanvasObject(initCanvas()));
    }, []);



    // @ts-ignore
    // const product: ProductInterface = editor.product;

    return (
        <React.Fragment>
            <EditorPreview
                ref={editorPreviewRef}
                id="editor-preview-container"
                data-category=""
            >

                <LayerStack className={'main-product-svgs'}/>
                <CanvasWrapper className={'trst'}>
                    <canvas ref={canvasRef}/>
                </CanvasWrapper>
            </EditorPreview>
            <>
                <AlertMessage
                    type="error"
                    message={
                        <>
                           Product Editor Demo Page, Select from a variety of styles to personalize your experience.
                        </>
                    }
                />
            </>
        </React.Fragment>
    )
};

export default Canvas;

