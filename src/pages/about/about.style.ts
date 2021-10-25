import styled, { css } from 'styled-components'
import Button from 'components/Button'

export const Buttons = styled(Button)`
  ${({ theme }) => css`
    button {
      color: ${theme.spacers};
      list-style: none;
      padding: 50px;
      background: ${theme.colors.primary.grass1};
    }
  `}
`
