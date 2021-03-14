import {
    bindActionCreators,
    combineReducers,
    Action,
    Reducer,
} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {reducers, BaseStore} from 'client/reducers';
import routerReducer from 'client/reducers/router';
import configureStore from 'client/store';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const {store: reduxStore, history} = configureStore(reducers, state, {isLogger: true});

export function hasReducer(key: string): boolean {
    return !!reducers[key];
}

export function rootReducerFactory<E>(extention: E = ({} as E)) {
    const finalHash = {
        ...reducers,
        ...extention,
        router: routerReducer(history),
    };
    return combineReducers(finalHash);
}

const recombineStoreWith = <E extends Indexed<Reducer>>(extention: E) => {
    // Нужно для избежания ошибки во время HMR
    if (Object.keys(extention).every(hasReducer)) {
        return;
    }

    reduxStore.replaceReducer(rootReducerFactory(extention) as any);
    reduxStore.dispatch({type: '@@redux/RECOMBINE'});
};

function bindActions<A extends Indexed>(actions: A): A {
    return Object.keys(actions).reduce((result, key) => {
        const subObj = actions[key];

        return {
            ...result,
            [key]: typeof subObj === 'function'
                ? bindActionCreators(subObj, reduxStore.dispatch)
                : bindActions(subObj),
        };
    }, {} as A);
}

export type CommonStore = ReturnType<typeof reduxStore.getState> & BaseStore;
export type CommonThunkAction<T, R> = ThunkAction<null, T, R, Action>;

function getStore<T extends CommonStore>(): T {
    return reduxStore.getState() as T;
}

export {
    history,
    getStore,
    reduxStore,
};

export default {
    ...reduxStore,
    bindActions,
    recombineStoreWith,
};
