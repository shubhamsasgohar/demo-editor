import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {EditorState} from "../../redux/editor/interfaces";
import {LayerStackWrapper, SvgLayer,} from './styled';

interface PreviewProps {
    className?: string;
}

const LayerStack = ({className}: PreviewProps) => {

    const editor: EditorState = useSelector((s: any) => s.editor);
    const editTextComponent = editor.editTextComponent;
    const [layers, setLayers]: any = useState([]);
    const [svgContent, setSvgContent] = useState('');
    const [color, setColor] = useState('#66C0D1'); // Default color

    useEffect(() => {
        fetch(`/images/${editTextComponent.style}`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "image/svg+xml");
                if(editTextComponent.svgColorId){
                    const group = doc.getElementById(editTextComponent.svgColorId);
                    if (group) {
                        group.querySelectorAll('path').forEach(path => {
                            path.style.fill = editTextComponent.layerColor; // Update the fill color of the path
                        });
                    }
                }
                const serializer = new XMLSerializer();
                setSvgContent(serializer.serializeToString(doc.documentElement));
            })
            .catch(error => console.error('Error fetching SVG:', error));
    }, [editTextComponent.style, editTextComponent.layerColor]);

    return (
        <LayerStackWrapper className={className}>
            {/*{*/}
            {/*    <img src="http://localhost:3000/images/Style2/Style2-Jersey.jpg" alt="preview-image" className="ant-image-img" />*/}
            {/*}*/}
            <div>
                <div style={{ color: color }} dangerouslySetInnerHTML={{ __html: svgContent }} />
                {/*{layers && layers.map((layer: any) => (*/}
                {/*{layers && layers.length > 0 && layers.map((layer: any) => (*/}
                {/*        <SvgLayer*/}
                {/*        key={layer.key}*/}
                {/*        className="product-svg-layer"*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        viewBox={layer.viewBox}*/}
                {/*        dangerouslySetInnerHTML={{__html: layer.pathString}}*/}
                {/*    />*/}
                {/*))}*/}
            </div>

        </LayerStackWrapper>
    )
};

export default LayerStack;
