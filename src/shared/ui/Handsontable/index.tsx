import React from 'react'
import { HotTable } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.min.css'
import { PropertyProps } from 'src/shared/types'
import { DivStyled } from './index.styled'

interface HandsontableProps {
  data: unknown[]
  property: PropertyProps[]
}

export const Handsontable = ({ data, property }: HandsontableProps) => {
  const columns = property.map(({ name }, index) => ({ id: index, data: name }))
  const headers = property.map(({ name }) => name)
  return (
    <DivStyled>
      <HotTable
        id="HotTable"
        data={data}
        columns={columns}
        colHeaders={headers}
        rowHeaders
        colWidths="100%"
        licenseKey="non-commercial-and-evaluation"
      />
    </DivStyled>
  )
}
