import React, { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setEditModalOpen } from './editMovieSlice'
import { editMovie } from '../../Containers/Main/moviesSlice'
import { Modal, Input, DatePicker, Select } from '../../Components'
import { IMovie } from '../../models'

export const EditMovieModal = () => {
  const [editedMovie, setEditedMovie] = useState({} as IMovie)
  const dispatch = useDispatch()
  const {
    editMovie: { isOpen, movie },
  } = useSelector((state: RootState) => state)

  const handleOk = () => {
    dispatch(editMovie(editedMovie))
    dispatch(setEditModalOpen())
  }

  const handleClose = () => {
    dispatch(setEditModalOpen())
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // const { target } = event
    console.log(event)
  }

  if (!movie) {
    return (
      <span className="delete-movie-modal__content">
        Something went wrong. Close the modal and try again.
      </span>
    )
  }

  const {
    title,
    release_date,
    poster_path,
    overview,
    runtime,
    genres,
    id,
  } = movie

  return (
    <Modal
      isOpen={isOpen}
      title="edit movie"
      okBtnText="save"
      cancelBtnText="reset"
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Input title="movie ID" value={id} disabled />
      <Input title="title" value={title} onChange={handleChange} name="title" />
      <DatePicker title="release date" value={release_date} />
      <Input title="movie url" value={poster_path} name="poster_path" />
      <Select defaultCheckedItems={genres} />
      <Input title="overview" value={overview} name="overview" />
      <Input title="runtime" value={runtime} name="runtime" />
    </Modal>
  )
}
