import React from 'react'

import { Modal } from '../..'

import './DeleteMovieModal.scss'

interface IDeleteMovieModalProps {
  isOpen: boolean
  visibilityToggle: () => void
}

export const DeleteMovieModal: React.FC<IDeleteMovieModalProps> = ({
  isOpen,
  visibilityToggle,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="confirm"
      onOk={visibilityToggle}
      onCancel={visibilityToggle}
    >
      <span className="delete-movie-modal__content">
        Are you shure you want to delete this movie?
      </span>
    </Modal>
  )
}
