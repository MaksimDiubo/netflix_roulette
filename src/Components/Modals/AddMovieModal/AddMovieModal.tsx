import React from 'react'

import {
  Modal,
  ModalInput,
  ModalDatePicker,
  ModalSelect,
} from '../../../Components'

interface IAddMovieModalProps {
  isOpen: boolean
  visibilityToggle: () => void
}

export const AddMovieModal: React.FC<IAddMovieModalProps> = ({
  isOpen,
  visibilityToggle,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="submit"
      cancelBtnText="reset"
      onOk={visibilityToggle}
      onCancel={visibilityToggle}
    >
      <ModalInput title="title" placeholder="Title here" />
      <ModalDatePicker title="release date" />
      <ModalInput title="movie url" placeholder="Movie URL here" />
      <ModalSelect />
      <ModalInput title="overview" placeholder="Overview here" />
      <ModalInput title="runtime" placeholder="Runtime here" />
    </Modal>
  )
}
