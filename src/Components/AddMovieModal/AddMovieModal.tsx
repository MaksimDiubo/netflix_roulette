import React from 'react'

import { Modal, Input, DatePicker, Select } from '../../Components'

interface IAddMovieModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddMovieModal: React.FC<IAddMovieModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="submit"
      cancelBtnText="reset"
      onOk={onClose}
      onReset={onClose}
    >
      {/* <Input title="title" placeholder="Title here" />
      <DatePicker title="release date" />
      <Input title="movie url" placeholder="Movie URL here" />
      <Select />
      <Input title="overview" placeholder="Overview here" />
      <Input title="runtime" placeholder="Runtime here" /> */}
    </Modal>
  )
}
