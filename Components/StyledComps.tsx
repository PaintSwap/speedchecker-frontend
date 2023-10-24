import { CircularProgress, styled } from "@mui/material"

interface TextProps {
  fontSize?: string;
}

export const TextNormal = styled('div')<TextProps>(({ theme, fontSize = "16px" }) => ({
  fontSize,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.secondary.main,
}));

export const TextSubtle = styled('div')<TextProps>(({ theme, fontSize = "16px" }) => ({
  fontSize,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.subtle.main,
}))

export const TextWarning = styled('div')<TextProps>(({ theme, fontSize = "16px" }) => ({
  fontSize,
  fontWeight: 400,
  textAlign: 'center',
  color: theme.palette.warning.main,
}))

export const StyledCircularProgress = styled(({ ...rest }) => <CircularProgress size="1rem" {...rest} />)`
  svg {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`
