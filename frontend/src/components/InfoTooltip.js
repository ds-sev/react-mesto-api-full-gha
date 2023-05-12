import Popup from './Popup'

function InfoTooltipPopup({ onClose, state }) {
  return (
    <Popup name="{name}" isOpen={state.isOpen} onClose={onClose}>
      <div className="popup__container">
        <div className="info-tooltip">
          <button
            className="button_type_close button"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          />
          <div className="info-tooltip__image" style={{ backgroundImage: `url(${state.image})` }} />
          <span className="info-tooltip__title">{state.text}</span>
        </div>
      </div>
    </Popup>
  )
}

export default InfoTooltipPopup