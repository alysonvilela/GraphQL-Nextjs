import { Colors, Spacers, Fonts, Borders } from './token-values/tokenTypes'

export interface TokensProps {
  colors: Colors
  spacers: Spacers
  fonts: Fonts
  borders: Borders
}
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TokensProps {}
}
