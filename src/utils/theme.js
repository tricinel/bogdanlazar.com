const theme = {
  primary: '#efda5a',
  secondary: '#383d3d',
  accent: '#34485e',
  body: '#fafafa',
  bodyColor: '#34475e',
  linkColor: '#10bc9b',
  linkColorHover: '#10bc9b',
  transition: 'all .3s ease'
};

const typography = {
  baseFontSize: '22px',
  baseLineHeight: 1.9,
  googleFonts: [
    {
      name: 'Yanone Kaffeesatz',
      styles: ['400', '700']
    },
    {
      name: 'PT Serif',
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
    'PT Serif',
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
  overrideStyles: ({ rhythm }) => ({
    a: {
      color: theme.linkColor,
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: theme.linkColorHover,
      textDecoration: 'underline'
    },
    'h1,h2,h3,h4,h5,h6': {
      borderBottom: `5px solid ${theme.primary}`,
      color: theme.accent,
      display: 'inline-block',
      fontSize: rhythm(1),
      fontWeight: 400,
      marginTop: rhythm(1)
    },
    h1: {
      color: theme.secondary
    },
    'ul,ol': {
      marginLeft: rhythm(0.5)
    }
  })
};

export { typography };

export default theme;
