import {FC} from 'react';

import {RouteProps} from '../../types';

export type OwnProps = {
    isShowSomeThing: boolean;
};

export type Props = FC<OwnProps & RouteProps>;
