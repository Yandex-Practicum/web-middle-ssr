export const ROUTES = {
    INDEX_REDIRECT: {
        INDEX: '/',
    },
    HELLO: {
        INDEX: '/hello',
        USER: {
            INDEX: '/hello/user',
            ID: '/hello/user/:id',
        },
    },
    NOT_FOUND: {
        INDEX: '*',
    },
};
