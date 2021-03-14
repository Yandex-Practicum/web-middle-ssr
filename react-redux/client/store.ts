import {StoreOptions} from 'core';
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
    Middleware,
} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import config from 'client/config/config';
import isServer from 'client/utils/serverSide/isServerEnvCheker';

function configureStore(reducers = {}, initialState = {}, options?: StoreOptions) {
    const {isLogger} = options || ({} as StoreOptions);

    const middlewares: Middleware[] = [
        thunkMiddleware,
    ];

    if (!isServer && process.env.NODE_ENV !== config.__PROD__ && isLogger) {
        const logger = createLogger({collapsed: true});
        middlewares.push(logger);
    }

    const store = createStore(
        combineReducers(reducers),
        initialState,
        compose(applyMiddleware(...middlewares)),
    );
    store.dispatch({type: '@@redux/INIT'});

    if ((module as any).hot) {
        (module as any).hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return {store};
}

export default configureStore;
