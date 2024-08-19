(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-dom'.");
    }
    root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.oa;
  var objectMeta = kotlin_kotlin.$_$.na;
  var VOID = kotlin_kotlin.$_$.of;
  var setMetadataFor = kotlin_kotlin.$_$.pa;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ReactHTML, 'ReactHTML', objectMeta);
  //endregion
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  protoOf(ReactHTML).get_a_1mhr5k_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'a';
  };
  protoOf(ReactHTML).get_abbr_woioai_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'abbr';
  };
  protoOf(ReactHTML).get_address_hpr2t1_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address';
  };
  protoOf(ReactHTML).get_area_woj07q_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'area';
  };
  protoOf(ReactHTML).get_article_auhgc3_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'article';
  };
  protoOf(ReactHTML).get_aside_iot53j_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'aside';
  };
  protoOf(ReactHTML).get_audio_ioubhp_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'audio';
  };
  protoOf(ReactHTML).get_b_1mhr5l_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'b';
  };
  protoOf(ReactHTML).get_base_wojaxm_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'base';
  };
  protoOf(ReactHTML).get_bdi_18j8xu_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bdi';
  };
  protoOf(ReactHTML).get_bdo_18j8xo_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bdo';
  };
  protoOf(ReactHTML).get_big_18j8tl_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'big';
  };
  protoOf(ReactHTML).get_blockquote_1dn2qg_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'blockquote';
  };
  protoOf(ReactHTML).get_body_wojkyz_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'body';
  };
  protoOf(ReactHTML).get_br_knto2v_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'br';
  };
  protoOf(ReactHTML).get_button_bmjiuz_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'button';
  };
  protoOf(ReactHTML).get_canvas_bshgm9_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'canvas';
  };
  protoOf(ReactHTML).get_caption_aejif1_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'caption';
  };
  protoOf(ReactHTML).get_center_buollq_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(ReactHTML).get_cite_wok3vk_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cite';
  };
  protoOf(ReactHTML).get_code_wok7xy_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'code';
  };
  protoOf(ReactHTML).get_col_18j7xl_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'col';
  };
  protoOf(ReactHTML).get_colgroup_spee2w_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'colgroup';
  };
  protoOf(ReactHTML).get_data_wokkxf_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'data';
  };
  protoOf(ReactHTML).get_datalist_27cqun_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'datalist';
  };
  protoOf(ReactHTML).get_dd_knto1j_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dd';
  };
  protoOf(ReactHTML).get_del_18j7fi_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'del';
  };
  protoOf(ReactHTML).get_details_r0zbrt_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'details';
  };
  protoOf(ReactHTML).get_dfn_18j7el_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dfn';
  };
  protoOf(ReactHTML).get_dialog_cdoxu9_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dialog';
  };
  protoOf(ReactHTML).get_div_18j7bs_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'div';
  };
  protoOf(ReactHTML).get_dl_knto1b_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dl';
  };
  protoOf(ReactHTML).get_dt_knto13_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dt';
  };
  protoOf(ReactHTML).get_em_knto0f_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'em';
  };
  protoOf(ReactHTML).get_embed_iqwcds_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'embed';
  };
  protoOf(ReactHTML).get_fieldset_nv2uwh_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fieldset';
  };
  protoOf(ReactHTML).get_figcaption_f7t6ol_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'figcaption';
  };
  protoOf(ReactHTML).get_figure_dbw7al_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'figure';
  };
  protoOf(ReactHTML).get_footer_dfc1pg_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'footer';
  };
  protoOf(ReactHTML).get_form_wom58t_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'form';
  };
  protoOf(ReactHTML).get_h1_kntnzi_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h1';
  };
  protoOf(ReactHTML).get_h2_kntnzh_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h2';
  };
  protoOf(ReactHTML).get_h3_kntnzg_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h3';
  };
  protoOf(ReactHTML).get_h4_kntnzf_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h4';
  };
  protoOf(ReactHTML).get_h5_kntnze_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h5';
  };
  protoOf(ReactHTML).get_h6_kntnzd_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h6';
  };
  protoOf(ReactHTML).get_head_won7e1_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'head';
  };
  protoOf(ReactHTML).get_header_e7o2vq_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'header';
  };
  protoOf(ReactHTML).get_hgroup_e92rds_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hgroup';
  };
  protoOf(ReactHTML).get_hr_kntnxp_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hr';
  };
  protoOf(ReactHTML).get_html_wonit0_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'html';
  };
  protoOf(ReactHTML).get_i_1mhr5s_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'i';
  };
  protoOf(ReactHTML).get_iframe_epkalp_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'iframe';
  };
  protoOf(ReactHTML).get_img_18j3ja_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'img';
  };
  protoOf(ReactHTML).get_input_it4gip_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'input';
  };
  protoOf(ReactHTML).get_ins_18j3i3_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ins';
  };
  protoOf(ReactHTML).get_kbd_18j2bg_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'kbd';
  };
  protoOf(ReactHTML).get_keygen_fn8byy_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'keygen';
  };
  protoOf(ReactHTML).get_label_iuj8p7_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'label';
  };
  protoOf(ReactHTML).get_legend_g3yfbq_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'legend';
  };
  protoOf(ReactHTML).get_li_kntnui_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'li';
  };
  protoOf(ReactHTML).get_link_wopumb_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'link';
  };
  protoOf(ReactHTML).get_main_woqbk2_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'main';
  };
  protoOf(ReactHTML).get_map_18j0ul_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'map';
  };
  protoOf(ReactHTML).get_mark_woqbrq_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'mark';
  };
  protoOf(ReactHTML).get_menu_woqenc_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'menu';
  };
  protoOf(ReactHTML).get_menuitem_t92w1n_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'menuitem';
  };
  protoOf(ReactHTML).get_meta_woqery_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'meta';
  };
  protoOf(ReactHTML).get_meter_iv5ylc_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'meter';
  };
  protoOf(ReactHTML).get_nav_18j03q_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nav';
  };
  protoOf(ReactHTML).get_noscript_656maz_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'noscript';
  };
  protoOf(ReactHTML).get_object_hhhtfs_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'object';
  };
  protoOf(ReactHTML).get_ol_kntnru_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ol';
  };
  protoOf(ReactHTML).get_optgroup_x50znv_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'optgroup';
  };
  protoOf(ReactHTML).get_option_hpdev2_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'option';
  };
  protoOf(ReactHTML).get_output_hs4j62_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'output';
  };
  protoOf(ReactHTML).get_p_1mhr5z_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'p';
  };
  protoOf(ReactHTML).get_param_iwqquc_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'param';
  };
  protoOf(ReactHTML).get_picture_8af27f_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'picture';
  };
  protoOf(ReactHTML).get_pre_18iy86_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre';
  };
  protoOf(ReactHTML).get_progress_mo5qeu_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'progress';
  };
  protoOf(ReactHTML).get_q_1mhr60_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'q';
  };
  protoOf(ReactHTML).get_rp_kntnp5_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rp';
  };
  protoOf(ReactHTML).get_rt_kntnp1_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rt';
  };
  protoOf(ReactHTML).get_ruby_wotx5v_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ruby';
  };
  protoOf(ReactHTML).get_s_1mhr62_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 's';
  };
  protoOf(ReactHTML).get_samp_wou5kq_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'samp';
  };
  protoOf(ReactHTML).get_search_jf67jl_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'search';
  };
  protoOf(ReactHTML).get_slot_wouds7_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'slot';
  };
  protoOf(ReactHTML).get_script_jedas4_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'script';
  };
  protoOf(ReactHTML).get_section_xul1x8_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'section';
  };
  protoOf(ReactHTML).get_select_jfcyrp_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'select';
  };
  protoOf(ReactHTML).get_small_iylg4e_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'small';
  };
  protoOf(ReactHTML).get_source_jl0x7o_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'source';
  };
  protoOf(ReactHTML).get_span_wouger_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'span';
  };
  protoOf(ReactHTML).get_strong_jnpx9c_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'strong';
  };
  protoOf(ReactHTML).get_style_iyqetk_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'style';
  };
  protoOf(ReactHTML).get_sub_18ivxl_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sub';
  };
  protoOf(ReactHTML).get_summary_tgfqkj_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'summary';
  };
  protoOf(ReactHTML).get_sup_18ivx7_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sup';
  };
  protoOf(ReactHTML).get_table_iyxllx_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table';
  };
  protoOf(ReactHTML).get_template_hdczer_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'template';
  };
  protoOf(ReactHTML).get_tbody_iyyi25_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tbody';
  };
  protoOf(ReactHTML).get_td_kntnnr_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'td';
  };
  protoOf(ReactHTML).get_textarea_mmvbib_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'textarea';
  };
  protoOf(ReactHTML).get_tfoot_iz129l_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tfoot';
  };
  protoOf(ReactHTML).get_th_kntnnn_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'th';
  };
  protoOf(ReactHTML).get_thead_iz24h7_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'thead';
  };
  protoOf(ReactHTML).get_time_wouyhi_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'time';
  };
  protoOf(ReactHTML).get_title_iz32un_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'title';
  };
  protoOf(ReactHTML).get_tr_kntnnd_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tr';
  };
  protoOf(ReactHTML).get_track_iz8ffm_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'track';
  };
  protoOf(ReactHTML).get_u_1mhr64_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'u';
  };
  protoOf(ReactHTML).get_ul_kntnmo_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ul';
  };
  protoOf(ReactHTML).get_var_18iu6a_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var';
  };
  protoOf(ReactHTML).get_video_j06c0i_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'video';
  };
  protoOf(ReactHTML).get_wbr_18iteq_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'wbr';
  };
  protoOf(ReactHTML).get_webview_lijlzk_k$ = function () {
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'webview';
  };
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance == null)
      new ReactHTML();
    return ReactHTML_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReactHTML_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-react-dom.js.map
