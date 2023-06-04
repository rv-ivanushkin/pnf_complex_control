import React from 'react'
import { Button, Paper } from '@mui/material'
import { useDropzone, DropzoneOptions } from 'react-dropzone'
import AttachFileIcon from '@mui/icons-material/AttachFile'

export const FileUploader = (props: DropzoneOptions) => {
  const { getRootProps, getInputProps } = useDropzone(props)

  return (
    <Paper elevation={0}>
      <Button
        startIcon={<AttachFileIcon />}
        variant="contained"
        color="primary"
        size="large"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getRootProps()}
      >
        Select File
      </Button>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getInputProps()}
      />
    </Paper>
  )
}
