import React from 'react'
import { FileUploader } from 'src/shared'
import { useActionCreatorsTyped } from 'src/shared/hooks'
import { ACCEPT } from 'src/shared/constants'
import { parseXML, parseByTags } from './utils'
import { xmlUploaderSlice } from '../../model/slice'

export const XmlUploader = () => {
  const actions = useActionCreatorsTyped(xmlUploaderSlice.actions)

  const onLoadHandle = async (files: File[]) => {
    // multiple = false
    const file = files[0]

    const xml = await parseXML(file)
    if (xml) {
      const { pnf, complex } = parseByTags(xml, 'Pnf', 'Complex')
      actions.setComplexProperties(complex)
      actions.setPnfProperties(pnf)
      actions.setFileInfo({
        name: file.name,
        size: file.size,
      })
    }
  }
  return <FileUploader onDrop={onLoadHandle} accept={ACCEPT} />
}
