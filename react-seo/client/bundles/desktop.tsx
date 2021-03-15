import React from 'react';
import {hydrate} from 'react-dom';
import {hot} from 'react-hot-loader/root';

import Meta from 'client/components/meta';
import Core from 'client/pages/core';

import {Props} from './types';

const Bundle: Props = props => {
    return (
        <>
            <Meta/>
            <Core {...props.data}/>
        </>
    );
};

export const DesktopBundle = hot(Bundle);

export default data => {
    hydrate(
        <DesktopBundle data={data}/>,
        document.getElementById('root'),
    );
};
