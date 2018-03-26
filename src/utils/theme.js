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
  baseFontSize: '22px',
  baseLineHeight: 1.9,
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
      color: theme.secondary,
      fontSize: rhythm(1),
      fontWeight: 400
    },
    hr: {
      background: `${theme.body}`,
      border: 0,
      borderBottom: `3px dashed ${theme.primary}`,
      marginBottom: rhythm(1),
      marginTop: rhythm(1)
    },
    'ul,ol': {
      marginLeft: rhythm(0.5)
    }
  })
};

export { typography };

export default theme;
