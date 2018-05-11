'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var als = _interopDefault(require('async-local-storage'));

function index () {
  als.enable();
  global.als = als;
}

module.exports = index;
//# sourceMappingURL=bundle.cjs.js.map
