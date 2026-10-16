export function isValidName(name) {
    return normalizeName(name).length > 0;
}

export function isValidAge(age) {
    return age >= 0 && Number.isInteger(age);
}

export function normalizeName(name) {
    return name.trim();
}

export function isValidArray(users) {
    return Array.isArray(users);
}