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
} from '../../Components'

import './Header.scss'

export const Header = () => {
  const dispatch = useDispatch()

  const {
    details: { isOpen, movie },
  } = useSelector((state: RootState) => state)

  const handleAddMovieClose = () => {
    dispatch(setIsAddMovieOpen())
  }

  const handleDetailsClose = () => {
    dispatch(setIsDetailsOpen(false))
  }

  if (isOpen && movie) {
    return (
      <div className="header">
        <Details movie={movie} handleClose={handleDetailsClose} />
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
