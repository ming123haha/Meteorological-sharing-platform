"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[3735],{53735:function(t,e,i){i.r(e),i.d(e,{CalciteSwitch:function(){return h},defineCustomElement:function(){return m}});var a=i(32601),n=i(94458),o=i(1606),r=i(36964),c=i(2219);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const s="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{height:0.75rem;width:1.5rem}:host([scale=s]) .handle{height:0.5rem;width:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{height:1rem;width:2rem}:host([scale=m]) .handle{height:0.75rem;width:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{height:1.5rem;width:3rem}:host([scale=l]) .handle{height:1.25rem;width:1.25rem}:host{position:relative;display:inline-block;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{width:auto;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.track{pointer-events:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);top:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",l=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=(0,a.yM)(this,"calciteSwitchChange",7),this.disabled=!1,this.scale="m",this.switched=!1,this.checked=!1,this.keyDownHandler=t=>{const e=t.key;this.disabled||" "!==e&&"Enter"!==e||(this.toggle(),t.preventDefault())},this.clickHandler=()=>{this.toggle()},this.setSwitchEl=t=>{this.switchEl=t}}switchedWatcher(t){this.checked=t}async setFocus(){(0,n.f)(this.switchEl)}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit({switched:this.checked})}connectedCallback(){const t=this.checked||this.switched;t&&(this.switched=this.checked=t),(0,o.c)(this),(0,r.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,r.d)(this)}componentDidRender(){(0,c.u)(this)}render(){return(0,a.h)(a.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,a.h)("div",{"aria-checked":(0,n.t)(this.checked),"aria-label":(0,o.g)(this),class:"container",ref:this.setSwitchEl,role:"switch",tabIndex:0},(0,a.h)("div",{class:"track"},(0,a.h)("div",{class:"handle"})),(0,a.h)(r.H,{component:this})))}get el(){return this}static get watchers(){return{switched:["switchedWatcher"]}}static get style(){return s}},[1,"calcite-switch",{disabled:[516],label:[1],name:[513],scale:[513],switched:[1028],checked:[1540],value:[8],setFocus:[64]}]);function d(){if("undefined"===typeof customElements)return;const t=["calcite-switch"];t.forEach((t=>{switch(t){case"calcite-switch":customElements.get(t)||customElements.define(t,l);break}}))}d();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
const h=l,m=d}}]);
//# sourceMappingURL=3735.cd7e6d8a.js.map