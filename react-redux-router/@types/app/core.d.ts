declare module 'core' {
    export interface StoreOptions {
        isLogger: boolean;
        router?: {
            initialEntries: string[];
        };
    }
}
