let win;

if (typeof window !== 'undefined' && typeof window.getComputedStyle === 'function') {
    win = window;
} else {
    win = {
        getComputedStyle() {
            return {
                // eslint-disable-next-line
                getPropertyValue() {},
            };
        },
        // eslint-disable-next-line
        addEventListener() {},
    };
}

export default win;
