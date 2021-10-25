export type PrimaryColors = {
  grass1: string
  grass2: string
  grass3: string
  grass4: string
  grass5: string
  grass6: string
  grass7: string
  grass8: string
  grass9: string
  grass10: string
  grass11: string
  grass12: string
}

export type SecondaryColors = {
  sage1: string
  sage2: string
  sage3: string
  sage4: string
  sage5: string
  sage6: string
  sage7: string
  sage8: string
  sage9: string
  sage10: string
  sage11: string
  sage12: string
}

export type ErrorColors = {
  tomato1: string
  tomato2: string
  tomato3: string
  tomato4: string
  tomato5: string
  tomato6: string
  tomato7: string
  tomato8: string
  tomato9: string
  tomato10: string
  tomato11: string
  tomato12: string
}

export type WarningColors = {
  orange1: string
  orange2: string
  orange3: string
  orange4: string
  orange5: string
  orange6: string
  orange7: string
  orange8: string
  orange9: string
  orange10: string
  orange11: string
  orange12: string
}

export type SuccessColors = {
  blue1: string
  blue2: string
  blue3: string
  blue4: string
  blue5: string
  blue6: string
  blue7: string
  blue8: string
  blue9: string
  blue10: string
  blue11: string
  blue12: string
}

export interface Colors {
  primary: PrimaryColors
  secondary: SecondaryColors
  error: ErrorColors
  warning: WarningColors
  success: SuccessColors
}

export type Spacers = {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
}

export type Fonts = {
  weight: {
    light: number
    regular: number
    medium: number
    bold: number
    black: number
  }
  size: {
    xxl: string
    xl: string
    lg: string
    md: string
    sm: string
    xs: string
    xxs: string
    xxxs: string
    micro: string
  }
  line: {
    sm: string
    md: string
    lg: string
  }
  spacing: {
    sm: string
    md: string
    lg: string
  }
}

export type Borders = {
  sm: string
  md: string
  lg: string
  circle: string
  pill: string
}
