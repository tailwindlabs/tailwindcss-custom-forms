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
      border-color: #d4d4d8;
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
      color: #a1a1aa;
    }

    .form-input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #93c5fd;
    }

    .form-textarea {
      appearance: none;
      background-color: #fff;
      border-color: #d4d4d8;
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
      color: #a1a1aa;
      opacity: 1;
    }

    .form-textarea:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #93c5fd;
    }

    .form-multiselect {
      appearance: none;
      background-color: #fff;
      border-color: #d4d4d8;
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
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #93c5fd;
    }

    .form-select {
      background-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\\");
      appearance: none;
      color-adjust: exact;
      background-repeat: no-repeat;
      background-color: #fff;
      border-color: #d4d4d8;
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
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #93c5fd;
    }

    .form-checkbox:checked {
      background-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\\");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
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
      color: #3b82f6;
      background-color: #fff;
      border-color: #d4d4d8;
      border-width: 1px;
      border-radius: 0.25rem;
    }

    .form-checkbox:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #93c5fd;
    }

    .form-checkbox:checked:focus {
      border-color: transparent;
    }

    .form-radio:checked {
      background-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
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
      color: #3b82f6;
      background-color: #fff;
      border-color: #d4d4d8;
      border-width: 1px;
    }

    .form-radio:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #93c5fd;
    }

    .form-radio:checked:focus {
      border-color: transparent;
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
              css: {
                input: {
                  appearance: null,
                },
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
              css: {
                input: null,
              },
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
      -   border-color: #d4d4d8;
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
      -   color: #a1a1aa;
      - }
      -
      - .form-input:focus {
      -   outline: none;
      -   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      -   border-color: #93c5fd;
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
              css: {
                textarea: null,
              },
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
      -   border-color: #d4d4d8;
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
      -   color: #a1a1aa;
      -   opacity: 1;
      - }
      -
      - .form-textarea:focus {
      -   outline: none;
      -   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      -   border-color: #93c5fd;
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
              css: {
                multiselect: null,
              },
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
      -   border-color: #d4d4d8;
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
      -   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      -   border-color: #93c5fd;
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
              css: {
                select: null,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-select {
      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e');
      -   appearance: none;
      -   color-adjust: exact;
      -   background-repeat: no-repeat;
      -   background-color: #fff;
      -   border-color: #d4d4d8;
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
      -   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      -   border-color: #93c5fd;
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
              css: {
                checkbox: null,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

      - .form-checkbox:checked {
      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e');
      -   border-color: transparent;
      -   background-color: currentColor;
      -   background-size: 100% 100%;
      -   background-position: center;
      -   background-repeat: no-repeat;
      - }
      -
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
      -   color: #3b82f6;
      -   background-color: #fff;
      -   border-color: #d4d4d8;
      -   border-width: 1px;
      -   border-radius: 0.25rem;
      - }
      -
      - .form-checkbox:focus {
      -   outline: none;
      -   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      -   border-color: #93c5fd;
      - }
      -
      - .form-checkbox:checked:focus {
      -   border-color: transparent;
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
              css: {
                radio: null,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    "

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
      -   color: #3b82f6;
      -   background-color: #fff;
      -   border-color: #d4d4d8;
      -   border-width: 1px;
      - }
      -
      - .form-radio:focus {
      -   outline: none;
      -   box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      -   border-color: #93c5fd;
      - }
      -
      - .form-radio:checked:focus {
      -   border-color: transparent;
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
              css: {
                input: {
                  backgroundColor: '#GRAY900',
                },
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
              css: {
                textarea: {
                  backgroundColor: '#GRAY900',
                },
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
              css: {
                multiselect: {
                  backgroundColor: '#GRAY900',
                },
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
              css: {
                select: {
                  backgroundColor: '#GRAY900',
                },
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
              css: {
                checkbox: {
                  backgroundColor: '#GRAY900',
                },
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
              css: {
                radio: {
                  backgroundColor: '#GRAY900',
                },
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
              css: {
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
              css: {
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
              css: {
                select: {
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

      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e');
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
              css: {
                select: {
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

      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e');
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
              css: {
                select: {
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

      -   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='pink' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e');

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
              css: {
                checkbox: {
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

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e');
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
              css: {
                checkbox: {
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

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e');
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
              css: {
                checkbox: {
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

      -   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e');
      +   background-image: url('data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='pink' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e');

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
              css: {
                radio: {
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
              css: {
                radio: {
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
              css: {
                radio: {
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
