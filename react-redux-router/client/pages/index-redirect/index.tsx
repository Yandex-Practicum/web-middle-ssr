import React from 'react';

import AppRoute from 'client/components/app-route';
import {ROUTES} from 'client/routes';

import Page from './components/page';

const {INDEX_REDIRECT} = ROUTES;

export default [
    <AppRoute path={INDEX_REDIRECT.INDEX} component={Page} key={INDEX_REDIRECT.INDEX} exact/>,
];
