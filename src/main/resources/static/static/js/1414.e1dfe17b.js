"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[1414],{61414:function(t,n,e){e.r(n),e.d(n,{CalciteComboboxItemGroup:function(){return u},defineCustomElement:function(){return f}});var i=e(32601),o=e(89622),a=e(60974),r=e(94458);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const c={list:"list",label:"label",title:"title"},l="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host,.list{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0px;outline:2px solid transparent;outline-offset:2px}.label{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;min-width:0px;max-width:100%;color:var(--calcite-ui-text-3)}.label--indent-1{-webkit-padding-start:var(--calcite-combobox-item-spacing-indent-1);padding-inline-start:var(--calcite-combobox-item-spacing-indent-1)}.label--indent-2{-webkit-padding-start:var(--calcite-combobox-item-spacing-indent-2);padding-inline-start:var(--calcite-combobox-item-spacing-indent-2)}.title{border:0 solid;display:block;-ms-flex:1 1 0%;flex:1 1 0%;border-bottom-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-bottom-color:var(--calcite-ui-border-3);padding:var(--calcite-combobox-item-spacing-unit-l) 0;margin-left:var(--calcite-combobox-item-spacing-unit-s);margin-right:var(--calcite-combobox-item-spacing-unit-s)}",s=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.guid=(0,a.g)(),this.scale="m"}connectedCallback(){this.ancestors=(0,o.d)(this.el),this.scale=(0,r.g)(this.el,"scale",this.scale)}render(){const{el:t,scale:n}=this,e=`${c.label}--indent-${(0,o.e)(t)}`;return(0,i.h)("ul",{"aria-labelledby":this.guid,class:{[c.list]:!0,[`scale--${n}`]:!0},role:"group"},(0,i.h)("li",{class:{[c.label]:!0,[e]:!0},id:this.guid,role:"presentation"},(0,i.h)("span",{class:c.title},this.label)),(0,i.h)("slot",null))}get el(){return this}static get style(){return l}},[1,"calcite-combobox-item-group",{ancestors:[1040],label:[1]}]);function m(){if("undefined"===typeof customElements)return;const t=["calcite-combobox-item-group"];t.forEach((t=>{switch(t){case"calcite-combobox-item-group":customElements.get(t)||customElements.define(t,s);break}}))}m();const u=s,f=m},94458:function(t,n,e){e.d(n,{a:function(){return o},b:function(){return d},c:function(){return l},e:function(){return s},f:function(){return u},g:function(){return a},n:function(){return i},s:function(){return v},t:function(){return x}});e(26699);function i(t){return Array.isArray(t)?t:Array.from(t)}function o(t){const n="dir",e=`[${n}]`,i=s(t,e);return i?i.getAttribute(n):"ltr"}function a(t,n,e){const i=`[${n}]`,o=t.closest(i);return o?o.getAttribute(n):e}function r(t){return t.getRootNode()}function c(t){return t.host||null}function l(t,{selector:n,id:e}){function i(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const o=r(t),a=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,l=c(o);return a||(l?i(l):null)}return i(t)}function s(t,n){function e(t){return t?t.closest(n)||e(c(r(t))):null}return e(t)}function m(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}async function u(t){if(t)return m(t)?t.setFocus():t.focus()}const f=":not([slot])";function d(t,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);const i=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:f;return(null===e||void 0===e?void 0:e.all)?p(t,i,e):g(t,i,e)}function b(t,n){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(n))):[]}function p(t,n,e){let i=n===f?b(t,f):Array.from(t.querySelectorAll(n));i=e&&!1===e.direct?i:i.filter((n=>n.parentElement===t)),i=(null===e||void 0===e?void 0:e.matches)?i.filter((t=>null===t||void 0===t?void 0:t.matches(e.matches))):i;const o=null===e||void 0===e?void 0:e.selector;return o?i.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):i}function g(t,n,e){let i=n===f?b(t,f)[0]||null:t.querySelector(n);i=e&&!1===e.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===e||void 0===e?void 0:e.matches)?(null===i||void 0===i?void 0:i.matches(e.matches))?i:null:i;const o=null===e||void 0===e?void 0:e.selector;return o?null===i||void 0===i?void 0:i.querySelector(o):i}function v(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function x(t){return(!!t).toString()}},60974:function(t,n,e){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
function i(t){return t.map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}e.d(n,{g:function(){return o}});const o=()=>i([2,1,1,1,3])},89622:function(t,n,e){e.d(n,{C:function(){return c},T:function(){return l},a:function(){return u},b:function(){return a},c:function(){return r},d:function(){return s},e:function(){return d},g:function(){return m},h:function(){return f}});var i=e(94458),o=e(32601);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const a="CALCITE-COMBOBOX-ITEM",r="CALCITE-COMBOBOX-ITEM-GROUP",c=`${a}, ${r}`,l={removeTag:"Remove tag"};function s(t){var n,e;const i=null===(n=t.parentElement)||void 0===n?void 0:n.closest(c),o=null===(e=null===i||void 0===i?void 0:i.parentElement)||void 0===e?void 0:e.closest(c);return[i,o].filter((t=>t))}function m(t){var n;return(null===(n=t.ancestors)||void 0===n?void 0:n.filter((t=>"CALCITE-COMBOBOX-ITEM"===t.nodeName)))||[]}function u(t){return(0,i.n)(t.querySelectorAll("calcite-combobox-item"))}function f(t){const n=(0,i.n)(t.querySelectorAll("calcite-combobox-item"));return n.filter((t=>t.selected)).length>0}function d(t){if(!o.Z5.isBrowser)return 0;const n=document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return n.snapshotLength}}}]);
//# sourceMappingURL=1414.e1dfe17b.js.map