import {BaseStore} from 'client/reducers';

export function makeInitialStore({meta}: BaseStore) {
    return {
        meta,
    };
}
