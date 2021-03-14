declare module 'webpack/vendors-manifest.json' {
    interface Meta {
        exportsType: string;
        providedExports: boolean | string[];
    }

    interface Vendor {
        id: string;
        buildMeta: Meta;
    }

    interface Content {
        [vendorId: string]: Vendor;
    }

    interface VendorsManifest {
        content: Content;
        name: string;
    }

    const vendorsManifest: VendorsManifest;

    export default vendorsManifest;
}
