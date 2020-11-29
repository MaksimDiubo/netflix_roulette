import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../store/store'
import { getData, deleteData, updateData } from '../../helpers'
import { IMovie } from '../../models'

interface IMovies {
  movies: Array<IMovie>
  totalAmount: number
  isLoading: boolean
  error: string | null
}

const initialState: IMovies = {
  movies: [],
  totalAmount: 0,
  isLoading: false,
  error: null,
}

const mainSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    getMoviesList(state, action: PayloadAction<Array<IMovie>>) {
      state.error = null
      state.movies = action.payload
    },
    getTotalAmount(state, action: PayloadAction<number>) {
      state.totalAmount = action.payload
    },
    getDataFailure(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    removeMovie(state, action: PayloadAction<number>) {
      state.movies.filter((movie) => movie.id === action.payload)
    },
    updateMovie(state, action: PayloadAction<IMovie>) {
      const editItemIndex = state.movies.findIndex(
        (item) => item.id === action.payload.id
      )
      if (editItemIndex !== -1) {
        state.movies[editItemIndex] = action.payload
      }
    },
  },
})

export const {
  getMoviesList,
  setIsLoading,
  getDataFailure,
  getTotalAmount,
  removeMovie,
  updateMovie,
} = mainSlice.actions

export const fetchMovies = (serchValue?: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(setIsLoading(true))
    const { totalAmount, data } = await getData(serchValue)
    dispatch(getMoviesList(data))
    dispatch(getTotalAmount(totalAmount))
  } catch (err) {
    dispatch(getDataFailure(err.toString()))
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const deleteMovie = (movieId: number): AppThunk => async (dispatch) => {
  try {
    deleteData(movieId)
    dispatch(removeMovie(movieId))
  } catch (err) {
    dispatch(getDataFailure(err.toString()))
  }
}

export const editMovie = (movie: IMovie): AppThunk => async (dispatch) => {
  try {
    const { id } = movie
    // updateData(id, movie)
    dispatch(updateMovie(movie))
  } catch (err) {
    dispatch(getDataFailure(err.toString()))
  }
}

export default mainSlice.reducer
