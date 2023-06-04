import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

type ResetButtonProps = {
  label: string
} & Omit<ButtonProps, 'children'>

export const ResetButton = ({ label, ...props }: ResetButtonProps) => {
  return (
    <Button
      startIcon={<DeleteIcon />}
      variant="contained"
      color="warning"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {label}
    </Button>
  )
}
