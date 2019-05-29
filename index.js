const svgToDataUri = require('mini-svg-data-uri')
const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme

module.exports = function ({ addUtilities, addComponents, theme }) {

  const options = {
    horizontalPadding: defaultTheme.spacing[3],
    verticalPadding: defaultTheme.spacing[2],
    lineHeight: defaultTheme.lineHeight.normal,
    fontSize: defaultTheme.fontSize.base,
    borderColor: defaultTheme.borderColor.default,
    borderWidth: defaultTheme.borderWidth.default,
    borderRadius: defaultTheme.borderRadius.default,
    backgroundColor: defaultTheme.colors.white,
    focusBorderColor: defaultTheme.colors.blue[400],
    focusBoxShadow: defaultTheme.boxShadow.outline,
    boxShadow: defaultTheme.boxShadow.none,
    checkboxSize: '1em',
    radioSize: '1em',
    checkboxIcon: `<svg viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`,
    radioIcon: `<svg viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
    checkedColor: defaultTheme.colors.gray[800],
    selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${defaultTheme.colors.gray[500]}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
    selectIconOffset: defaultTheme.spacing[2],
    selectIconSize: '1.5em',
    ...theme('customForms'),
  }

  addComponents({
    '.form-checkbox': {
      appearance: 'none',
      boxShadow: options.boxShadow,
      display: 'inline-block',
      height: options.checkboxSize,
      width: options.checkboxSize,
      verticalAlign: 'middle',
      color: options.checkedColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      borderRadius: options.borderRadius,
      backgroundColor: options.backgroundColor,
      backgroundOrigin: 'border-box',
      userSelect: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: options.focusBoxShadow,
      },
      '&:focus:not(:checked)': {
        borderColor: options.focusBorderColor,
      },
      '&:checked': {
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
        backgroundImage: `url("${svgToDataUri(options.checkboxIcon)}")`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
      '&::-ms-check': {
        color: 'transparent', // Hide the check
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
        borderWidth: options.borderWidth,
      }
    },
    '.form-radio': {
      appearance: 'none',
      boxShadow: options.boxShadow,
      display: 'inline-block',
      height: options.radioSize,
      width: options.radioSize,
      verticalAlign: 'middle',
      color: options.checkedColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      borderRadius: '50%',
      backgroundColor: options.backgroundColor,
      backgroundOrigin: 'border-box',
      userSelect: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: options.focusBoxShadow,
      },
      '&:focus:not(:checked)': {
        borderColor: options.focusBorderColor,
      },
      '&:checked': {
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
        backgroundImage: `url("${svgToDataUri(options.radioIcon)}")`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
      '&::-ms-check': {
        color: 'transparent', // Hide the dot
        background: 'inherit',
        borderColor: 'inherit',
        borderRadius: 'inherit',
        borderWidth: options.borderWidth,
      }
    },
    '.form-input, .form-textarea, .form-multiselect': {
      appearance: 'none',
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      borderRadius: options.borderRadius,
      boxShadow: options.boxShadow,
      padding: `${options.verticalPadding} ${options.horizontalPadding}`,
      fontSize: options.fontSize,
      lineHeight: options.lineHeight,
      '&:focus': {
        outline: 'none',
        boxShadow: options.focusBoxShadow,
        borderColor: options.focusBorderColor,
      }
    },
    '.form-select': {
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth,
      borderRadius: options.borderRadius,
      boxShadow: options.boxShadow,
      paddingTop: options.verticalPadding,
      paddingRight: `calc(${options.selectIconOffset} * 2 + ${options.selectIconSize})`,
      paddingBottom: options.verticalPadding,
      paddingLeft: options.horizontalPadding,
      fontSize: options.fontSize,
      lineHeight: options.lineHeight,
      appearance: 'none',
      backgroundImage: `url("${svgToDataUri(options.selectIcon)}")`,
      backgroundPosition: `right ${options.selectIconOffset} center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${options.selectIconSize} ${options.selectIconSize}`,
      '&::-ms-expand': {
        display: 'none',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: options.focusBoxShadow,
        borderColor: options.focusBorderColor,
      }
    },
  })
}
