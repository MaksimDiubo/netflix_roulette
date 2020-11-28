import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModal } from '../../models'

const initialState: IModal = {
  isOpen: false,
  movieId: null,
}

const deleteMovieSlice = createSlice({
  name: 'deleteMovie',
  initialState,
  reducers: {
    setDeleteModalOpen(state) {
      state.isOpen = !state.isOpen
    },
    setDeleteMovieId(state, action: PayloadAction<number>) {
      state.movieId = action.payload
    },
  },
})

export const { setDeleteModalOpen, setDeleteMovieId } = deleteMovieSlice.actions

export default deleteMovieSlice.reducer
