import { store } from '../store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface PropertyProps {
  name: string
  description: string
  required: boolean
}

export type UnknownItems = {
  [name: string]: string
}[]
