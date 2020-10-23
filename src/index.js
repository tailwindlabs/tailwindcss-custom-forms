const map = require('lodash/map')
const toPairs = require('lodash/toPairs')
const fromPairs = require('lodash/fromPairs')
const mergeWith = require('lodash/mergeWith')
const flatMap = require('lodash/flatMap')
const isEmpty = require('lodash/isEmpty')
const isFunction = require('lodash/isFunction')
const isPlainObject = require('lodash/isPlainObject')
const defaultOptions = require('./defaultOptions')
const svgToDataUri = require('mini-svg-data-uri')
const traverse = require('traverse')

function merge(...options) {
  function mergeCustomizer(objValue, srcValue, key, obj, src, stack) {
    if (isPlainObject(srcValue)) {
      return mergeWith(objValue, srcValue, mergeCustomizer)
    }
    return Object.keys(src).includes(key)
      ? // Convert undefined to null otherwise lodash won't replace the key
        // PostCSS still omits properties with a null value so it behaves
        // the same as undefined.
        srcValue === undefined
        ? null
        : srcValue
      : objValue
  }

  return mergeWith({}, ...options, mergeCustomizer)
}

function flattenOptions(options) {
  return merge(
    ...flatMap(toPairs(options), ([keys, value]) => {
      return fromPairs(keys.split(', ').map((key) => [key, value]))
    })
  )
}

function resolveOptions(userOptions) {
  return merge({ DEFAULT: defaultOptions }, fromPairs(map(userOptions, (value, key) => [key, flattenOptions(value)])))
}

function replaceIconDeclarations(component, replace) {
  return traverse(component).map(function (value) {
    if (!isPlainObject(value)) {
      return
    }

    if (Object.keys(value).includes('iconColor') || Object.keys(value).includes('icon')) {
      const { iconColor, icon, ...rest } = value
      this.update(merge(replace({ icon, iconColor }), rest))
    }
  })
}

module.exports = function ({ addComponents, theme }) {
  function addInput(options, modifier = '') {
    if (isEmpty(options)) {
      return
    }

    addComponents({ [`.form-input${modifier}`]: options })
  }

  function addTextarea(options, modifier = '') {
    if (isEmpty(options)) {
      return
    }

    addComponents({ [`.form-textarea${modifier}`]: options })
  }

  function addMultiselect(options, modifier = '') {
    if (isEmpty(options)) {
      return
    }

    addComponents({ [`.form-multiselect${modifier}`]: options })
  }

  function addSelect(options, modifier = '') {
    if (isEmpty(options)) {
      return
    }

    addComponents(
      replaceIconDeclarations(
        { [`.form-select${modifier}`]: options },
        ({ icon = options.icon, iconColor = options.iconColor }) => {
          return {
            backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
          }
        }
      )
    )
  }

  function addCheckbox(options, modifier = '') {
    if (isEmpty(options)) {
      return
    }

    addComponents(
      replaceIconDeclarations(
        { [`.form-checkbox${modifier}`]: options },
        ({ icon = options.icon, iconColor = options.iconColor }) => {
          return {
            '&:checked': {
              backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
            },
          }
        }
      )
    )
  }

  function addRadio(options, modifier = '') {
    if (isEmpty(options)) {
      return
    }

    addComponents(
      replaceIconDeclarations(
        { [`.form-radio${modifier}`]: options },
        ({ icon = options.icon, iconColor = options.iconColor }) => {
          return {
            '&:checked': {
              backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
            },
          }
        }
      )
    )
  }

  function registerComponents() {
    const options = resolveOptions(theme('customForms'))

    addInput(options.DEFAULT.input)
    addTextarea(options.DEFAULT.textarea)
    addMultiselect(options.DEFAULT.multiselect)
    addSelect(options.DEFAULT.select)
    addCheckbox(options.DEFAULT.checkbox)
    addRadio(options.DEFAULT.radio)

    Object.keys((({ DEFAULT: _default, ...rest }) => rest)(options)).forEach((key) => {
      const modifier = `-${key}`

      addInput(options[key].input || {}, modifier)
      addTextarea(options[key].textarea || {}, modifier)
      addMultiselect(options[key].multiselect || {}, modifier)
      addSelect(options[key].select || {}, modifier)
      addCheckbox(options[key].checkbox || {}, modifier)
      addRadio(options[key].radio || {}, modifier)
    })
  }

  registerComponents()
}
