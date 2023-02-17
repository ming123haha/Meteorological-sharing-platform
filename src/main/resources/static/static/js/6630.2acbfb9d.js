"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[6630],{37995:function(e,t,s){s.d(t,{SR:function(){return u},Ui:function(){return l}});var i=s(8693),n=s(74440),r=s(43392),o=s(58611),h=s(90421),a=s(87327),c=s(54597);function l(e){return d(e,!0)}function u(e){return d(e,!1)}function d(e,t){if((0,i.Wi)(e))return null;const s=e.spatialReference,n=(0,c.C5)(s),o="toJSON"in e?e.toJSON():e;if(!n)return o;const l=(0,c.sS)(s)?102100:4326,u=a.UZ[l].maxX,d=a.UZ[l].minX;if((0,h.wp)(o))return m(o,u,d);if((0,h.aW)(o))return o.points=o.points.map((e=>m(e,u,d))),o;if((0,h.YX)(o))return p(o,n);if((0,h.oU)(o)||(0,h.l9)(o)){const e=(0,r.$P)(w,o),s={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=(0,a.XZ)(s.xmin,d)*(2*u),n=0===i?o:(0,a.Sy)(o,i);return s.xmin+=i,s.xmax+=i,s.xmax>u?g(n,u,t):s.xmin<d?g(n,d,t):n}return o}function p(e,t){if(!t)return e;const s=f(e,t).map((e=>e.extent));return s.length<2?s[0]||e:s.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:s.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function m(e,t,s){if(Array.isArray(e)){const i=e[0];if(i>t){const s=(0,a.XZ)(i,t);e[0]=i+s*(-2*t)}else if(i<s){const t=(0,a.XZ)(i,s);e[0]=i+t*(-2*s)}}else{const i=e.x;if(i>t){const s=(0,a.XZ)(i,t);e.x+=s*(-2*t)}else if(i<s){const t=(0,a.XZ)(i,s);e.x+=t*(-2*s)}}return e}function f(e,t){const s=[],{ymin:i,ymax:n,xmin:r,xmax:o}=e,h=e.xmax-e.xmin,[a,c]=t.valid,{x:l,frameId:u}=_(e.xmin,t),{x:d,frameId:p}=_(e.xmax,t),m=l===d&&h>0;if(h>2*c){const e={xmin:r<o?l:d,ymin:i,xmax:c,ymax:n},t={xmin:a,ymin:i,xmax:r<o?d:l,ymax:n},h={xmin:0,ymin:i,xmax:c,ymax:n},m={xmin:a,ymin:i,xmax:0,ymax:n},f=[],_=[];y(e,h)&&f.push(u),y(e,m)&&_.push(u),y(t,h)&&f.push(p),y(t,m)&&_.push(p);for(let s=u+1;s<p;s++)f.push(s),_.push(s);s.push(new v(e,[u]),new v(t,[p]),new v(h,f),new v(m,_))}else l>d||m?s.push(new v({xmin:l,ymin:i,xmax:c,ymax:n},[u]),new v({xmin:a,ymin:i,xmax:d,ymax:n},[p])):s.push(new v({xmin:l,ymin:i,xmax:d,ymax:n},[u]));return s}function _(e,t){const[s,i]=t.valid,n=2*i;let r,o=0;return e>i?(r=Math.ceil(Math.abs(e-i)/n),e-=r*n,o=r):e<s&&(r=Math.ceil(Math.abs(e-s)/n),e+=r*n,o=-r),{x:e,frameId:o}}function y(e,t){const{xmin:s,ymin:i,xmax:n,ymax:r}=t;return x(e,s,i)&&x(e,s,r)&&x(e,n,r)&&x(e,n,i)}function x(e,t,s){return t>=e.xmin&&t<=e.xmax&&s>=e.ymin&&s<=e.ymax}function g(e,t,s=!0){const i=!(0,h.l9)(e);if(i&&(0,o.Zy)(e),s)return(new C).cut(e,t);const n=i?e.rings:e.paths,r=i?4:2,a=n.length,c=-2*t;for(let o=0;o<a;o++){const e=n[o];if(e&&e.length>=r){const t=[];for(const s of e)t.push([s[0]+c,s[1]]);n.push(t)}}return i?e.rings=n:e.paths=n,e}class v{constructor(e,t){this.extent=e,this.frameIds=t}}const w=(0,n.Ue)();class C{constructor(){this.linesIn=[],this.linesOut=[]}cut(e,t){let s;if(this.xCut=t,e.rings)this.closed=!0,s=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,s=e.paths,this.minPts=2}for(const n of s){if(!n||n.length<this.minPts)continue;let e=!0;for(const t of n)e?(this.moveTo(t),e=!1):this.lineTo(t);this.closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(const n of this.linesIn)n&&n.length>=this.minPts&&s.push(n);const i=-2*this.xCut;for(const n of this.linesOut)if(n&&n.length>=this.minPts){for(const e of n)e[0]+=i;s.push(n)}return this.closed?e.rings=s:e.paths=s,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const s=this._intersect(this._prevPt,e);this._lineTo(this.xCut,s,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}_moveTo(e,t,s){this.closed?(this.lineIn.push([s<=0?e:this.xCut,t]),this.lineOut.push([s>=0?e:this.xCut,t])):(s<=0&&this.lineIn.push([e,t]),s>=0&&this.lineOut.push([e,t]))}_lineTo(e,t,s){this.closed?(this._addPolyVertex(this.lineIn,s<=0?e:this.xCut,t),this._addPolyVertex(this.lineOut,s>=0?e:this.xCut,t)):s<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([e,t])):s>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([e,t])):this._prevSide<0?(this.lineIn.push([e,t]),this.lineOut.push([e,t])):this._prevSide>0&&(this.lineOut.push([e,t]),this.lineIn.push([e,t]))}_addPolyVertex(e,t,s){const i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=s:e.push([t,s])}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this.xCut&&e[t-2][0]===this.xCut&&e[1][0]===this.xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this.xCut?-1:e>this.xCut?1:0}_intersect(e,t){const s=(this.xCut-e[0])/(t[0]-e[0]);return e[1]+s*(t[1]-e[1])}_pushLineIn(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}_pushLineOut(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}},48791:function(e,t,s){s.d(t,{L:function(){return d}});var i=s(61445),n=s(92698),r=s(8693),o=s(58006),h=(s(15055),s(81653),s(94315),s(77623)),a=s(91407),c=s(47608),l=s(74440),u=s(37995);let d=class extends n.Z{constructor(e){super(e)}get bounds(){const e=this.coords;return(0,r.Wi)(e)?null:(0,l.oJ)(e.extent)}get coords(){const e=(0,r.Wg)(this.element.georeference)?.coords;return(0,c.dz)(e,this.spatialReference).geometry}get normalizedCoords(){return a.Z.fromJSON((0,u.Ui)(this.coords))}get normalizedBounds(){return(0,r.pC)(this.normalizedCoords)?(0,l.oJ)(this.normalizedCoords.extent):null}};(0,i._)([(0,o.Cb)()],d.prototype,"spatialReference",void 0),(0,i._)([(0,o.Cb)()],d.prototype,"element",void 0),(0,i._)([(0,o.Cb)()],d.prototype,"bounds",null),(0,i._)([(0,o.Cb)()],d.prototype,"coords",null),(0,i._)([(0,o.Cb)()],d.prototype,"normalizedCoords",null),(0,i._)([(0,o.Cb)()],d.prototype,"normalizedBounds",null),d=(0,i._)([(0,h.j)("esri.layers.support.media.MediaElementView")],d)},92162:function(e,t,s){s.d(t,{Z:function(){return U}});s(81653);var i=s(8693),n=s(57409),r=s(10482),o=s(32988),h=s(22130),a=s(93622),c=s(18105),l=s(75393),u=(s(48675),s(3462),s(37380),s(1118),s(33920)),d=s(47001),p=s(12686),m=s(76338),f=s(10297),_=s(28143),y=s(15625),x=s(17923);const g=a.Z.getLogger("esri.views.2d.engine.webgl.Mesh2D"),v=e=>{switch(e.BYTES_PER_ELEMENT){case 1:return x.g.UNSIGNED_BYTE;case 2:return x.g.UNSIGNED_SHORT;case 4:return x.g.UNSIGNED_INT;default:throw new h.Z("Cannot get DataType of array")}},w=(e,t,s,i)=>{let n=0;for(let r=1;r<s;r++){const s=e[2*(t+r-1)],i=e[2*(t+r-1)+1];n+=(e[2*(t+r)]-s)*(e[2*(t+r)+1]+i)}return i?n>0:n<0},C=({coords:e,lengths:t},s)=>{const i=[];for(let n=0,r=0;n<t.length;r+=t[n],n+=1){const o=r,h=[];for(;n<t.length-1&&w(e,r+t[n],t[n+1],s);n+=1,r+=t[n])h.push(r+t[n]-o);const a=e.slice(2*o,2*(r+t[n])),c=(0,u.e)(a,h,2);for(const e of c)i.push(e+o)}return i};class I{constructor(e,t,s,i=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=s,this.isMapSpace=i}static fromRect({x:e,y:t,width:s,height:i}){const n=e,r=t,o=n+s,h=r+i;return I.fromScreenExtent({xmin:n,ymin:r,xmax:o,ymax:h})}static fromPath(e){const t=(0,m.ks)(new f.Z,e.path,!1,!1),s=t.coords,i=new Uint32Array(C(t,!0)),n=new Uint32Array(s.length/2);for(let r=0;r<n.length;r++)n[r]=(0,_.UJ)(Math.floor(s[2*r]),Math.floor(s[2*r+1]));return new I({geometry:n},i,x.MX.TRIANGLES)}static fromGeometry(e,t){const s=t.geometry.type;switch(s){case"polygon":return I.fromPolygon(e,t.geometry);case"extent":return I.fromMapExtent(e,t.geometry);default:return g.error(new h.Z("mapview-bad-type",`Unable to create a mesh from type ${s}`,t)),I.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const s=(0,m.Uy)(new f.Z,t,!1,!1),i=s.coords,n=new Uint32Array(C(s,!1)),r=new Uint32Array(i.length/2),o=(0,p.a)(),h=(0,p.a)();for(let a=0;a<r.length;a++)(0,d.a)(o,i[2*a],i[2*a+1]),e.toScreen(h,o),r[a]=(0,_.UJ)(Math.floor(h[0]),Math.floor(h[1]));return new I({geometry:r},n,x.MX.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:s,ymax:i}){const n={geometry:new Uint32Array([(0,_.UJ)(e,s),(0,_.UJ)(t,s),(0,_.UJ)(e,i),(0,_.UJ)(e,i),(0,_.UJ)(t,s),(0,_.UJ)(t,i)])},r=new Uint32Array([0,1,2,3,4,5]);return new I(n,r,x.MX.TRIANGLES)}static fromMapExtent(e,t){const[s,i]=e.toScreen([0,0],[t.xmin,t.ymin]),[n,r]=e.toScreen([0,0],[t.xmax,t.ymax]),o={geometry:new Uint32Array([(0,_.UJ)(s,i),(0,_.UJ)(n,i),(0,_.UJ)(s,r),(0,_.UJ)(s,r),(0,_.UJ)(n,i),(0,_.UJ)(n,r)])},h=new Uint32Array([0,1,2,3,4,5]);return new I(o,h,x.MX.TRIANGLES)}destroy(){(0,i.pC)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)(0,i.pC)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return v(this.indices)}getIndexBuffer(e,t=x.l1.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=y.f.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=x.l1.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(((s,i)=>({...s,[i]:y.f.createVertex(e,t,this.vertices[i])})),{})),this._cache.vertexBuffers}}var R=s(50659);const T=a.Z.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),M=e=>parseFloat(e)/100;class S extends l.s{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=(0,c.YP)((()=>t.version),(()=>this._invalidate())),this.ready()}static fromClipArea(e,t){return new S(e,t)}_destroyGL(){(0,i.pC)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),(0,i.pC)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,s,n){const[r,o]=t.size;if("geometry"!==this._clip.type&&this._lastWidth===r&&this._lastHeight===o||(this._lastWidth=r,this._lastHeight=o,this._destroyGL()),(0,i.Wi)(this._cache.vao)){const i=this._createMesh(t,this._clip),r=i.getIndexBuffer(e),o=i.getVertexBuffers(e);this._cache.mesh=i,this._cache.vao=new R.U(e,s,n,o,r)}return this._cache.vao}_createTransforms(){return{dvs:(0,n.c)()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[s,i]=e.size,n="string"==typeof t.left?M(t.left)*s:t.left,r="string"==typeof t.right?M(t.right)*s:t.right,o="string"==typeof t.top?M(t.top)*i:t.top,h="string"==typeof t.bottom?M(t.bottom)*i:t.bottom,a=n,c=o;return{x:a,y:c,width:Math.max(s-r-a,0),height:Math.max(i-h-c,0)}}_createMesh(e,t){switch(t.type){case"rect":return I.fromRect(this._createScreenRect(e,t));case"path":return I.fromPath(t);case"geometry":return I.fromGeometry(e,t);default:return T.error(new h.Z("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),I.fromRect({x:0,y:0,width:1,height:1})}}}var P=s(34150);class U extends o.W{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e)),this._updateClippingInfo()}_createTransforms(){return{dvs:(0,n.c)()}}doRender(e){const t=this.createRenderParams(e),{painter:s,globalOpacity:i,profiler:n,drawPhase:r}=t,o=r===P.jx.LABEL||r===P.jx.HIGHLIGHT?1:i*this.computedOpacity;n.recordContainerStart(this.name),s.beforeRenderLayer(t,this._clippingInfos?255:0,o),this.updateTransforms(e.state),this.renderChildren(t),s.compositeLayer(t,o),n.recordContainerEnd()}renderChildren(e){(0,i.Wi)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const s of this.children)s.beforeRender(e);for(const s of this._renderPasses)try{s.render(e)}catch(t){}for(const s of this.children)s.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[r.U.clip],target:()=>this._clippingInfos,drawPhase:P.jx.MAP|P.jx.LABEL|P.jx.LABEL_ALPHA|P.jx.DEBUG|P.jx.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if((0,i.pC)(this._clippingInfos)&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null),!this.stage)return;const e=this._clips;(0,i.pC)(e)&&e.length&&(this._clippingInfos=e.items.map((e=>S.fromClipArea(this.stage,e)))),this.requestRender()}}},26630:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var i=s(61445),n=(s(80388),s(86662)),r=s(93622),o=s(67322),h=s(8693),a=s(92454),c=s(18105),l=s(58006),u=(s(15055),s(81653),s(94315),s(77623)),d=s(74440),p=s(32637),m=s(48791),f=(s(14355),s(86491),s(93752),s(93267)),_=s(45506),y=(s(48675),s(3462),s(37380),s(1118),s(22130)),x=s(48674),g=s(67752),v=s(75393),w=s(15625),C=s(17923),I=s(29964),R=s(50659),T=s(79235);class M extends v.s{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,c.YP)((()=>this.elementView.element.opacity),(e=>this.opacity=e),c.nn),(0,c.YP)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),c.nn),(0,c.gx)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&(0,h.pC)(e.content)&&this._handles.push((0,x.on)(e.content,"play",(()=>this.requestRender())))}),c.nn)),e.element.load().catch((t=>{r.Z.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new y.Z("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}destroy(){this._handles.forEach((e=>e.remove())),this.texture?.dispose(),this.texture=null}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if((0,h.pC)(s)){const e=s instanceof HTMLImageElement,i=s instanceof HTMLVideoElement,n=e?s.naturalWidth:i?s.videoWidth:s.width,r=e?s.naturalHeight:i?s.videoHeight:s.height;this.texture?i&&!s.paused&&(this.texture.setData(s),this.requestRender(),((0,T.Z)(t.gl)||(0,g.wt)(n)&&(0,g.wt)(r))&&this.texture.generateMipmap()):(this.texture=new I.x(t,{pixelFormat:C.VI.RGBA,dataType:C.Br.UNSIGNED_BYTE,samplingMode:C.cw.LINEAR,wrapMode:C.e8.CLAMP_TO_EDGE,width:n,height:r},s),((0,T.Z)(t.gl)||(0,g.wt)(n)&&(0,g.wt)(r))&&this.texture.generateMipmap(),i&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if((0,h.Wi)(s))return;const[i,n,r,o]=s.rings[0],a=this._vertices,{x:c,y:l}=e,u=0!==t;u?a.set([n[0]-c,n[1]-l,i[0]-c,i[1]-l,r[0]-c,r[1]-l,o[0]-c,o[1]-l,o[0]-c,o[1]-l,n[0]+t-c,n[1]-l,n[0]+t-c,n[1]-l,i[0]+t-c,i[1]-l,r[0]+t-c,r[1]-l,o[0]+t-c,o[1]-l]):a.set([n[0]-c,n[1]-l,i[0]-c,i[1]-l,r[0]-c,r[1]-l,o[0]-c,o[1]-l]),this.isWrapAround=u}getVAO(e,t,s){if((0,h.Wi)(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=w.f.createVertex(e,C.l1.DYNAMIC_DRAW,i);const n=w.f.createVertex(e,C.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new R.U(e,s,t,{geometry:this._geometryVbo,tex:n})}return this._vao}}var S=s(30524),P=s(18037),U=s(57409),A=s(20282),E=s(64680),b=s(33482),L=s(54597),O=s(25063),B=s(10482),V=s(34150),Z=s(92162);class D extends Z.Z{constructor(){super(...arguments),this._localOrigin=(0,S.vW)(0,0),this._viewStateId=-1,this._dvsMat3=(0,U.c)(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[B.U.overlay],target:()=>this.children,drawPhase:V.jx.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:n,resolution:r,rotation:o,viewpoint:h,displayMat3:a}=t;if(this._viewStateId===s)return;const c=Math.PI/180*o,l=n*i[0],u=n*i[1],{x:d,y:p}=h.targetGeometry,m=(0,b.or)(d,t.spatialReference);this._localOrigin.x=m,this._localOrigin.y=p;const f=r*l,_=r*u,y=(0,P.b)(this._dvsMat3);(0,P.m)(y,y,a),(0,P.c)(y,y,(0,A.f)(l/2,u/2)),(0,P.d)(y,y,(0,E.f)(l/f,-u/_,1)),(0,P.r)(y,y,-c),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:n,worldScreenWidth:r,size:o,viewpoint:a}=s,c=this._localOrigin;let l=0;if(n.isWrappable){const e=o[0],u=o[1],d=180/Math.PI*i,p=Math.abs(Math.cos(d)),m=Math.abs(Math.sin(d)),f=Math.round(e*p+u*m),[_,y]=(0,L.C5)(n).valid,x=(0,O.ut)(n),{x:g,y:v}=a.targetGeometry,w=[g,v],C=[0,0];s.toScreen(C,w);const I=[0,0];let R;R=f>r?.5*r:.5*f;const T=Math.floor((g+.5*x)/x),M=_+T*x,S=y+T*x,P=[C[0]+R,0];s.toMap(I,P),I[0]>S&&(l=x),P[0]=C[0]-R,s.toMap(I,P),I[0]<M&&(l=-x);for(const s of t){const e=s.elementView.bounds;if((0,h.Wi)(e))continue;const[t,,i]=e;t<_&&i>_?s.updateDrawCoords(c,x):i>y&&t<y?s.updateDrawCoords(c,-x):s.updateDrawCoords(c,l)}}else for(const h of t)h.updateDrawCoords(c,l)}}var W=s(54572),q=s(31698),G=s(50157);let J=class extends((0,W.y)(q.Z)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new n.Z}attach(){this.handles.add((0,c.on)((()=>this.layer.source),"refresh",(()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate()}))),this._overlayContainer=new D,this.container.addChild(this._overlayContainer),this._fetchQueue=new f.Z({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new _.Z({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e)}async hitTest(e,t){const s=[],i=[e.x,e.y];for(const n of this.elements){const t=(0,h.Wg)(n.georeference)?.coords;(0,h.pC)(t)&&(0,p.wP)(t.rings,i)&&s.push({type:"media",element:n,layer:this.layer,mapPoint:e})}return s.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){}_acquireTile(e){const t=new H(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[s,i]=e.setElements(t);this._acquireElements(e,s),this._releaseElements(e,i),this.requestUpdate()}),(e=>{(0,a.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._releaseElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const s=this.layer.source;if((0,h.Wi)(s))return[];this.view.featuresTilingScheme.getTileBounds(N,e,!0);const i=new G.Z({xmin:N[0],ymin:N[1],xmax:N[2],ymax:N[3],spatialReference:this.view.spatialReference});return s.queryElements(i,t)}_acquireElements(e,t){const s=this.layer.source,i=this.view.spatialReference;if(!(0,h.Wi)(s))for(const n of t)(0,o.s1)(this._elementReferences,n.uid,(()=>{const e=new m.L({element:n,spatialReference:i}),t=new M(e);return this._overlayContainer.addChild(t),this.elements.add(n),{tiles:new Set,projectedElement:e,overlay:t}})).tiles.add(e)}_releaseElements(e,t){for(const s of t){const t=this._elementReferences.get(s.uid);t.tiles.delete(e),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s))}}};(0,i._)([(0,l.Cb)()],J.prototype,"_fetchQueue",void 0),(0,i._)([(0,l.Cb)()],J.prototype,"layer",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],J.prototype,"elements",void 0),J=(0,i._)([(0,u.j)("esri.views.2d.layers.MediaLayerView2D")],J);const N=(0,d.Ue)();class H{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}}const j=J}}]);
//# sourceMappingURL=6630.2acbfb9d.js.map