import {actions as metaActions} from 'client/reducers/meta';
import {actions as routerActions} from 'client/reducers/router';
import store from 'client/utils/infrastructure/store';

export const pure = {
    router: routerActions,
    meta: metaActions,
};
export const bound = store.bindActions(pure);
