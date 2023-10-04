// Функция для перевода формата duration
export const timeFormat = (function () {
    function num(val) {
        return Math.floor(val);
    }

    return function (durationMinutes) {
        const hours = durationMinutes / 60 % 24
        const minutes = durationMinutes % 60

        return num(hours) + "ч " + num(minutes) + "м";
    };
})();



// Функция для добавления к url URL сервера — https://api.nomoreparties.co/
export const concatUrl = (function concatUrl(url) {return 'https://api.nomoreparties.co' + url})

