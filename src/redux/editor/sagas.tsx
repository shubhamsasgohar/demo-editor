const packageData = (object: any) => Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
}, new FormData());



function* watchers() {
   
}



export default watchers;
