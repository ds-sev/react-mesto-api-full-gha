import PopupWithForm from './PopupWithForm'

function SignOutConfirmationPopup({ isOpen, onClose, signOut, btnText }) {

  function handleSubmit(evt) {
    evt.preventDefault()
    signOut()
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={btnText}
      onSubmit={handleSubmit}
      isValid={true}
      theme='edit-form__title_small-margin-bottom'
    />
  )
}

export default SignOutConfirmationPopup