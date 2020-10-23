const customFormsPlugin = require('.')
const snapshotDiff = require('snapshot-diff')

function run(options) {
  const state = { components: {} }
  customFormsPlugin({
    addComponents: (...args) => Object.assign(state.components, ...args),
    theme: () => options,
  })
  return state
}

function diffOnly(options) {
  const before = run()
  const after = run(options)

  return `\n\n${snapshotDiff(before, after, {
    aAnnotation: '__REMOVE_ME__',
    bAnnotation: '__REMOVE_ME__',
    contextLines: 0,
  })
    .replace(/\n\n@@([^@@]*)@@/g, '') // Top level @@ signs
    .replace(/@@([^@@]*)@@/g, '\n---\n') // In between @@ signs
    .replace(/[-+] __REMOVE_ME__\n/g, '')
    .replace(/Snapshot Diff:\n/g, '')
    .replace(/"/g, "'")
    .split('\n')
    .map((line) => `    ${line}`)
    .join('\n')}\n\n`
}

it('should generate the default classes for the form components', () => {
  expect(run()).toMatchInlineSnapshot(`
    Object {
      "components": Object {
        ".form-checkbox": Object {
          "&:checked": Object {
            "backgroundColor": "currentColor",
            "backgroundImage": "url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\\")",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "100% 100%",
            "borderColor": "transparent",
          },
          "&:checked:focus": Object {
            "borderColor": "transparent",
          },
          "&:focus": Object {
            "borderColor": "#93c5fd",
            "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "outline": "none",
          },
          "appearance": "none",
          "backgroundColor": "#fff",
          "backgroundOrigin": "border-box",
          "borderColor": "#d4d4d8",
          "borderRadius": "0.25rem",
          "borderWidth": "1px",
          "color": "#3b82f6",
          "colorAdjust": "exact",
          "display": "inline-block",
          "flexShrink": 0,
          "height": "1rem",
          "userSelect": "none",
          "verticalAlign": "middle",
          "width": "1rem",
        },
        ".form-input": Object {
          "&::placeholder": Object {
            "color": "#a1a1aa",
          },
          "&:focus": Object {
            "borderColor": "#93c5fd",
            "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "outline": "none",
          },
          "appearance": "none",
          "backgroundColor": "#fff",
          "borderColor": "#d4d4d8",
          "borderRadius": "0.375rem",
          "borderWidth": "1px",
          "fontSize": "1rem",
          "lineHeight": "1.5rem",
          "paddingBottom": "0.5rem",
          "paddingLeft": "0.75rem",
          "paddingRight": "0.75rem",
          "paddingTop": "0.5rem",
        },
        ".form-multiselect": Object {
          "&:focus": Object {
            "borderColor": "#93c5fd",
            "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "outline": "none",
          },
          "appearance": "none",
          "backgroundColor": "#fff",
          "borderColor": "#d4d4d8",
          "borderRadius": "0.375rem",
          "borderWidth": "1px",
          "fontSize": "1rem",
          "lineHeight": "1.5rem",
          "paddingBottom": "0.5rem",
          "paddingLeft": "0.75rem",
          "paddingRight": "0.75rem",
          "paddingTop": "0.5rem",
        },
        ".form-radio": Object {
          "&:checked": Object {
            "backgroundColor": "currentColor",
            "backgroundImage": "url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\")",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "100% 100%",
            "borderColor": "transparent",
          },
          "&:checked:focus": Object {
            "borderColor": "transparent",
          },
          "&:focus": Object {
            "borderColor": "#93c5fd",
            "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "outline": "none",
          },
          "appearance": "none",
          "backgroundColor": "#fff",
          "backgroundOrigin": "border-box",
          "borderColor": "#d4d4d8",
          "borderRadius": "100%",
          "borderWidth": "1px",
          "color": "#3b82f6",
          "colorAdjust": "exact",
          "display": "inline-block",
          "flexShrink": 0,
          "height": "1rem",
          "userSelect": "none",
          "verticalAlign": "middle",
          "width": "1rem",
        },
        ".form-select": Object {
          "&:focus": Object {
            "borderColor": "#93c5fd",
            "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "outline": "none",
          },
          "appearance": "none",
          "backgroundColor": "#fff",
          "backgroundImage": "url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\\")",
          "backgroundPosition": "right 0.5rem center",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "1.5em 1.5em",
          "borderColor": "#d4d4d8",
          "borderRadius": "0.375rem",
          "borderWidth": "1px",
          "colorAdjust": "exact",
          "fontSize": "1rem",
          "lineHeight": "1.5rem",
          "paddingBottom": "0.5rem",
          "paddingLeft": "0.75rem",
          "paddingRight": "2.5rem",
          "paddingTop": "0.5rem",
        },
        ".form-textarea": Object {
          "&::placeholder": Object {
            "color": "#a1a1aa",
            "opacity": "1",
          },
          "&:focus": Object {
            "borderColor": "#93c5fd",
            "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "outline": "none",
          },
          "appearance": "none",
          "backgroundColor": "#fff",
          "borderColor": "#d4d4d8",
          "borderRadius": "0.375rem",
          "borderWidth": "1px",
          "fontSize": "1rem",
          "lineHeight": "1.5rem",
          "paddingBottom": "0.5rem",
          "paddingLeft": "0.75rem",
          "paddingRight": "0.75rem",
          "paddingTop": "0.5rem",
        },
      },
    }
  `)
})

