import {RouterState} from 'connected-react-router';

import meta, {MetaReducers} from './meta';
import router from './router';

export interface BaseStore {
    router: RouterState;
    meta: MetaReducers;
}

export const reducers = {
    router,
    meta,
};
