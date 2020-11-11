const tailwind = require('tailwindcss')
const customFormsPlugin = require('.')
const snapshotDiff = require('snapshot-diff')
const postcss = require('postcss')

function run(config = {}) {
  return postcss([tailwind({ ...config, corePlugins: [], plugins: [customFormsPlugin] })])
    .process(['@tailwind base;', '@tailwind components;', '@tailwind utilities;'].join('\n'), { from: undefined })
    .then((result) => result.css)
}

async function diffOnly(config = {}) {
  const [before, after] = await Promise.all([run(), run(config)])

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
    .map((line) => `  ${line}`)
    .join('\n')}\n\n`
}

it('should generate the default classes for the form components', async () => {
  expect(await run()).toMatchInlineSnapshot(`
    ".form-input {
      appearance: none;
      background-color: #fff;
      border-color: #d1d5db;
      border-width: 1px;
      border-radius: 0.375rem;
      padding-top: 0.5rem;
      padding-right: 0.75rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .form-input::placeholder {
      color: #9ca3af;
    }

    .form-input:focus {
      outline: none;
      --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      border-color: #2563eb;
    }

    .form-textarea {
      appearance: none;
      background-color: #fff;
      border-color: #d1d5db;
      border-width: 1px;
      border-radius: 0.375rem;
      padding-top: 0.5rem;
      padding-right: 0.75rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .form-textarea::placeholder {
      color: #9ca3af;
      opacity: 1;
    }

    .form-textarea:focus {
      outline: none;
      --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      border-color: #2563eb;
    }

    .form-multiselect {
      appearance: none;
      background-color: #fff;
      border-color: #d1d5db;
      border-width: 1px;
      border-radius: 0.375rem;
      padding-top: 0.5rem;
      padding-right: 0.75rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .form-multiselect:focus {
      outline: none;
      --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      border-color: #2563eb;
    }

    .form-select {
      background-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\\");
      appearance: none;
      color-adjust: exact;
      background-repeat: no-repeat;
      background-color: #fff;
      border-color: #d1d5db;
      border-width: 1px;
      border-radius: 0.375rem;
      padding-top: 0.5rem;
      padding-right: 2.5rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5rem;
      background-position: right 0.5rem center;
      background-size: 1.5em 1.5em;
    }

    .form-select:focus {
      outline: none;
      --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      border-color: #2563eb;
    }

    .form-checkbox {
      appearance: none;
      color-adjust: exact;
      display: inline-block;
      vertical-align: middle;
      background-origin: border-box;
      user-select: none;
      flex-shrink: 0;
      height: 1rem;
      width: 1rem;
      color: #2563eb;
      background-color: #fff;
      border-color: #d1d5db;
      border-width: 1px;
      border-radius: 0.25rem;
    }

    .form-checkbox:focus {
      outline: none;
      --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 2px) var(--ring-offset-color, #fff);
      --ring-shadow: 0 0 0 calc(2px + var(--ring-offset-width, 2px)) var(--ring-color, #2563eb);
      box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
    }

    .form-checkbox:checked {
      background-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .form-checkbox:checked:hover {
      border-color: transparent;
      background-color: currentColor;
    }

    .form-checkbox:checked:focus {
      border-color: transparent;
      background-color: currentColor;
    }

    .form-checkbox:indeterminate {
      background-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\\");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .form-checkbox:indeterminate:hover {
      border-color: transparent;
      background-color: currentColor;
    }

    .form-checkbox:indeterminate:focus {
      border-color: transparent;
      background-color: currentColor;
    }

    .form-radio {
      appearance: none;
      color-adjust: exact;
      display: inline-block;
      vertical-align: middle;
      background-origin: border-box;
      user-select: none;
      flex-shrink: 0;
      border-radius: 100%;
      height: 1rem;
      width: 1rem;
      color: #2563eb;
      background-color: #fff;
      border-color: #d1d5db;
      border-width: 1px;
    }

    .form-radio:focus {
      outline: none;
      --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 2px) var(--ring-offset-color, #fff);
      --ring-shadow: 0 0 0 calc(2px + var(--ring-offset-width, 2px)) var(--ring-color, #2563eb);
      box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
    }

    .form-radio:checked {
      background-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .form-radio:checked:hover {
      border-color: transparent;
      background-color: currentColor;
    }

    .form-radio:checked:focus {
      border-color: transparent;
      background-color: currentColor;
    }"
  `)
})

it('should be possible to `unset` certain values', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              input: {
                appearance: null,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   appearance: none;

    "
  `)
})

it('should be possible to remove the `input` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              input: null,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-input {
      -   appearance: none;
      -   background-color: #fff;
      -   border-color: #d1d5db;
      -   border-width: 1px;
      -   border-radius: 0.375rem;
      -   padding-top: 0.5rem;
      -   padding-right: 0.75rem;
      -   padding-bottom: 0.5rem;
      -   padding-left: 0.75rem;
      -   font-size: 1rem;
      -   line-height: 1.5rem;
      - }
      -
      - .form-input::placeholder {
      -   color: #9ca3af;
      - }
      -
      - .form-input:focus {
      -   outline: none;
      -   --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      -   --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      -   box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      -   border-color: #2563eb;
      - }
      -

    "
  `)
})

it('should be possible to remove the `textarea` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              textarea: null,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-textarea {
      -   appearance: none;
      -   background-color: #fff;
      -   border-color: #d1d5db;
      -   border-width: 1px;
      -   border-radius: 0.375rem;
      -   padding-top: 0.5rem;
      -   padding-right: 0.75rem;
      -   padding-bottom: 0.5rem;
      -   padding-left: 0.75rem;
      -   font-size: 1rem;
      -   line-height: 1.5rem;
      - }
      -
      - .form-textarea::placeholder {
      -   color: #9ca3af;
      -   opacity: 1;
      - }
      -
      - .form-textarea:focus {
      -   outline: none;
      -   --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      -   --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      -   box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      -   border-color: #2563eb;
      - }
      -

    "
  `)
})

