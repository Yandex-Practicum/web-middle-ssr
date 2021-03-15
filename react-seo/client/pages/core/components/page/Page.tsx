import React from 'react';

import ErrorBoundary from 'client/components/error-boundry';

import Wrapper from '../wrapper';
import {Props} from './types';

const {__PROD__} = process.env;

const Page: Props = () => {
    return __PROD__
        ? (
            <ErrorBoundary>
                <Wrapper/>
            </ErrorBoundary>
        )
        : <Wrapper/>;
};
export default Page;
