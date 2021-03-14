import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

export const deviceSelector = createSelector(
    (state: CommonStore) => state.meta.device.device,
    device => device,
);
