/**
 * Check a valid name
 * @param {string} name 
 * @returns {boolean}
 */
export function isValidName(name) {
    return normalizeName(name).length > 0;
}

/**
 * Check valid age.
 * @param {number} age
 * @returns {boolean}
 */
export function isValidAge(age) {
    return age >= 0 && Number.isInteger(age);
}

/**
 *  Remove blank spaces from a name
 * @param {string} name 
 * @returns {string}
 */
export function normalizeName(name) {
    return name.trim();
}

/**
 * Check valid array
 * @param {unknown} users 
 * @returns {boolean}
 */
export function isValidArray(users) {
    return Array.isArray(users);
}