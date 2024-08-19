(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', 'react-dom/client', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-serialization-kotlinx-json.js', './ktor-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './kotlin-react-core.js', './kotlin-react-dom.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-react.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('react-dom/client'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./kotlin-react-core.js'), require('./kotlin-react-dom.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-react.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-content-negotiation' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'shoppinglist'.");
    }
    root.shoppinglist = factory(typeof shoppinglist === 'undefined' ? {} : shoppinglist, react, this['react-dom/client'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-client-content-negotiation'], this['ktor-ktor-serialization-kotlinx-json'], this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['ktor-ktor-utils'], this['kotlin-react-core'], this['kotlin-react-dom'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-react']);
  }
}(this, function (_, $module$react, $module$react_dom_client_y5z5eu, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var useState = $module$react.useState;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var protoOf = kotlin_kotlin.$_$.oa;
  var objectMeta = kotlin_kotlin.$_$.na;
  var VOID = kotlin_kotlin.$_$.of;
  var setMetadataFor = kotlin_kotlin.$_$.pa;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.r9;
  var THROW_CCE = kotlin_kotlin.$_$.ie;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.ma;
  var classMeta = kotlin_kotlin.$_$.j9;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.f;
  var url = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d8;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.b;
  var List = kotlin_kotlin.$_$.h5;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.we;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var isInterface = kotlin_kotlin.$_$.ca;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.o;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.n4;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var emptyList = kotlin_kotlin.$_$.i6;
  var useEffectOnce = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.d;
  var addChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.b;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.hb;
  var THROW_ISE = kotlin_kotlin.$_$.je;
  var getLocalDelegateReference = kotlin_kotlin.$_$.p9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var addChildNode = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var split = kotlin_kotlin.$_$.vc;
  var println = kotlin_kotlin.$_$.z8;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.u8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(User, 'User', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor($getUserListCOROUTINE$0, '$getUserListCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($addUserCOROUTINE$1, '$addUserCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($deleteUserCOROUTINE$2, '$deleteUserCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($authenticateUserCOROUTINE$3, '$authenticateUserCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($getCurrentUserCOROUTINE$4, '$getCurrentUserCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor($logoutUserCOROUTINE$5, '$logoutUserCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(App$lambda$lambda$slambda, 'App$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(App$lambda$lambda$lambda$lambda$slambda, 'App$lambda$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(App$lambda$lambda$lambda$slambda, 'App$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(App$lambda$lambda$lambda$slambda_1, 'App$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(App$lambda$lambda$lambda$slambda_3, 'App$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  //endregion
  function Companion() {
    Companion_instance = this;
    this.path_1 = '/userList';
  }
  protoOf(Companion).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('User', this, 3);
    tmp0_serialDesc.addElement_ifop3j_k$('username', false);
    tmp0_serialDesc.addElement_ifop3j_k$('password', false);
    tmp0_serialDesc.addElement_ifop3j_k$('id', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  protoOf($serializer).deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeIntElement_cmpvet_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeIntElement_cmpvet_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_e64gd4_k$(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).serialize_utocxo_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 1, value.password_1);
    if (tmp1_output.shouldEncodeElementDefault_m92hrm_k$(tmp0_desc, 2) ? true : !(value.id_1 === getStringHashCode(value.username_1))) {
      tmp1_output.encodeIntElement_utywpf_k$(tmp0_desc, 2, value.id_1);
    }
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_utocxo_k$(encoder, value instanceof User ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function User_init_$Init$(seen1, username, password, id, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance().descriptor_1);
    }
    $this.username_1 = username;
    $this.password_1 = password;
    if (0 === (seen1 & 4))
      $this.id_1 = getStringHashCode($this.username_1);
    else
      $this.id_1 = id;
    return $this;
  }
  function User_init_$Create$(seen1, username, password, id, serializationConstructorMarker) {
    return User_init_$Init$(seen1, username, password, id, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(username, password) {
    Companion_getInstance_1();
    this.username_1 = username;
    this.password_1 = password;
    this.id_1 = getStringHashCode(this.username_1);
  }
  protoOf(User).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(User).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(User).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(User).component1_7eebsc_k$ = function () {
    return this.username_1;
  };
  protoOf(User).component2_7eebsb_k$ = function () {
    return this.password_1;
  };
  protoOf(User).copy_jxa1ir_k$ = function (username, password) {
    return new User(username, password);
  };
  protoOf(User).copy$default_2rcs3d_k$ = function (username, password, $super) {
    username = username === VOID ? this.username_1 : username;
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_jxa1ir_k$(username, password) : $super.copy_jxa1ir_k$.call(this, username, password);
  };
  protoOf(User).toString = function () {
    return 'User(username=' + this.username_1 + ', password=' + this.password_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.username_1);
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  function get_jsonClient() {
    _init_properties_Api_kt__fgeanc();
    return jsonClient;
  }
  var jsonClient;
  function getUserList($completion) {
    var tmp = new $getUserListCOROUTINE$0($completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function addUser(user, $completion) {
    var tmp = new $addUserCOROUTINE$1(user, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function deleteUser(userList, $completion) {
    var tmp = new $deleteUserCOROUTINE$2(userList, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function authenticateUser(user, $completion) {
    var tmp = new $authenticateUserCOROUTINE$3(user, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getCurrentUser($completion) {
    var tmp = new $getCurrentUserCOROUTINE$4($completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function logoutUser($completion) {
    var tmp = new $logoutUserCOROUTINE$5($completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function jsonClient$lambda($this$HttpClient) {
    _init_properties_Api_kt__fgeanc();
    var tmp = Plugin_getInstance();
    $this$HttpClient.install_851ey0_k$(tmp, jsonClient$lambda$lambda);
    return Unit_getInstance();
  }
  function jsonClient$lambda$lambda($this$install) {
    _init_properties_Api_kt__fgeanc();
    json($this$install);
    return Unit_getInstance();
  }
  function $getUserListCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($getUserListCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.tmp0_get0__1 = get_jsonClient();
            var tmp_1 = this;
            tmp_1.tmp1_get1__1 = Companion_getInstance_1().get_path_wos8ry_k$();
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.tmp1_get1__1);
            tmp_2.tmp1_get2__1 = tmp0_apply;
            this.tmp1_get2__1.set_method_32z5od_k$(Companion_getInstance().get_Get_18jsxf_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_get2__1, this.tmp0_get0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp2_body3__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            var tmp_3 = this.tmp2_body3__1.get_call_wojxrb_k$();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(List);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.bodyNullable_ld5qr1_k$(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  function $addUserCOROUTINE$1(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.user_1 = user;
  }
  protoOf($addUserCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_post0__1 = get_jsonClient();
            var tmp_1 = this;
            tmp_1.tmp1_post1__1 = Companion_getInstance_1().get_path_wos8ry_k$();
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.tmp1_post1__1);
            contentType(tmp0_apply, Application_getInstance().get_Json_wo4ci9_k$());
            var tmp0_subject = this.user_1;
            if (tmp0_subject == null) {
              tmp0_apply.set_body_slzaj6_k$(NullBody_getInstance());
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(User);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(User), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.set_body_slzaj6_k$(this.user_1);
                tmp0_apply.set_bodyType_oab65z_k$(null);
              } else {
                tmp0_apply.set_body_slzaj6_k$(this.user_1);
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(User);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(User), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.tmp1_post2__1 = tmp0_apply;
            this.tmp1_post2__1.set_method_32z5od_k$(Companion_getInstance().get_Post_wo83k9_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_post2__1, this.tmp0_post0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  function $deleteUserCOROUTINE$2(userList, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.userList_1 = userList;
  }
  protoOf($deleteUserCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_delete0__1 = get_jsonClient();
            var tmp_1 = this;
            tmp_1.tmp1_delete1__1 = Companion_getInstance_1().get_path_wos8ry_k$() + ('/' + this.userList_1.get_id_kntnx8_k$());
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.tmp1_delete1__1);
            tmp_2.tmp1_delete2__1 = tmp0_apply;
            this.tmp1_delete2__1.set_method_32z5od_k$(Companion_getInstance().get_Delete_2tr9d8_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_delete2__1, this.tmp0_delete0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  function $authenticateUserCOROUTINE$3(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.user_1 = user;
  }
  protoOf($authenticateUserCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_post0__1 = get_jsonClient();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, '/authenticate');
            contentType(tmp0_apply, Application_getInstance().get_Json_wo4ci9_k$());
            var tmp0_subject = this.user_1;
            if (tmp0_subject == null) {
              tmp0_apply.set_body_slzaj6_k$(NullBody_getInstance());
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(User);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(User), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.set_body_slzaj6_k$(this.user_1);
                tmp0_apply.set_bodyType_oab65z_k$(null);
              } else {
                tmp0_apply.set_body_slzaj6_k$(this.user_1);
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(User);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(User), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.set_bodyType_oab65z_k$(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.tmp1_post1__1 = tmp0_apply;
            this.tmp1_post1__1.set_method_32z5od_k$(Companion_getInstance().get_Post_wo83k9_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_post1__1, this.tmp0_post0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            return response;
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
  function $getCurrentUserCOROUTINE$4(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($getCurrentUserCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.tmp0_get0__1 = get_jsonClient();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, '/authenticate');
            tmp_1.tmp1_get1__1 = tmp0_apply;
            this.tmp1_get1__1.set_method_32z5od_k$(Companion_getInstance().get_Get_18jsxf_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_get1__1, this.tmp0_get0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp1_body2__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            var tmp_2 = this.tmp1_body2__1.get_call_wojxrb_k$();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$();
            var tmp_5;
            try {
              tmp_5 = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.bodyNullable_ld5qr1_k$(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? typeof suspendResult === 'string' : false) ? suspendResult : THROW_CCE();
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
  function $logoutUserCOROUTINE$5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($logoutUserCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.tmp0_get0__1 = get_jsonClient();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, '/logout');
            tmp_1.tmp1_get1__1 = tmp0_apply;
            this.tmp1_get1__1.set_method_32z5od_k$(Companion_getInstance().get_Get_18jsxf_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = (new HttpStatement(this.tmp1_get1__1, this.tmp0_get0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp1_body2__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            var tmp_2 = this.tmp1_body2__1.get_call_wojxrb_k$();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$();
            var tmp_5;
            try {
              tmp_5 = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.bodyNullable_ld5qr1_k$(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? typeof suspendResult === 'string' : false) ? suspendResult : THROW_CCE();
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
  var properties_initialized_Api_kt_kagxpy;
  function _init_properties_Api_kt__fgeanc() {
    if (!properties_initialized_Api_kt_kagxpy) {
      properties_initialized_Api_kt_kagxpy = true;
      jsonClient = HttpClient(jsonClient$lambda);
    }
  }
  function get_scope() {
    _init_properties_App_kt__fk8usv();
    return scope;
  }
  var scope;
  function get_App() {
    _init_properties_App_kt__fk8usv();
    return App;
  }
  var App;
  function App$lambda($this$FC, it) {
    _init_properties_App_kt__fk8usv();
    var userList$delegate = useState(emptyList());
    var currentUser$delegate = useState('');
    useEffectOnce(App$lambda$lambda(userList$delegate, currentUser$delegate));
    // Inline function 'react.ChildrenBuilder.invoke' call
    var tmp0_invoke = get_Navbar();
    var tmp1_invoke = App$lambda$lambda_0;
    addChild($this$FC, tmp0_invoke, tmp1_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.h1' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp4_invoke = App$lambda$lambda_1;
    addChild($this$FC, 'h1', tmp4_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.ul' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp7_invoke = App$lambda$lambda_2(userList$delegate);
    addChild($this$FC, 'ul', tmp7_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.h2' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp10_invoke = App$lambda$lambda_3;
    addChild($this$FC, 'h2', tmp10_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    var tmp11_invoke = get_InputComponent();
    var tmp12_invoke = App$lambda$lambda_4(userList$delegate);
    addChild($this$FC, tmp11_invoke, tmp12_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.h2' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp15_invoke = App$lambda$lambda_5;
    addChild($this$FC, 'h2', tmp15_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    var tmp16_invoke = get_LoginComponent();
    var tmp17_invoke = App$lambda$lambda_6(currentUser$delegate);
    addChild($this$FC, tmp16_invoke, tmp17_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.button' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp20_invoke = App$lambda$lambda_7(currentUser$delegate);
    addChild($this$FC, 'button', tmp20_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.h2' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp23_invoke = App$lambda$lambda_8(currentUser$delegate);
    addChild($this$FC, 'h2', tmp23_invoke);
    return Unit_getInstance();
  }
  function invoke$lambda($userList$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'react.StateInstance.getValue' call
    getLocalDelegateReference('userList', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return $userList$delegate[0];
  }
  function invoke$lambda_0($userList$delegate, value) {
    _init_properties_App_kt__fk8usv();
    getLocalDelegateReference('userList', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return $userList$delegate[1](value);
  }
  function invoke$lambda_1($currentUser$delegate) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'react.StateInstance.getValue' call
    getLocalDelegateReference('currentUser', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return $currentUser$delegate[0];
  }
  function invoke$lambda_2($currentUser$delegate, value) {
    _init_properties_App_kt__fk8usv();
    getLocalDelegateReference('currentUser', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return $currentUser$delegate[1](value);
  }
  function App$lambda$lambda$slambda($userList$delegate, $currentUser$delegate, resultContinuation) {
    this.$userList$delegate_1 = $userList$delegate;
    this.$currentUser$delegate_1 = $currentUser$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = getUserList(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            invoke$lambda_0(this.$userList$delegate_1, this.ARGUMENT0__1);
            this.set_state_a96kl8_k$(2);
            suspendResult = getCurrentUser(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.$currentUser$delegate_1, ARGUMENT);
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
  protoOf(App$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$slambda(this.$userList$delegate_1, this.$currentUser$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$slambda_0($userList$delegate, $currentUser$delegate, resultContinuation) {
    var i = new App$lambda$lambda$slambda($userList$delegate, $currentUser$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda($userList$delegate, $currentUser$delegate) {
    return function ($this$useEffectOnce) {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, App$lambda$lambda$slambda_0($userList$delegate, $currentUser$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_0($this$invoke) {
    _init_properties_App_kt__fk8usv();
    return Unit_getInstance();
  }
  function App$lambda$lambda_1($this$invoke) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Login App';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$slambda($element, $userList$delegate, resultContinuation) {
    this.$element_1 = $element;
    this.$userList$delegate_1 = $userList$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = deleteUser(this.$element_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = getUserList(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.$userList$delegate_1, ARGUMENT);
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
  protoOf(App$lambda$lambda$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$lambda$slambda(this.$element_1, this.$userList$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$lambda$slambda_0($element, $userList$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$lambda$slambda($element, $userList$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda$lambda($element, $userList$delegate) {
    return function (it) {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, App$lambda$lambda$lambda$lambda$slambda_0($element, $userList$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda($element, $userList$delegate) {
    return function ($this$invoke) {
      $this$invoke.key = $element.toString();
      $this$invoke.onClick = App$lambda$lambda$lambda$lambda($element, $userList$delegate);
      var tmp0_unaryPlus = $element.get_username_ytz5i7_k$() + ' [' + $element.get_password_bodifw_k$() + ']';
      var tmp$ret$2;
      // Inline function 'react.ReactNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unaryPlus;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      addChildNode($this$invoke, tmp$ret$2);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_2($userList$delegate) {
    return function ($this$invoke) {
      var tmp0_forEach = invoke$lambda($userList$delegate);
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'react.ChildrenBuilder.invoke' call
        var tmp$ret$3;
        // Inline function 'react.dom.html.ReactHTML.li' call
        var tmp0_get_li_bnss4a = ReactHTML_getInstance();
        var tmp$ret$2;
        // Inline function 'react.IntrinsicType' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'li';
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var tmp1_invoke = tmp$ret$3;
        var tmp2_invoke = App$lambda$lambda$lambda(element, $userList$delegate);
        addChild($this$invoke, tmp1_invoke, tmp2_invoke);
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_3($this$invoke) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Create a new user';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$slambda($newUser, $userList$delegate, resultContinuation) {
    this.$newUser_1 = $newUser;
    this.$userList$delegate_1 = $userList$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = addUser(this.$newUser_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = getUserList(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_0(this.$userList$delegate_1, ARGUMENT);
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
  protoOf(App$lambda$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$slambda(this.$newUser_1, this.$userList$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$slambda_0($newUser, $userList$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$slambda($newUser, $userList$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda_0($userList$delegate) {
    return function (input) {
      var formData = split(input, ['\r']);
      var newUser = new User(formData.get_fkrdnv_k$(0), formData.get_fkrdnv_k$(1));
      var tmp = get_scope();
      launch(tmp, VOID, VOID, App$lambda$lambda$lambda$slambda_0(newUser, $userList$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_4($userList$delegate) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = App$lambda$lambda$lambda_0($userList$delegate);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_5($this$invoke) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    addChildNode($this$invoke, 'Login');
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$slambda_1($response, $user, $currentUser$delegate, resultContinuation) {
    this.$response_1 = $response;
    this.$user_1 = $user;
    this.$currentUser$delegate_1 = $currentUser$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$slambda_1).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            suspendResult = authenticateUser(this.$user_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.$response_1._v = this.ARGUMENT0__1;
            println(this.$response_1._v.toString());
            if (this.$response_1._v.get_status_jnf6d7_k$().equals(Companion_getInstance_0().get_OK_kntokb_k$())) {
              println(this.$user_1.get_username_ytz5i7_k$() + ' is now logged in');
              this.set_state_a96kl8_k$(2);
              suspendResult = getCurrentUser(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              println('invalid username or password');
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.$currentUser$delegate_1, ARGUMENT);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(App$lambda$lambda$lambda$slambda_1).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$slambda_1(this.$response_1, this.$user_1, this.$currentUser$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$slambda_2($response, $user, $currentUser$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$slambda_1($response, $user, $currentUser$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda_1($currentUser$delegate) {
    return function (input) {
      var formData = split(input, ['\r']);
      var user = new User(formData.get_fkrdnv_k$(0), formData.get_fkrdnv_k$(1));
      var response = {_v: null};
      var tmp = get_scope();
      launch(tmp, VOID, VOID, App$lambda$lambda$lambda$slambda_2(response, user, $currentUser$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_6($currentUser$delegate) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = App$lambda$lambda$lambda_1($currentUser$delegate);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$slambda_3($currentUser$delegate, resultContinuation) {
    this.$currentUser$delegate_1 = $currentUser$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(App$lambda$lambda$lambda$slambda_3).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(App$lambda$lambda$lambda$slambda_3).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(App$lambda$lambda$lambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = logoutUser(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.username0__1 = suspendResult;
            println(this.username0__1 + 'is now logged out');
            this.set_state_a96kl8_k$(2);
            suspendResult = getCurrentUser(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.$currentUser$delegate_1, ARGUMENT);
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
  protoOf(App$lambda$lambda$lambda$slambda_3).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new App$lambda$lambda$lambda$slambda_3(this.$currentUser$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(App$lambda$lambda$lambda$slambda_3).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function App$lambda$lambda$lambda$slambda_4($currentUser$delegate, resultContinuation) {
    var i = new App$lambda$lambda$lambda$slambda_3($currentUser$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function App$lambda$lambda$lambda_2($currentUser$delegate) {
    return function (it) {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, App$lambda$lambda$lambda$slambda_4($currentUser$delegate, null));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_7($currentUser$delegate) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'react.ReactNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'Log out';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      addChildNode($this$invoke, tmp$ret$2);
      $this$invoke.onClick = App$lambda$lambda$lambda_2($currentUser$delegate);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_8($currentUser$delegate) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'react.ReactNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'Current User: ';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      addChildNode($this$invoke, tmp$ret$2);
      var tmp0_unaryPlus = invoke$lambda_1($currentUser$delegate);
      var tmp$ret$5;
      // Inline function 'react.ReactNode' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp0_unaryPlus;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      addChildNode($this$invoke, tmp$ret$5);
      return Unit_getInstance();
    };
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      scope = MainScope();
      App = FC(App$lambda);
    }
  }
  function get_InputComponent() {
    _init_properties_InputComponent_kt__4ko2bx();
    return InputComponent;
  }
  var InputComponent;
  function InputComponent$lambda($this$FC, props) {
    _init_properties_InputComponent_kt__4ko2bx();
    var tmp0_container = useState('');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var username = {_v: tmp0_container[0]};
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var setUsername = {_v: tmp0_container[1]};
    var tmp1_container = useState('');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var password = {_v: tmp1_container[0]};
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var setPassword = {_v: tmp1_container[1]};
    var submitHandler = InputComponent$lambda$lambda(setUsername, setPassword, props, username, password);
    var changeHandler = InputComponent$lambda$lambda_0(setUsername, setPassword);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.form' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_invoke = InputComponent$lambda$lambda_1(submitHandler, username, setUsername, password, setPassword);
    addChild($this$FC, 'form', tmp2_invoke);
    return Unit_getInstance();
  }
  function InputComponent$lambda$lambda($setUsername, $setPassword, $props, $username, $password) {
    return function (it) {
      it.preventDefault();
      $setUsername._v('');
      $setPassword._v('');
      $props.onSubmit($username._v + '\r' + $password._v);
      return Unit_getInstance();
    };
  }
  function InputComponent$lambda$lambda_0($setUsername, $setPassword) {
    return function (it) {
      $setUsername._v(it.target.value);
      $setPassword._v(it.target.value);
      return Unit_getInstance();
    };
  }
  function InputComponent$lambda$lambda$lambda($this$invoke) {
    _init_properties_InputComponent_kt__4ko2bx();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Username:';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function InputComponent$lambda$lambda$lambda$lambda($setUsername) {
    return function (it) {
      $setUsername._v(it.target.value);
      return Unit_getInstance();
    };
  }
  function InputComponent$lambda$lambda$lambda_0($username, $setUsername) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.onChange = InputComponent$lambda$lambda$lambda$lambda($setUsername);
      $this$invoke.value = $username._v;
      return Unit_getInstance();
    };
  }
  function InputComponent$lambda$lambda$lambda_1($this$invoke) {
    _init_properties_InputComponent_kt__4ko2bx();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Password:';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function InputComponent$lambda$lambda$lambda$lambda_0($setPassword) {
    return function (it) {
      $setPassword._v(it.target.value);
      return Unit_getInstance();
    };
  }
  function InputComponent$lambda$lambda$lambda_2($password, $setPassword) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.onChange = InputComponent$lambda$lambda$lambda$lambda_0($setPassword);
      $this$invoke.value = $password._v;
      return Unit_getInstance();
    };
  }
  function InputComponent$lambda$lambda$lambda_3($this$invoke) {
    _init_properties_InputComponent_kt__4ko2bx();
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).submit;
    $this$invoke.value = 'Submit';
    return Unit_getInstance();
  }
  function InputComponent$lambda$lambda_1($submitHandler, $username, $setUsername, $password, $setPassword) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = $submitHandler;
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp0_get_label_gfu9zd = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'label';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_invoke = tmp$ret$3;
      var tmp2_invoke = InputComponent$lambda$lambda$lambda;
      addChild($this$invoke, tmp1_invoke, tmp2_invoke);
      var tmp$ret$7;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp3_get_input_ylpptc = ReactHTML_getInstance();
      var tmp$ret$6;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'input';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp4_invoke = tmp$ret$7;
      var tmp5_invoke = InputComponent$lambda$lambda$lambda_0($username, $setUsername);
      addChild($this$invoke, tmp4_invoke, tmp5_invoke);
      var tmp$ret$11;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp6_get_label_iccgot = ReactHTML_getInstance();
      var tmp$ret$10;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'label';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      var tmp7_invoke = tmp$ret$11;
      var tmp8_invoke = InputComponent$lambda$lambda$lambda_1;
      addChild($this$invoke, tmp7_invoke, tmp8_invoke);
      var tmp$ret$15;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp9_get_input_6h0uu = ReactHTML_getInstance();
      var tmp$ret$14;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$12 = 'input';
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      var tmp10_invoke = tmp$ret$15;
      var tmp11_invoke = InputComponent$lambda$lambda$lambda_2($password, $setPassword);
      addChild($this$invoke, tmp10_invoke, tmp11_invoke);
      var tmp$ret$19;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp12_get_input_qimj64 = ReactHTML_getInstance();
      var tmp$ret$18;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = 'input';
      tmp$ret$17 = tmp$ret$16;
      tmp$ret$18 = tmp$ret$17;
      tmp$ret$19 = tmp$ret$18;
      var tmp13_invoke = tmp$ret$19;
      var tmp14_invoke = InputComponent$lambda$lambda$lambda_3;
      addChild($this$invoke, tmp13_invoke, tmp14_invoke);
      return Unit_getInstance();
    };
  }
  var properties_initialized_InputComponent_kt_m97mtn;
  function _init_properties_InputComponent_kt__4ko2bx() {
    if (!properties_initialized_InputComponent_kt_m97mtn) {
      properties_initialized_InputComponent_kt_m97mtn = true;
      InputComponent = FC(InputComponent$lambda);
    }
  }
  function get_LoginComponent() {
    _init_properties_LoginComponent_kt__8ef6k4();
    return LoginComponent;
  }
  var LoginComponent;
  function LoginComponent$lambda($this$FC, props) {
    _init_properties_LoginComponent_kt__8ef6k4();
    var tmp0_container = useState('');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var username = {_v: tmp0_container[0]};
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var setUsername = {_v: tmp0_container[1]};
    var tmp1_container = useState('');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var password = {_v: tmp1_container[0]};
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var setPassword = {_v: tmp1_container[1]};
    var submitHandler = LoginComponent$lambda$lambda(setUsername, setPassword, props, username, password);
    var changeHandler = LoginComponent$lambda$lambda_0(setUsername, setPassword);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.form' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_invoke = LoginComponent$lambda$lambda_1(submitHandler, username, setUsername, password, setPassword);
    addChild($this$FC, 'form', tmp2_invoke);
    return Unit_getInstance();
  }
  function LoginComponent$lambda$lambda($setUsername, $setPassword, $props, $username, $password) {
    return function (it) {
      it.preventDefault();
      $setUsername._v('');
      $setPassword._v('');
      $props.onSubmit($username._v + '\r' + $password._v);
      return Unit_getInstance();
    };
  }
  function LoginComponent$lambda$lambda_0($setUsername, $setPassword) {
    return function (it) {
      $setUsername._v(it.target.value);
      $setPassword._v(it.target.value);
      return Unit_getInstance();
    };
  }
  function LoginComponent$lambda$lambda$lambda($this$invoke) {
    _init_properties_LoginComponent_kt__8ef6k4();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Username:';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function LoginComponent$lambda$lambda$lambda$lambda($setUsername) {
    return function (it) {
      $setUsername._v(it.target.value);
      return Unit_getInstance();
    };
  }
  function LoginComponent$lambda$lambda$lambda_0($username, $setUsername) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.onChange = LoginComponent$lambda$lambda$lambda$lambda($setUsername);
      $this$invoke.value = $username._v;
      return Unit_getInstance();
    };
  }
  function LoginComponent$lambda$lambda$lambda_1($this$invoke) {
    _init_properties_LoginComponent_kt__8ef6k4();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Password:';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function LoginComponent$lambda$lambda$lambda$lambda_0($setPassword) {
    return function (it) {
      $setPassword._v(it.target.value);
      return Unit_getInstance();
    };
  }
  function LoginComponent$lambda$lambda$lambda_2($password, $setPassword) {
    return function ($this$invoke) {
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.onChange = LoginComponent$lambda$lambda$lambda$lambda_0($setPassword);
      $this$invoke.value = $password._v;
      return Unit_getInstance();
    };
  }
  function LoginComponent$lambda$lambda$lambda_3($this$invoke) {
    _init_properties_LoginComponent_kt__8ef6k4();
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).submit;
    $this$invoke.value = 'Login';
    return Unit_getInstance();
  }
  function LoginComponent$lambda$lambda_1($submitHandler, $username, $setUsername, $password, $setPassword) {
    return function ($this$invoke) {
      $this$invoke.onSubmit = $submitHandler;
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp0_get_label_gfu9zd = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'label';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_invoke = tmp$ret$3;
      var tmp2_invoke = LoginComponent$lambda$lambda$lambda;
      addChild($this$invoke, tmp1_invoke, tmp2_invoke);
      var tmp$ret$7;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp3_get_input_ylpptc = ReactHTML_getInstance();
      var tmp$ret$6;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'input';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp4_invoke = tmp$ret$7;
      var tmp5_invoke = LoginComponent$lambda$lambda$lambda_0($username, $setUsername);
      addChild($this$invoke, tmp4_invoke, tmp5_invoke);
      var tmp$ret$11;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp6_get_label_iccgot = ReactHTML_getInstance();
      var tmp$ret$10;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'label';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      var tmp7_invoke = tmp$ret$11;
      var tmp8_invoke = LoginComponent$lambda$lambda$lambda_1;
      addChild($this$invoke, tmp7_invoke, tmp8_invoke);
      var tmp$ret$15;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp9_get_input_6h0uu = ReactHTML_getInstance();
      var tmp$ret$14;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$12 = 'input';
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      var tmp10_invoke = tmp$ret$15;
      var tmp11_invoke = LoginComponent$lambda$lambda$lambda_2($password, $setPassword);
      addChild($this$invoke, tmp10_invoke, tmp11_invoke);
      var tmp$ret$19;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp12_get_input_qimj64 = ReactHTML_getInstance();
      var tmp$ret$18;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = 'input';
      tmp$ret$17 = tmp$ret$16;
      tmp$ret$18 = tmp$ret$17;
      tmp$ret$19 = tmp$ret$18;
      var tmp13_invoke = tmp$ret$19;
      var tmp14_invoke = LoginComponent$lambda$lambda$lambda_3;
      addChild($this$invoke, tmp13_invoke, tmp14_invoke);
      return Unit_getInstance();
    };
  }
  var properties_initialized_LoginComponent_kt_dziqom;
  function _init_properties_LoginComponent_kt__8ef6k4() {
    if (!properties_initialized_LoginComponent_kt_dziqom) {
      properties_initialized_LoginComponent_kt_dziqom = true;
      LoginComponent = FC(LoginComponent$lambda);
    }
  }
  function main() {
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Couldn't find container!");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var container = tmp;
    createRoot(container).render(create(get_App()));
  }
  function get_Navbar() {
    _init_properties_Navbar_kt__bnra8g();
    return Navbar;
  }
  var Navbar;
  function Navbar$lambda($this$FC, it) {
    _init_properties_Navbar_kt__bnra8g();
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.a' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_invoke = Navbar$lambda$lambda;
    addChild($this$FC, 'a', tmp2_invoke);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.a' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp5_invoke = Navbar$lambda$lambda_0;
    addChild($this$FC, 'a', tmp5_invoke);
    return Unit_getInstance();
  }
  function Navbar$lambda$lambda($this$invoke) {
    _init_properties_Navbar_kt__bnra8g();
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.button' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_invoke = Navbar$lambda$lambda$lambda;
    addChild($this$invoke, 'button', tmp2_invoke);
    $this$invoke.href = '/';
    return Unit_getInstance();
  }
  function Navbar$lambda$lambda$lambda($this$invoke) {
    _init_properties_Navbar_kt__bnra8g();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'Register';
    addChildNode($this$invoke, tmp$ret$2);
    return Unit_getInstance();
  }
  function Navbar$lambda$lambda_0($this$invoke) {
    _init_properties_Navbar_kt__bnra8g();
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.button' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_invoke = Navbar$lambda$lambda$lambda_0;
    addChild($this$invoke, 'button', tmp2_invoke);
    $this$invoke.href = '/login';
    return Unit_getInstance();
  }
  function Navbar$lambda$lambda$lambda_0($this$invoke) {
    _init_properties_Navbar_kt__bnra8g();
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    addChildNode($this$invoke, 'Login');
    return Unit_getInstance();
  }
  var properties_initialized_Navbar_kt_ptv98y;
  function _init_properties_Navbar_kt__bnra8g() {
    if (!properties_initialized_Navbar_kt_ptv98y) {
      properties_initialized_Navbar_kt_ptv98y = true;
      Navbar = FC(Navbar$lambda);
    }
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=shoppinglist.js.map
