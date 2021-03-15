import React from 'react';
import Helmet from 'react-helmet';

import {OG} from './consts';

function Meta() {
    return (
        <Helmet>
            <title>{OG.title}</title>

            <meta name="description" content={OG.description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={OG.title}/>
            <meta property="og:description" content={OG.description}/>
            <meta property="og:image" content={OG.image}/>
            <meta property="og:site_name" content="Яндекс.Практикум"/>
            <meta name="title" content={OG.title}/>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        </Helmet>
    );
}

export default Meta;
