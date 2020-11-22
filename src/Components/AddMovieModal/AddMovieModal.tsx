import React from 'react'

import './AddMovieModal.scss'

import { Modal, ModalInput } from '..'

export const AddMovieModal = () => {
  return (
    <div>
      <Modal isOpen title="add movie">
        <ModalInput title="title" />
      </Modal>
    </div>
  )
}
