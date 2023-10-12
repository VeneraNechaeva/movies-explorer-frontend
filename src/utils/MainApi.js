class MainApi {
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
        return Promise.reject({ code: res.status, msg: res.json() });
      })
  }

  // Функция для регистрации пользователя
  register(name, email, password) {
    return this._sendRequest(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { ...this._headers, ...{ 'Content-Type': 'application/json' } },
      body: JSON.stringify({ name, email, password })
    })
  };

  // Функция для авторизации пользователя
  login(email, password) {
    return this._sendRequest(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { ...this._headers, ...{ 'Content-Type': 'application/json' } },
      body: JSON.stringify({ email, password })
    })
  };

  // Получить информацию о пользователе с сервера
  getUserInformation() {
    return this._sendRequest(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
  }

  // Удаление токена из куки
  signOut() {
    return this._sendRequest(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers
    })
  }

  // Сохранить информацию о пользователе на сервере
  savetUserInformation(name, email) {
    return this._sendRequest(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: { ...this._headers, ...{ 'Content-Type': 'application/json' } },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
  }

  saveMovie(movie) {
    return this._sendRequest(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie)
    })
  }

  getMovie() {
    return this._sendRequest(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers
    })
  }

  deletMovie(movieId) {
    return this._sendRequest(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }
}

// Создание экземпляров класса Api
export const api = new MainApi({
  baseUrl: 'https://api.movies.nechaeva.nomoredomainsicu.ru',
  // baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});