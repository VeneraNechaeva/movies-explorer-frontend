// Функция, которая проверяет ответ сервера
export  function request(url, options) {
    // принимает два аргумента: урл и объект опций, как и `fetch`
    return fetch(url, options).then(checkResponse)
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.json().then((text) => {
        return {status: res.status, body: text}
    }
     ));
}

