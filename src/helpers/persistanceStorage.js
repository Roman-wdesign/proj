export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('vue_state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Something  wrong in loadState');
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('vue_state', serializedState);
    } catch (err) {
        console.error('Something  wrong from saveState');
    }
}













