import React from 'react'
import { useSelector } from 'react-redux'
import {
  XmlResetSelected,
  XmlUploader,
  selectIsUploadFile,
} from 'src/features/XmlUploader'
import { Typography } from '@mui/material'
import { FileControlHeader, SelectXmlFileStyled } from './index.styled'
import { TabControl } from '../TabControl'

export const SelectXml = () => {
  const isFileSelect = useSelector(selectIsUploadFile)

  return (
    <>
      {!isFileSelect && (
        <SelectXmlFileStyled>
          <Typography variant="h5" color="gray">
            Выберите файл XML файл, который описывает Pnf и Complex
          </Typography>
          <XmlUploader />
        </SelectXmlFileStyled>
      )}
      {isFileSelect && (
        <FileControlHeader>
          <XmlResetSelected />
          <TabControl />
        </FileControlHeader>
      )}
    </>
  )
}
