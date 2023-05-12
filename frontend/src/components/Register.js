import { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Register({ onRegister, title, btnText }) {

  const [regFormValue, setRegFormValue] = useState({
    email: '',
    password: '',
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setRegFormValue({
      ...regFormValue, [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onRegister(regFormValue)
  }

  return (
    <>
      <Header btnText="Войти"
              btnLink="/signin"
              hideButton="header__burger-btn_hide"
              hideEmail="header__email_hide" />
      <div className="sign-page">
        <h3 className="sign-page__title">{title}</h3>
        <form onSubmit={handleSubmit}>
          <div className="sign-page__inputs-container">
            <label>
              <input
                name="email"
                type="email"
                value={regFormValue.email || ''}
                onChange={handleChange}
                className="sign-page__input-field"
                placeholder="Email"
                minLength="2"
                maxLength="30"
                required
              />
            </label>
            <label>
              <input
                name="password"
                type="password"
                value={regFormValue.password || ''}
                onChange={handleChange}
                className="sign-page__input-field"
                placeholder="Пароль"
                minLength="6"
                maxLength="30"
                required
              />
            </label>
          </div>
          <button
            className={`edit-form__button-save sign-page__button button `}
            type="submit"
          >
            {btnText}
          </button>
        </form>
        <span className="sign-page__hint">Уже зарегистрированы?<Link to="/signin" className="link"
        >Войти</Link></span>
      </div>
    </>
  )
}

export default Register