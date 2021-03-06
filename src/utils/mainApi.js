import { BASE_URL } from './constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _returnRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getCurrentUser(token) {
    return fetch(this._baseUrl + '/users/me', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  getArticles(token) {
    return fetch(this._baseUrl + '/articles', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  saveArticle(data, searchKeyword, token) {
    // get most keys from data
    const {
      title,
      description: text,
      publishedAt: date,
      url: link,
      urlToImage: image,
    } = data;
    // get source from data object
    const source = data.source.name;
    // grab keyword with the first letter capitalized
    const keyword =
      searchKeyword.charAt(0).toUpperCase() + searchKeyword.slice(1);

    return fetch(this._baseUrl + '/articles', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  deleteArticle(articleId, token) {
    return fetch(this._baseUrl + '/articles/' + articleId, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }).then((res) => {
      return this._returnRes(res);
    });
  }
}

const api = new Api({
  baseUrl: BASE_URL
});

export default api;

// setUserInfo({ name, about }, token) {
//   return fetch(this._baseUrl + '/users/me', {
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     method: 'PATCH',
//     body: JSON.stringify({
//       name,
//       about,
//     }),
//   }).then((res) => {
//     return this._returnRes(res);
//   });
// }

// addLike(cardId, token) {
//   return fetch(this._baseUrl + '/cards/likes/' + cardId, {
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     method: 'PUT',
//   }).then((res) => {
//     return this._returnRes(res);
//   });
// }

// removeLike(cardId, token) {
//   return fetch(this._baseUrl + '/cards/likes/' + cardId, {
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     method: 'DELETE',
//   }).then((res) => {
//     return this._returnRes(res);
//   });
// }
