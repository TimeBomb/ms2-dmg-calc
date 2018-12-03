export const toNumber = (str) => {
    return isNaN(str) ? str : parseFloat(str);
};