import React from 'react'
import { ResetButton } from 'src/shared'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { useAppDispatch, useAppSelector } from 'src/shared/hooks'
import { Divider, Typography } from '@mui/material'
import SdCardIcon from '@mui/icons-material/SdCard'
import { globalResetActions } from 'src/shared/actions'
import { FileInfoStyled, XmlResetSelectedStyled } from './index.styled'
import { selectFileInfo } from '../../model/slice'

export const XmlResetSelected = () => {
  const fileInfoSelect = useAppSelector(selectFileInfo)
  const dispatch = useAppDispatch()

  const handleRemoveFile = () => dispatch(globalResetActions())

  if (!fileInfoSelect) {
    return <Typography color="orange">Where is file?</Typography>
  }

  return (
    <XmlResetSelectedStyled>
      <FileInfoStyled>
        <InsertDriveFileIcon color="action" />
        {fileInfoSelect.name}
        <Divider orientation="vertical" />
        <SdCardIcon color="action" />
        {fileInfoSelect.size}
      </FileInfoStyled>
      <ResetButton label="Remove Xml" onClick={handleRemoveFile} />
    </XmlResetSelectedStyled>
  )
}
