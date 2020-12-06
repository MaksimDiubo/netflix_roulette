import { combineReducers } from '@reduxjs/toolkit'
import { moviesSlice } from '../Containers/Main'
import { deleteMovieSlice } from '../Components/DeleteMovieModal'
import { editMovieSlice } from '../Components/EditMovieModal'
import { detailsSlice } from '../Components/Details'
import { addMovieSlice } from '../Components/AddMovieModal'

const rootReducer = combineReducers({
  movies: moviesSlice,
  deleteMovie: deleteMovieSlice,
  editMovie: editMovieSlice,
  details: detailsSlice,
  addMovie: addMovieSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
