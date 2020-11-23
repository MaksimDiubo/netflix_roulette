import React, { useState } from 'react'

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
import { visibilityToggle } from '../../utils/utils'

import './Main.scss'

export const Main = () => {
  const [showEditMovie, setShowEditMovie] = useState(false)
  const [showDeleteMovie, setShowDeleteMovie] = useState(false)

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
            editModalShow={() => {
              visibilityToggle(showEditMovie, setShowEditMovie)
            }}
            deleteModalShow={() => {
              visibilityToggle(showDeleteMovie, setShowDeleteMovie)
            }}
          />
        </Layout>
      </Wrapper>
      <EditMovieModal
        isOpen={showEditMovie}
        visibilityToggle={() =>
          visibilityToggle(showEditMovie, setShowEditMovie)
        }
      />
      <DeleteMovieModal
        isOpen={showDeleteMovie}
        visibilityToggle={() =>
          visibilityToggle(showDeleteMovie, setShowDeleteMovie)
        }
      />
    </div>
  )
}
