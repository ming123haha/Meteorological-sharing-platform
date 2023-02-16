"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[4550],{78397:function(e,t,r){r.d(t,{j:function(){return c}});var i=r(61445),s=r(92698),n=r(30374),a=r(58006),o=(r(15055),r(81653),r(94315),r(77623));const h={visible:"visibleSublayers"};let c=class extends((0,n.p)(s.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(h[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,i=[],s=e=>{const{minScale:r,maxScale:n,sublayers:a,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===n||t>=n))&&(a?a.forEach(s):i.unshift(e))};return r?.forEach(s),i}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:i,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:s,layers:t}}};(0,i._)([(0,a.Cb)()],c.prototype,"layer",null),(0,i._)([(0,a.Cb)({readOnly:!0})],c.prototype,"layers",null),(0,i._)([(0,a.Cb)({type:Number})],c.prototype,"scale",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],c.prototype,"version",null),(0,i._)([(0,a.Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,i._)([(0,o.j)("esri.layers.support.ExportWMSImageParameters")],c)},15347:function(e,t,r){r.d(t,{eY:function(){return m}});var i=r(8693),s=r(18037),n=r(57409),a=r(20282),o=r(75393),h=r(63796),c=r(17923),l=r(29964);function u(e){return e&&"render"in e}function d(e){return e&&!("render"in e)}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function g(e,t,r){const i={target:c.No.TEXTURE_2D,pixelFormat:c.VI.RGBA,internalFormat:c.VI.RGBA,dataType:c.Br.UNSIGNED_BYTE,wrapMode:c.e8.CLAMP_TO_EDGE};return t&&r&&(i.width=t,i.height=r),new l.x(e,i)}class m extends o.s{constructor(e=null,t,r=!0){super(),this.requestRenderOnSourceChangedEnabled=r,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,n.c)()}}setTransform(e){const t=(0,s.b)(this.transforms.dvs),[r,i]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,h=n*this.height,c=Math.PI*this.rotation/180;(0,s.c)(t,t,(0,a.f)(r,i)),(0,s.c)(t,t,(0,a.f)(o/2,h/2)),(0,s.r)(t,t,-c),(0,s.c)(t,t,(0,a.f)(-o/2,-h/2)),(0,s.j)(t,t,(0,a.f)(o,h)),(0,s.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){if(!this.stage)return this._texture?.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=g(e,this.sourceWidth,this.sourceHeight):this._texture=g(e));const t=this.source;if(t){if(this._texture.resize(this.sourceWidth,this.sourceHeight),u(t))if(t instanceof h.Z){const e=t.getRenderedRasterPixels();this._texture.setData((0,i.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(p(t));else d(t)&&this._texture.setData(t);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},74952:function(e,t,r){r.d(t,{c:function(){return a}});var i=r(10482),s=r(34150),n=r(92162);class a extends n.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[i.U.bitmap],target:()=>this.children,drawPhase:s.jx.MAP});return[...super.prepareRenderPasses(e),t]}}},63796:function(e,t,r){r.d(t,{Z:function(){return s}});r(48675),r(3462),r(37380),r(1118);var i=r(8693);class s{constructor(e,t,r){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=r}get width(){return(0,i.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,i.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,i.Wi)(t))return;const r=this.filter({pixelBlock:t});if((0,i.Wi)(r.pixelBlock))return;const s=r.pixelBlock.getAsRGBA(),n=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);n.data.set(s),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,i.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},92162:function(e,t,r){r.d(t,{Z:function(){return E}});r(81653);var i=r(8693),s=r(57409),n=r(10482),a=r(32988),o=r(22130),h=r(93622),c=r(18105),l=r(75393),u=(r(48675),r(3462),r(37380),r(1118),r(33920)),d=r(47001),p=r(12686),g=r(76338),m=r(10297),f=r(28143),y=r(15625),x=r(17923);const _=h.Z.getLogger("esri.views.2d.engine.webgl.Mesh2D"),v=e=>{switch(e.BYTES_PER_ELEMENT){case 1:return x.g.UNSIGNED_BYTE;case 2:return x.g.UNSIGNED_SHORT;case 4:return x.g.UNSIGNED_INT;default:throw new o.Z("Cannot get DataType of array")}},w=(e,t,r,i)=>{let s=0;for(let n=1;n<r;n++){const r=e[2*(t+n-1)],i=e[2*(t+n-1)+1];s+=(e[2*(t+n)]-r)*(e[2*(t+n)+1]+i)}return i?s>0:s<0},b=({coords:e,lengths:t},r)=>{const i=[];for(let s=0,n=0;s<t.length;n+=t[s],s+=1){const a=n,o=[];for(;s<t.length-1&&w(e,n+t[s],t[s+1],r);s+=1,n+=t[s])o.push(n+t[s]-a);const h=e.slice(2*a,2*(n+t[s])),c=(0,u.e)(h,o,2);for(const e of c)i.push(e+a)}return i};class R{constructor(e,t,r,i=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=r,this.isMapSpace=i}static fromRect({x:e,y:t,width:r,height:i}){const s=e,n=t,a=s+r,o=n+i;return R.fromScreenExtent({xmin:s,ymin:n,xmax:a,ymax:o})}static fromPath(e){const t=(0,g.ks)(new m.Z,e.path,!1,!1),r=t.coords,i=new Uint32Array(b(t,!0)),s=new Uint32Array(r.length/2);for(let n=0;n<s.length;n++)s[n]=(0,f.UJ)(Math.floor(r[2*n]),Math.floor(r[2*n+1]));return new R({geometry:s},i,x.MX.TRIANGLES)}static fromGeometry(e,t){const r=t.geometry.type;switch(r){case"polygon":return R.fromPolygon(e,t.geometry);case"extent":return R.fromMapExtent(e,t.geometry);default:return _.error(new o.Z("mapview-bad-type",`Unable to create a mesh from type ${r}`,t)),R.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const r=(0,g.Uy)(new m.Z,t,!1,!1),i=r.coords,s=new Uint32Array(b(r,!1)),n=new Uint32Array(i.length/2),a=(0,p.a)(),o=(0,p.a)();for(let h=0;h<n.length;h++)(0,d.a)(a,i[2*h],i[2*h+1]),e.toScreen(o,a),n[h]=(0,f.UJ)(Math.floor(o[0]),Math.floor(o[1]));return new R({geometry:n},s,x.MX.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:r,ymax:i}){const s={geometry:new Uint32Array([(0,f.UJ)(e,r),(0,f.UJ)(t,r),(0,f.UJ)(e,i),(0,f.UJ)(e,i),(0,f.UJ)(t,r),(0,f.UJ)(t,i)])},n=new Uint32Array([0,1,2,3,4,5]);return new R(s,n,x.MX.TRIANGLES)}static fromMapExtent(e,t){const[r,i]=e.toScreen([0,0],[t.xmin,t.ymin]),[s,n]=e.toScreen([0,0],[t.xmax,t.ymax]),a={geometry:new Uint32Array([(0,f.UJ)(r,i),(0,f.UJ)(s,i),(0,f.UJ)(r,n),(0,f.UJ)(r,n),(0,f.UJ)(s,i),(0,f.UJ)(s,n)])},o=new Uint32Array([0,1,2,3,4,5]);return new R(a,o,x.MX.TRIANGLES)}destroy(){(0,i.pC)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)(0,i.pC)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return v(this.indices)}getIndexBuffer(e,t=x.l1.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=y.f.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=x.l1.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(((r,i)=>({...r,[i]:y.f.createVertex(e,t,this.vertices[i])})),{})),this._cache.vertexBuffers}}var S=r(50659);const M=h.Z.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),C=e=>parseFloat(e)/100;class P extends l.s{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=(0,c.YP)((()=>t.version),(()=>this._invalidate())),this.ready()}static fromClipArea(e,t){return new P(e,t)}_destroyGL(){(0,i.pC)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),(0,i.pC)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,r,s){const[n,a]=t.size;if("geometry"!==this._clip.type&&this._lastWidth===n&&this._lastHeight===a||(this._lastWidth=n,this._lastHeight=a,this._destroyGL()),(0,i.Wi)(this._cache.vao)){const i=this._createMesh(t,this._clip),n=i.getIndexBuffer(e),a=i.getVertexBuffers(e);this._cache.mesh=i,this._cache.vao=new S.U(e,r,s,a,n)}return this._cache.vao}_createTransforms(){return{dvs:(0,s.c)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[r,i]=e.size,s="string"==typeof t.left?C(t.left)*r:t.left,n="string"==typeof t.right?C(t.right)*r:t.right,a="string"==typeof t.top?C(t.top)*i:t.top,o="string"==typeof t.bottom?C(t.bottom)*i:t.bottom,h=s,c=a;return{x:h,y:c,width:Math.max(r-n-h,0),height:Math.max(i-o-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return R.fromRect(this._createScreenRect(e,t));case"path":return R.fromPath(t);case"geometry":return R.fromGeometry(e,t);default:return M.error(new o.Z("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),R.fromRect({x:0,y:0,width:1,height:1})}}}var I=r(34150);class E extends a.W{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e)),this._updateClippingInfo()}_createTransforms(){return{dvs:(0,s.c)()}}doRender(e){const t=this.createRenderParams(e),{painter:r,globalOpacity:i,profiler:s,drawPhase:n}=t,a=n===I.jx.LABEL||n===I.jx.HIGHLIGHT?1:i*this.computedOpacity;s.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,a),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,a),s.recordContainerEnd()}renderChildren(e){(0,i.Wi)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const r of this.children)r.beforeRender(e);for(const r of this._renderPasses)try{r.render(e)}catch(t){}for(const r of this.children)r.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[n.U.clip],target:()=>this._clippingInfos,drawPhase:I.jx.MAP|I.jx.LABEL|I.jx.LABEL_ALPHA|I.jx.DEBUG|I.jx.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if((0,i.pC)(this._clippingInfos)&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null),!this.stage)return;const e=this._clips;(0,i.pC)(e)&&e.length&&(this._clippingInfos=e.items.map((e=>P.fromClipArea(this.stage,e)))),this.requestRender()}}},78861:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var i=r(61445),s=r(93622),n=r(92454),a=r(18105),o=r(58006),h=(r(15055),r(81653),r(94315),r(77623)),c=r(50157),l=r(74952),u=r(54572),d=r(30482),p=r(31698),g=r(1842),m=r(97590);const f=s.Z.getLogger("esri.views.2d.layers.WMSLayerView2D");let y=class extends((0,m.Z)((0,g.Z)((0,u.y)(p.Z)))){constructor(){super(...arguments),this.container=new l.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,n.D_)(e)||f.error(e)}))}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this.strategy=new d.Z({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add((0,a.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:i,y:s}=e,{spatialReference:n}=t;let a=null,o=0,h=0;if(r.children.some((e=>{const{width:t,height:r,resolution:l,x:u,y:d}=e,p=u+l*t,g=d-l*r;return i>=u&&i<=p&&s<=d&&s>=g&&(a=new c.Z({xmin:u,ymin:g,xmax:p,ymax:d,spatialReference:n}),o=t,h=r,!0)})),!a)return null;const l=a.width/o,u=Math.round((i-a.xmin)/l),d=Math.round((a.ymax-s)/l);return{extent:a,width:o,height:h,x:u,y:d}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...i})}};(0,i._)([(0,o.Cb)()],y.prototype,"strategy",void 0),(0,i._)([(0,o.Cb)()],y.prototype,"updating",void 0),y=(0,i._)([(0,h.j)("esri.views.2d.layers.WMSLayerView2D")],y);const x=y},30482:function(e,t,r){r.d(t,{Z:function(){return S}});r(26699);var i=r(61445),s=r(92698),n=r(92454),a=r(58006),o=(r(15055),r(81653),r(94315),r(77623)),h=r(50157),c=r(74440),l=r(54597),u=r(86052);const d=Math.PI/180;function p(e){return e*d}function g(e,t){const r=p(t.rotation),i=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[n,a]=t.size;return e[0]=Math.round(a*s+n*i),e[1]=Math.round(a*i+n*s),e}function m(e,t,r,i){const[s,n]=t,[a,o]=i,h=.5*r;return e[0]=s-h*a,e[1]=n-h*o,e[2]=s+h*a,e[3]=n+h*o,e}var f=r(15347),y=r(86491),x=r(93752);const _=(0,c.Ue)(),v=[0,0],w=new x.Z(0,0,0,0),b={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let R=class extends s.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=b.hidpi,this.imageMaxWidth=b.imageMaxWidth,this.imageMaxHeight=b.imageMaxHeight,this.imageRotationSupported=b.imageRotationSupported,this.imageNormalizationSupported=b.imageNormalizationSupported,this.update=(0,n.Ds)((async(e,t)=>{if(!e.stationary||this.destroyed)return null;const r=e.state,i=(0,l.C5)(r.spatialReference),s=this.hidpi?e.pixelRatio:1,n=this.imageNormalizationSupported&&r.worldScreenWidth&&r.worldScreenWidth<r.size[0];n?(v[0]=r.worldScreenWidth,v[1]=r.size[1]):this.imageRotationSupported?(v[0]=r.size[0],v[1]=r.size[1]):g(v,r);const a=Math.floor(v[0]*s)>this.imageMaxWidth||Math.floor(v[1]*s)>this.imageMaxHeight,o=i&&(r.extent.xmin<i.valid[0]||r.extent.xmax>i.valid[1]),h=!this.imageNormalizationSupported&&o,c=!a&&!h,u=this.imageRotationSupported?r.rotation:0;if(c){const e=n?r.paddedViewState.center:r.center;this._imagePromise=this._singleExport(r,v,e,r.resolution,u,s,t)}else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(e=Math.min(r.worldScreenWidth,e)),this._imagePromise=this._tiledExport(r,e,s,t)}return this._imagePromise.then((async e=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=e??[];for(const t of this.container.children)e.includes(t)||t.fadeOut().then((()=>{t.remove()}));for(const t of e)this.container.addChild(t),t.fadeIn()}})).catch((e=>{throw this._imagePromise=null,e}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t),t.invalidateTexture(),t.requestRender()}}async _export(e,t,r,i,s,n){const a=await this.fetchSource(e,Math.floor(t*s),Math.floor(r*s),{rotation:i,pixelRatio:s,signal:n}),o=new f.eY(a,"additive");return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/t,o.rotation=i,o.pixelRatio=s,o}async _singleExport(e,t,r,i,s,n,a){m(_,r,i,t);const o=new h.Z(_[0],_[1],_[2],_[3],e.spatialReference);return[await this._export(o,t[0],t[1],s,n,a)]}_tiledExport(e,t,r,i){const s=u.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),n=new y.Z(s),a=n.getTileCoverage(e);if(!a)return null;const o=[];return a.forEach(((s,a,c,l)=>{w.set(s,a,c,l),n.getTileBounds(_,w);const u=new h.Z(_[0],_[1],_[2],_[3],e.spatialReference);o.push(this._export(u,t,t,0,r,i))})),Promise.all(o)}};(0,i._)([(0,a.Cb)()],R.prototype,"_imagePromise",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"bitmaps",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"container",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"fetchSource",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"hidpi",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"imageMaxWidth",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"imageMaxHeight",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"imageRotationSupported",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"imageNormalizationSupported",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"requestUpdate",void 0),(0,i._)([(0,a.Cb)()],R.prototype,"updating",null),R=(0,i._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],R);const S=R},1842:function(e,t,r){r.d(t,{Z:function(){return c}});var i=r(61445),s=r(93622),n=r(92454),a=r(18105),o=r(58006),h=(r(15055),r(81653),r(94315),r(77623));const c=e=>{let t=class extends e{initialize(){this.handles.add((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||s.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},97590:function(e,t,r){r.d(t,{Z:function(){return c}});var i=r(61445),s=r(22130),n=r(58006),a=(r(15055),r(81653),r(94315),r(77623)),o=r(12799),h=r(78397);const c=e=>{let t=class extends e{initialize(){this.exportImageParameters=new h.j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new s.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const i=this.createFetchPopupFeaturesQuery(e);if(!i)return Promise.resolve([]);const{extent:n,width:a,height:o,x:h,y:c}=i;if(!(n&&a&&o))throw new s.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:a,height:o});const l=t.fetchFeatureInfo(n,a,o,h,c);return Promise.resolve(l?[l]:[])}};return(0,i._)([(0,n.Cb)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,n.Cb)(o.qG)],t.prototype,"timeExtent",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.WMSLayerView")],t),t}}}]);
//# sourceMappingURL=4550.b9816f67.js.map