const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme

const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base

module.exports = {
  input: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.colors.gray[300],
    borderWidth: defaultTheme.borderWidth.DEFAULT,
    borderRadius: defaultTheme.borderRadius.md,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    '&::placeholder': {
      color: defaultTheme.colors.gray[400],
      // opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: defaultTheme.colors.blue[300],
    },
  },
  textarea: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.colors.gray[300],
    borderWidth: defaultTheme.borderWidth.DEFAULT,
    borderRadius: defaultTheme.borderRadius.md,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    '&::placeholder': {
      color: defaultTheme.colors.gray[400],
      opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: defaultTheme.colors.blue[300],
    },
  },
  multiselect: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.colors.gray[300],
    borderWidth: defaultTheme.borderWidth.DEFAULT,
    borderRadius: defaultTheme.borderRadius.md,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: defaultTheme.colors.blue[300],
    },
  },
  select: {
    appearance: 'none',
    colorAdjust: 'exact',
    // TODO: Still needed now that IE11 is dropped?
    '&::-ms-expand': {
      border: 'none', // The select padding is causing some whitespace around the chevron which looks weird with a border
      '@media not print': {
        display: 'none',
      },
    },
    backgroundRepeat: 'no-repeat',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.colors.gray[300],
    borderWidth: defaultTheme.borderWidth.DEFAULT,
    borderRadius: defaultTheme.borderRadius.md,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[10],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    backgroundPosition: `right ${defaultTheme.spacing[2]} center`,
    backgroundSize: `1.5em 1.5em`,
    iconColor: defaultTheme.colors.gray[400],
    icon: (iconColor) =>
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: defaultTheme.colors.blue[300],
    },
  },
  checkbox: {
    appearance: 'none',
    colorAdjust: 'exact',
    // TODO: Still needed now that IE11 is dropped?
    '&::-ms-check': {
      '@media not print': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
      },
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    height: defaultTheme.spacing[4],
    width: defaultTheme.spacing[4],
    color: defaultTheme.colors.blue[500],
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.colors.gray[300],
    borderWidth: defaultTheme.borderWidth.DEFAULT,
    borderRadius: defaultTheme.borderRadius.DEFAULT,
    iconColor: defaultTheme.colors.white,
    icon: (iconColor) =>
      `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: defaultTheme.colors.blue[300],
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  },
  radio: {
    appearance: 'none',
    colorAdjust: 'exact',
    // TODO: Still needed now that IE11 is dropped?
    '&::-ms-check': {
      '@media not print': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
      },
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    borderRadius: '100%',
    height: defaultTheme.spacing[4],
    width: defaultTheme.spacing[4],
    color: defaultTheme.colors.blue[500],
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.colors.gray[300],
    borderWidth: defaultTheme.borderWidth.DEFAULT,
    iconColor: defaultTheme.colors.white,
    icon: (iconColor) =>
      `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline, // TODO: Will box-shadow outlines be moved?
      borderColor: defaultTheme.colors.blue[300],
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
}
