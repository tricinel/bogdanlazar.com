const theme = {
  primary: '',
  secondary: '',
  body: '',
  bodyColor: '',
  linkColor: '',
  linkColorHover: '',
  transition: 'all .3s ease'
};

const typography = {
  baseFontSize: '18px',
  baseLineHeight: 1.625,
  googleFonts: [
    {
      name: 'Signika Negative',
      styles: ['700']
    },
    {
      name: 'Lato',
      styles: ['400', '700']
    },
    {
      name: 'Source Code Pro',
      styles: ['400']
    }
  ],
  headerFontFamily: [
    'Signika Negative',
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
    'Lato',
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
  blockMarginBottom: 1 / 2
};

export { typography };

export default theme;
