import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setEditModalOpen } from './editMovieSlice'
import { editMovie } from '../../Containers/Main/moviesSlice'
import { Modal, Input, DatePicker, Select } from '../../Components'
import { useChange } from '../../hooks'
import { IMovie } from '../../models'

export const EditMovieModal = () => {
  const dispatch = useDispatch()
  const {
    editMovie: { isOpen, movie },
  } = useSelector((state: RootState) => state)

  const [editedMovie, setEditedMovie] = useChange(
    (movie as IMovie) || ({} as IMovie)
  )

  useEffect(() => {
    movie && setEditedMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie, isOpen])

  const handleOk = () => {
    dispatch(editMovie(editedMovie))
    dispatch(setEditModalOpen())
  }

  const handleClose = () => {
    dispatch(setEditModalOpen())
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
      onReset={setEditedMovie}
      onClose={handleClose}
    >
      <Input title="movie ID" value={id} disabled />
      <Input
        title="title"
        value={title}
        onChange={setEditedMovie}
        name="title"
      />
      <DatePicker
        title="release date"
        value={release_date}
        onChange={setEditedMovie}
        name="release_date"
      />
      <Input
        title="movie url"
        value={poster_path}
        onChange={setEditedMovie}
        name="poster_path"
      />
      <Select defaultCheckedItems={genres} onChange={setEditedMovie} />
      <Input title="overview" value={overview} onChange={setEditedMovie} />
      <Input
        title="runtime"
        value={runtime}
        onChange={setEditedMovie}
        name="runtime"
      />
    </Modal>
  )
}
