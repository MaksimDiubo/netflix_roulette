import React from 'react'

import { Modal, Input, DatePicker, Select } from '../../Components'

interface IEditMovieModalProps {
  isOpen: boolean
  handleClose: () => void
}

const fakeData = {
  movieId: 'mo32820th',
  title: 'Moana',
  releaseDate: '2018-03-30',
  movieURL: 'www.moana.com',
  genre: ['Comedy'],
  overview: 'overview text goes here',
  runtime: 'runtime goes here',
}

export const EditMovieModal: React.FC<IEditMovieModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const {
    movieId,
    title,
    releaseDate,
    movieURL,
    genre,
    overview,
    runtime,
  } = fakeData

  return (
    <Modal
      isOpen={isOpen}
      title="edit movie"
      okBtnText="save"
      cancelBtnText="reset"
      onOk={handleClose}
      onCancel={handleClose}
    >
      <Input title="movie ID" value={movieId} disabled />
      <Input title="title" value={title} />
      <DatePicker title="release date" value={releaseDate} />
      <Input title="movie url" value={movieURL} />
      <Select defaultCheckedItems={genre} />
      <Input title="overview" value={overview} />
      <Input title="runtime" value={runtime} />
    </Modal>
  )
}
