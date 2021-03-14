import {routerMiddleware} from 'connected-react-router';
import {StoreOptions} from 'core';
import {createBrowserHistory, createMemoryHistory} from 'history';
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
import routerReducer from 'client/reducers/router';
import isServer from 'client/utils/serverSide/isServerEnvCheker';

function configureStore(reducers = {}, initialState = {}, options?: StoreOptions) {
    const {isLogger, router} = options || ({} as StoreOptions);

    const history = !isServer
        ? createBrowserHistory()
        : createMemoryHistory({initialEntries: router?.initialEntries || ['/']});

    const middlewares: Middleware[] = [
        thunkMiddleware,
        routerMiddleware(history),
    ];

    if (!isServer && process.env.NODE_ENV !== config.__PROD__ && isLogger) {
        const logger = createLogger({collapsed: true});
        middlewares.push(logger);
    }

    const store = createStore(
        combineReducers({
            ...reducers,
            router: routerReducer(history),
        }),
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

    return {store, history};
}

export default configureStore;
