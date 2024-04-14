import 'regenerator-runtime/runtime';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducer';
import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
        config: any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const mode = 'development';
const composeEnhancers = (mode === 'development' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);

export default function configStore(initialState = {}):any {
    const store = createStore(
        reducer,
        initialState,
        enhancer,
    );
    return {
        ...store,
        runSaga: sagaMiddleware.run(sagas),
    };
}
