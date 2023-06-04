import { Button, TextField, debounce } from '@mui/material'
import React, { RefObject, useState } from 'react'
import { PropertyProps, UnknownItems } from 'src/shared/types'
import { FormikHelpers, useFormik } from 'formik'
import { FormItemsStyled, UnVisibleButton } from './index.styled'
import { getInitialValuesByProperties } from './utils'

interface FormByPropertyProps {
  options: PropertyProps[]
  onSubmit: (
    values: UnknownItems[number],
    formikHelpers: FormikHelpers<UnknownItems[number]>
  ) => void
  buttonRef: RefObject<HTMLButtonElement>
}

export const FormByProperty = ({
  options,
  onSubmit,
  buttonRef,
}: FormByPropertyProps) => {
  const formik = useFormik({
    initialValues: getInitialValuesByProperties(options),
    onSubmit,
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    formik.handleSubmit(event)
    return false
  }

  return (
    <form onSubmit={handleFormSubmit} onChange={debounce(formik.handleChange)}>
      <FormItemsStyled>
        {options.map(({ name, description, required }, index) => (
          <TextField
            required={required}
            name={name}
            key={`Property_${index.toString()}`}
            type="text"
            label={description && `description for ${name} - not defined`}
            variant="outlined"
          />
        ))}
      </FormItemsStyled>
      <UnVisibleButton type="submit" ref={buttonRef} />
    </form>
  )
}
