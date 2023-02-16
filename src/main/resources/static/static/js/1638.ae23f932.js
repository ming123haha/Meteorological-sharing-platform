"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[1638],{19134:function(e,t,i){i.d(t,{A:function(){return d}});var r=i(61445),s=i(2323),n=i(92454),a=i(18105),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623)),h=i(73228);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add((0,s.kB)((()=>e.abort()))),await(0,a.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,r._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},55101:function(e,t,i){i.d(t,{r:function(){return p}});var r=i(61445),s=i(22130),n=i(8693),a=i(18105),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623)),h=i(4343),d=i(64293);const p=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,i)}get displayLevelRange(){const e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,i=this.layer.maxScale||e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,i);return this.layer.maxScale&&r.maxLevel++,r}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if((0,n.Wi)(this.fullExtent))return this.addResolvingPromise(Promise.reject(new s.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if((0,n.pC)(e))return this.addResolvingPromise(Promise.reject(e));const t=(0,a.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,d.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new s.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new s.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return t.compatibleWith(e)?null:new s.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},r=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!r)return i;const s=r.levels[0],n=e=>{const t=Math.log(s.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,n(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,n(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,r._)([(0,l.Cb)(h.q)],t.prototype,"updatingProgress",void 0),(0,r._)([(0,l.Cb)(h.V)],t.prototype,"updatingProgressValue",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"fullExtent",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,r._)([(0,l.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"tileInfo",void 0),t=(0,r._)([(0,o.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},81638:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var r=i(61445),s=i(86662),n=i(93622),a=i(8693),l=i(18105),o=i(58006),h=(i(15055),i(81653),i(94315),i(77623)),d=i(74220),p=i(19134),u=i(55101),c=i(31698),y=i(1842);const g=n.Z.getLogger("esri.views.3d.layers.WMTSLayerView3d");let f=class extends((0,y.Z)((0,u.r)((0,p.A)(c.Z)))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(e,t=!1){const i=(0,d.mt)(this.layer);if((0,a.pC)(i)){if(s.Z.isCollection(i)){const r=i.find((i=>{const r=e(i);return(0,a.pC)(r)&&(t?g.error("The selected tile matrix set is not compatible with the view",r):this.addResolvingPromise(Promise.reject(r))),null==r}));return r}const r=e(i);return(0,a.pC)(r)&&(t?g.error("The selected tile matrix set is not compatible with the view",r):this.addResolvingPromise(Promise.reject(r))),i}return null}initialize(){this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)));const e=(0,l.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)||this._getTileInfoCompatibilityError(e.tileInfo,this.view.basemapTerrain.tilingScheme)));(0,a.Wi)(e)||(this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.tileInfo=e.tileInfo,this.layer.fullExtent=e.fullExtent)}));this.addResolvingPromise(e),this.when((()=>this._initialized()))}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add((()=>this.layer?.activeLayer?.styleId),(()=>this.refresh())),this.updatingHandles.add((()=>this.layer?.activeLayer),(e=>{const t=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)||this._getTileInfoCompatibilityError(e.tileInfo,this.view.basemapTerrain.tilingScheme)),!0);(0,a.pC)(t)&&e.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};(0,r._)([(0,o.Cb)({readOnly:!0})],f.prototype,"hasMixedImageFormats",null),(0,r._)([(0,o.Cb)()],f.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],f.prototype,"suspended",void 0),f=(0,r._)([(0,h.j)("esri.views.3d.layers.WMTSLayerView3D")],f);const m=f},31698:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(61445),s=i(92698),n=i(96545),a=i(30374),l=i(68650),o=i(93622),h=i(8693),d=i(66144),p=i(58006),u=(i(15055),i(81653),i(94315),i(77623));let c=class extends((0,a.p)((0,l.IG)((0,d.v)(n.Z.EventedMixin(s.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,p.Cb)()],c.prototype,"fullOpacity",null),(0,r._)([(0,p.Cb)()],c.prototype,"layer",void 0),(0,r._)([(0,p.Cb)()],c.prototype,"parent",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,r._)([(0,p.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,r._)([(0,p.Cb)()],c.prototype,"visible",null),(0,r._)([(0,p.Cb)()],c.prototype,"view",void 0),c=(0,r._)([(0,u.j)("esri.views.layers.LayerView")],c);const y=c},1842:function(e,t,i){i.d(t,{Z:function(){return h}});var r=i(61445),s=i(93622),n=i(92454),a=i(18105),l=i(58006),o=(i(15055),i(81653),i(94315),i(77623));const h=e=>{let t=class extends e{initialize(){this.handles.add((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||s.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,r._)([(0,l.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,o.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=1638.ae23f932.js.map