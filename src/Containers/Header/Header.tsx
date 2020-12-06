import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { setIsAddMovieOpen } from '../../Components/AddMovieModal/addMovieSlice'
import { setIsDetailsOpen } from '../../Components/Details/detailsSlice'

import {
  Layout,
  Logo,
  Button,
  SearchForm,
  Wrapper,
  AddMovieModal,
  Details,
  Loader,
} from '../../Components'

import './Header.scss'

export const Header = () => {
  const dispatch = useDispatch()

  const {
    details: { isOpen },
  } = useSelector((state: RootState) => state)
  const {
    movies: { movies, currentMovieId },
  } = useSelector((state: RootState) => state)

  const handleAddMovieClose = () => {
    dispatch(setIsAddMovieOpen(true))
  }

  const handleDetailsClose = () => {
    dispatch(setIsDetailsOpen(false))
  }

  if (isOpen) {
    const currentMovie = movies.find((movie) => movie.id === currentMovieId)
    return (
      <div className="header">
        {currentMovie ? (
          <Details movie={currentMovie} handleClose={handleDetailsClose} />
        ) : (
          <Loader />
        )}
      </div>
    )
  }

  return (
    <div className="header">
      <Wrapper>
        <Layout columns="2">
          <Logo isHeaderLogo />
          <Button
            color="secondary"
            value="+ add move"
            onClick={handleAddMovieClose}
          >
            + add move
          </Button>
        </Layout>
        <SearchForm />
      </Wrapper>
      <AddMovieModal />
    </div>
  )
}
