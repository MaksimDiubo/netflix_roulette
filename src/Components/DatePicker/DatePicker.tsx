import React from 'react'

import './DatePicker.scss'

interface IDatePickerProps {
  title: string
  placeholder?: string
  value?: string
}

export const DatePicker: React.FC<IDatePickerProps> = ({ title, value }) => {
  const defaultDate = new Date().toISOString().slice(0, 10)
  const datePickerId = 'datePickerId'
  return (
    <>
      <label className="date-picer__label" htmlFor={datePickerId}>
        {title}
      </label>
      <input
        className="date-picer__input"
        type="date"
        name={datePickerId}
        id={datePickerId}
        value={value || defaultDate}
      />
    </>
  )
}
