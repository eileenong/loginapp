(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './ktor-ktor-client-core.js', './ktor-ktor-serialization.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-serialization.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    root['ktor-ktor-client-content-negotiation'] = factory(typeof this['ktor-ktor-client-content-negotiation'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http'], this['ktor-ktor-utils'], this['ktor-ktor-client-core'], this['ktor-ktor-serialization'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.oa;
  var classMeta = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.of;
  var setMetadataFor = kotlin_kotlin.$_$.pa;
  var ContentTypeMatcher = kotlin_io_ktor_ktor_http.$_$.q;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var THROW_CCE = kotlin_kotlin.$_$.ie;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.ea;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d8;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.i;
  var contentType = kotlin_io_ktor_ktor_http.$_$.e1;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.f;
  var plus = kotlin_kotlin.$_$.e7;
  var toMutableSet = kotlin_kotlin.$_$.w7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var prepare$default = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.na;
  var toString = kotlin_kotlin.$_$.ta;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Collection = kotlin_kotlin.$_$.z4;
  var isInterface = kotlin_kotlin.$_$.ca;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.o;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Unit = kotlin_kotlin.$_$.te;
  var charset = kotlin_io_ktor_ktor_http.$_$.a1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.ze;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.m9;
  var joinToString = kotlin_kotlin.$_$.s6;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.ae;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.d9;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.n4;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.u;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.m7;
  var SuspendFunction2 = kotlin_kotlin.$_$.v8;
  var endsWith = kotlin_kotlin.$_$.zb;
  var startsWith = kotlin_kotlin.$_$.wc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, VOID, classMeta, VOID, [ContentTypeMatcher]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta, VOID, [Configuration]);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($convertRequestCOROUTINE$0, '$convertRequestCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($convertResponseCOROUTINE$1, '$convertResponseCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, VOID, VOID, VOID, VOID, [2, 5]);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta, VOID, [ContentTypeMatcher]);
  //endregion
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.converter_1 = converter;
    this.contentTypeToSend_1 = contentTypeToSend;
    this.contentTypeMatcher_1 = contentTypeMatcher;
  }
  protoOf(ConverterRegistration).get_converter_2qavhz_k$ = function () {
    return this.converter_1;
  };
  protoOf(ConverterRegistration).get_contentTypeToSend_v7r6xf_k$ = function () {
    return this.contentTypeToSend_1;
  };
  protoOf(ConverterRegistration).get_contentTypeMatcher_b310yg_k$ = function () {
    return this.contentTypeMatcher_1;
  };
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.$pattern_1 = $pattern;
  }
  protoOf(ContentNegotiation$Config$defaultMatcher$1).contains_dqyzax_k$ = function (contentType) {
    return contentType.match_7mk6xr_k$(this.$pattern_1);
  };
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda).invoke_63ydys_k$ = function ($this$intercept, it, $completion) {
    var tmp = this.create_300ycv_k$($this$intercept, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$plugin_1.convertRequest_bxlcql_k$(this.$this$intercept_1.get_context_h02k06_k$(), this.$this$intercept_1.get_subject_tmjbgd_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp0_elvis_lhs0__1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.tmp0_elvis_lhs0__1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.tmp0_elvis_lhs0__1;
            }

            tmp_0.result1__1 = tmp_1;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.result1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).create_300ycv_k$ = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.it_1 = it;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.invoke_63ydys_k$($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda_1).invoke_sqq52a_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.create_u7w3m5_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_sqq52a_k$(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.info0__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
            this.body1__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.$this$intercept_1.get_context_h02k06_k$().get_response_xlk07e_k$());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().trace_jqeghf_k$('Response doesn\'t have "Content-Type" header, skipping ContentNegotiation plugin');
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.contentType2__1 = tmp_1;
            this.charset3__1 = suitableCharset(this.$this$intercept_1.get_context_h02k06_k$().get_request_jdwg4m_k$().get_headers_ef25jx_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$plugin_1.convertResponse_7wwctz_k$(this.$this$intercept_1.get_context_h02k06_k$().get_request_jdwg4m_k$().get_url_18iuii_k$(), this.info0__1, this.body1__1, this.contentType2__1, this.charset3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp1_elvis_lhs4__1 = suspendResult;
            var tmp_2 = this;
            var tmp_3;
            if (this.tmp1_elvis_lhs4__1 == null) {
              return Unit_getInstance();
            } else {
              tmp_3 = this.tmp1_elvis_lhs4__1;
            }

            tmp_2.deserializedBody5__1 = tmp_3;
            this.result6__1 = new HttpResponseContainer(this.info0__1, this.deserializedBody5__1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.result6__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).create_u7w3m5_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.invoke_sqq52a_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.ignoredTypes_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.registrations_1 = ArrayList_init_$Create$();
  }
  protoOf(Config).get_ignoredTypes_dw7k0g_k$ = function () {
    return this.ignoredTypes_1;
  };
  protoOf(Config).get_registrations_gt95m9_k$ = function () {
    return this.registrations_1;
  };
  protoOf(Config).register_2n0nvi_k$ = function (contentType, converter, configuration) {
    var matcher = contentType.equals(Application_getInstance().get_Json_wo4ci9_k$()) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.register_kmmuju_k$(contentType, converter, matcher, configuration);
  };
  protoOf(Config).register_kmmuju_k$ = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.registrations_1.add_1j60pz_k$(registration);
  };
  protoOf(Config).removeIgnoredType_plo55h_k$ = function (type) {
    this.ignoredTypes_1.remove_8hbkc6_k$(type);
  };
  protoOf(Config).ignoreType_j8mit5_k$ = function (type) {
    this.ignoredTypes_1.add_1j60pz_k$(type);
  };
  protoOf(Config).clearIgnoredTypes_8egl99_k$ = function () {
    this.ignoredTypes_1.clear_j9y8zo_k$();
  };
  function Plugin() {
    Plugin_instance = this;
    this.key_1 = new AttributeKey('ContentNegotiation');
  }
  protoOf(Plugin).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Plugin).prepare_5z2vxs_k$ = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new ContentNegotiation(config.registrations_1, config.ignoredTypes_1);
  };
  protoOf(Plugin).prepare_aftpuj_k$ = function (block) {
    return this.prepare_5z2vxs_k$(block);
  };
  protoOf(Plugin).install_zewz1j_k$ = function (plugin, scope) {
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Transform_byqycd_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_1 = scope.get_responsePipeline_xbi790_k$();
    var tmp_2 = Phases_getInstance_0().get_Transform_byqycd_k$();
    tmp_1.intercept_hnj3e1_k$(tmp_2, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin).install_cj05u9_k$ = function (plugin, scope) {
    return this.install_zewz1j_k$(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.converter_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
    this.body_1 = body;
  }
  protoOf($convertRequestCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp0_iterator = this._this__u8e3s4__1.registrations_1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              get_LOGGER().trace_jqeghf_k$('Adding Accept=' + element.contentTypeToSend_1.get_contentType_7git4a_k$() + ' header for ' + this.request_1.get_url_18iuii_k$());
              accept(this.request_1, element.contentTypeToSend_1);
            }

            var tmp_0;
            var tmp_1 = this.body_1;
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp1_any = this._this__u8e3s4__1.ignoredTypes_1;
                var tmp_2;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_2 = tmp1_any.isEmpty_y1axqb_k$();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.iterator_jk1svi_k$();
                while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                  var element_0 = tmp0_iterator_0.next_20eer_k$();
                  if (element_0.isInstance_6tn68w_k$(this.body_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0) {
              get_LOGGER().trace_jqeghf_k$('Body type ' + getKClassFromExpression(this.body_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.request_1.get_url_18iuii_k$() + '.'));
              return null;
            }

            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType_0(this.request_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().trace_jqeghf_k$("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.request_1.get_url_18iuii_k$() + '.');
              return null;
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.contentType0__1 = tmp_4;
            var tmp_5 = this.body_1;
            if (tmp_5 instanceof Unit) {
              get_LOGGER().trace_jqeghf_k$('Sending empty body for ' + this.request_1.get_url_18iuii_k$());
              this.request_1.get_headers_ef25jx_k$().remove_d85afi_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
              return EmptyContent_getInstance();
            }

            var tmp_6 = this;
            var tmp2_filter = this._this__u8e3s4__1.registrations_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp2_filter.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_1 = tmp0_iterator_1.next_20eer_k$();
              if (element_1.contentTypeMatcher_1.contains_dqyzax_k$(this.contentType0__1)) {
                tmp0_filterTo.add_1j60pz_k$(element_1);
              }
            }

            var tmp_7;
            if (!tmp0_filterTo.isEmpty_y1axqb_k$()) {
              tmp_7 = tmp0_filterTo;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              get_LOGGER().trace_jqeghf_k$('None of the registered converters match request Content-Type=' + this.contentType0__1 + '. ' + ('Skipping ContentNegotiation for ' + this.request_1.get_url_18iuii_k$() + '.'));
              return null;
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.matchingRegistrations1__1 = tmp_8;
            if (this.request_1.get_bodyType_3n7prv_k$() == null) {
              get_LOGGER().trace_jqeghf_k$('Request has unknown body type. Skipping ContentNegotiation for ' + this.request_1.get_url_18iuii_k$() + '.');
              return null;
            }

            this.request_1.get_headers_ef25jx_k$().remove_d85afi_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.tmp0_iterator3__1 = this.matchingRegistrations1__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (!this.tmp0_iterator3__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            this.element4__1 = this.tmp0_iterator3__1.next_20eer_k$();
            this.set_state_a96kl8_k$(3);
            var tmp0_elvis_lhs_0 = charset(this.contentType0__1);
            var tmp_9 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : tmp0_elvis_lhs_0;
            var tmp_10 = ensureNotNull(this.request_1.get_bodyType_3n7prv_k$());
            var tmp_11;
            if (!equals(this.body_1, NullBody_getInstance())) {
              tmp_11 = this.body_1;
            } else {
              tmp_11 = null;
            }

            suspendResult = this.element4__1.converter_1.serializeNullable_66n3vw_k$(this.contentType0__1, tmp_9, tmp_10, tmp_11, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().trace_jqeghf_k$('Converted request body using ' + this.element4__1.converter_1 + ' for ' + this.request_1.get_url_18iuii_k$());
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.tmp$ret$22__1 = result_0;
              this.set_state_a96kl8_k$(6);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 4:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 5:
            this.tmp$ret$22__1 = null;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.tmp$ret$22__1;
            var tmp_12;
            if (tmp2_elvis_lhs == null) {
              var tmp_13 = "Can't convert " + toString(this.body_1) + ' with contentType ' + this.contentType0__1 + ' using converters ';
              throw new ContentConverterException(tmp_13 + joinToString(this.matchingRegistrations1__1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$convertRequest$lambda));
            } else {
              tmp_12 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_12;
            return serializedContent;
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $convertResponseCOROUTINE$1(_this__u8e3s4, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.requestUrl_1 = requestUrl;
    this.info_1 = info;
    this.body_1 = body;
    this.responseContentType_1 = responseContentType;
    this.charset_1 = charset;
  }
  protoOf($convertResponseCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this.body_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().trace_jqeghf_k$('Response body is already transformed. Skipping ContentNegotiation for ' + this.requestUrl_1 + '.');
              return null;
            }

            if (this._this__u8e3s4__1.ignoredTypes_1.contains_2ehdt1_k$(this.info_1.get_type_wovaf7_k$())) {
              get_LOGGER().trace_jqeghf_k$('Response body type ' + this.info_1.get_type_wovaf7_k$() + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.requestUrl_1 + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp0_filter = this._this__u8e3s4__1.registrations_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filter.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              if (element.contentTypeMatcher_1.contains_dqyzax_k$(this.responseContentType_1)) {
                tmp0_filterTo.add_1j60pz_k$(element);
              }
            }

            var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_filterTo, 10));
            var tmp0_iterator_0 = tmp0_filterTo.iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator_0.next_20eer_k$();
              tmp0_mapTo.add_1j60pz_k$(item.converter_1);
            }

            var tmp_2;
            if (!tmp0_mapTo.isEmpty_y1axqb_k$()) {
              tmp_2 = tmp0_mapTo;
            } else {
              tmp_2 = null;
            }

            var tmp0_elvis_lhs = tmp_2;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().trace_jqeghf_k$('None of the registered converters match response with Content-Type=' + this.responseContentType_1 + '. ' + ('Skipping ContentNegotiation for ' + this.requestUrl_1 + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.suitableConverters0__1 = tmp_3;
            this.set_state_a96kl8_k$(1);
            suspendResult = deserialize(this.suitableConverters0__1, this.body_1, this.info_1, this.charset_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().trace_jqeghf_k$('Response body was converted to ' + getKClassFromExpression(result) + ' for ' + this.requestUrl_1 + '.');
            }

            return result;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.registrations_1 = registrations;
    this.ignoredTypes_1 = ignoredTypes;
  }
  protoOf(ContentNegotiation).get_registrations_gt95m9_k$ = function () {
    return this.registrations_1;
  };
  protoOf(ContentNegotiation).get_ignoredTypes_dw7k0g_k$ = function () {
    return this.ignoredTypes_1;
  };
  protoOf(ContentNegotiation).convertRequest_bxlcql_k$ = function (request, body, $completion) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ContentNegotiation).convertResponse_7wwctz_k$ = function (requestUrl, info, body, responseContentType, charset, $completion) {
    var tmp = new $convertResponseCOROUTINE$1(this, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ContentNegotiation).convertResponse$default_5gty6i_k$ = function (requestUrl, info, body, responseContentType, charset, $completion, $super) {
    charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
    return $super === VOID ? this.convertResponse_7wwctz_k$(requestUrl, info, body, responseContentType, charset, $completion) : $super.convertResponse_7wwctz_k$.call(this, requestUrl, info, body, responseContentType, charset, $completion);
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  protoOf(JsonContentTypeMatcher).contains_dqyzax_k$ = function (contentType) {
    if (contentType.match_7mk6xr_k$(Application_getInstance().get_Json_wo4ci9_k$())) {
      return true;
    }
    var value = contentType.withoutParameters_wrqe36_k$().toString();
    return startsWith(value, 'application/') ? endsWith(value, '+json') : false;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
    if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
    }
  }
  //region block: post-declaration
  protoOf(Config).register$default_x33o66_k$ = register$default;
  protoOf(Plugin).prepare$default_l5lkxb_k$ = prepare$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));
