import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from '@mui/material'
import React, { useRef, useState } from 'react'
import {
  FormByProperty,
  Handsontable,
  HeaderWithCreateButton,
} from 'src/shared'
import { useActionCreatorsTyped, useAppSelector } from 'src/shared/hooks'
import { selectComplexProperties } from 'src/features/XmlUploader'
import { UnknownItems } from 'src/shared/types'
import {
  ComplexCreatorHeaderStyled,
  ComplexCreatorStyled,
} from './index.styled'
import { complexSlice, selectComplexItems } from '../../model/slice'

export const ComplexCreator = () => {
  const actions = useActionCreatorsTyped(complexSlice.actions)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const complexs = useAppSelector(selectComplexItems)
  const complexProperties = useAppSelector(selectComplexProperties)
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(!!0)
  const handleOpen = () => setOpen(!!1)

  const handleSubmitForm = () => {
    buttonRef.current?.click()
    handleClose()
  }

  const handleCreate = (values: UnknownItems[number]) => actions.add(values)

  return (
    <ComplexCreatorStyled>
      <ComplexCreatorHeaderStyled>
        <HeaderWithCreateButton label="Complex" handleClick={handleOpen} />
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle>Create new Item of Complex type</DialogTitle>
          <DialogContent dividers>
            <FormByProperty
              options={complexProperties}
              onSubmit={handleCreate}
              buttonRef={buttonRef}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmitForm}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </ComplexCreatorHeaderStyled>
      <Handsontable data={complexs} property={complexProperties} />
    </ComplexCreatorStyled>
  )
}
