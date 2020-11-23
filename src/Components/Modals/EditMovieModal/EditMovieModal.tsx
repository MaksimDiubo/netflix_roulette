import React from 'react'

import {
  Modal,
  ModalInput,
  ModalDatePicker,
  ModalSelect,
} from '../../../Components'

interface IEditMovieModalProps {
  isOpen: boolean
  visibilityToggle: () => void
}

const fakeData = {
  movieId: 'mo32820th',
  title: 'Moana',
  releaseDate: '31-03-2018',
  movieURL: 'www.moana.com',
  genre: 'comedy',
  overview: 'overview text goes here',
  runtime: 'runtime goes here',
}

export const EditMovieModal: React.FC<IEditMovieModalProps> = ({
  isOpen,
  visibilityToggle,
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
      onOk={visibilityToggle}
      onCancel={visibilityToggle}
    >
      <ModalInput title="movie ID" value={movieId} disabled />
      <ModalInput title="title" value={title} />
      <ModalDatePicker title="release date" value={releaseDate} />
      <ModalInput title="movie url" value={movieURL} />
      <ModalSelect checkedItems={genre} />
      <ModalInput title="overview" value={overview} />
      <ModalInput title="runtime" value={runtime} />
    </Modal>
  )
}
