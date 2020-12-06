import React, { ChangeEvent } from 'react'

import './DatePicker.scss'

interface IDatePickerProps {
  title: string
  placeholder?: string
  value?: string
  name?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  title,
  value,
  name,
  onChange,
}) => {
  const defaultDate = new Date().toISOString().slice(0, 10)
  return (
    <>
      <label className="date-picker__label" htmlFor={name}>
        {title}
      </label>
      <input
        className="date-picker__input"
        type="date"
        name={name}
        id={name}
        value={value || defaultDate}
        onChange={onChange}
      />
    </>
  )
}
