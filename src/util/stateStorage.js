const STORAGE_KEY = '_ms2_dps_calc_state'

export const getState = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {}
};

export const saveState = (state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};