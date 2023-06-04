import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '../shared/store'

export const WithStore = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
)