it('should be possible to `unset` certain values', () => {
  expect(
    diffOnly({
      default: {
        input: {
          appearance: undefined,
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -       'appearance': 'none',
        +       'appearance': null,

    "
  `)
})

it('should be possible to remove the `input` component', () => {
  expect(
    diffOnly({
      default: {
        input: null,
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -     '.form-input': Object {
        -       '&::placeholder': Object {
        -         'color': '#a1a1aa',
        -       },
        -       '&:focus': Object {
        -         'borderColor': '#93c5fd',
        -         'boxShadow': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        -         'outline': 'none',
        -       },
        -       'appearance': 'none',
        -       'backgroundColor': '#fff',
        -       'borderColor': '#d4d4d8',
        -       'borderRadius': '0.375rem',
        -       'borderWidth': '1px',
        -       'fontSize': '1rem',
        -       'lineHeight': '1.5rem',
        -       'paddingBottom': '0.5rem',
        -       'paddingLeft': '0.75rem',
        -       'paddingRight': '0.75rem',
        -       'paddingTop': '0.5rem',
        -     },

    "
  `)
})

it('should be possible to remove the `textarea` component', () => {
  expect(
    diffOnly({
      default: {
        textarea: null,
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -     '.form-textarea': Object {
        -       '&::placeholder': Object {
        -         'color': '#a1a1aa',
        -         'opacity': '1',
        -       },
        -       '&:focus': Object {
        -         'borderColor': '#93c5fd',
        -         'boxShadow': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        -         'outline': 'none',
        -       },
        -       'appearance': 'none',
        -       'backgroundColor': '#fff',
        -       'borderColor': '#d4d4d8',
        -       'borderRadius': '0.375rem',
        -       'borderWidth': '1px',
        -       'fontSize': '1rem',
        -       'lineHeight': '1.5rem',
        -       'paddingBottom': '0.5rem',
        -       'paddingLeft': '0.75rem',
        -       'paddingRight': '0.75rem',
        -       'paddingTop': '0.5rem',
        -     },

    "
  `)
})

it('should be possible to remove the `multiselect` component', () => {
  expect(
    diffOnly({
      default: {
        multiselect: null,
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -     '.form-multiselect': Object {
        -       '&:focus': Object {
        -         'borderColor': '#93c5fd',
        -         'boxShadow': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        -         'outline': 'none',
        -       },
        -       'appearance': 'none',
        -       'backgroundColor': '#fff',
        -       'borderColor': '#d4d4d8',
        -       'borderRadius': '0.375rem',
        -       'borderWidth': '1px',
        -       'fontSize': '1rem',
        -       'lineHeight': '1.5rem',
        -       'paddingBottom': '0.5rem',
        -       'paddingLeft': '0.75rem',
        -       'paddingRight': '0.75rem',
        -       'paddingTop': '0.5rem',
        -     },

    "
  `)
})

it('should be possible to remove the `select` component', () => {
  expect(
    diffOnly({
      default: {
        select: null,
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -     '.form-select': Object {
        -       '&:focus': Object {
        -         'borderColor': '#93c5fd',
        -         'boxShadow': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        -         'outline': 'none',
        -       },
        -       'appearance': 'none',
        -       'backgroundColor': '#fff',
        -       'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\\\\')',
        -       'backgroundPosition': 'right 0.5rem center',
        -       'backgroundRepeat': 'no-repeat',
        -       'backgroundSize': '1.5em 1.5em',
        -       'borderColor': '#d4d4d8',
        -       'borderRadius': '0.375rem',
        -       'borderWidth': '1px',
        -       'colorAdjust': 'exact',
        -       'fontSize': '1rem',
        -       'lineHeight': '1.5rem',
        -       'paddingBottom': '0.5rem',
        -       'paddingLeft': '0.75rem',
        -       'paddingRight': '2.5rem',
        -       'paddingTop': '0.5rem',
        -     },

    "
  `)
})

it('should be possible to remove the `checkbox` component', () => {
  expect(
    diffOnly({
      default: {
        checkbox: null,
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -     '.form-checkbox': Object {
        -       '&:checked': Object {
        -         'backgroundColor': 'currentColor',
        -         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\\\\')',
        -         'backgroundPosition': 'center',
        -         'backgroundRepeat': 'no-repeat',
        -         'backgroundSize': '100% 100%',
        -         'borderColor': 'transparent',
        -       },
        -       '&:checked:focus': Object {
        -         'borderColor': 'transparent',
        -       },
        -       '&:focus': Object {
        -         'borderColor': '#93c5fd',
        -         'boxShadow': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        -         'outline': 'none',
        -       },
        -       'appearance': 'none',
        -       'backgroundColor': '#fff',
        -       'backgroundOrigin': 'border-box',
        -       'borderColor': '#d4d4d8',
        -       'borderRadius': '0.25rem',
        -       'borderWidth': '1px',
        -       'color': '#3b82f6',
        -       'colorAdjust': 'exact',
        -       'display': 'inline-block',
        -       'flexShrink': 0,
        -       'height': '1rem',
        -       'userSelect': 'none',
        -       'verticalAlign': 'middle',
        -       'width': '1rem',
        -     },

    "
  `)
})

it('should be possible to remove the `radio` component', () => {
  expect(
    diffOnly({
      default: {
        radio: null,
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -     '.form-radio': Object {
        -       '&:checked': Object {
        -         'backgroundColor': 'currentColor',
        -         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\\\')',
        -         'backgroundPosition': 'center',
        -         'backgroundRepeat': 'no-repeat',
        -         'backgroundSize': '100% 100%',
        -         'borderColor': 'transparent',
        -       },
        -       '&:checked:focus': Object {
        -         'borderColor': 'transparent',
        -       },
        -       '&:focus': Object {
        -         'borderColor': '#93c5fd',
        -         'boxShadow': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        -         'outline': 'none',
        -       },
        -       'appearance': 'none',
        -       'backgroundColor': '#fff',
        -       'backgroundOrigin': 'border-box',
        -       'borderColor': '#d4d4d8',
        -       'borderRadius': '100%',
        -       'borderWidth': '1px',
        -       'color': '#3b82f6',
        -       'colorAdjust': 'exact',
        -       'display': 'inline-block',
        -       'flexShrink': 0,
        -       'height': '1rem',
        -       'userSelect': 'none',
        -       'verticalAlign': 'middle',
        -       'width': '1rem',
        -     },

    "
  `)
})

it('should be possible to `unset` certain values', () => {
  expect(
    diffOnly({
      default: {
        input: {
          appearance: undefined,
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -       'appearance': 'none',
        +       'appearance': null,

    "
  `)
})

it('should be possible to add a custom modifier for `input`', () => {
  expect(
    diffOnly({
      dark: {
        input: {
          backgroundColor: '#GRAY900',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-input-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },

    "
  `)
})

it('should be possible to add a custom modifier for `textarea`', () => {
  expect(
    diffOnly({
      dark: {
        textarea: {
          backgroundColor: '#GRAY900',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-textarea-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },

    "
  `)
})

it('should be possible to add a custom modifier for `multiselect`', () => {
  expect(
    diffOnly({
      dark: {
        multiselect: {
          backgroundColor: '#GRAY900',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-multiselect-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },

    "
  `)
})

it('should be possible to add a custom modifier for `select`', () => {
  expect(
    diffOnly({
      dark: {
        select: {
          backgroundColor: '#GRAY900',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-select-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },

    "
  `)
})

it('should be possible to add a custom modifier for `checkbox`', () => {
  expect(
    diffOnly({
      dark: {
        checkbox: {
          backgroundColor: '#GRAY900',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-checkbox-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },

    "
  `)
})

it('should be possible to add a custom modifier for `radio`', () => {
  expect(
    diffOnly({
      dark: {
        radio: {
          backgroundColor: '#GRAY900',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-radio-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },

    "
  `)
})

it('should be possible to combine modifiers', () => {
  expect(
    diffOnly({
      dark: {
        'input, textarea, multiselect, checkbox, radio': {
          backgroundColor: '#GRAY900',
        },
        select: {
          backgroundColor: '#GRAY600',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        +     '.form-checkbox-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },
        
        ---
        
        +     '.form-input-dark': Object {
        +       'backgroundColor': '#GRAY900',
        +     },
        
        ---
        
        +     },
        +     '.form-multiselect-dark': Object {
        +       'backgroundColor': '#GRAY900',
        
        ---
        
        +     },
        +     '.form-radio-dark': Object {
        +       'backgroundColor': '#GRAY900',
        
        ---
        
        +     },
        +     '.form-select-dark': Object {
        +       'backgroundColor': '#GRAY600',
        
        ---
        
        +     },
        +     '.form-textarea-dark': Object {
        +       'backgroundColor': '#GRAY900',

    "
  `)
})

it('should be possible to change the icon and icon color of a `select` component', () => {
  expect(
    diffOnly({
      default: {
        select: {
          icon: (iconColor) => `<svg fill="${iconColor}" />`,
          iconColor: 'pink',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -       'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\\\\')',
        +       'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg fill='pink' /%3e\\\\')',

    "
  `)
})

it('should be possible to change the icon of a `select` component', () => {
  expect(
    diffOnly({
      default: {
        select: {
          icon: `<svg />`,
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -       'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\\\\')',
        +       'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg /%3e\\\\')',

    "
  `)
})

it('should be possible to change the icon and icon color of a `checkbox` component', () => {
  expect(
    diffOnly({
      default: {
        checkbox: {
          icon: (iconColor) => `<svg fill="${iconColor}" />`,
          iconColor: 'pink',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\\\\')',
        +         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg fill='pink' /%3e\\\\')',

    "
  `)
})

it('should be possible to change the icon of a `checkbox` component', () => {
  expect(
    diffOnly({
      default: {
        checkbox: {
          icon: `<svg />`,
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\\\\')',
        +         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg /%3e\\\\')',

    "
  `)
})

it('should be possible to change the icon and icon color of a `radio` component', () => {
  expect(
    diffOnly({
      default: {
        radio: {
          icon: (iconColor) => `<svg fill="${iconColor}" />`,
          iconColor: 'pink',
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\\\')',
        +         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg fill='pink' /%3e\\\\')',

    "
  `)
})

it('should be possible to change the icon of a `radio` component', () => {
  expect(
    diffOnly({
      default: {
        radio: {
          icon: `<svg />`,
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

        -         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\\\')',
        +         'backgroundImage': 'url(\\\\'data:image/svg+xml,%3csvg /%3e\\\\')',

    "
  `)
})