it('should be possible to remove the `multiselect` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              multiselect: null,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-multiselect {
      -   appearance: none;
      -   background-color: #fff;
      -   border-color: #d1d5db;
      -   border-width: 1px;
      -   border-radius: 0.375rem;
      -   padding-top: 0.5rem;
      -   padding-right: 0.75rem;
      -   padding-bottom: 0.5rem;
      -   padding-left: 0.75rem;
      -   font-size: 1rem;
      -   line-height: 1.5rem;
      - }
      -
      - .form-multiselect:focus {
      -   outline: none;
      -   --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      -   --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      -   box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      -   border-color: #2563eb;
      - }
      -

    "
  `)
})

it('should be possible to remove the `select` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              select: null,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-select {
      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');
      -   appearance: none;
      -   color-adjust: exact;
      -   background-repeat: no-repeat;
      -   background-color: #fff;
      -   border-color: #d1d5db;
      -   border-width: 1px;
      -   border-radius: 0.375rem;
      -   padding-top: 0.5rem;
      -   padding-right: 2.5rem;
      -   padding-bottom: 0.5rem;
      -   padding-left: 0.75rem;
      -   font-size: 1rem;
      -   line-height: 1.5rem;
      -   background-position: right 0.5rem center;
      -   background-size: 1.5em 1.5em;
      - }
      -
      - .form-select:focus {
      -   outline: none;
      -   --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff);
      -   --ring-shadow: 0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, #2563eb);
      -   box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      -   border-color: #2563eb;
      - }
      -

    "
  `)
})

