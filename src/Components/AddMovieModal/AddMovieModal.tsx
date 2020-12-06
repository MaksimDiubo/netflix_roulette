import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setIsAddMovieOpen, addMovieItem } from './addMovieSlice'
import { IMovie } from '../../models'
import { useChange } from '../../hooks'

import { Modal, ModalInner } from '../../Components'

export const AddMovieModal: React.FC = () => {
  const dispatch = useDispatch()
  const {
    addMovie: { isOpen },
  } = useSelector((state: RootState) => state)

  const [newMovie, setNewMovie] = useChange({} as IMovie)

  const handleOk = () => {
    dispatch(addMovieItem(newMovie))
  }

  const handleClose = () => {
    setNewMovie(null, {} as IMovie)
    dispatch(setIsAddMovieOpen(false))
  }

  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="submit"
      cancelBtnText="reset"
      onOk={handleOk}
      onReset={setNewMovie}
      onClose={handleClose}
    >
      <ModalInner movie={newMovie} onChange={setNewMovie} />
    </Modal>
  )
}
