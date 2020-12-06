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
    setDeleteModalOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
  },
})

export const { setDeleteModalOpen } = deleteMovieSlice.actions

export default deleteMovieSlice.reducer
