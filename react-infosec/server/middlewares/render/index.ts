import cfg from 'lib/cfg';

/* eslint-disable global-require */
export default cfg.render && cfg.render.isHot
    ? require('./hot').default
    : require('./render').default;
/* eslint-enable global-require */
