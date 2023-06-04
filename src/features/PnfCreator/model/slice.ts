import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { globalResetActions } from 'src/shared/actions'
import { RootState, UnknownItems } from 'src/shared/types'

const initialState: UnknownItems = []

export const pnfSlice = createSlice({
  name: 'pnf_items',
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

export const selectPnfItems = (state: RootState) => state.pnf_items
