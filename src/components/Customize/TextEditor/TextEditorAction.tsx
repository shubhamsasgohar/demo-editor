
export const  TEXT_CURVED = "text-curved"

export const isTextOrCurvedText = (object:any) =>{
  return  (object.type === "text" || object.type === TEXT_CURVED );
}

export const GetActiveObjectProperties = (canvas:any)=>{
    if(canvas){
        let activeObject = canvas.getActiveObject();
        if (typeof activeObject !== "undefined" && typeof activeObject?._objects !== "undefined" && activeObject?._objects.length > 0) {
            activeObject = activeObject[0]
        }  
        return activeObject
    }else{
        return false;
    }   
}