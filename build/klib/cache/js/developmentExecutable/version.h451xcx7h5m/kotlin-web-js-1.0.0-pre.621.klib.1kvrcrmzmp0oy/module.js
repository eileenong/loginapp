(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-web'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-web'.");
    }
    root['kotlin-web'] = factory(typeof this['kotlin-web'] === 'undefined' ? {} : this['kotlin-web'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  //endregion
  //region block: pre-declaration
  //endregion
  function addEventHandler(target, type, handler) {
    return addEventHandler_0(target, type, handler, undefined);
  }
  function addEventHandler_0(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    return addEventHandler$lambda(target, type, handler, options);
  }
  function addEventHandler$lambda($target, $type, $handler, $options) {
    return function () {
      $target.removeEventListener($type, $handler, $options);
      return Unit_getInstance();
    };
  }
  return _;
}));
