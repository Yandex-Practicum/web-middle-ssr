type AppEnv = 'development' | 'testing' | 'production';

export const env: AppEnv = (process.env.NODE_ENV as AppEnv) || 'development';

export const ENVS = {
    __DEV__: env === 'development',
    __PROD__: env === 'production',
    __TEST__: env === 'testing',
};
export const GLOBAL_ARGS = {
    ...ENVS,
    'process.env': {
        ...ENVS,
        NODE_ENV: JSON.stringify(env),
        PORT: process.env.PORT || 4007,
    },
};
