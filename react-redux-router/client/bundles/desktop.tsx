import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import {hydrate} from 'react-dom';
import {Helmet} from 'react-helmet';
import {hot} from 'react-hot-loader/root';
import {Provider} from 'react-redux';

import Core from 'client/pages/core';
import store, {history} from 'client/utils/infrastructure/store';

import {Props} from './types';

const Bundle: Props = props => {
    return (
        <>
            <Helmet>
                <html lang="en"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
            </Helmet>

            <Core {...props.data}/>
        </>
    );
};

export const DesktopBundle = hot(Bundle);

export default data => {
    hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <DesktopBundle data={data}/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root'),
    );
};
