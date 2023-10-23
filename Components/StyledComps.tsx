import { CircularProgress, styled } from "@mui/material"

export const TextNormal = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.secondary.main,
}))

export const TextSubtle = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.subtle.main,
}))

export const TextWarning = styled('div')(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.warning.main,
}))

export const StyledCircularProgress = styled(({ ...rest }) => <CircularProgress size="1rem" {...rest} />)`
  svg {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`
