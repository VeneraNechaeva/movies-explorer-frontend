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
export const concatUrl = (function concatUrl(url) { return 'https://api.nomoreparties.co' + url })

export function filterShortFilms(cards) {
    return cards.filter((card) => card.duration <= 40)
}

// Фильтр поиска фильмов
export function filterFilmsByName(filmName, cards, showAll) {
    const filmNameWords = switchToLowerCaseAndreplaceTrailingSpace(filmName).split(" ")
    if (showAll) return cards;

    const filterdCards = cards.filter((card) => {
        const nameRU = switchToLowerCaseAndreplaceTrailingSpace(card.nameRU)
        const nameEN = switchToLowerCaseAndreplaceTrailingSpace(card.nameEN)
        return hasIncludes(nameRU, filmNameWords) || hasIncludes(nameEN, filmNameWords)
    })
    return filterdCards;
}

// Поиск совпадений в массиве
function hasIncludes(string, words) {
    return words.find((word) => string.includes(word));
}

// Перевод к нижнему регистру и слияние пробелов
function switchToLowerCaseAndreplaceTrailingSpace(str) {
    return str.toLowerCase().trim().replace(/  +/g, ' ');
}

