import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../store/store'

const initialState = {
  tasks: [],
  reviewRequests: [],
  reviews: [],
  error: null,
  isLoading: false,
  selfGrade: null,
  disputes: [],
  sessions: [],
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
})

export const {} = mainSlice.actions

export default mainSlice.reducer
