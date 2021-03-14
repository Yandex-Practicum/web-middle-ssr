interface Indexed<T = any> {
    [x: string]: T;
}

type Nullable<T> = T | null;
