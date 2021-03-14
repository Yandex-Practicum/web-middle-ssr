import {BaseStore} from 'client/reducers';

export function makeInitialStore({meta}: Partial<BaseStore>) {
    return {
        meta,
    };
}
