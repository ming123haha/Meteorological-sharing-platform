"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[565],{95175:function(t,e,i){i.d(e,{Q:function(){return h}});var n=i(15055),s=i(8693),r=i(88071),o=i(79162);class h{constructor(t=9,e){this.compareMinX=u,this.compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),I.prune(),B.prune(),v.prune(),S.prune()}all(t){this._all(this.data,t)}search(t,e){let i=this.data;const n=this._toBBox;if(g(t,i))for(I.clear();i;){for(let s=0,r=i.children.length;s<r;s++){const r=i.children[s],o=i.leaf?n(r):r;g(t,o)&&(i.leaf?e(r):x(t,o)?this._all(r,e):I.push(r))}i=I.pop()}}collides(t){let e=this.data;const i=this._toBBox;if(!g(t,e))return!1;for(I.clear();e;){for(let n=0,s=e.children.length;n<s;n++){const s=e.children[n],r=e.leaf?i(s):s;if(g(t,r)){if(e.leaf||x(t,r))return!0;I.push(s)}}e=I.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new w([]),this}remove(t){if(!t)return this;let e,i=this.data,r=null,o=0,h=!1;const a=this._toBBox(t);for(v.clear(),S.clear();i||v.length>0;){if(i||(i=(0,s.j0)(v.pop()),r=v.data[v.length-1],o=S.pop()??0,h=!0),i.leaf&&(e=(0,n.cq)(i.children,t,i.children.length,i.indexHint),-1!==e))return i.children.splice(e,1),v.push(i),this._condense(v),this;h||i.leaf||!x(i,a)?r?(o++,i=r.children[o],h=!1):i=null:(v.push(i),S.push(o),o=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let i=t;for(B.clear();i;){if(!0===i.leaf)for(const t of i.children)e(t);else B.pushArray(i.children);i=B.pop()??null}}_build(t,e,i,n){const s=i-e+1;let r=this._maxEntries;if(s<=r){const n=new w(t.slice(e,i+1));return a(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const o=new C([]);o.height=n;const h=Math.ceil(s/r),d=h*Math.ceil(Math.sqrt(r));y(t,e,i,d,this.compareMinX);for(let a=e;a<=i;a+=d){const e=Math.min(a+d-1,i);y(t,a,e,h,this.compareMinY);for(let i=a;i<=e;i+=h){const s=Math.min(i+h-1,e);o.children.push(this._build(t,i,s,n-1))}}return a(o,this._toBBox),o}_chooseSubtree(t,e,i,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],h=m(o),a=f(t,o)-h;a<s?(s=a,n=h<n?h:n,i=o):a===s&&h<n&&(n=h,i=o)}e=i||e.children[0]}return e}_insert(t,e,i){const n=this._toBBox,s=i?t:n(t);v.clear();const r=this._chooseSubtree(s,this.data,e,v);for(r.children.push(t),l(r,s);e>=0&&v.data[e].children.length>this._maxEntries;)this._split(v,e),e--;this._adjustParentBBoxes(s,v,e)}_split(t,e){const i=t.data[e],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);const r=this._chooseSplitIndex(i,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=i.children.splice(r,i.children.length-r),h=i.leaf?new w(o):new C(o);h.height=i.height,a(i,this._toBBox),a(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(i,h)}_splitRoot(t,e){this.data=new C([t,e]),this.data.height=t.height+1,a(this.data,this._toBBox)}_chooseSplitIndex(t,e,i){let n,s,r;n=s=1/0;for(let o=e;o<=i-e;o++){const e=d(t,0,o,this._toBBox),h=d(t,o,i,this._toBBox),a=_(e,h),l=m(e)+m(h);a<n?(n=a,r=o,s=l<s?l:s):a===n&&l<s&&(s=l,r=o)}return r}_chooseSplitAxis(t,e,i){const n=t.leaf?this.compareMinX:u,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,s)&&t.children.sort(n)}_allDistMargin(t,e,i,n){t.children.sort(n);const s=this._toBBox,r=d(t,0,e,s),o=d(t,i-e,i,s);let h=p(r)+p(o);for(let a=e;a<i-e;a++){const e=t.children[a];l(r,t.leaf?s(e):e),h+=p(r)}for(let a=i-e-1;a>=e;a--){const e=t.children[a];l(o,t.leaf?s(e):e),h+=p(o)}return h}_adjustParentBBoxes(t,e,i){for(let n=i;n>=0;n--)l(e.data[n],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const i=t.data[e];if(0===i.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,n.cq)(r,i,r.length,s.indexHint),1)}else this.clear();else a(i,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){d(t,0,t.children.length,e,t)}function d(t,e,i,n,s){s||(s=new w([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<i;o++)r=t.children[o],l(s,t.leaf?n(r):r);return s}function l(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function _(t,e){const i=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function x(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function g(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function y(t,e,i,n,r){const h=[e,i];for(;h.length;){const e=(0,s.j0)(h.pop()),i=(0,s.j0)(h.pop());if(e-i<=n)continue;const a=i+Math.ceil((e-i)/n/2)*n;(0,o.q)(t,a,i,e,r),h.push(i,a,a,e)}}const I=new r.Z,B=new r.Z,v=new r.Z,S=new r.Z({deallocator:void 0});class b{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends b{constructor(){super(...arguments),this.height=1,this.indexHint=new n.SO}}class w extends M{constructor(t){super(),this.children=t,this.leaf=!0}}class C extends M{constructor(t){super(),this.children=t,this.leaf=!1}}},37995:function(t,e,i){i.d(e,{SR:function(){return u},Ui:function(){return l}});var n=i(8693),s=i(74440),r=i(43392),o=i(58611),h=i(90421),a=i(87327),d=i(54597);function l(t){return c(t,!0)}function u(t){return c(t,!1)}function c(t,e){if((0,n.Wi)(t))return null;const i=t.spatialReference,s=(0,d.C5)(i),o="toJSON"in t?t.toJSON():t;if(!s)return o;const l=(0,d.sS)(i)?102100:4326,u=a.UZ[l].maxX,c=a.UZ[l].minX;if((0,h.wp)(o))return p(o,u,c);if((0,h.aW)(o))return o.points=o.points.map((t=>p(t,u,c))),o;if((0,h.YX)(o))return m(o,s);if((0,h.oU)(o)||(0,h.l9)(o)){const t=(0,r.$P)(B,o),i={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},n=(0,a.XZ)(i.xmin,c)*(2*u),s=0===n?o:(0,a.Sy)(o,n);return i.xmin+=n,i.xmax+=n,i.xmax>u?y(s,u,e):i.xmin<c?y(s,c,e):s}return o}function m(t,e){if(!e)return t;const i=f(t,e).map((t=>t.extent));return i.length<2?i[0]||t:i.length>2?(t.xmin=e.valid[0],t.xmax=e.valid[1],t):{rings:i.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function p(t,e,i){if(Array.isArray(t)){const n=t[0];if(n>e){const i=(0,a.XZ)(n,e);t[0]=n+i*(-2*e)}else if(n<i){const e=(0,a.XZ)(n,i);t[0]=n+e*(-2*i)}}else{const n=t.x;if(n>e){const i=(0,a.XZ)(n,e);t.x+=i*(-2*e)}else if(n<i){const e=(0,a.XZ)(n,i);t.x+=e*(-2*i)}}return t}function f(t,e){const i=[],{ymin:n,ymax:s,xmin:r,xmax:o}=t,h=t.xmax-t.xmin,[a,d]=e.valid,{x:l,frameId:u}=_(t.xmin,e),{x:c,frameId:m}=_(t.xmax,e),p=l===c&&h>0;if(h>2*d){const t={xmin:r<o?l:c,ymin:n,xmax:d,ymax:s},e={xmin:a,ymin:n,xmax:r<o?c:l,ymax:s},h={xmin:0,ymin:n,xmax:d,ymax:s},p={xmin:a,ymin:n,xmax:0,ymax:s},f=[],_=[];x(t,h)&&f.push(u),x(t,p)&&_.push(u),x(e,h)&&f.push(m),x(e,p)&&_.push(m);for(let i=u+1;i<m;i++)f.push(i),_.push(i);i.push(new I(t,[u]),new I(e,[m]),new I(h,f),new I(p,_))}else l>c||p?i.push(new I({xmin:l,ymin:n,xmax:d,ymax:s},[u]),new I({xmin:a,ymin:n,xmax:c,ymax:s},[m])):i.push(new I({xmin:l,ymin:n,xmax:c,ymax:s},[u]));return i}function _(t,e){const[i,n]=e.valid,s=2*n;let r,o=0;return t>n?(r=Math.ceil(Math.abs(t-n)/s),t-=r*s,o=r):t<i&&(r=Math.ceil(Math.abs(t-i)/s),t+=r*s,o=-r),{x:t,frameId:o}}function x(t,e){const{xmin:i,ymin:n,xmax:s,ymax:r}=e;return g(t,i,n)&&g(t,i,r)&&g(t,s,r)&&g(t,s,n)}function g(t,e,i){return e>=t.xmin&&e<=t.xmax&&i>=t.ymin&&i<=t.ymax}function y(t,e,i=!0){const n=!(0,h.l9)(t);if(n&&(0,o.Zy)(t),i)return(new v).cut(t,e);const s=n?t.rings:t.paths,r=n?4:2,a=s.length,d=-2*e;for(let o=0;o<a;o++){const t=s[o];if(t&&t.length>=r){const e=[];for(const i of t)e.push([i[0]+d,i[1]]);s.push(e)}}return n?t.rings=s:t.paths=s,t}class I{constructor(t,e){this.extent=t,this.frameIds=e}}const B=(0,s.Ue)();class v{constructor(){this.linesIn=[],this.linesOut=[]}cut(t,e){let i;if(this.xCut=e,t.rings)this.closed=!0,i=t.rings,this.minPts=4;else{if(!t.paths)return null;this.closed=!1,i=t.paths,this.minPts=2}for(const s of i){if(!s||s.length<this.minPts)continue;let t=!0;for(const e of s)t?(this.moveTo(e),t=!1):this.lineTo(e);this.closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const s of this.linesIn)s&&s.length>=this.minPts&&i.push(s);const n=-2*this.xCut;for(const s of this.linesOut)if(s&&s.length>=this.minPts){for(const t of s)t[0]+=n;i.push(s)}return this.closed?t.rings=i:t.paths=i,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const e=this._side(t[0]);if(e*this._prevSide==-1){const i=this._intersect(this._prevPt,t);this._lineTo(this.xCut,i,0),this._prevSide=0,this._lineTo(t[0],t[1],e)}else this._lineTo(t[0],t[1],e);this._prevSide=e,this._prevPt=t}close(){const t=this._firstPt,e=this._prevPt;t[0]===e[0]&&t[1]===e[1]||this.lineTo(t),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}_moveTo(t,e,i){this.closed?(this.lineIn.push([i<=0?t:this.xCut,e]),this.lineOut.push([i>=0?t:this.xCut,e])):(i<=0&&this.lineIn.push([t,e]),i>=0&&this.lineOut.push([t,e]))}_lineTo(t,e,i){this.closed?(this._addPolyVertex(this.lineIn,i<=0?t:this.xCut,e),this._addPolyVertex(this.lineOut,i>=0?t:this.xCut,e)):i<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([t,e])):i>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([t,e])):this._prevSide<0?(this.lineIn.push([t,e]),this.lineOut.push([t,e])):this._prevSide>0&&(this.lineOut.push([t,e]),this.lineIn.push([t,e]))}_addPolyVertex(t,e,i){const n=t.length;n>1&&t[n-1][0]===e&&t[n-2][0]===e?t[n-1][1]=i:t.push([e,i])}_checkClosingPt(t){const e=t.length;e>3&&t[0][0]===this.xCut&&t[e-2][0]===this.xCut&&t[1][0]===this.xCut&&(t[0][1]=t[e-2][1],t.pop())}_side(t){return t<this.xCut?-1:t>this.xCut?1:0}_intersect(t,e){const i=(this.xCut-t[0])/(e[0]-t[0]);return t[1]+i*(e[1]-t[1])}_pushLineIn(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}_pushLineOut(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}},75305:function(t,e,i){i.d(e,{H:function(){return l}});var n=i(81653),s=i(95175),r=i(74440);const o=5e4,h={minX:0,minY:0,maxX:0,maxY:0};function a(t){h.minX=t[0],h.minY=t[1],h.maxX=t[2],h.maxY=t[3]}function d(t,e,i){a(e),t.search(h,i)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,n.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((i,n)=>{t[e++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.cS)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),d(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>o&&this._loadIndex()))}}},22474:function(t,e,i){i.d(e,{Z:function(){return c}});var n=i(22130),s=i(96545),r=i(93622),o=i(8693),h=i(37740),a=i(74440),d=i(76338),l=i(75305),u=i(11262);class c{constructor(t){this.geometryInfo=t,this._boundsStore=new l.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=u.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,o.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,i){for(const n of t){const t=this._boundsStore.get(n.objectId);t&&e((0,h.JR)(i,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}toArray(){return Array.from(this._featuresById.values())}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,i)=>{this._markedIds.has(i)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new n.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const i=this._featuresById.get(e);let s;if(this._markedIds.add(e),i?(t.displayId=i.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=(0,d.$)((0,o.pC)(s)?s:(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},11262:function(t,e,i){i.d(e,{n:function(){return h}});var n=i(8693),s=i(6884),r=i(38969),o=i(10297);const h={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new r.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>((0,n.Wi)(t.centroid)&&(t.centroid=(0,s.Y)(new o.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)}},90565:function(t,e,i){i.r(e),i.d(e,{GraphicsSnappingSource:function(){return B}});var n=i(61445),s=i(92698),r=i(15055),o=i(30374),h=i(8693),a=i(92454),d=i(58006),l=(i(81653),i(94315),i(77623)),u=i(91407),c=i(47608),m=i(37995),p=i(56009),f=i(76338),_=i(38969),x=i(22474),g=i(60427),y=i(79397),I=i(68490);let B=class extends((0,o.p)(s.Z)){constructor(t){super(t),this.availability=1,this.sources={multipoint:null,point:null,polygon:null,polyline:null},this.loadedWkids=new Set,this.loadedWkts=new Set,this.pendingAdds=[]}get updating(){return this.updatingHandles.updating}get layer(){return this.layerSource.layer}destroy(){const t=this.pendingAdds;this.pendingAdds.length=0;for(const e of t)e.task.abort();this._mapSources((t=>this._destroySource(t)))}initialize(){this.handles.add([this.layer.on("graphic-update",(t=>this._onGraphicUpdate(t))),this.updatingHandles.addOnCollectionChange((()=>this.layer.graphics),(t=>this._onGraphicsChanged(t)))]),this._addMany(this.layer.graphics.toArray())}async fetchCandidates(t,e){const i=await(0,a.WW)(this._mapSources((i=>i.queryEngine.executeQueryForSnapping({point:t.coordinateHelper.vectorToPoint(t.point).toJSON(),distance:t.distance,types:t.types,query:(0,h.pC)(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},e).then((({candidates:t})=>t))))),n=i.flat().map((e=>(0,I.X)(e,t.coordinateHelper,t.elevationInfo)));return(0,y.lQ)(t.point,n),n}refresh(){}_onGraphicUpdate(t){switch(t.property){case"geometry":case"visible":this._remove(t.graphic),this._addMany([t.graphic])}}_onGraphicsChanged(t){for(const e of t.removed)this._remove(e);this._addMany(t.added)}_addMany(t){const e=[],i=new Map;for(const n of t)(0,h.Wi)(n.geometry)||(this._needsInitializeProjection(n.geometry.spatialReference)?(e.push(n.geometry.spatialReference),i.set(n.uid,n)):this._add(n));this._createPendingAdd(e,i)}_createPendingAdd(t,e){if(!t.length)return;const i=(0,a.vr)((async i=>{await(0,c.iQ)(t.map((t=>({source:t,dest:this.spatialReference}))),{signal:i}),this._markLoadedSpatialReferences(t);for(const[,t]of e)this._add(t)}));this.updatingHandles.addPromise(i.promise);const n={task:i,graphics:e},s=()=>(0,r.e$)(this.pendingAdds,n);i.promise.then(s,s),this.pendingAdds.push(n)}_markLoadedSpatialReferences(t){for(const e of t)null!=e.wkid&&this.loadedWkids.add(e.wkid),null!=e.wkt&&this.loadedWkts.add(e.wkt)}_add(t){if((0,h.Wi)(t.geometry)||!t.visible)return;let e=t.geometry;if("mesh"===e.type)return;"extent"===e.type&&(e=u.Z.fromExtent(e));const i=this._ensureSource(e.type);if((0,h.Wi)(i))return;const n=this._createOptimizedFeature(t.uid,e);(0,h.pC)(n)&&i.featureStore.add(n)}_needsInitializeProjection(t){return(null==t.wkid||!this.loadedWkids.has(t.wkid))&&(null==t.wkt||!this.loadedWkts.has(t.wkt))&&!(0,c.Up)(t,this.spatialReference)}_createOptimizedFeature(t,e){const i=(0,c.iV)((0,m.SR)(e),this.spatialReference);return i?new _.u_((0,f.GH)(i,!1,!1),{[v]:t},null,t):null}_ensureSource(t){const e=this.sources[t];if((0,h.pC)(e))return e;const i=this._createSource(t);return this.sources[t]=i,i}_createSource(t){const e=p.Mk.toJSON(t),i=new x.Z({geometryType:e,hasZ:!1,hasM:!1});return{featureStore:i,queryEngine:new g.q({featureStore:i,fields:[{name:v,type:"esriFieldTypeOID",alias:v}],geometryType:e,hasM:!1,hasZ:!1,objectIdField:v,spatialReference:this.spatialReference,scheduler:(0,h.pC)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:t}}_remove(t){this._mapSources((e=>this._removeFromSource(e,t)));for(const e of this.pendingAdds)e.graphics.delete(t.uid),0===e.graphics.size&&e.task.abort()}_removeFromSource(t,e){const i=e.uid;t.featureStore.has(i)&&t.featureStore.removeById(e.uid)}_destroySource(t){t.queryEngine.destroy(),this.sources[t.type]=null}_mapSources(t){const{point:e,polygon:i,polyline:n,multipoint:s}=this.sources,r=[];return(0,h.pC)(e)&&r.push(t(e)),(0,h.pC)(i)&&r.push(t(i)),(0,h.pC)(n)&&r.push(t(n)),(0,h.pC)(s)&&r.push(t(s)),r}};(0,n._)([(0,d.Cb)({constructOnly:!0})],B.prototype,"spatialReference",void 0),(0,n._)([(0,d.Cb)({constructOnly:!0})],B.prototype,"layerSource",void 0),(0,n._)([(0,d.Cb)({constructOnly:!0})],B.prototype,"view",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],B.prototype,"updating",null),(0,n._)([(0,d.Cb)({readOnly:!0})],B.prototype,"availability",void 0),B=(0,n._)([(0,l.j)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],B);const v="OBJECTID"},68490:function(t,e,i){i.d(e,{X:function(){return r}});var n=i(23007),s=i(83186);function r(t,e,i){switch(t.type){case"edge":return new n.L({coordinateHelper:e,edgeStart:e.pointToVector(t.start),edgeEnd:e.pointToVector(t.end),targetPoint:e.pointToVector(t.target),objectId:t.objectId,elevationInfo:i});case"vertex":return new s.x({coordinateHelper:e,targetPoint:e.pointToVector(t.target),objectId:t.objectId,elevationInfo:i})}}}}]);
//# sourceMappingURL=565.a68209cf.js.map