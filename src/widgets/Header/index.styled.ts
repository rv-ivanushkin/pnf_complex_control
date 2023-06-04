import { styled } from '@mui/material'

export const HeaderStyled = styled('div')`
  background: ${({ theme }) => theme.palette.primary.dark};
  display: grid;
  align-items: center;
  padding: 0 15px;
`
