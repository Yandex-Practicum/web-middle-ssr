import React from 'react';
import {useSelector} from 'react-redux';

import {deviceSelector} from 'client/selectors/meta';

import {Props} from './types';

const Page: Props = () => {
    const platform = useSelector(deviceSelector);

    return (
        <div>
            Hello world from <b>{platform}</b>
        </div>
    );
};

export default Page;
