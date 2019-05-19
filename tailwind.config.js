const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function ({ addUtilities, addComponents, theme }) {
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

      addComponents({
        '.form-checkbox': {
          display: 'inline-block',
          height: theme('spacing.4', defaultTheme.spacing[4]),
          width: theme('spacing.4', defaultTheme.spacing[4]),
          verticalAlign: 'middle',
          borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
          borderRadius: theme('borderRadius.default', defaultTheme.borderRadius.default),
          backgroundColor: '#fff',
          userSelect: 'none',
          'input[type=checkbox]:focus + &': {
            outline: 'none',
            boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
          },
          'input[type=checkbox]:focus:not(:checked) + &': {
            borderColor: defaultTheme.colors.blue[400],
          },
          'input[type=checkbox]:checked + &': {
            backgroundColor: 'currentColor',
            borderColor: 'currentColor',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23ffffff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5 14.586l7.293-8.293a1 1 0 0 1 1.414 1.414l-8 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414l3.293 3.293z' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        },
        '.form-radio': {
          display: 'inline-block',
          height: theme('spacing.4', defaultTheme.spacing[4]),
          width: theme('spacing.4', defaultTheme.spacing[4]),
          verticalAlign: 'middle',
          borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
          borderRadius: '9999px',
          backgroundColor: '#fff',
          userSelect: 'none',
          'input[type=radio]:focus + &': {
            outline: 'none',
            boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
          },
          'input[type=radio]:focus:not(:checked) + &': {
            borderColor: defaultTheme.colors.blue[400],
          },
          'input[type=radio]:checked + &': {
            backgroundColor: 'currentColor',
            borderColor: 'currentColor',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23ffffff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        },
        '.form-input, .form-textarea': {
          backgroundColor: '#fff',
          borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
          borderRadius: theme('borderRadius.default', defaultTheme.borderRadius.default),
          padding: `${theme('spacing.2', defaultTheme.spacing[2])} ${theme('spacing.3', defaultTheme.spacing[3])}`,
          lineHeight: theme('lineHeight.normal', defaultTheme.lineHeight.normal),
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
            borderColor: defaultTheme.colors.blue[400],
          }
        },
        '.form-select': {
          backgroundColor: '#fff',
          borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
          borderRadius: theme('borderRadius.default', defaultTheme.borderRadius.default),
          paddingTop: `${theme('spacing.2', defaultTheme.spacing[2])}`,
          paddingRight: `${theme('spacing.10', defaultTheme.spacing[10])}`,
          paddingBottom: `${theme('spacing.2', defaultTheme.spacing[2])}`,
          paddingLeft: `${theme('spacing.3', defaultTheme.spacing[3])}`,
          lineHeight: theme('lineHeight.normal', defaultTheme.lineHeight.normal),
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${theme('colors.gray.500', defaultTheme.colors.gray[500]).replace('#', '%23')}' viewBox='0 0 24 24' %3E%3Cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E")`,
          backgroundPosition: `right ${theme('spacing.2', defaultTheme.spacing[2])} center`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em',
          '&::-ms-expand': {
            display: 'none',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
            borderColor: defaultTheme.colors.blue[400],
          }
        },
      })
    }
  ],
}
