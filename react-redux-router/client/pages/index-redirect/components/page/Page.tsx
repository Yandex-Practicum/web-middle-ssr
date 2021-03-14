import React from 'react';
import {Redirect} from 'react-router-dom';

import {ROUTES} from 'client/routes';

const Page = () => {
    return <Redirect to={ROUTES.HELLO.INDEX}/>;
};

export default Page;
