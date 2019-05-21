const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  theme: {
    formElements: theme => ({
      horizontalPadding: theme('spacing.3'),
      verticalPadding: theme('spacing.2'),
      lineHeight: theme('lineHeight.normal'),
      fontSize: theme('fontSize.base'),
      borderColor: theme('borderColor.default'),
      borderWidth: theme('borderWidth.default'),
      borderRadius: theme('borderRadius.default'),
      backgroundColor: theme('colors.white'),
      focusBorderColor: theme('colors.blue.400'),
      focusShadow: theme('boxShadow.outline'),
      checkboxSize: '1em',
      radioSize: '1em',
      checkboxIcon: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M13.293 4.293a1 1 0 0 1 0 1.414L7 12a1 1 0 0 1-1.414 0L3.293 9.707a1 1 0 0 1 1.414-1.414l1.586 1.586 5.586-5.586a1 1 0 0 1 1.414 0z"/></svg>`,
      radioIcon: `<svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"/></svg>`,
      checkedColor: 'currentColor',
      selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${theme('colors.gray.500')}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
      selectIconOffset: theme('spacing.2'),
      selectIconSize: '1.5em',
    }),
    extend: {},
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
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
    },
    function ({ addComponents, theme }) {
      addComponents({
        '.form-checkbox': {
          appearance: 'none',
          display: 'inline-block',
          height: theme('formElements.checkboxSize'),
          width: theme('formElements.checkboxSize'),
          verticalAlign: 'middle',
          borderWidth: theme('formElements.borderWidth', defaultTheme.borderWidth.default),
          borderRadius: theme('formElements.borderRadius', defaultTheme.borderRadius.default),
          backgroundColor: theme('formElements.backgroundColor'),
          userSelect: 'none',
          'input[type=checkbox]:focus + &, input[type=checkbox]&:focus': {
            outline: 'none',
            boxShadow: theme('formElements.focusShadow', defaultTheme.boxShadow.outline),
          },
          'input[type=checkbox]:focus:not(:checked) + &, input[type=checkbox]&:focus:not(:checked)': {
            borderColor: theme('formElements.focusBorderColor', defaultTheme.colors.blue[400]),
          },
          'input[type=checkbox]:checked + &, input[type=checkbox]&:checked': {
            backgroundColor: 'currentColor',
            borderColor: 'currentColor',
            backgroundImage: `url("${svgToDataUri(theme('formElements.checkboxIcon'))}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        },
        '.form-radio': {
          appearance: 'none',
          display: 'inline-block',
          height: theme('formElements.radioSize'),
          width: theme('formElements.radioSize'),
          verticalAlign: 'middle',
          borderWidth: theme('formElements.borderWidth', defaultTheme.borderWidth.default),
          borderRadius: '9999px',
          backgroundColor: theme('formElements.backgroundColor'),
          userSelect: 'none',
          'input[type=radio]:focus + &, input[type=radio]&:focus': {
            outline: 'none',
            boxShadow: theme('formElements.focusShadow', defaultTheme.boxShadow.outline),
          },
          'input[type=radio]:focus:not(:checked) + &, input[type=radio]&:focus:not(:checked)': {
            borderColor: theme('formElements.focusBorderColor', defaultTheme.colors.blue[400]),
          },
          'input[type=radio]:checked + &, input[type=radio]&:checked': {
            backgroundColor: theme('formElements.checkedColor', 'currentColor'),
            borderColor: theme('formElements.checkedColor', 'currentColor'),
            backgroundImage: `url("${svgToDataUri(theme('formElements.radioIcon'))}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        },
        '.form-input, .form-textarea, .form-multiselect': {
          appearance: 'none',
          backgroundColor: theme('formElements.backgroundColor'),
          borderWidth: theme('formElements.borderWidth', defaultTheme.borderWidth.default),
          borderRadius: theme('formElements.borderRadius', defaultTheme.borderRadius.default),
          padding: `${theme('formElements.verticalPadding', defaultTheme.spacing[2])} ${theme('formElements.horizontalPadding', defaultTheme.spacing[3])}`,
          lineHeight: theme('formElements.lineHeight', defaultTheme.lineHeight.normal),
          '&:focus': {
            outline: 'none',
            boxShadow: theme('formElements.focusShadow', defaultTheme.boxShadow.outline),
            borderColor: theme('formElements.focusBorderColor', defaultTheme.colors.blue[400]),
          }
        },
        '.form-select': {
          backgroundColor: theme('formElements.backgroundColor'),
          borderWidth: theme('formElements.borderWidth', defaultTheme.borderWidth.default),
          borderRadius: theme('formElements.borderRadius', defaultTheme.borderRadius.default),
          paddingTop: theme('formElements.verticalPadding', defaultTheme.spacing[2]),
          paddingRight: `calc(${theme('formElements.selectIconOffset')} * 2 + ${theme('formElements.selectIconSize')})`,
          paddingBottom: theme('formElements.verticalPadding', defaultTheme.spacing[2]),
          paddingLeft: theme('formElements.horizontalPadding', defaultTheme.spacing[3]),
          lineHeight: theme('formElements.lineHeight', defaultTheme.lineHeight.normal),
          appearance: 'none',
          backgroundImage: `url("${svgToDataUri(theme('formElements.selectIcon'))}")`,
          backgroundPosition: `right ${theme('formElements.selectIconOffset', defaultTheme.spacing[2])} center`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${theme('formElements.selectIconSize', '1.5em')} ${theme('formElements.selectIconSize', '1.5em')}`,
          '&::-ms-expand': {
            display: 'none',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: theme('formElements.focusShadow', defaultTheme.boxShadow.outline),
            borderColor: theme('formElements.focusBorderColor', defaultTheme.colors.blue[400]),
          }
        },
      })
    }
  ],
}
