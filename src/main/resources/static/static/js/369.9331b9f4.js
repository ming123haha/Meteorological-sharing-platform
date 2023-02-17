"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[369],{39384:function(e,t,i){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function n(e){let t=0,i=0;for(let r=0;r<e.length;r++){const n=e[r].size;"number"==typeof n&&(t+=n,i++)}return t/i}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?n(e.stops):t}function s(e,t){if(!t)return e;const i=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:i,minSize:r}=t;return(a(i,e)+a(r,e))/2}));let r=0;const n=i.length;if(0===n)return e;for(let a=0;a<n;a++)r+=i[a];const s=Math.floor(r/n);return Math.max(s,e)}function l(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const n="visualVariables"in t?s(i,t.visualVariables):i;if("simple"===t.type)return r(n,t.symbol);if("unique-value"===t.type){let e=n;return t.uniqueValueInfos.forEach((t=>{e=r(e,t.symbol)})),e}if("class-breaks"===t.type){let e=n;return t.classBreakInfos.forEach((t=>{e=r(e,t.symbol)})),e}return"dot-density"===t.type||t.type,n}i.d(t,{k:function(){return l}})},19134:function(e,t,i){i.d(t,{A:function(){return p}});var r=i(61445),n=i(2323),a=i(92454),s=i(18105),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623)),u=i(73228);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,u.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add((0,n.kB)((()=>e.abort()))),await(0,s.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,a.k_)(t);const i=(0,u.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,r._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},80369:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var r=i(61445),n=i(22130),a=i(8693),s=i(58006),l=(i(15055),i(81653),i(94315),i(77623)),o=i(47608),u=i(19134),p=i(55101),c=i(31698),h=i(1842),d=i(15633),y=i(98967);let f=class extends((0,h.Z)((0,p.r)((0,d.Z)((0,u.A)(c.Z))))){constructor(){super(...arguments),this.type="tile-3d"}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){if(this.tileInfo){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,i)}return{minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const e=this.layer.get("fullExtent.spatialReference"),t=this.layer.get("tileInfo.spatialReference");if((0,a.Wi)(e)||(0,a.Wi)(t)||!(0,o.Up)(e,t)){const e="defaults"===this.layer.originOf("fullExtent")||(0,a.Wi)(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new n.Z("layerview:incompatible-fullextent",e)))}}this._addTilingSchemeMatchPromise()}createFetchPopupFeaturesQueryGeometry(e,t){return(0,y.K)(e,t,this.view)}async doRefresh(){this.suspended||this.emit("data-changed")}};(0,r._)([(0,s.Cb)({readOnly:!0})],f.prototype,"imageFormatIsOpaque",null),(0,r._)([(0,s.Cb)({readOnly:!0})],f.prototype,"hasMixedImageFormats",null),(0,r._)([(0,s.Cb)()],f.prototype,"layer",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,aliasOf:"layer.tileInfo"})],f.prototype,"tileInfo",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],f.prototype,"dataLevelRange",null),f=(0,r._)([(0,l.j)("esri.views.3d.layers.TileLayerView3D")],f);const g=f},55101:function(e,t,i){i.d(t,{r:function(){return c}});var r=i(61445),n=i(22130),a=i(8693),s=i(18105),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623)),u=i(4343),p=i(64293);const c=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,i)}get displayLevelRange(){const e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,i=this.layer.maxScale||e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,i);return this.layer.maxScale&&r.maxLevel++,r}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if((0,a.Wi)(this.fullExtent))return this.addResolvingPromise(Promise.reject(new n.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if((0,a.pC)(e))return this.addResolvingPromise(Promise.reject(e));const t=(0,s.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,p.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new n.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return t.compatibleWith(e)?null:new n.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},r=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!r)return i;const n=r.levels[0],a=e=>{const t=Math.log(n.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,a(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,a(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,r._)([(0,l.Cb)(u.q)],t.prototype,"updatingProgress",void 0),(0,r._)([(0,l.Cb)(u.V)],t.prototype,"updatingProgressValue",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"fullExtent",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,r._)([(0,l.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"tileInfo",void 0),t=(0,r._)([(0,o.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},31698:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(61445),n=i(92698),a=i(96545),s=i(30374),l=i(68650),o=i(93622),u=i(8693),p=i(66144),c=i(58006),h=(i(15055),i(81653),i(94315),i(77623));let d=class extends((0,s.p)((0,l.IG)((0,p.v)(a.Z.EventedMixin(n.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,u.Pt)(this.get("layer.opacity"),1)*(0,u.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,c.Cb)()],d.prototype,"fullOpacity",null),(0,r._)([(0,c.Cb)()],d.prototype,"layer",void 0),(0,r._)([(0,c.Cb)()],d.prototype,"parent",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],d.prototype,"suspended",null),(0,r._)([(0,c.Cb)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,r._)([(0,c.Cb)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,r._)([(0,c.Cb)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,r._)([(0,c.Cb)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,r._)([(0,c.Cb)()],d.prototype,"visible",null),(0,r._)([(0,c.Cb)()],d.prototype,"view",void 0),d=(0,r._)([(0,h.j)("esri.views.layers.LayerView")],d);const y=d},1842:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(61445),n=i(93622),a=i(92454),s=i(18105),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623));const u=e=>{let t=class extends e{initialize(){this.handles.add((0,s.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||n.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,r._)([(0,l.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,o.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},15633:function(e,t,i){i.d(t,{Z:function(){return p}});var r=i(61445),n=i(22130),a=i(8693),s=i(92454),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623)),u=i(39384);const p=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new n.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});if("tile"!==i.type)throw new n.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type});const r=this.get("view.scale"),l=i.allSublayers.toArray().filter((e=>{const t=0===e.minScale||r<=e.minScale,i=0===e.maxScale||r>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i}));return(0,s.as)(l.map((async i=>{const r=i.createQuery(),n=(0,a.pC)(t)?t.event:null,s=(0,u.k)({renderer:i.renderer,event:n});return r.geometry=this.createFetchPopupFeaturesQueryGeometry(e,s),r.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(r)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return(0,r._)([(0,l.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,o.j)("esri.layers.mixins.TileLayerView")],t),t}},98967:function(e,t,i){i.d(t,{K:function(){return s}});i(80388);var r=i(8693),n=i(61293),a=i(50157);function s(e,t,i,s=new a.Z){let l;if("2d"===i.type)l=t*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(e),s=i.basemapSpatialReference;l=(0,r.pC)(s)&&!s.equals(i.spatialReference)?(0,n.c9)(s)/(0,n.c9)(i.spatialReference):t*a}const o=e.x-l,u=e.y-l,p=e.x+l,c=e.y+l,{spatialReference:h}=i;return s.xmin=Math.min(o,p),s.ymin=Math.min(u,c),s.xmax=Math.max(o,p),s.ymax=Math.max(u,c),s.spatialReference=h,s}new a.Z}}]);
//# sourceMappingURL=369.9331b9f4.js.map