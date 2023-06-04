import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'

type CreateButtonProps = {
  label: string
} & Omit<ButtonProps, 'children'>

export const CreateButton = ({ label, ...props }: CreateButtonProps) => {
  return (
    <Button
      startIcon={<AddIcon />}
      variant="contained"
      color="success"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {label}
    </Button>
  )
}
