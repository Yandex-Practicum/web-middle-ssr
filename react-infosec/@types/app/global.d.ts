interface Indexed<T = any> {
    [x: string]: T;
}

interface AppData {
    faviconLang: 'ru' | 'en';
    ip: string;
    nonce: string;
    csrfToken: string;
    resHeaders: Indexed;
}
