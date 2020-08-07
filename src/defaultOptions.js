const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme

module.exports = {
  input: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    '&::placeholder': {
      color: defaultTheme.colors.gray[500],
      opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:disabled': {
      backgroundColor: defaultTheme.colors.gray[100]
    },
    '&[readonly]': {
      backgroundColor: defaultTheme.colors.gray[100]
    }
  },
  textarea: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    '&::placeholder': {
      color: defaultTheme.colors.gray[500],
      opacity: '1',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:disabled': {
      backgroundColor: defaultTheme.colors.gray[100]
    },
    '&[readonly]': {
      backgroundColor: defaultTheme.colors.gray[100]
    },
  },
  multiselect: {
    appearance: 'none',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[3],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:disabled': {
      backgroundColor: defaultTheme.colors.gray[100]
    }
  },
  select: {
    appearance: 'none',
    colorAdjust: 'exact',
    '&::-ms-expand': {
      border: 'none', // The select padding is causing some whitespace around the chevron which looks weird with a border
      '@media not print': {
        display: 'none',
      },
    },
    backgroundRepeat: 'no-repeat',
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    paddingTop: defaultTheme.spacing[2],
    paddingRight: defaultTheme.spacing[10],
    paddingBottom: defaultTheme.spacing[2],
    paddingLeft: defaultTheme.spacing[3],
    fontSize: defaultTheme.fontSize.base,
    lineHeight: defaultTheme.lineHeight.normal,
    backgroundPosition: `right ${defaultTheme.spacing[2]} center`,
    backgroundSize: `1.5em 1.5em`,
    iconColor: defaultTheme.colors.gray[500],
    icon: iconColor => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${iconColor}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:disabled': {
      backgroundColor: defaultTheme.colors.gray[100]
    }
  },
  checkbox: {
    appearance: 'none',
    colorAdjust: 'exact',
    '&::-ms-check': {
      '@media not print': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
      }
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    height: '1em',
    width: '1em',
    color: defaultTheme.colors.blue[500],
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    iconColor: defaultTheme.colors.white,
    icon: iconColor => `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    '&:disabled': {
      backgroundColor: defaultTheme.colors.gray[100],
    },
    '&:disabled + *': {
      color: defaultTheme.colors.gray[600],
    },
    '&:disabled:checked': {
      backgroundColor: defaultTheme.colors.gray[500],
    },
  },
  radio: {
    appearance: 'none',
    colorAdjust: 'exact',
    '&::-ms-check': {
      '@media not print': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
      }
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundOrigin: 'border-box',
    userSelect: 'none',
    flexShrink: 0,
    borderRadius: '100%',
    height: '1em',
    width: '1em',
    color: defaultTheme.colors.blue[500],
    backgroundColor: defaultTheme.colors.white,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    iconColor: defaultTheme.colors.white,
    icon: iconColor => `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
    '&:focus': {
      outline: 'none',
      boxShadow: defaultTheme.boxShadow.outline,
      borderColor: defaultTheme.colors.blue[400],
    },
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    '&:disabled': {
      backgroundColor: defaultTheme.colors.gray[100],
    },
    '&:disabled + *': {
      color: defaultTheme.colors.gray[600],
    },
    '&:disabled:checked': {
      backgroundColor: defaultTheme.colors.gray[500],
    },
  }
}
