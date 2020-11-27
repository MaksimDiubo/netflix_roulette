import React from 'react'
import { useToggle } from '../../hooks'

import {
  Wrapper,
  Layout,
  ResultsFilter,
  ResultsSelect,
  ResultCount,
  MoviesList,
  EditMovieModal,
  DeleteMovieModal,
} from '../../Components'

import './Main.scss'

export const Main = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useToggle(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useToggle(false)

  return (
    <div className="main">
      <Wrapper>
        <Layout columns="2">
          <ResultsFilter />
          <ResultsSelect />
        </Layout>
        <ResultCount />
        <Layout columns="3">
          <MoviesList
            onEditModalOpen={setIsEditModalOpen}
            onDeleteModalOpen={setIsDeleteModalOpen}
          />
        </Layout>
      </Wrapper>
      <EditMovieModal
        isOpen={isEditModalOpen}
        handleClose={setIsEditModalOpen}
      />
      <DeleteMovieModal
        isOpen={isDeleteModalOpen}
        handleClose={setIsDeleteModalOpen}
      />
    </div>
  )
}