it('should be possible to remove the `checkbox` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              checkbox: null,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-checkbox {
      -   appearance: none;
      -   color-adjust: exact;
      -   display: inline-block;
      -   vertical-align: middle;
      -   background-origin: border-box;
      -   user-select: none;
      -   flex-shrink: 0;
      -   height: 1rem;
      -   width: 1rem;
      -   color: #2563eb;
      -   background-color: #fff;
      -   border-color: #d1d5db;
      -   border-width: 1px;
      -   border-radius: 0.25rem;
      - }
      -
      - .form-checkbox:focus {
      -   outline: none;
      -   --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 2px) var(--ring-offset-color, #fff);
      -   --ring-shadow: 0 0 0 calc(2px + var(--ring-offset-width, 2px)) var(--ring-color, #2563eb);
      -   box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      - }
      -
      - .form-checkbox:checked {
      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');
      -   border-color: transparent;
      -   background-color: currentColor;
      -   background-size: 100% 100%;
      -   background-position: center;
      -   background-repeat: no-repeat;
      - }
      -
      - .form-checkbox:checked:hover {
      -   border-color: transparent;
      -   background-color: currentColor;
      - }
      -
      - .form-checkbox:checked:focus {
      -   border-color: transparent;
      -   background-color: currentColor;
      - }
      -
      - .form-checkbox:indeterminate {
      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e');
      -   border-color: transparent;
      -   background-color: currentColor;
      -   background-size: 100% 100%;
      -   background-position: center;
      -   background-repeat: no-repeat;
      - }
      -
      - .form-checkbox:indeterminate:hover {
      -   border-color: transparent;
      -   background-color: currentColor;
      - }
      -
      - .form-checkbox:indeterminate:focus {
      -   border-color: transparent;
      -   background-color: currentColor;
      - }
      -

    "
  `)
})

it('should be possible to remove the `radio` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              radio: null,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -
      - .form-radio {
      -   appearance: none;
      -   color-adjust: exact;
      -   display: inline-block;
      -   vertical-align: middle;
      -   background-origin: border-box;
      -   user-select: none;
      -   flex-shrink: 0;
      -   border-radius: 100%;
      -   height: 1rem;
      -   width: 1rem;
      -   color: #2563eb;
      -   background-color: #fff;
      -   border-color: #d1d5db;
      -   border-width: 1px;
      - }
      -
      - .form-radio:focus {
      -   outline: none;
      -   --ring-offset-shadow: 0 0 0 var(--ring-offset-width, 2px) var(--ring-offset-color, #fff);
      -   --ring-shadow: 0 0 0 calc(2px + var(--ring-offset-width, 2px)) var(--ring-color, #2563eb);
      -   box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--box-shadow, 0 0 #0000);
      - }
      -
      - .form-radio:checked {
      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');
      -   border-color: transparent;
      -   background-color: currentColor;
      -   background-size: 100% 100%;
      -   background-position: center;
      -   background-repeat: no-repeat;
      - }
      -
      - .form-radio:checked:hover {
      -   border-color: transparent;
      -   background-color: currentColor;
      - }
      -
      - .form-radio:checked:focus {
      -   border-color: transparent;
      -   background-color: currentColor;
      - }

    "
  `)
})

it('should be possible to add a custom modifier for `input`', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              input: {
                backgroundColor: '#GRAY900',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-input-dark {
      +   background-color: #GRAY900;
      + }

    "
  `)
})

it('should be possible to add a custom modifier for `textarea`', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              textarea: {
                backgroundColor: '#GRAY900',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-textarea-dark {
      +   background-color: #GRAY900;
      + }

    "
  `)
})

it('should be possible to add a custom modifier for `multiselect`', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              multiselect: {
                backgroundColor: '#GRAY900',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-multiselect-dark {
      +   background-color: #GRAY900;
      + }

    "
  `)
})

it('should be possible to add a custom modifier for `select`', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              select: {
                backgroundColor: '#GRAY900',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-select-dark {
      +   background-color: #GRAY900;
      + }

    "
  `)
})

it('should be possible to add a custom modifier for `checkbox`', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              checkbox: {
                backgroundColor: '#GRAY900',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-checkbox-dark {
      +   background-color: #GRAY900;
      + }

    "
  `)
})

it('should be possible to add a custom modifier for `radio`', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              radio: {
                backgroundColor: '#GRAY900',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-radio-dark {
      +   background-color: #GRAY900;
      + }

    "
  `)
})

it('should be possible to combine modifiers', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              'input, textarea, multiselect, checkbox, radio': {
                backgroundColor: '#GRAY900',
              },
              select: {
                backgroundColor: '#GRAY600',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-input-dark {
      +   background-color: #GRAY900;
      + }
      +
      + .form-textarea-dark {
      +   background-color: #GRAY900;
      + }
      +
      + .form-multiselect-dark {
      +   background-color: #GRAY900;
      + }
      +
      + .form-checkbox-dark {
      +   background-color: #GRAY900;
      + }
      +
      + .form-radio-dark {
      +   background-color: #GRAY900;
      + }
      +
      + .form-select-dark {
      +   background-color: #GRAY600;
      + }

    "
  `)
})

it('should be possible to combine and merge selectors', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            dark: {
              'input, textarea': {
                backgroundColor: '#GRAY900',
              },
              textarea: {
                height: '20px',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +
      + .form-input-dark {
      +   background-color: #GRAY900;
      + }
      +
      + .form-textarea-dark {
      +   background-color: #GRAY900;
      +   height: 20px;
      + }

    "
  `)
})

