import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';

import {bound as commonActions} from 'client/actions';
import {ROUTES} from 'client/routes';
import {deviceSelector} from 'client/selectors/meta';

import {Props} from './types';

import styles from './Page.scss';

const userIDRoute = ROUTES.HELLO.USER.ID.replace(':id', '123');

const Page: Props = ({isShowSomeThing, match}) => {
    const platform = useSelector(deviceSelector);
    const {id} = match.params;

    const handleGoToUserID = useCallback(() => {
        if (id) {
            commonActions.router.push(ROUTES.HELLO.INDEX);
            return;
        }

        commonActions.router.push(userIDRoute);
    }, [id]);

    const linkText = useMemo(() => {
        return id ? 'Go to start' : 'Go to User ID';
    }, [id]);

    return (
        <div>
            <h1>Hello world from __{platform}__</h1>
            <p>Props from router:</p>
            <pre>
                {JSON.stringify({
                    isShowSomeThing,
                    match,
                })}
            </pre>

            <a className={styles.link} onClick={handleGoToUserID}>
                {linkText}
            </a>
        </div>
    );
};

export default Page;
