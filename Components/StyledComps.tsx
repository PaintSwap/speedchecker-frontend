import { styled } from "@mui/material"


export const TextSubtle = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.subtle.main,
}))
