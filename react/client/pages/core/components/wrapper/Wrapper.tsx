import React from 'react';
import {Helmet} from 'react-helmet';

import Hello from 'client/pages/hello';

const Wrapper = () => {
    return (
        <>
            <Helmet>
                <title>Hello</title>
                <meta name="title" content="ssr"/>
            </Helmet>

            <Hello/>
        </>
    );
};
export default Wrapper;
