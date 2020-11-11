const hexRgb = require('hex-rgb')
const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme
const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base
const { colors, spacing, borderWidth, borderRadius, boxShadow } = defaultTheme

function rgba(hex, alpha) {
  const { red, green, blue } = hexRgb(hex)
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

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
      '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff)`,
      '--ring-shadow': `0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, ${theme(
        'colors.blue.600',
        colors.blue[600]
      )})`,
      'box-shadow': [`var(--ring-offset-shadow)`, `var(--ring-shadow)`, `var(--box-shadow, 0 0 #0000)`].join(', '),
      borderColor: theme('colors.blue.600', colors.blue[600]),
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
      '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff)`,
      '--ring-shadow': `0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, ${theme(
        'colors.blue.600',
        colors.blue[600]
      )})`,
      'box-shadow': [`var(--ring-offset-shadow)`, `var(--ring-shadow)`, `var(--box-shadow, 0 0 #0000)`].join(', '),
      borderColor: theme('colors.blue.600', colors.blue[600]),
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
      '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff)`,
      '--ring-shadow': `0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, ${theme(
        'colors.blue.600',
        colors.blue[600]
      )})`,
      'box-shadow': [`var(--ring-offset-shadow)`, `var(--ring-shadow)`, `var(--box-shadow, 0 0 #0000)`].join(', '),
      borderColor: theme('colors.blue.600', colors.blue[600]),
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
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${iconColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
    '&:focus': {
      outline: 'none',
      '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff)`,
      '--ring-shadow': `0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, ${theme(
        'colors.blue.600',
        colors.blue[600]
      )})`,
      'box-shadow': [`var(--ring-offset-shadow)`, `var(--ring-shadow)`, `var(--box-shadow, 0 0 #0000)`].join(', '),
      borderColor: theme('colors.blue.600', colors.blue[600]),
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
    color: theme('colors.blue.600', colors.blue[600]),
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    '&:focus': {
      outline: 'none',
      '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 2px) var(--ring-offset-color, #fff)`,
      '--ring-shadow': `0 0 0 calc(2px + var(--ring-offset-width, 2px)) var(--ring-color, ${theme(
        'colors.blue.600',
        colors.blue[600]
      )})`,
      'box-shadow': [`var(--ring-offset-shadow)`, `var(--ring-shadow)`, `var(--box-shadow, 0 0 #0000)`].join(', '),
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      iconColor: theme('colors.white', colors.white),
      icon: (iconColor) =>
        `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`,
    },
    '&:checked:hover': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
    '&:checked:focus': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
    '&:indeterminate': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      iconColor: theme('colors.white', colors.white),
      icon: (iconColor) =>
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="${iconColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`,
    },
    '&:indeterminate:hover': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
    '&:indeterminate:focus': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
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
    color: theme('colors.blue.600', colors.blue[600]),
    backgroundColor: theme('colors.white', colors.white),
    borderColor: theme('colors.gray.300', colors.gray[300]),
    borderWidth: borderWidth.DEFAULT,
    '&:focus': {
      outline: 'none',
      '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 2px) var(--ring-offset-color, #fff)`,
      '--ring-shadow': `0 0 0 calc(2px + var(--ring-offset-width, 2px)) var(--ring-color, ${theme(
        'colors.blue.600',
        colors.blue[600]
      )})`,
      'box-shadow': [`var(--ring-offset-shadow)`, `var(--ring-shadow)`, `var(--box-shadow, 0 0 #0000)`].join(', '),
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      iconColor: theme('colors.white', colors.white),
      icon: (iconColor) =>
        `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
    },
    '&:checked:hover': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
    '&:checked:focus': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
  },
})
