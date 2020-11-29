import React, { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setEditModalOpen } from './editMovieSlice'
import { editMovie } from '../../Containers/Main/moviesSlice'
import { Modal, Input, DatePicker, Select } from '../../Components'
import { IMovie } from '../../models'

export const EditMovieModal = () => {
  const dispatch = useDispatch()
  const {
    editMovie: { isOpen, movie },
  } = useSelector((state: RootState) => state)

  const [editedMovie, setEditedMovie] = useState({} as IMovie)

  useEffect(() => {
    movie && setEditedMovie(movie)
  }, [movie, isOpen])

  const handleOk = () => {
    dispatch(editMovie(editedMovie))
    dispatch(setEditModalOpen())
  }

  const handleReset = () => {
    movie && setEditedMovie(movie)
  }

  const handleClose = () => {
    dispatch(setEditModalOpen())
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event
    setEditedMovie({ ...editedMovie, [name]: value })
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { checked, name },
    } = event
    checked
      ? setEditedMovie((prev) => {
          return { ...prev, genres: [...prev.genres, name] }
        })
      : setEditedMovie((prev) => {
          return {
            ...prev,
            genres: prev.genres.filter((item) => item !== name),
          }
        })
  }

  const {
    title,
    release_date,
    poster_path,
    overview,
    runtime,
    genres,
    id,
  } = editedMovie

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
      <Input title="movie ID" value={id} disabled />
      <Input title="title" value={title} onChange={handleChange} name="title" />
      <DatePicker
        title="release date"
        value={release_date}
        onChange={handleChange}
        name="release_date"
      />
      <Input
        title="movie url"
        value={poster_path}
        onChange={handleChange}
        name="poster_path"
      />
      <Select defaultCheckedItems={genres} onChange={handleCheckboxChange} />
      <Input title="overview" value={overview} onChange={handleChange} />
      <Input
        title="runtime"
        value={runtime}
        onChange={handleChange}
        name="runtime"
      />
    </Modal>
  )
}
