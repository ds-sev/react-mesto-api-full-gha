import Header from './Header'
import { useState } from 'react'

function Login({ onLogin, title, btnText }) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormValue({
      ...formValue, [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onLogin(formValue)
  }

  return (
    <>
      <Header btnText="Регистрация"
              btnLink="/signup"
              hideButton="header__burger-btn_hide"
              hideEmail="header__email_hide" />
      <div className="sign-page">
        <h3 className="sign-page__title">{title}</h3>
        <form onSubmit={handleSubmit}>
          <div className="sign-page__inputs-container">
            <label>
              <input
                value={formValue.email || ''}
                onChange={handleChange}
                type="email"
                className="sign-page__input-field"
                placeholder="Email"
                name="email"
                minLength="2"
                maxLength="30"
                required
              />
            </label>
            <label>
              <input
                value={formValue.password || ''}
                onChange={handleChange}
                type="password"
                className="sign-page__input-field"
                placeholder="Пароль"
                name="password"
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
      </div>
    </>
  )
}

export default Login