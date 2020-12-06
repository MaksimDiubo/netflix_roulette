import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../store/store'
import { addData } from '../../helpers'
import { IModal, IMovie } from '../../models'

const initialState: IModal = {
  isOpen: false,
  movie: {} as IMovie,
  error: null,
}

const addMovie = createSlice({
  name: 'addMovie',
  initialState,
  reducers: {
    setIsAddMovieOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    addNewMovie(state, action: PayloadAction<IMovie>) {
      state.error = null
      state.movie = action.payload
    },
    getDataFailure(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const {
  setIsAddMovieOpen,
  addNewMovie,
  getDataFailure,
} = addMovie.actions

export const addMovieItem = (movie: IMovie): AppThunk => async (dispatch) => {
  try {
    // await addData(movie)
    dispatch(addNewMovie(movie))
    dispatch(setIsAddMovieOpen(false))
  } catch (err) {
    dispatch(getDataFailure(err.toString()))
  }
}

export default addMovie.reducer
