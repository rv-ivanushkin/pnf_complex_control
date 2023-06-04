import { PropertyProps } from 'src/shared/types'

export const getInitialValuesByProperties = (properties: PropertyProps[]) =>
  properties.reduce(
    (prevValue, { name }) => ({
      ...prevValue,
      [name]: '',
    }),
    {}
  )
