import {ActionType, createAction, createReducer} from 'typesafe-actions';

export interface DeviceReducer {
    device: Nullable<'mobile' | 'desktop'>;
}

const defaultState: DeviceReducer = {
    device: null,
};

export const actions = {
    setDevice: createAction('meta/device/SET_DEVICE')<DeviceReducer['device']>(),
};

const reducer = createReducer<DeviceReducer, ActionType<typeof actions>>(defaultState)
    .handleAction(
        actions.setDevice,
        (_state, {payload}) => ({device: payload}),
    );

export default reducer;
