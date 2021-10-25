import { blue, grass, orange, sage, tomato } from '@radix-ui/colors'
import { DefaultTheme } from 'styled-components'

const colorsValues = {
  colors: {
    primary: {
      ...grass
    },
    secondary: {
      ...sage
    },
    error: {
      ...tomato
    },
    warning: {
      ...orange
    },
    success: {
      ...blue
    }
  }
}

const spacersValues = {
  spacers: {
    1: '0.8rem',
    2: '1rem',
    3: '1.6rem',
    4: '2.4rem',
    5: '3.2rem',
    6: '4.8rem',
    7: '10rem',
    8: '15rem'
  }
}

const fontsValues = {
  fonts: {
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900
    },
    size: {
      xxl: '6.104rem',
      xl: '4.883rem',
      lg: '3.906rem',
      md: '3.125rem',
      sm: '2.5rem',
      xs: '2.0rem',
      xxs: '1.6rem',
      xxxs: '1.312rem',
      micro: '1rem'
    },
    line: {
      sm: '1.6rem',
      md: '2.5rem',
      lg: '2.4rem'
    },
    spacing: {
      default: '0',
      sm: '8%',
      md: '16%',
      lg: '32%'
    }
  }
}

const borderValues = {
  borders: {
    sm: '0.4rem',
    md: '0.8rem',
    lg: '1.6rem',
    circle: '50%',
    pill: '5rem'
  }
}

export const tokens: DefaultTheme = {
  ...colorsValues,
  ...spacersValues,
  ...fontsValues,
  ...borderValues
}
