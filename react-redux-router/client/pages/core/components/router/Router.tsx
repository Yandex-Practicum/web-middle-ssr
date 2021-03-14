import React from 'react';
import {Switch} from 'react-router';

import Hello from 'client/pages/hello';
import IndexRedirect from 'client/pages/index-redirect';

const Router = () => {
    return (
        <Switch>
            {Hello}
            {IndexRedirect}
        </Switch>
    );
};
export default Router;
