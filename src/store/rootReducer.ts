import { combineReducers } from '@reduxjs/toolkit'
import { mainSlice } from '../Containers/Main'

const rootReducer = combineReducers({
  main: mainSlice,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
