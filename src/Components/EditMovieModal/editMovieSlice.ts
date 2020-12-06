import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModal, IMovie } from '../../models'

const initialState: IModal = {
  isOpen: false,
  movie: {} as IMovie,
}

const editMovieSlice = createSlice({
  name: 'editMovie',
  initialState,
  reducers: {
    setEditModalOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
  },
})

export const { setEditModalOpen } = editMovieSlice.actions

export default editMovieSlice.reducer
