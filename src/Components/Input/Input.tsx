import React from 'react'

import './Input.scss'

interface IInputProps {
  title?: string
  placeholder?: string
  disabled?: boolean
  value?: string
}

export const Input: React.FC<IInputProps> = ({
  title,
  placeholder,
  disabled,
  value,
}) => {
  const inputId = 'input'
  return (
    <>
      <label className="input__label" htmlFor={inputId}>
        {title}
      </label>
      <input
        className="input__input"
        type="text"
        name={inputId}
        id={inputId}
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
    </>
  )
}
