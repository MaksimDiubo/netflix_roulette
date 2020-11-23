import React, { useState, useEffect, ChangeEvent } from 'react'
import classnames from 'classnames'

import genres from '../../../data/genres.json'
import { visibilityToggle } from '../../../utils/utils'

import './ModalSelect.scss'

interface IModalSelectProps {
  checkedItems?: string
}

export const ModalSelect: React.FC<IModalSelectProps> = ({ checkedItems }) => {
  const [isCheckboxesOpen, setIsCheckboxesOpen] = useState(false)
  const [checkedGenres, setCheckedGenres] = useState(
    checkedItems?.split(',') || []
  )

  useEffect(() => {})

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setCheckedGenres((genres) => [
          ...genres,
          event.target.name.toLowerCase(),
        ])
      : setCheckedGenres(
          checkedGenres.filter(
            (genre) => genre !== event.target.name.toLowerCase()
          )
        )
    console.log(checkedGenres)
  }

  return (
    <div className="modal-select">
      <h3 className="modal-select__label">genre</h3>
      <div className="modal-select__field">
        <span className="modal-select__placeholder">
          {checkedGenres.length ? checkedGenres.join(', ') : 'Select genre'}
        </span>
        <button
          className={classnames({
            'modal-select__btn': true,
            'modal-select__btn_rotate': isCheckboxesOpen,
          })}
          onClick={() =>
            visibilityToggle(isCheckboxesOpen, setIsCheckboxesOpen)
          }
        ></button>
      </div>
      <div
        className={classnames({
          'modal-select__checkboxes': true,
          'modal-select__checkboxes_visible': isCheckboxesOpen,
        })}
      >
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
                name={item.genre}
                onChange={(event) => handleChecked(event)}
                defaultChecked={checkedGenres.includes(
                  item.genre.toLocaleLowerCase()
                )}
              />
              <span className="modal-select__checkmark"></span>
              {item.genre}
            </label>
          )
        })}
      </div>
    </div>
  )
}
