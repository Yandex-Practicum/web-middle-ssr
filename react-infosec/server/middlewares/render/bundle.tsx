import htmlescape from 'htmlescape';
import cfg from 'lib/cfg';
import React from 'react';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';

import vendorsMeta from 'webpack/config/vendors-meta';

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
    data: AppData;
}

function getPageHtml(params: PageHtmlParams) {
    const {bundleName, bundleHtml, data} = params;
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
                {vendorsMeta.hasJs && <script nonce={data.nonce} src={`${vendorsFilePath}.js`}/>}
                <script nonce={data.nonce} src={`${bundleFilePath}.ru.js`}/>
                <script
                    nonce={data.nonce}
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
    data: AppData;
    location: string;
}

export default ({bundleName, data}: RenderBundleArguments) => {
    const Bundle = getBundle(bundleName, 'ru');

    if (!Bundle) {
        throw new Error(`Bundle ${bundleName} not found`);
    }

    const bundleHtml = renderToString(
        (
            <Bundle data={data}/>
        ),
    );

    return {
        html: getPageHtml({
            bundleName,
            bundleHtml,
            data,
        }),
    };
};
