import './files/gif';
import './files/jpeg';
import './files/jpg';
import './files/png';
import './files/svg';
import './files/webp';
import './files/styles';
import './vendors-manifest';
import './global';

declare global {
    namespace Express {
        interface Request {
            /** Logger instance associated with current request */
            logger: () => void;
        }

        interface Response {

            /**
             * Renders bundle to html, then sends it
             * or performs redirect if necessary
             */
            // tslint:disable-next-line:no-any
            renderBundle(bundleName: string, data?: AppData): void;
        }
    }
}
