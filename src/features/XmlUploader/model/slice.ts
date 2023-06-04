import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PropertyProps, RootState } from 'src/shared/types'
import { globalResetActions } from 'src/shared/actions'
import { FileInfo, TagWithPropertyProps } from '../types'

const initialState: TagWithPropertyProps = {
  pnf: [],
  complex: [],
  isUpload: false,
}

export const xmlUploaderSlice = createSlice({
  name: 'xmlUploaderSlice',
  initialState,
  reducers: {
    setFileInfo: (state, { payload }: PayloadAction<FileInfo>) => {
      // eslint-disable-next-line no-param-reassign
      state.isUpload = true
      // eslint-disable-next-line no-param-reassign
      state.file = payload
    },
    setPnfProperties: (state, { payload }: PayloadAction<PropertyProps[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.pnf = payload
    },
    setComplexProperties: (
      state,
      { payload }: PayloadAction<PropertyProps[]>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.complex = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(globalResetActions, () => initialState)
  },
})

export const selectPnfProperties = (state: RootState) =>
  state.xmlUploaderSlice.pnf
export const selectComplexProperties = (state: RootState) =>
  state.xmlUploaderSlice.complex
export const selectIsUploadFile = (state: RootState) =>
  state.xmlUploaderSlice.isUpload
export const selectFileInfo = (state: RootState) => state.xmlUploaderSlice.file
