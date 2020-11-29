import React, { ChangeEvent } from 'react'

import './Checkbox.scss'

interface ICheckboxProps {
  genre: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  genre,
  onChange,
  defaultChecked,
}) => {
  return (
    <label className="checkbox" htmlFor={genre}>
      <input
        type="checkbox"
        id={genre}
        name={genre}
        onChange={onChange}
        defaultChecked={defaultChecked || false}
      />
      <span className="checkbox__checkmark"></span>
      {genre}
    </label>
  )
}
