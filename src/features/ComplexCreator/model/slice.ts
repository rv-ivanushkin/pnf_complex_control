import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { globalResetActions } from 'src/shared/actions'
import { RootState, UnknownItems } from 'src/shared/types'

const initialState: UnknownItems = []

export const complexSlice = createSlice({
  name: 'complex_items',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<UnknownItems[number]>) => {
      state.push(payload)
    },
  },
  extraReducers(builder) {
    builder.addCase(globalResetActions, () => initialState)
  },
})

export const selectComplexItems = (state: RootState) => state.complex_items
