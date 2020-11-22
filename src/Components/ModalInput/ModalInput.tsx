import React from 'react'

import './ModalInput.scss'

interface IModalInputProps {
  title: string
  placeholder?: string
}

export const ModalInput: React.FC<IModalInputProps> = ({
  title,
  placeholder,
}) => {
  const modalInputId = 'modalInput'
  return (
    <>
      <label className="modal-input__label" htmlFor={modalInputId}>
        {title}
      </label>
      <input
        className="modal-input__input"
        type="text"
        name={modalInputId}
        id={modalInputId}
        autoComplete="off"
        placeholder={placeholder}
      />
    </>
  )
}
