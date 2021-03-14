import React, {ErrorInfo} from 'react';

import {Props, State} from './types';

const {__PROD__} = process.env;

export default class ErrorBoundary extends React.PureComponent<Props, State> {
    public state: State = {
        error: null,
        errorInfo: null,
    };

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({error, errorInfo});
    }

    public render() {
        const {children} = this.props;

        if (!__PROD__ && this.state.errorInfo) {
            return (
                <>
                    <h2>Что-то пошло не так.</h2>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </>
            );
        }

        return children;
    }
}
