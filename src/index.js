const tap = require('lodash/tap')
const map = require('lodash/map')
const toPairs = require('lodash/toPairs')
const fromPairs = require('lodash/fromPairs')
const mergeWith = require('lodash/mergeWith')
const isEmpty = require('lodash/isEmpty')
const isArray = require('lodash/isArray')
const isFunction = require('lodash/isFunction')
const isUndefined = require('lodash/isUndefined')
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
      // Convert undefined to null otherwise lodash won't replace the key
      // PostCSS still omits properties with a null value so it behaves
      // the same as undefined.
      ? (srcValue === undefined ? null : srcValue)
      : objValue
  }

  return mergeWith({}, ...options, mergeCustomizer)
}

function flattenOptions(options) {
  return merge(...toPairs(options).flatMap(([keys, value]) => {
    return fromPairs(keys.split(', ').map(key => [key, value]))
  }))
}

function resolveOptions(userOptions) {
  return merge({
    default: defaultOptions,
  }, fromPairs(map(userOptions, (value, key) => [key, flattenOptions(value)])))
}

function replaceIconDeclarations(component, defaultIcon) {
  return traverse(component).map(function (value) {
    if (!isPlainObject(value)) {
      return
    }

    if (Object.keys(value).includes('iconColor') || Object.keys(value).includes('icon')) {
      const { iconColor, icon, ...rest } = value
      this.update({
        ...rest,
        backgroundImage: `url("${svgToDataUri(isUndefined(icon) ? defaultIcon(iconColor) : (isFunction(icon) ? icon(iconColor) : icon))}")`
      })
    }
  })
}

module.exports = function ({ addUtilities, addComponents, theme, postcss }) {
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

    addComponents(replaceIconDeclarations({
      [`.form-select${modifier}`]: merge({
        '&::-ms-expand': {
          color: options.iconColor,
        },
        ...isUndefined(options.paddingLeft) ? {} : {
          '@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none)': {
            paddingRight: options.paddingLeft, // Fix padding for print in IE
          },
        },
      }, options)
    }, options.icon || (iconColor => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${iconColor}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`
    })))
  }

  function addCheckbox({ icon, ...options}, modifier = '') {
    if (isEmpty(options) && isUndefined(icon)) {
      return
    }

    addComponents(replaceIconDeclarations({
      [`.form-checkbox${modifier}`]: merge({
        ...isUndefined(options.borderWidth) ? {} : {
          '&::-ms-check': {
            '@media not print': {
              borderWidth: options.borderWidth,
            }
          },
        },
      }, options)
    }, icon || (iconColor => {
      return `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`
    })))
  }

  function addRadio({ icon, ...options }, modifier = '') {
    if (isEmpty(options) && isUndefined(icon)) {
      return
    }

    addComponents(replaceIconDeclarations({
      [`.form-radio${modifier}`]: merge({
        ...isUndefined(options.borderWidth) ? {} : {
          '&::-ms-check': {
            '@media not print': {
              borderWidth: options.borderWidth,
            }
          },
        },
      }, options)
    }, icon || (iconColor => {
      return `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
    })))
  }

  function registerComponents() {
    const options = resolveOptions(theme('customForms'))

    addInput(options.default.input)
    addTextarea(options.default.textarea)
    addMultiselect(options.default.multiselect)
    addSelect(options.default.select)
    addCheckbox(options.default.checkbox)
    addRadio(options.default.radio)

    Object.keys((({ default: _default, ...rest }) => rest)(options)).forEach(key => {
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
