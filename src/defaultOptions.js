const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme
const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base
const { colors, spacing, borderWidth, borderRadius, boxShadow } = defaultTheme

module.exports = (theme) => ({
  input: {
    appearance: 'none',
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    borderRadius: borderRadius.md,
    paddingTop: spacing[2],
    paddingRight: spacing[3],
    paddingBottom: spacing[2],
    paddingLeft: spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    '&::placeholder': {
      color: theme('colors.gray.400', colors.gray[400]),
    },
    '&:focus': {
      outline: 'none',
      boxShadow: boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: theme('colors.blue.300', colors.blue[300]),
    },
  },
  textarea: {
    appearance: 'none',
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    borderRadius: borderRadius.md,
    paddingTop: spacing[2],
    paddingRight: spacing[3],
    paddingBottom: spacing[2],
    paddingLeft: spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    '&::placeholder': {
      color: theme('colors.gray.400', colors.gray[400]),
      opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: theme('colors.blue.300', colors.blue[300]),
    },
  },
  multiselect: {
    appearance: 'none',
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    borderRadius: borderRadius.md,
    paddingTop: spacing[2],
    paddingRight: spacing[3],
    paddingBottom: spacing[2],
    paddingLeft: spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    '&:focus': {
      outline: 'none',
      boxShadow: boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: theme('colors.blue.300', colors.blue[300]),
    },
  },
  select: {
    appearance: 'none',
    colorAdjust: 'exact',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    borderRadius: borderRadius.md,
    paddingTop: spacing[2],
    paddingRight: spacing[10],
    paddingBottom: spacing[2],
    paddingLeft: spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    backgroundPosition: `right ${spacing[2]} center`,
    backgroundSize: `1.5em 1.5em`,
    iconColor: theme('colors.gray.400', colors.gray[400]),
    icon: (iconColor) =>
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: theme('colors.blue.300', colors.blue[300]),
    },
  },
  checkbox: {
    appearance: 'none',
    colorAdjust: 'exact',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    height: spacing[4],
    width: spacing[4],
    color: theme('colors.blue.500', colors.blue[500]),
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    iconColor: theme('colors.white', colors.white),
    icon: (iconColor) =>
      `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: theme('colors.blue.300', colors.blue[300]),
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    '&:checked:focus': {
      borderColor: 'transparent',
    },
  },
  radio: {
    appearance: 'none',
    colorAdjust: 'exact',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    borderRadius: '100%',
    height: spacing[4],
    width: spacing[4],
    color: theme('colors.blue.500', colors.blue[500]),
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    iconColor: theme('colors.white', colors.white),
    icon: (iconColor) =>
      `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: theme('colors.blue.300', colors.blue[300]),
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    '&:checked:focus': {
      borderColor: 'transparent',
    },
  },

})
