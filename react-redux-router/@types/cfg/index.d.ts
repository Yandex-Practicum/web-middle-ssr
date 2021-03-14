declare module 'cfg' {
    interface Config {
        /** API settings */
        api: {
            host: string;
            method: {};
            timeout: number;
        };

        csp?: {}; // TODO: Перед влитием

        /**
         * Option for environment detection
         */
        environment: string;

        /**
         * Options for helmet middleware
         *
         * Source code:
         * https://github.com/helmetjs/helmet
         */
        helmet?: {};

        /** Languages for which source code should be built */
        langs: string[];

        /** Render options */
        render?: {
            /** Turns hot module replacement */
            isHot: boolean;
        };

        /** Static content (built css and js, images, etc) options */
        static: {
            /** Base url for static content (e.g. https://yastatic.net/s3/project-stub/) */
            baseUrl: string;

            /** Directory for the built static content */
            dir: string;

            /** Path to frozen (version agnostic) static content (e.g. "_") */
            frozenPath: string;

            /** Directory for static files, which should be served from / */
            staticDir: string;

            /** Path to version static content (usually picked from env) */
            version: string;
        };
    }

    // eslint-disable no-use-before-define
    type RecursivePartial<T> = {
        [P in keyof T]?: RecursivePartial<T[P]>;
    };
    // eslint-enable no-use-before-define

    export type AppConfig = RecursivePartial<Config>;

    const config: Config;
    export default config;
}
