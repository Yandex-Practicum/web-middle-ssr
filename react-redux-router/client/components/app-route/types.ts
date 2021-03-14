import {ReactNode, FC} from 'react';
import {RouteProps} from 'react-router';

type OwnProps = {
    componentProps?: Indexed;
    component: ReactNode;
};

export type Props = FC<RouteProps & OwnProps>;
