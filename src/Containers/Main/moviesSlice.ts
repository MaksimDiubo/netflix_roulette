import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../store/store'
import { getData, deleteData, updateData } from '../../helpers'
import { IMovie, Genres, SortParameters } from '../../models'

interface IMovies {
  movies: Array<IMovie>
  searchReqest: string
  genresFilter: string
  sortParameter: string
  totalAmount: number
  currentMovieId: null | number
  isLoading: boolean
  error: string | null
}

const initialState: IMovies = {
  movies: [],
  searchReqest: '',
  genresFilter: '',
  sortParameter: '',
  totalAmount: 0,
  currentMovieId: null,
  isLoading: false,
  error: null,
}

const moviesSlice = createSlice({
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
    setSearchReques(state, action: PayloadAction<string>) {
      state.searchReqest = action.payload
    },
    setGenresFilter(state, action: PayloadAction<string>) {
      state.genresFilter = action.payload
    },
    setSortParameter(state, action: PayloadAction<string>) {
      state.sortParameter = action.payload
    },
    setCurrentMovieId(state, action: PayloadAction<number>) {
      state.currentMovieId = action.payload
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
  setCurrentMovieId,
  setGenresFilter,
  setSortParameter,
  setSearchReques,
} = moviesSlice.actions

export const fetchMovies = (
  serchValue?: string,
  sortBy?: string,
  filter?: string
): AppThunk => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const { totalAmount, data } = await getData(serchValue, sortBy, filter)
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
    await deleteData(movieId)
    dispatch(removeMovie(movieId))
  } catch (err) {
    dispatch(getDataFailure(err.toString()))
  }
}

export const editMovie = (movie: IMovie): AppThunk => async (dispatch) => {
  try {
    const { id } = movie
    await updateData(id, movie)
    dispatch(updateMovie(movie))
  } catch (err) {
    dispatch(getDataFailure(err.toString()))
  }
}

export const getMoviesByGenre = (
  movies: Array<IMovie>,
  filter: string
): Array<IMovie> => {
  if (filter === Genres.All) {
    return movies
  }
  return movies.filter((movie) => movie.genres.includes(filter))
}

export const sortMovies = (movies: Array<IMovie>, sortParam: string | null) => {
  switch (sortParam) {
    case SortParameters.release_date: {
      return movies.sort(
        (a, b) => +new Date(a.release_date) - +new Date(b.release_date)
      )
    }
    case SortParameters.rating: {
      return movies.sort((a, b) => a.vote_average - b.vote_average)
    }
  }
  return movies
}

export default moviesSlice.reducer
