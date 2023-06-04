import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import React, { useRef, useState } from 'react'
import {
  FormByProperty,
  Handsontable,
  HeaderWithCreateButton,
} from 'src/shared'
import { useActionCreatorsTyped, useAppSelector } from 'src/shared/hooks'
import { selectPnfProperties } from 'src/features/XmlUploader'
import { UnknownItems } from 'src/shared/types'
import { PnfCreatorHeaderStyled, PnfCreatorStyled } from './index.styled'
import { pnfSlice, selectPnfItems } from '../../model/slice'

export const PnfCreator = () => {
  const actions = useActionCreatorsTyped(pnfSlice.actions)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pnfProperties = useAppSelector(selectPnfProperties)
  const pnfs = useAppSelector(selectPnfItems)
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(!!0)
  const handleOpen = () => setOpen(!!1)

  const handleSubmitForm = () => {
    buttonRef.current?.click()
  }

  const handleCreate = (values: UnknownItems[number]) => {
    actions.add(values)
    handleClose()
  }

  return (
    <PnfCreatorStyled>
      <PnfCreatorHeaderStyled>
        <HeaderWithCreateButton
          label="Physical Network Function"
          handleClick={handleOpen}
        />
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle>Create new Item of Dnf type</DialogTitle>
          <DialogContent dividers>
            <FormByProperty
              options={pnfProperties}
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
      </PnfCreatorHeaderStyled>
      <Handsontable data={pnfs} property={pnfProperties} />
    </PnfCreatorStyled>
  )
}
