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
          return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
  
    // Получить информацию о пользователе с сервера
    getUserInformation() {
      return this._sendRequest(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers
      })
    }
  
    // // Получить начальные карточки с сервера
    // getInitialCards() {
    //   return this._sendRequest(`${this._baseUrl}/cards`, {
    //     method: 'GET',
    //     headers: this._headers
    //   })
    // }
  
    // Сохранить информацию о пользователе на сервере
    savetUserInformation(name, about) {
      return this._sendRequest(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: { ...this._headers, ...{ 'Content-Type': 'application/json' } },
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
    }
  
    // Добавить на сервер новую карточку
    addNewCard(name, link) {
      return this._sendRequest(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: { ...this._headers, ...{ 'Content-Type': 'application/json' } },
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
    }
  
    // Удаление карточки
    deletCard(cardId) {
      return this._sendRequest(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
    }
  
    // Отвечает за статус лайка
    changeLikeCardStatus(cardId, isLiked) {
      if (isLiked) { return this.setLike(cardId); }
      else { return this.deletLike(cardId); }
    }
  
    // Постановка и снятие лайка
    // Постановка лайка
    setLike(cardId) {
      return this._sendRequest(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
    }
    // Снятие лайка
    deletLike(cardId) {
      return this._sendRequest(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
    }
  
    // Обновление аватара пользователя
    changeAvatar(avatar) {
      return this._sendRequest(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: { ...this._headers, ...{ 'Content-Type': 'application/json' } },
        body: JSON.stringify({
          avatar: avatar,
        })
      })
    }
  
    // Удаление токена из куки
    signOut() {
      return this._sendRequest(`${this._baseUrl}/logout`, {
        method: 'GET',
        headers: this._headers
      })
    }
  }
  
  // Создание экземпляров класса Api
  export const api = new MainApi({
    baseUrl: 'https://api.mesto.nechaeva.nomoredomainsicu.ru',
    headers: {
      'Content-Type': 'application/json'
    }
  });