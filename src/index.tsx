import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Editor from './Editor';
import Editor2 from './Editor2';
import store from './store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './fonts.css';


const reduxStore = store();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={reduxStore}>
        <Editor/>
        {/*<Editor2/>*/}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
