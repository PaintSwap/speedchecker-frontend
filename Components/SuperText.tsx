import React from 'react'
import styled from 'styled-components'
import { Theme, useTheme } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'

interface Props extends BoxProps {
  small?: boolean
  bold?: boolean
  fontSize?: string
  lineHeight?: number | string
  color?:
    | 'primary'
    | 'secondary'
    | 'subtle'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
  muiTheme?: Theme
}

const getFontSize = (small: boolean, fontSize: string) => {
  return small ? '14px' : fontSize
}

const StyledText = styled(({ small, bold, fontSize, color, lineHeight, muiTheme, ...rest }: Props) => (
  <Box {...rest} />
))`
  /* These can be overridden both by parameter or by styling() */
  /* May have to increase the specificity in some cases such as "\${mediaQueries.sm} {}". Then to "&&& { \${mediaQueries.sm}{} }" */
  font-size: ${({ small, fontSize }) => getFontSize(small ?? false, fontSize ?? '16px')};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ muiTheme, color }) => (color ? muiTheme?.palette?.[color]?.main : muiTheme?.palette?.secondary?.main)};
`

const SuperText: React.FC<Props> = ({
  small = false,
  bold = false,
  fontSize = '16px',
  color,
  lineHeight = 1.5,
  children,
  ...props
}) => {
  const muiTheme = useTheme()

  const superText = (
    <StyledText
      muiTheme={muiTheme}
      small={small}
      bold={bold}
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </StyledText>
  )

  return <>{superText}</>
}

export default SuperText
