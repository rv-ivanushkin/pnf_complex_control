import { PropertyProps } from 'src/shared/types'

export type Tags = 'pnf' | 'complex'

export type FileInfo = {
  readonly name: string
  readonly size: number
}

export type UploadStatus = {
  isUpload: boolean
}

export type TagWithPropertyProps = {
  [tagName in Tags]: PropertyProps[]
} & Partial<{ file: FileInfo }> &
  UploadStatus
