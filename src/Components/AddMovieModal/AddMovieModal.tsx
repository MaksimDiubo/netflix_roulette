import React, { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setIsAddMovieOpen, addMovieItem } from './addMovieSlice'
import { IMovie } from '../../models'

import { Modal, Input, DatePicker, Select } from '../../Components'

export const AddMovieModal: React.FC = () => {
  const dispatch = useDispatch()
  const {
    addMovie: { isOpen },
  } = useSelector((state: RootState) => state)

  const [newMovie, setNewMovie] = useState({} as IMovie)

  const handleOk = () => {
    dispatch(addMovieItem(newMovie))
  }

  const handleReset = () => {
    setNewMovie({} as IMovie)
  }

  const handleClose = () => {
    dispatch(setIsAddMovieOpen())
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event
    setNewMovie({ ...newMovie, [name]: value })
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { checked, name },
    } = event
    checked
      ? setNewMovie((prev) => {
          return prev.genres
            ? { ...prev, genres: [...prev.genres, name] }
            : { ...prev, genres: [name] }
        })
      : setNewMovie((prev) => {
          return {
            ...prev,
            genres: prev.genres.filter((item) => item !== name),
          }
        })
  }

  return (
    <Modal
      isOpen={isOpen}
      title="add movie"
      okBtnText="submit"
      cancelBtnText="reset"
      onOk={handleOk}
      onReset={handleReset}
      onClose={handleClose}
    >
      <Input
        title="title"
        placeholder="Title here"
        value={newMovie.title}
        name="title"
        onChange={handleChange}
      />
      <DatePicker
        title="release date"
        name="release_date"
        value={newMovie.release_date}
        onChange={handleChange}
      />
      <Input
        title="movie url"
        placeholder="Movie URL here"
        value={newMovie.poster_path}
        name="poster_path"
        onChange={handleChange}
      />
      <Select
        onChange={handleCheckboxChange}
        defaultCheckedItems={newMovie.genres}
      />
      <Input
        title="overview"
        placeholder="Overview here"
        value={newMovie.overview}
        name="overview"
        onChange={handleChange}
      />
      <Input
        title="runtime"
        placeholder="Runtime here"
        value={newMovie.runtime}
        name="runtime"
        onChange={handleChange}
      />
    </Modal>
  )
}
