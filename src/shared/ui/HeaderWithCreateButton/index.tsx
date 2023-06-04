import React from 'react'
import { Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { HeaderWithCreateButtonStyled } from './index.styled'

interface HeaderWithCreateButtonProps {
  label: string
  handleClick: () => void
}

export const HeaderWithCreateButton = ({
  label,
  handleClick,
}: HeaderWithCreateButtonProps) => {
  return (
    <HeaderWithCreateButtonStyled>
      <Typography variant="h6">{label}</Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="success"
        onClick={handleClick}
      >
        Create new
      </Button>
    </HeaderWithCreateButtonStyled>
  )
}