it('should be possible to change the icon and icon color of a `select` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              select: {
                icon: (iconColor) => `<svg fill="${iconColor}" />`,
                iconColor: 'pink',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg fill='pink' /%3e');

    "
  `)
})

it('should be possible to change the icon of a `select` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              select: {
                icon: `<svg />`,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg /%3e');

    "
  `)
})

it('should be possible to change the iconColor of a `select` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              select: {
                iconColor: 'pink',
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='pink' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');

    "
  `)
})

it('should be possible to change the icon and icon color of a `checkbox` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              checkbox: {
                '&:checked': {
                  icon: (iconColor) => `<svg fill="${iconColor}" />`,
                  iconColor: 'pink',
                },
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg fill='pink' /%3e');

    "
  `)
})

it('should be possible to change the icon of a `checkbox` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              checkbox: {
                '&:checked': {
                  icon: `<svg />`,
                },
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg /%3e');

    "
  `)
})

it('should be possible to change the iconColor of a `checkbox` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              checkbox: {
                '&:checked': {
                  iconColor: 'pink',
                },
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='pink' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');

    "
  `)
})

it('should be possible to change the icon and icon color of a `radio` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              radio: {
                '&:checked': {
                  icon: (iconColor) => `<svg fill="${iconColor}" />`,
                  iconColor: 'pink',
                },
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg fill='pink' /%3e');

    "
  `)
})

it('should be possible to change the icon of a `radio` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              radio: {
                '&:checked': {
                  icon: `<svg />`,
                },
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg /%3e');

    "
  `)
})

it('should be possible to change the iconColor of a `radio` component', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          customForms: {
            DEFAULT: {
              radio: {
                '&:checked': {
                  iconColor: 'pink',
                },
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='pink' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');

    "
  `)
})

it('should pull values from the user config for colors', async () => {
  expect(
    await diffOnly({
      theme: {
        colors: {
          white: '#WHITE',
          gray: {
            300: '#GRAY300',
            400: '#GRAY400',
          },
          blue: {
            300: '#BLUE300',
            500: '#BLUE500',
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      -   background-color: #fff;
      -   border-color: #d1d5db;
      +   background-color: #WHITE;
      +   border-color: #GRAY300;
      
      ---
      
      -   color: #9ca3af;
      +   color: #GRAY400;
      
      ---
      
      -   background-color: #fff;
      -   border-color: #d1d5db;
      +   background-color: #WHITE;
      +   border-color: #GRAY300;
      
      ---
      
      -   color: #9ca3af;
      +   color: #GRAY400;
      
      ---
      
      -   background-color: #fff;
      -   border-color: #d1d5db;
      +   background-color: #WHITE;
      +   border-color: #GRAY300;
      
      ---
      
      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23GRAY400' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e');
      
      ---
      
      -   background-color: #fff;
      -   border-color: #d1d5db;
      +   background-color: #WHITE;
      +   border-color: #GRAY300;
      
      ---
      
      -   background-color: #fff;
      -   border-color: #d1d5db;
      +   background-color: #WHITE;
      +   border-color: #GRAY300;
      
      ---
      
      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23WHITE' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e');
      
      ---
      
      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='%23WHITE' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e');
      
      ---
      
      -   background-color: #fff;
      -   border-color: #d1d5db;
      +   background-color: #WHITE;
      +   border-color: #GRAY300;
      
      ---
      
      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23WHITE' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e');

    "
  `)
})

it('should be possible to override the config and default colors', async () => {
  expect(
    await diffOnly({
      theme: {
        extend: {
          colors: {
            chuck: 'chucknorris',
          },
          customForms: (theme) => ({
            DEFAULT: {
              'input, textarea': {
                '&:focus': {
                  boxShadow: theme('colors.chuck', 'red'),
                },
              },
            },
          }),
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      +   box-shadow: chucknorris;
      
      ---
      
      +   box-shadow: chucknorris;

    "
  `)
})
