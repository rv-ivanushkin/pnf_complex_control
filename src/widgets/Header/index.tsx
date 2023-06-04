import React from 'react'
import { Typography } from '@mui/material'
import { HeaderStyled } from './index.styled'

export const Header = () => {
  return (
    <HeaderStyled>
      <Typography variant="h6" color="white">
        Задача по фронту, на React.
      </Typography>
    </HeaderStyled>
  )
}
