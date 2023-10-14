export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export function isValidName(name) {
    return /^[\wа-яА-Я\s-]+$/i.test(name);
}