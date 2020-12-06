import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setDeleteModalOpen } from './deleteMovieSlice'
import { deleteMovie } from '../../Containers/Main/moviesSlice'

import { Modal } from '../../Components'

import './DeleteMovieModal.scss'

export const DeleteMovieModal = () => {
  const dispatch = useDispatch()
  const {
    deleteMovie: { isOpen },
  } = useSelector((state: RootState) => state)
  const {
    movies: { currentMovieId },
  } = useSelector((state: RootState) => state)

  const handleClose = () => {
    dispatch(setDeleteModalOpen(false))
  }

  const handleOk = () => {
    dispatch(setDeleteModalOpen(false))
    currentMovieId && dispatch(deleteMovie(currentMovieId))
  }

  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="confirm"
      onOk={handleOk}
      onClose={handleClose}
    >
      <span className="delete-movie-modal__content">
        Are you shure you want to delete this movie?
      </span>
    </Modal>
  )
}
