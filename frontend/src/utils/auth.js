class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
  }

  register(newUserData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: newUserData.email,
        password: newUserData.password,
      }),
    }).then(this._checkResponse)
  }

  login(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    }).then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          return data
        }
      })
  }

  logout() {
    return fetch(`${this._baseUrl}/sign-out`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse)
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    }).then(this._checkResponse)
  }

}

const auth = new Auth({
  baseUrl: 'https://api.mesto.litvinenko-d.nomoredomains.monster',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default auth