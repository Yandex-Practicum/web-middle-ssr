import htmlescape from 'htmlescape';
import cfg from 'lib/cfg';
import React from 'react';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

import vendorsMeta from 'webpack/config/vendors-meta';

import {reducers} from 'client/reducers';
import configureStore from 'client/store';
import {reduxStore} from 'client/utils/infrastructure/store';

import {makeInitialStore} from 'server/utils/makeInitialStore';
import {renderObject} from 'server/utils/renderObject';


function getBundle(bundleName: string, lang: string) {
    const module = `../../../ssr.bundles.${lang}`;

    if (cfg.render && cfg.render.isHot) {
        delete require.cache[require.resolve(module)];
    }

    return require(module).bundles[bundleName]; // eslint-disable-line global-require
}

interface PageHtmlParams {
    bundleName: string;
    bundleHtml: string;
    data: {};
    store: typeof reduxStore;
}

function getPageHtml(params: PageHtmlParams) {
    const {bundleName, bundleHtml, data, store} = params;
    const {baseUrl} = cfg.static;
    const bundleFilePath = `${baseUrl}${bundleName}.bundle`;
    const vendorsFilePath = `${baseUrl}_/${vendorsMeta.name}`;

    const html = renderToStaticMarkup(
        <html>
            <head>
                <link rel="icon" type="image/png" href="/favicons/favicon.png"/>
                <link rel="stylesheet" href={`${bundleFilePath}.css`}/>
                {vendorsMeta.hasCss && <link rel="stylesheet" href={`${vendorsFilePath}.css`}/>}
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{__html: bundleHtml}}/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__PRELOADED_STATE__ = ${renderObject(store.getState())}`,
                    }}
                />
                {vendorsMeta.hasJs && <script src={`${vendorsFilePath}.js`}/>}
                <script src={`${bundleFilePath}.ru.js`}/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `Client.default(${htmlescape(data)});`,
                    }}
                />
            </body>
        </html>,
    );

    return `<!doctype html>${html}`;
}

interface RenderBundleArguments {
    bundleName: string;
    data: {};
    location: string;
}

export default ({bundleName, data}: RenderBundleArguments) => {
    const Bundle = getBundle(bundleName, 'ru');

    if (!Bundle) {
        throw new Error(`Bundle ${bundleName} not found`);
    }

    const {store} = configureStore(
        reducers,
        // Через is-mobile можно узнать по юзер-агенту реальное устройство пользователя
        makeInitialStore({meta: {device: {device: 'mobile'}}}),
        {isLogger: false},
    );

    const bundleHtml = renderToString(
        (
            <Provider store={store}>
                <Bundle data={data}/>
            </Provider>
        ),
    );

    return {
        html: getPageHtml({
            bundleName,
            bundleHtml,
            data,
            store,
        }),
    };
};
