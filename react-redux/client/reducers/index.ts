import meta, {MetaReducers} from './meta';

export interface BaseStore {
    meta: MetaReducers;
}

export const reducers = {
    meta,
};
