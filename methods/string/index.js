'use strict'

var padEnd = require('./padEnd')
var padStart = require('./padStart')
var repeat = require('./repeat')
var trim = require('./trim')
var trimRight = require('./trimRight')
var trimLeft = require('./trimLeft')
var escape = require('./escape')
var unescape = require('./unescape')
var camelCase = require('./camelCase')
var kebabCase = require('./kebabCase')
var startsWith = require('./startsWith')
var endsWith = require('./endsWith')
var template = require('./template')
var toValString = require('./toValString')

var stringExports = {
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  kebabCase: kebabCase,
  repeat: repeat,
  padStart: padStart,
  padEnd: padEnd,
  startsWith: startsWith,
  endsWith: endsWith,
  template: template,
  toString: toValString
}

module.exports = stringExports
