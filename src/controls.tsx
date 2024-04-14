import {
    Bottom,
    Left,
    MaximizeLeft,
    Right,
    Rotate,
    Top,
    Close,
    Trash,
    Copy,
    Refresh
} from "./icons";


const buildControls = (fabric: any) => {
    const controls = fabric.Object.prototype.controls;


    const cornerSize = 16;

    function renderControlIcon(svg: string, fadeOpacity: number = 1) {
        const img = document.createElement('img');
        img.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
        return function renderControlIcon(ctx: any, left: any, top: any, styleOverride: any, fabricObject: any) {
            const isHovered =
              fabricObject.__corner === "mt" ||
              fabricObject.__corner === "mb" ||
              fabricObject.__corner === "ml" ||
              fabricObject.__corner === "mr";
            const isActive =
              fabricObject.__corner === "tl" ||
              fabricObject.__corner === "tr" ||
              fabricObject.__corner === "bl" ||
              fabricObject.__corner === "br" ||
              fabricObject.__corner === "mtr";
            const isMoving =
              fabricObject.isControlVisible &&
              fabricObject.isControlVisible("tl") &&
              fabricObject.isMoving;

            const opacity = isHovered || isActive || isMoving ? 0.3 : fadeOpacity;

            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(img, -cornerSize / 2, -cornerSize / 2, cornerSize, cornerSize);
            ctx.restore();
        }
    }

    fabric.Object.prototype.controls.DeleteAction = new fabric.Control({
        x: 0,
        y: -0.5,
        offsetY: -30,
        offsetX: 0,
        cursorStyle: 'pointer',
        mouseDownHandler: function (eventData: any, transform: any, x: any, y: any) {
            const target = transform.target;
            const canvas = target.canvas;
            if (target._objects) {
                canvas.remove(...target._objects);
                (target?.isSvg) && canvas.remove(target);
            } else {
                var NotRequiredId=target.id;
                var requiredId="";
                if(target.id == "playerNumberBack"){
                    requiredId="playerNumberFront";
                }else if(target.id == "playerNumberFront"){
                    requiredId="playerNumberBack";
                }
                canvas.remove(target);
                if(requiredId){
                    var requiredObject = canvas._objects.find((o:any) => o.id === requiredId);
                    if(requiredObject){
                        requiredObject.set("NotRequired",NotRequiredId);
                    }
                }
            }
            canvas.discardActiveObject();
            canvas.requestRenderAll();

        },
        cornerSize: 20,
        render: renderControlIcon(Trash),
    });

    fabric.Object.prototype.controls.tl = new fabric.Control({
        ...controls.tl,
        render: renderControlIcon(MaximizeLeft),
    });

    fabric.Object.prototype.controls.bl = new fabric.Control({
        x: controls.bl.x,
        y: controls.bl.y,
        cursorStyle: 'pointer',
        mouseDownHandler: function (eventData: any, transform: any, x: any, y: any) {
            const target = transform.target;
            const canvas = target.canvas;
            if (target._objects) {
                for (const obj of target._objects) {
                    obj.clone((cloned: any) => {
                        cloned.left = 10;
                        cloned.top = 10;
                        if(obj?.fillColor){
                            cloned.fillColor = obj.fillColor;
                        }
                        if(obj?.strokeColor){
                            cloned.strokeColor = obj.strokeColor;
                        }
                        if(obj.id.substring(0,8) == 'moreText'){
                            var randNum= Math.floor(Math.random() * (100 - 10 + 1) + 10)
                            cloned.id = obj.id+""+randNum;
                        }else{
                            cloned.id = obj.id;
                        }
                        // cloned.id = (cloned?.id) ? cloned.id : obj.id;
                        cloned.isCloned=true;
                        canvas.add(cloned);
                    });
                }
                canvas.discardActiveObject();
            } else {
                target.clone((cloned: any) => {
                    cloned.left += 10;
                    cloned.top += 10;
                    if(target?.fillColor){
                        cloned.fillColor = target.fillColor;
                    }
                    if(target?.strokeColor){
                        cloned.strokeColor = target.strokeColor;
                    }
                    if(target.id.substring(0,8) == 'moreText'){
                        var randNum= Math.floor(Math.random() * (100 - 10 + 1) + 10)
                        cloned.id = target.id+""+randNum;
                    }else{
                        cloned.id = target.id;
                    }
                    cloned.isCloned=true;
                    canvas.add(cloned);
                    canvas.setActiveObject(cloned);
                });
            }
            canvas.requestRenderAll();
        },
        render: renderControlIcon(Copy),
    });

    fabric.Object.prototype.controls.br = new fabric.Control({
        ...controls.br,
        render: renderControlIcon(MaximizeLeft),
    });

    fabric.Object.prototype.controls.mt = new fabric.Control({
        ...controls.mt,
        render: renderControlIcon(Top),
    });

    fabric.Object.prototype.controls.mb = new fabric.Control({
        ...controls.mb,
        render: renderControlIcon(Bottom),
    });

    fabric.Object.prototype.controls.ml = new fabric.Control({
        ...controls.ml,
        render: renderControlIcon(Left),
    });

    fabric.Object.prototype.controls.mr = new fabric.Control({
        ...controls.mr,
        render: renderControlIcon(Right),
    });

    fabric.Object.prototype.controls.mtr = new fabric.Control({
        ...controls.mtr,
        offsetY: -60,
        render: renderControlIcon(Rotate),
    });

    fabric.Object.prototype.controls.tr = new fabric.Control({
        // x: 0,
        // y: -0.5,
        // offsetY: -30,
        // offsetX: 0,
        x: controls.tr.x,
        y: controls.tr.y,
        cursorStyle: 'pointer',
        mouseUpHandler: (eventData: any, transform: any) => {
            if(transform){
                let target = transform.target;

                const text = target.text;
                if(text.includes("\n")){
                    target.text = text.replace(/\n/g," ");
                    target.textType = "singleLine";
                }else{
                    target.text = text.replace(/ /g,"\n");
                    target.textType = "multiLine";
                }
                const canvas = target.canvas;
                if (canvas) {
                    canvas.requestRenderAll();

                }
            }
        },
        render: renderControlIcon(Refresh),
        // render: renderIcon(refreshIcon),
        // cornerSize: 20
    });
}

export default buildControls;
