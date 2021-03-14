import {combineReducers} from 'redux';

import deviceReducer, {DeviceReducer, actions as deviceActions} from './device';

export interface MetaReducers {
    device: DeviceReducer;
}

export const actions = {
    device: deviceActions,
};

export default combineReducers<MetaReducers>({
    device: deviceReducer,
});
