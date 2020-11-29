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
    deleteMovie: { isOpen, movieId },
  } = useSelector((state: RootState) => state)

  const handleClose = () => {
    dispatch(setDeleteModalOpen())
  }

  const handleOk = () => {
    dispatch(setDeleteModalOpen())
    movieId && dispatch(deleteMovie(movieId))
  }

  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="confirm"
      onOk={handleOk}
      onReset={handleClose}
    >
      <span className="delete-movie-modal__content">
        Are you shure you want to delete this movie?
      </span>
    </Modal>
  )
}
