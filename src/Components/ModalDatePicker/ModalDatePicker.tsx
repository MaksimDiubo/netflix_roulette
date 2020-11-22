import React from 'react'

import './ModalDatePicker.scss'

interface IModalDatePickerProps {
  title: string
  placeholder?: string
}

export const ModalDatePicker: React.FC<IModalDatePickerProps> = ({
  title,
  placeholder,
}) => {
  const modalInputId = 'modalInputDate'
  return (
    <>
      <label className="modal-date__label" htmlFor={modalInputId}>
        {title}
      </label>
      <input
        className="modal-date__input"
        type="date"
        name={modalInputId}
        id={modalInputId}
      />
    </>
  )
}
