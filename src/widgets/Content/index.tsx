import React, { PropsWithChildren } from 'react'
import { Typography } from '@mui/material'
import { ContentStyled } from './index.styled'

export const Content = ({ children }: PropsWithChildren) => {
  return <ContentStyled>{children}</ContentStyled>
}
