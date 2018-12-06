// If the last character in the value is a period, the user is in the middle of typing a number with a decimal
const LAST_CHARACTER_PERIOD_REGEX = /.*\.$/;

// If checkbox, return bool for checked
// If text input or dropdown, return value as float(isNaN == true) or text(isNaN == false)
export const getValue = (eventTarget) => {
    const val = eventTarget.value;
    const isCheckbox = eventTarget.type === 'checkbox';
    return isCheckbox
        ? eventTarget.checked
        : isNaN(val) || LAST_CHARACTER_PERIOD_REGEX.test(val) || val.length === 0 ? val : parseFloat(val);
};