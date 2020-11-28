import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { fetchMovies } from './moviesSlice'

import {
  Wrapper,
  Layout,
  ResultsFilter,
  ResultsSelect,
  MoviesList,
  EditMovieModal,
  DeleteMovieModal,
  Loader,
} from '../../Components'

import './Main.scss'

export const Main = () => {
  const dispatch = useDispatch()
  const {
    movies: { isLoading, totalAmount, movies },
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div className="main">
      <Wrapper>
        <Layout columns="2">
          <ResultsFilter />
          <ResultsSelect />
        </Layout>

        {isLoading ? (
          <Loader />
        ) : (
          <MoviesList totalAmount={totalAmount} movies={movies} />
        )}
      </Wrapper>
      <EditMovieModal />
      <DeleteMovieModal />
    </div>
  )
}
