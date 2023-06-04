import { configureStore } from '@reduxjs/toolkit'
import { pnfSlice } from 'src/features/PnfCreator'
import { complexSlice } from 'src/features/ComplexCreator'
import { xmlUploaderSlice } from '../../features/XmlUploader'

export const store = configureStore({
  reducer: {
    [xmlUploaderSlice.name]: xmlUploaderSlice.reducer,
    [pnfSlice.name]: pnfSlice.reducer,
    [complexSlice.name]: complexSlice.reducer,
  },
})
