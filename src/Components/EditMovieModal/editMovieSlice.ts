import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModal, IMovie } from '../../models'

const initialState: IModal = {
  isOpen: false,
  movie: null,
}

const editMovieSlice = createSlice({
  name: 'editMovie',
  initialState,
  reducers: {
    setEditModalOpen(state) {
      state.isOpen = !state.isOpen
    },
    setEditMovieData(state, action: PayloadAction<IMovie>) {
      state.movie = action.payload
    },
  },
})

export const { setEditModalOpen, setEditMovieData } = editMovieSlice.actions

export default editMovieSlice.reducer
