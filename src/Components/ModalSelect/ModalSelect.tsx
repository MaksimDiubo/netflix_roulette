import React, { useState } from 'react'
import classnames from 'classnames'

import genres from '../../data/genres.json'

import './ModalSelect.scss'

export const ModalSelect: React.FC = () => {
  const [isCheckboxesOpen, setIsCheckboxesOpen] = useState(false)
  const visibilityToggle = () => {
    setIsCheckboxesOpen(!isCheckboxesOpen)
  }

  return (
    <div className="modal-select">
      <h3 className="modal-select__label">genre</h3>
      <div className="modal-select__field">
        <span className="modal-select__placeholder">Select genre</span>
        <button
          className={classnames({
            'modal-select__btn': true,
            'modal-select__btn_rotate': isCheckboxesOpen,
          })}
          onClick={visibilityToggle}
        ></button>
      </div>
      {isCheckboxesOpen ? (
        <div className="modal-select__checkboxes">
          {genres.genres.map((item) => {
            return (
              <label
                key={item.id}
                className="modal-select__checkbox-container"
                htmlFor={item.id}
              >
                <input
                  className="modal-select__checkbox"
                  type="checkbox"
                  id={item.id}
                />
                <span className="modal-select__checkmark"></span>
                {item.genre}
              </label>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
