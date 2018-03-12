const theme = {
  primary: '#efda5a',
  secondary: '#383d3d',
  body: '#fafafa',
  bodyColor: '#34475e',
  linkColor: '#10bc9b',
  linkColorHover: '#10bc9b',
  transition: 'all .3s ease'
};

const typography = {
  baseFontSize: '18px',
  baseLineHeight: 1.625,
  googleFonts: [
    {
      name: 'Yanone Kaffeesatz',
      styles: ['400', '700']
    },
    {
      name: 'Source Code Pro',
      styles: ['400', '700']
    }
  ],
  headerFontFamily: [
    'Yanone Kaffeesatz',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyFontFamily: [
    'Source Code Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyColor: theme.bodyColor,
  headerWeight: 600,
  bodyWeight: 'normal',
  boldWeight: 600,
  blockMarginBottom: 1 / 2,
  overrideStyles: () => ({
    a: {
      color: theme.linkColor,
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: theme.linkColorHover,
      textDecoration: 'underline'
    },
    'h1,h2,h3,h4,h5,h6': {
      color: theme.secondary
    },
    h1: {
      backgroundColor: theme.primary
    }
  })
};

export { typography };

export default theme;
