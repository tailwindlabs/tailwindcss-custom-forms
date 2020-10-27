const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const fromPairs = require('lodash/fromPairs')
const toPairs = require('lodash/toPairs')
const isEmpty = require('lodash/isEmpty')
const isFunction = require('lodash/isFunction')
const isPlainObject = require('lodash/isPlainObject')
const defaultOptions = require('./defaultOptions')
const svgToDataUri = require('mini-svg-data-uri')
const traverse = require('traverse')

function replaceIconDeclarations(component, replace) {
  const properties = ['iconColor', 'icon']
  return traverse(component).map(function (value) {
    if (!isPlainObject(value)) return

    if (Object.keys(value).some((prop) => properties.includes(prop))) {
      const { iconColor, icon, ...rest } = value
      this.update(merge(replace({ icon, iconColor }), rest))
    }
  })
}

function flattenOptions(options) {
  return merge(
    {},
    ...toPairs(options).map(([keys, value]) => {
      const flattendValue = isPlainObject(value) ? flattenOptions(value) : value
      return fromPairs(keys.split(', ').map((key) => [key, flattendValue]))
    })
  )
}

module.exports = plugin(
  function ({ addComponents, theme }) {
    const components = {
      input: (options, modifier) => addComponents({ [`.form-input${modifier}`]: options }),
      textarea: (options, modifier) => addComponents({ [`.form-textarea${modifier}`]: options }),
      multiselect: (options, modifier) => addComponents({ [`.form-multiselect${modifier}`]: options }),
      select(options, modifier) {
        addComponents(
          replaceIconDeclarations({ [`.form-select${modifier}`]: options }, ({ icon, iconColor }) => ({
            backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
          }))
        )
      },
      checkbox(options, modifier) {
        addComponents(
          replaceIconDeclarations({ [`.form-checkbox${modifier}`]: options }, ({ icon, iconColor }) => ({
            '&:checked': {
              backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
            },
          }))
        )
      },
      radio(options, modifier) {
        addComponents(
          replaceIconDeclarations({ [`.form-radio${modifier}`]: options }, ({ icon, iconColor }) => ({
            '&:checked': {
              backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
            },
          }))
        )
      },
    }

    // Register components
    toPairs(flattenOptions(theme('customForms'))).forEach(([key, config]) => {
      const modifier = key === 'DEFAULT' ? '' : `-${key}`
      toPairs(config.css)
        .filter(([, options]) => !isEmpty(options))
        .forEach(([key, options]) => components[key](options, modifier))
    })
  },
  { theme: { customForms: { DEFAULT: { css: defaultOptions } } } }
)
