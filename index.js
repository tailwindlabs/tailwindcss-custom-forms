const svgToDataUri = require('mini-svg-data-uri')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = function ({ addUtilities, addComponents, theme }) {

  // Temporary until this class is added to core
  addUtilities({
    '.sr-only': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: '0',
    }
  })

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
    focusShadow: defaultTheme.boxShadow.outline,
    checkboxSize: '1em',
    radioSize: '1em',
    checkboxIcon: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M13.293 4.293a1 1 0 0 1 0 1.414L7 12a1 1 0 0 1-1.414 0L3.293 9.707a1 1 0 0 1 1.414-1.414l1.586 1.586 5.586-5.586a1 1 0 0 1 1.414 0z"/></svg>`,
    radioIcon: `<svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"/></svg>`,
    checkedColor: 'currentColor',
    selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${defaultTheme.colors.gray[500]}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
    selectIconOffset: defaultTheme.spacing[2],
    selectIconSize: '1.5em',
    ...theme('customForms'),
  }

  addComponents({
    '.form-checkbox': {
      appearance: 'none',
      display: 'inline-block',
      height: options.checkboxSize,
      width: options.checkboxSize,
      verticalAlign: 'middle',
      borderWidth: options.borderWidth,
      borderRadius: options.borderRadius,
      backgroundColor: options.backgroundColor,
      userSelect: 'none',
      'input[type=checkbox]:focus + &, input[type=checkbox]&:focus': {
        outline: 'none',
        boxShadow: options.focusShadow,
      },
      'input[type=checkbox]:focus:not(:checked) + &, input[type=checkbox]&:focus:not(:checked)': {
        borderColor: options.focusBorderColor,
      },
      'input[type=checkbox]:checked + &, input[type=checkbox]&:checked': {
        backgroundColor: options.checkedColor,
        borderColor: options.checkedColor,
        backgroundImage: `url("${svgToDataUri(options.checkboxIcon)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
    },
    '.form-radio': {
      appearance: 'none',
      display: 'inline-block',
      height: options.radioSize,
      width: options.radioSize,
      verticalAlign: 'middle',
      borderWidth: options.borderWidth,
      borderRadius: '9999px',
      backgroundColor: options.backgroundColor,
      userSelect: 'none',
      'input[type=radio]:focus + &, input[type=radio]&:focus': {
        outline: 'none',
        boxShadow: options.focusShadow,
      },
      'input[type=radio]:focus:not(:checked) + &, input[type=radio]&:focus:not(:checked)': {
        borderColor: options.focusBorderColor,
      },
      'input[type=radio]:checked + &, input[type=radio]&:checked': {
        backgroundColor: options.checkedColor,
        borderColor: options.checkedColor,
        backgroundImage: `url("${svgToDataUri(options.radioIcon)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
    },
    '.form-input, .form-textarea, .form-multiselect': {
      appearance: 'none',
      backgroundColor: options.backgroundColor,
      borderWidth: options.borderWidth,
      borderRadius: options.borderRadius,
      padding: `${options.verticalPadding} ${options.horizontalPadding}`,
      fontSize: options.fontSize,
      lineHeight: options.lineHeight,
      '&:focus': {
        outline: 'none',
        boxShadow: options.focusShadow,
        borderColor: options.focusBorderColor,
      }
    },
    '.form-select': {
      backgroundColor: options.backgroundColor,
      borderWidth: options.borderWidth,
      borderRadius: options.borderRadius,
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
        boxShadow: options.focusShadow,
        borderColor: options.focusBorderColor,
      }
    },
  })
}
