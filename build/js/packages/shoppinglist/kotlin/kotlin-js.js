(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-js'.");
    }
    root['kotlin-js'] = factory(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var __type_plus_guard__ = ({
    __type_plus_guard__: Object.setPrototypeOf({
        [Symbol.hasInstance](instance) {
            return typeof instance === 'symbol'
        }
    }, Symbol)
  }).__type_plus_guard__;
  var __guard__ = ({
    __guard__: {
        name: `IteratorYieldResult`,
        [Symbol.hasInstance](instance) {
            return instance && (typeof instance === 'object') && !instance.done
        }
    }
  }).__guard__;
  var protoOf = kotlin_kotlin.$_$.oa;
  var THROW_CCE = kotlin_kotlin.$_$.ie;
  var Annotation = kotlin_kotlin.$_$.rd;
  var classMeta = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.of;
  var setMetadataFor = kotlin_kotlin.$_$.pa;
  var iterator = kotlin_kotlin.$_$.nb;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var SequenceScope = kotlin_kotlin.$_$.mb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d8;
  var SuspendFunction1 = kotlin_kotlin.$_$.u8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(JsoDsl, 'JsoDsl', classMeta, VOID, [Annotation]);
  setMetadataFor(iteratorFor$slambda, 'iteratorFor$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  //endregion
  function JsoDsl() {
  }
  protoOf(JsoDsl).equals = function (other) {
    if (!(other instanceof JsoDsl))
      return false;
    other instanceof JsoDsl || THROW_CCE();
    return true;
  };
  protoOf(JsoDsl).hashCode = function () {
    return 0;
  };
  protoOf(JsoDsl).toString = function () {
    return '@js.core.JsoDsl()';
  };
  function jso(block) {
    // Inline function 'kotlin.apply' call
    // Inline function 'js.core.jso' call
    var tmp0_apply = {};
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    return tmp0_apply;
  }
  function jso_0() {
    return {};
  }
  function iteratorFor(source) {
    // Inline function 'js.iterable.JsIterator.iterator' call
    var tmp0_iterator = source[__type_plus_guard__.iterator]();
    return iteratorFor_0(tmp0_iterator);
  }
  function iteratorFor_0(source) {
    return iterator(iteratorFor$slambda_0(source, null));
  }
  function iteratorFor$slambda($source, resultContinuation) {
    this.$source_1 = $source;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(iteratorFor$slambda).invoke_p6rd7m_k$ = function ($this$iterator, $completion) {
    var tmp = this.create_98x6ml_k$($this$iterator, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(iteratorFor$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_p6rd7m_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(iteratorFor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            var tmp_1 = this.$source_1.next();
            tmp_0.tmp0_elvis_lhs0__1 = tmp_1 instanceof __guard__ ? tmp_1 : null;
            if (this.tmp0_elvis_lhs0__1 == null) {
              this.set_state_a96kl8_k$(4);
              var tmp_2 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT1__1 = this.tmp0_elvis_lhs0__1;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            this.result2__1 = this.WHEN_RESULT1__1;
            this.set_state_a96kl8_k$(3);
            suspendResult = this.$this$iterator_1.yield_24z9an_k$(this.result2__1.value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(iteratorFor$slambda).create_98x6ml_k$ = function ($this$iterator, completion) {
    var i = new iteratorFor$slambda(this.$source_1, completion);
    i.$this$iterator_1 = $this$iterator;
    return i;
  };
  protoOf(iteratorFor$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_98x6ml_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function iteratorFor$slambda_0($source, resultContinuation) {
    var i = new iteratorFor$slambda($source, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.invoke_p6rd7m_k$($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  return _;
}));

//# sourceMappingURL=kotlin-js.js.map
