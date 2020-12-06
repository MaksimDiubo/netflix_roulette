import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setEditModalOpen } from './editMovieSlice'
import { editMovie } from '../../Containers/Main/moviesSlice'
import { Modal, ModalInner, Input } from '../../Components'
import { useChange } from '../../hooks'
import { IMovie } from '../../models'

export const EditMovieModal = () => {
  const dispatch = useDispatch()
  const {
    editMovie: { isOpen },
  } = useSelector((state: RootState) => state)
  const {
    movies: { movies, currentMovieId },
  } = useSelector((state: RootState) => state)

  const [editedMovie, setEditedMovie] = useChange({} as IMovie)

  useEffect(() => {
    handleReset()
  }, [currentMovieId, isOpen])

  const handleReset = useCallback(() => {
    const currentMovie = movies.find((movie) => movie.id === currentMovieId)
    currentMovie && setEditedMovie(null, currentMovie)
  }, [movies, currentMovieId, setEditedMovie])

  const handleOk = () => {
    dispatch(editMovie(editedMovie))
    dispatch(setEditModalOpen(false))
  }

  const handleClose = () => {
    dispatch(setEditModalOpen(false))
  }

  return (
    <Modal
      isOpen={isOpen}
      title="edit movie"
      okBtnText="save"
      cancelBtnText="reset"
      onOk={handleOk}
      onReset={handleReset}
      onClose={handleClose}
    >
      <Input title="movie ID" value={editedMovie.id} disabled />
      <ModalInner movie={editedMovie} onChange={setEditedMovie} />
    </Modal>
  )
}
