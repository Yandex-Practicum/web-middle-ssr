import vendorsManifest from 'webpack/vendors-manifest.json';

const files = Object.keys(vendorsManifest.content);

export default {
    name: vendorsManifest.name,
    hasJs: files.findIndex(file => file.endsWith('.js')) > -1,
    hasCss: files.findIndex(file => file.endsWith('.css')) > -1,
};
