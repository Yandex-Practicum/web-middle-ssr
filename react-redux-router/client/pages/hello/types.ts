import {RouteComponentProps} from 'react-router';

export interface RouterProps {
    id?: string;
}

export type RouteProps = RouteComponentProps<RouterProps>;
