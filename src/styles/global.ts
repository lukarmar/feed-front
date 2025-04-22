import { stylesConfig } from "./default";

export const globalStyles = stylesConfig.globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#F3F3F3',
    color: '$gray100'
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto,sans-serif',
    fontWeight: 400
  }
})