const isServer = !(
    typeof window !== 'undefined' &&
    window.document
);

export default isServer;
