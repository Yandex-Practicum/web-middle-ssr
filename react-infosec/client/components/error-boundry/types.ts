import {ReactNode, ErrorInfo} from 'react';

export interface State {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export interface Props {
    children: ReactNode;
}
