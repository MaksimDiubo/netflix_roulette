import React, { ChangeEvent } from 'react'

import './Input.scss'

interface IInputProps {
  title?: string
  placeholder?: string
  disabled?: boolean
  value?: string | number
  name?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<IInputProps> = ({
  title,
  placeholder,
  disabled,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <label className="input__label" htmlFor={name}>
        {title}
      </label>
      <input
        className="input__input"
        type="text"
        name={name}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
        value={value || ''}
        onChange={onChange}
      />
    </>
  )
}
