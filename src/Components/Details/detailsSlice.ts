import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModal, IMovie } from '../../models'

const initialState: IModal = {
  isOpen: false,
  movie: null,
}

const details = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setIsDetailsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    setMovieDetails(state, action: PayloadAction<IMovie>) {
      state.movie = action.payload
    },
  },
})

export const { setIsDetailsOpen, setMovieDetails } = details.actions

export default details.reducer
