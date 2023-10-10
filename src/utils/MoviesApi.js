// Описание запросов к стороннему сервису beatfilm-movies
class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    // Послать запрос
    _sendRequest(url, options) {    
  
      // const optionsWithToken = Object.assign({}, options);
  
      return fetch(url, options)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
    }}


    // Создание экземпляров класса Api
export const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});