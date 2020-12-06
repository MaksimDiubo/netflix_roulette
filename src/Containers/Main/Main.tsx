import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { fetchMovies, setGenresFilter, setSortParameter } from './moviesSlice'

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
    movies: {
      isLoading,
      totalAmount,
      movies,
      searchReqest,
      sortParameter,
      genresFilter,
    },
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchMovies(searchReqest, sortParameter, genresFilter))
  }, [dispatch, searchReqest, sortParameter, genresFilter])

  const filterMovies = (filter: string) => {
    dispatch(setGenresFilter(filter))
  }

  const sortMovies = (sortParam: string) => {
    dispatch(setSortParameter(sortParam))
  }

  return (
    <div className="main">
      <Wrapper>
        <Layout columns="2">
          <ResultsFilter filterMovies={filterMovies} />
          <ResultsSelect sortMovies={sortMovies} />
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
