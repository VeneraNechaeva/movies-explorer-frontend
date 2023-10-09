// Описание запросов к стороннему сервису beatfilm-movies
class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    // Послать запрос
    _sendRequest(url, options) {    
  
      const optionsWithToken = Object.assign({}, options);
      optionsWithToken['withCredntials'] = true;
      optionsWithToken['credentials'] = 'include';
  
      return fetch(url, optionsWithToken)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
    }}
