// Описание запросов к стороннему сервису beatfilm-movies
class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Послать запрос
  _sendRequest(url, options) {

    return fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject({ code: res.status, msg: res.json() });
      })
  }

  // Для получения фильмов
  getFilms() {
    return this._sendRequest(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers
    })
  }
}

// Создание экземпляров класса Api
export const apiMovies = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});