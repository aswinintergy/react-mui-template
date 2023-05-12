/**
 * @param {value} any
 * @returns boolean if value is valid
 */
export function isValid(value) {
    if (value === null || value === '' || value === 'null' || value === 'undefined' || value === undefined) {
        return false
    } else {
        return true
    }
}
