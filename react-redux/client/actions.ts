import {actions as metaActions} from 'client/reducers/meta';
import store from 'client/utils/infrastructure/store';

export const pure = {
    meta: metaActions,
};
export const bound = store.bindActions(pure);
