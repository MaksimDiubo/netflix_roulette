import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModal } from '../../models'

const initialState: IModal = {
  isOpen: false,
}

const details = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setIsDetailsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
  },
})

export const { setIsDetailsOpen } = details.actions

export default details.reducer
