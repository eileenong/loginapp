(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-core'.");
    }
    root['kotlin-react-core'] = factory(typeof this['kotlin-react-core'] === 'undefined' ? {} : this['kotlin-react-core'], react, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var useEffect = $module$react.useEffect;
  var VOID = kotlin_kotlin.$_$.of;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var toString = kotlin_kotlin.$_$.o2;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_CHILD_ARRAY() {
    _init_properties_ChildrenBuilder_kt__gexuom();
    return CHILD_ARRAY;
  }
  var CHILD_ARRAY;
  function get_DEFAULT_KEY() {
    _init_properties_ChildrenBuilder_kt__gexuom();
    return DEFAULT_KEY;
  }
  var DEFAULT_KEY;
  function addChildNode(_this__u8e3s4, node) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    // Inline function 'react.childArray' call
    // Inline function 'kotlin.js.asDynamic' call
    if (!(_this__u8e3s4[get_CHILD_ARRAY()] == null)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'react.childArray' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4[get_CHILD_ARRAY()].push(node);
    } else {
      // Inline function 'react.childArray' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_set_childArray_geitvx = [node];
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4[get_CHILD_ARRAY()] = tmp1_set_childArray_geitvx;
    }
  }
  function addChild(_this__u8e3s4, type, props) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    addChildElement(_this__u8e3s4, type, props, VOID, getDefaultKey(_this__u8e3s4));
  }
  function addChild_0(_this__u8e3s4, type) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    addChildElement(_this__u8e3s4, type, VOID, VOID, getDefaultKey(_this__u8e3s4));
  }
  function addChild_1(_this__u8e3s4, type, block) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    var defaultKey = getDefaultKey(_this__u8e3s4);
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.core.jso' call
    var tmp0_apply = {};
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var props = tmp0_apply;
    addChildElement(_this__u8e3s4, type, props, getChildArray(props), defaultKey);
  }
  function addChild_2(_this__u8e3s4, provider, value, block) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    addChild_1(_this__u8e3s4, provider, addChild$lambda(value, block));
  }
  function addChild_3(_this__u8e3s4, context, value, block) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    addChild_2(_this__u8e3s4, context.Provider, value, block);
  }
  function set_childArray(_this__u8e3s4, value) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[get_CHILD_ARRAY()] = value;
  }
  function get_childArray(_this__u8e3s4) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[get_CHILD_ARRAY()];
  }
  function addChildElement(_this__u8e3s4, type, props, children, defaultKey) {
    props = props === VOID ? null : props;
    children = children === VOID ? null : children;
    _init_properties_ChildrenBuilder_kt__gexuom();
    var childProps_0 = childProps(props, defaultKey);
    var tmp;
    if (!(children == null)) {
      tmp = createElement.apply(null, [type, childProps_0].concat([].slice.call(children.slice())));
    } else {
      tmp = createElement(type, childProps_0);
    }
    var element = tmp;
    addChildNode(_this__u8e3s4, element);
  }
  function getDefaultKey(_this__u8e3s4) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    // Inline function 'kotlin.js.asDynamic' call
    var key = _this__u8e3s4[get_DEFAULT_KEY()];
    // Inline function 'kotlin.js.asDynamic' call
    delete(_this__u8e3s4[get_DEFAULT_KEY()]);
    return key;
  }
  function getChildArray(_this__u8e3s4) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[get_CHILD_ARRAY()];
  }
  function childProps(props, defaultKey) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    if (defaultKey == null)
      return props;
    if (props == null) {
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      // Inline function 'js.core.jso' call
      var tmp0_apply = {};
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'react.childProps.<anonymous>' call
      tmp0_apply.key = defaultKey;
      return tmp0_apply;
    }
    if (!(props.key == null))
      return props;
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.core.jso' call
    var tmp0_apply_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'react.childProps.<anonymous>' call
    // Inline function 'react.Props.unaryPlus' call
    Object.assign(tmp0_apply_0, props);
    tmp0_apply_0.key = defaultKey;
    return tmp0_apply_0;
  }
  function getChildArray_0(_this__u8e3s4) {
    _init_properties_ChildrenBuilder_kt__gexuom();
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[get_CHILD_ARRAY()];
  }
  function addChild$lambda($value, $block) {
    return function ($this$addChild) {
      $this$addChild.value = $value;
      $block($this$addChild);
      return Unit_getInstance();
    };
  }
  var properties_initialized_ChildrenBuilder_kt_gby2z0;
  function _init_properties_ChildrenBuilder_kt__gexuom() {
    if (!properties_initialized_ChildrenBuilder_kt_gby2z0) {
      properties_initialized_ChildrenBuilder_kt_gby2z0 = true;
      CHILD_ARRAY = Symbol('@@child-array');
      DEFAULT_KEY = Symbol('@@default-key');
    }
  }
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup(cleanups) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (cleanups.length === 0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function createEffectCallback$lambda($effect) {
    return function () {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var cleanups = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = cleanups;
      tmp$ret$4 = tmp$ret$3;
      $effect(tmp$ret$4);
      return buildCleanup(cleanups);
    };
  }
  function buildCleanup$lambda($cleanups) {
    return function () {
      var indexedObject = $cleanups;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var cleanup = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        cleanup();
      }
      return Unit_getInstance();
    };
  }
  function IntrinsicType(tagName) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tagName;
  }
  function ReactNode(source) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return source;
  }
  function ReactNode_0(source) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(source);
  }
  function ReactNode_1(source) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return source;
  }
  function useEffectOnce(effect) {
    var callback = createEffectCallback(effect);
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    useEffect(callback, tmp$ret$0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addChildNode;
  _.$_$.b = addChild_1;
  _.$_$.c = getChildArray_0;
  _.$_$.d = useEffectOnce;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-react-core.js.map
