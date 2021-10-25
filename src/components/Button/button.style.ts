import styled, { css } from 'styled-components'

type ButtonSizes = 'sm' | 'md' | 'lg'
type ButtonTypes = 'normal' | 'outlined' | 'normalLink' | 'navLink'

interface LinkParams {
  size?: ButtonSizes
  type?: ButtonTypes
}

// export const aLink = styled.button.attrs(
//   ({ size, type }: LinkParams) => css`
//     color: red;
//     font-size: ${size === 'sm' ? 50 : 70};
//   `
// )

export const aLink = styled.button`
  ${({ theme }) => css`
    color: blue;
    font-size: 15;
    background: ${theme.colors.primary.grass1};
  `}
`
