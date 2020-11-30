import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setIsAddMovieOpen, addMovieItem } from './addMovieSlice'
import { IMovie } from '../../models'
import { useChange } from '../../hooks'

import { Modal, Input, DatePicker, Select } from '../../Components'

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
    dispatch(setIsAddMovieOpen())
    setNewMovie()
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
      <Input
        title="title"
        placeholder="Title here"
        value={newMovie.title}
        name="title"
        onChange={setNewMovie}
      />
      <DatePicker
        title="release date"
        name="release_date"
        value={newMovie.release_date}
        onChange={setNewMovie}
      />
      <Input
        title="movie url"
        placeholder="Movie URL here"
        value={newMovie.poster_path}
        name="poster_path"
        onChange={setNewMovie}
      />
      <Select onChange={setNewMovie} defaultCheckedItems={newMovie.genres} />
      <Input
        title="overview"
        placeholder="Overview here"
        value={newMovie.overview}
        name="overview"
        onChange={setNewMovie}
      />
      <Input
        title="runtime"
        placeholder="Runtime here"
        value={newMovie.runtime}
        name="runtime"
        onChange={setNewMovie}
      />
    </Modal>
  )
}
