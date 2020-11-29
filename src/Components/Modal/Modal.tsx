import React from 'react'

import { Button } from '../../Components'

import './Modal.scss'

interface IModalProps {
  isOpen: boolean
  title: string
  okBtnText?: string
  cancelBtnText?: string
  onOk?: () => void
  onReset?: () => void
  onClose?: () => void
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  title,
  okBtnText,
  cancelBtnText,
  onOk,
  onReset,
  onClose,
  children,
}) => {
  return isOpen ? (
    <div className="overlay">
      <div className="modal">
        <button className="modal__close-btn" onClick={onClose}></button>
        <h2 className="modal__title">{title}</h2>
        <div className="modal__content">{children}</div>
        <div className="modal__controls">
          {cancelBtnText ? (
            <Button variant="outlined" onClick={onReset}>
              {cancelBtnText}
            </Button>
          ) : null}
          {okBtnText ? <Button onClick={onOk}>{okBtnText}</Button> : null}
        </div>
      </div>
    </div>
  ) : null
}
