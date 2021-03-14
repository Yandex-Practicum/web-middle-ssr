import React, {useCallback} from 'react';
import {Route, RouteComponentProps} from 'react-router';

import ErrorBoundry from 'client/components/error-boundry';

import {Props} from './types';

const AppRoute: Props = ({componentProps, component, ...rest}) => {
    const renderContent = useCallback((routerProps: RouteComponentProps) => {
        const Component = component as any;

        return (
            <ErrorBoundry>
                <Component {...routerProps} {...componentProps}/>
            </ErrorBoundry>
        );
    }, [componentProps, component]);

    return (
        <Route
            {...rest}
            render={renderContent}
        />
    );
};

export default AppRoute;
