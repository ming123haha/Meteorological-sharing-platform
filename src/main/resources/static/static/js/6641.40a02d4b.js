"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[6641],{95175:function(e,t,i){i.d(t,{Q:function(){return o}});var n=i(15055),s=i(8693),r=i(88071),a=i(79162);class o{constructor(e=9,t){this.compareMinX=h,this.compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),b.prune(),B.prune(),F.prune()}all(e){this._all(this.data,e)}search(e,t){let i=this.data;const n=this._toBBox;if(_(e,i))for(x.clear();i;){for(let s=0,r=i.children.length;s<r;s++){const r=i.children[s],a=i.leaf?n(r):r;_(e,a)&&(i.leaf?t(r):g(e,a)?this._all(r,t):x.push(r))}i=x.pop()}}collides(e){let t=this.data;const i=this._toBBox;if(!_(e,t))return!1;for(x.clear();t;){for(let n=0,s=t.children.length;n<s;n++){const s=t.children[n],r=t.leaf?i(s):s;if(_(e,r)){if(t.leaf||g(e,r))return!0;x.push(s)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new E([]),this}remove(e){if(!e)return this;let t,i=this.data,r=null,a=0,o=!1;const u=this._toBBox(e);for(B.clear(),F.clear();i||B.length>0;){if(i||(i=(0,s.j0)(B.pop()),r=B.data[B.length-1],a=F.pop()??0,o=!0),i.leaf&&(t=(0,n.cq)(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),B.push(i),this._condense(B),this;o||i.leaf||!g(i,u)?r?(a++,i=r.children[a],o=!1):i=null:(B.push(i),F.push(a),a=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=e;for(b.clear();i;){if(!0===i.leaf)for(const e of i.children)t(e);else b.pushArray(i.children);i=b.pop()??null}}_build(e,t,i,n){const s=i-t+1;let r=this._maxEntries;if(s<=r){const n=new E(e.slice(t,i+1));return u(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const a=new w([]);a.height=n;const o=Math.ceil(s/r),d=o*Math.ceil(Math.sqrt(r));I(e,t,i,d,this.compareMinX);for(let u=t;u<=i;u+=d){const t=Math.min(u+d-1,i);I(e,u,t,o,this.compareMinY);for(let i=u;i<=t;i+=o){const s=Math.min(i+o-1,t);a.children.push(this._build(e,i,s,n-1))}}return u(a,this._toBBox),a}_chooseSubtree(e,t,i,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let r=0,a=t.children.length;r<a;r++){const a=t.children[r],o=f(a),u=m(e,a)-o;u<s?(s=u,n=o<n?o:n,i=a):u===s&&o<n&&(n=o,i=a)}t=i||t.children[0]}return t}_insert(e,t,i){const n=this._toBBox,s=i?e:n(e);B.clear();const r=this._chooseSubtree(s,this.data,t,B);for(r.children.push(e),l(r,s);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;this._adjustParentBBoxes(s,B,t)}_split(e,t){const i=e.data[t],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);const r=this._chooseSplitIndex(i,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(r,i.children.length-r),o=i.leaf?new E(a):new w(a);o.height=i.height,u(i,this._toBBox),u(o,this._toBBox),t?e.data[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this.data=new w([e,t]),this.data.height=e.height+1,u(this.data,this._toBBox)}_chooseSplitIndex(e,t,i){let n,s,r;n=s=1/0;for(let a=t;a<=i-t;a++){const t=d(e,0,a,this._toBBox),o=d(e,a,i,this._toBBox),u=y(t,o),l=f(t)+f(o);u<n?(n=u,r=a,s=l<s?l:s):u===n&&l<s&&(s=l,r=a)}return r}_chooseSplitAxis(e,t,i){const n=e.leaf?this.compareMinX:h,s=e.leaf?this.compareMinY:c;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,s)&&e.children.sort(n)}_allDistMargin(e,t,i,n){e.children.sort(n);const s=this._toBBox,r=d(e,0,t,s),a=d(e,i-t,i,s);let o=p(r)+p(a);for(let u=t;u<i-t;u++){const t=e.children[u];l(r,e.leaf?s(t):t),o+=p(r)}for(let u=i-t-1;u>=t;u--){const t=e.children[u];l(a,e.leaf?s(t):t),o+=p(a)}return o}_adjustParentBBoxes(e,t,i){for(let n=i;n>=0;n--)l(t.data[n],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,n.cq)(r,i,r.length,s.indexHint),1)}else this.clear();else u(i,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function u(e,t){d(e,0,e.children.length,t,e)}function d(e,t,i,n,s){s||(s=new E([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,a=t;a<i;a++)r=e.children[a],l(s,e.leaf?n(r):r);return s}function l(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function I(e,t,i,n,r){const o=[t,i];for(;o.length;){const t=(0,s.j0)(o.pop()),i=(0,s.j0)(o.pop());if(t-i<=n)continue;const u=i+Math.ceil((t-i)/n/2)*n;(0,a.q)(e,u,i,t,r),o.push(i,u,u,t)}}const x=new r.Z,b=new r.Z,B=new r.Z,F=new r.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new n.SO}}class E extends M{constructor(e){super(),this.children=e,this.leaf=!0}}class w extends M{constructor(e){super(),this.children=e,this.leaf=!1}}},75305:function(e,t,i){i.d(t,{H:function(){return l}});var n=i(81653),s=i(95175),r=i(74440);const a=5e4,o={minX:0,minY:0,maxX:0,maxY:0};function u(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]}function d(e,t,i){u(t),e.search(o,i)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,n.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,n)=>{e[t++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),d(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>a&&this._loadIndex()))}}},22474:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(22130),s=i(96545),r=i(93622),a=i(8693),o=i(37740),u=i(74440),d=i(76338),l=i(75305),h=i(11262);class c{constructor(e){this.geometryInfo=e,this._boundsStore=new l.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=h.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,a.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,o.JR)(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}toArray(){return Array.from(this._featuresById.values())}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new n.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let s;if(this._markedIds.add(t),i?(e.displayId=i.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,a.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,a.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,d.$)((0,a.pC)(s)?s:(0,u.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,a.pC)(s)&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_remove(e){return(0,a.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},11262:function(e,t,i){i.d(t,{n:function(){return o}});var n=i(8693),s=i(6884),r=i(38969),a=i(10297);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,n.Wi)(e.centroid)&&(e.centroid=(0,s.Y)(new a.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)}},22428:function(e,t,i){i.d(t,{S:function(){return s},X:function(){return n}});const n=1;function s(e,t){let i=0;for(const n of t){const t=n.attributes?.[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},76641:function(e,t,i){i.r(t),i.d(t,{default:function(){return B}});i(26699);var n=i(22130),s=i(8693),r=i(90421),a=i(54597),o=i(76338),u=i(22428),d=i(22474),l=i(65341),h=i(60427),c=i(65306),f=i(81367),p=i(86622),m=i(98154),y=i(10523);const g=a.Zn,_={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function x(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function b(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}class B{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,s=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:s.hasM,o=null!=e.hasZ?e.hasZ:s.hasZ,f=!e.spatialReference&&!s.spatialReference,x=f?g:e.spatialReference||s.spatialReference,b=f?_:null,B=e.geometryType||s.geometryType,F=!B;let v=e.objectIdField||s.objectIdField,M=e.timeInfo;if(!F&&(f&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!B))throw new n.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new n.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&v!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),v=s.objectIdField),v&&!s.objectIdField){let e=null;r.some((t=>t.name===v&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const u of r){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new n.Z("feature-layer:invalid-field-name","field name is missing",{field:u});if(u.name===v&&(u.type="esriFieldTypeOID"),!m.v.jsonValues.includes(u.type))throw new n.Z("feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u})}const E={};for(const n of r)if("esriFieldTypeOID"!==n.type&&"esriFieldTypeGlobalID"!==n.type){const e=(0,y.os)(n);void 0!==e&&(E[n.name]=e)}if(this._fieldsIndex=new p.Z(r),this._createDefaultAttributes=(0,c.Dm)(E,v),M){if(M.startTimeField){const e=this._fieldsIndex.get(M.startTimeField);e?(M.startTimeField=e.name,e.type="esriFieldTypeDate"):M.startTimeField=null}if(M.endTimeField){const e=this._fieldsIndex.get(M.endTimeField);e?(M.endTimeField=e.name,e.type="esriFieldTypeDate"):M.endTimeField=null}if(M.trackIdField){const e=this._fieldsIndex.get(M.trackIdField);e?M.trackIdField=e.name:(M.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:M}}))}M.startTimeField||M.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:M}}),M=null)}const w={warnings:t,featureErrors:[],layerDefinition:{...I,drawingInfo:(0,c.bU)(B),templates:(0,c.Hq)(E),extent:b,geometryType:B,objectIdField:v,fields:r,hasZ:!!o,hasM:!!a,timeInfo:M},assignedObjectIds:{}};if(this._queryEngine=new h.q({fields:r,geometryType:B,hasM:a,hasZ:o,objectIdField:v,spatialReference:x,featureStore:new d.Z({geometryType:B,hasM:a,hasZ:o}),timeInfo:M,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=u.X,w;const S=(0,u.S)(v,i);return this._nextObjectId=S+1,await(0,l._W)(i,x),this._loadInitialFeatures(w,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,f.b)(t,i),(0,l._W)(e.adds,t),(0,l._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,n,a=null,o=null,u=null;for(const d of e){const e=d.geometry;if(!(0,s.Wi)(e)&&(a||(a=(0,r.Ji)(e)),o||(o=e.spatialReference),null==i&&(i=x(e)),null==n&&(n=b(e)),a&&o&&null!=i&&null!=n))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||n}))&&(u=e.name)}return{geometryType:a,spatialReference:o,objectIdField:u,hasM:n,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:u,spatialReference:d,featureStore:h}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&i!==(0,r.Ji)(o.geometry)){e.featureErrors.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=(0,f.O0)(this._fieldsIndex,t,o.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[u]),(0,s.pC)(o.geometry)&&(o.geometry=(0,l.iV)(o.geometry,o.geometry.spatialReference,d)),c.push(o))}if(h.addMany((0,o.Yn)([],c,i,a,n,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(const e of n)s.deleteResults.push((0,f.d1)(e));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:a,hasZ:u,objectIdField:d,spatialReference:h,featureStore:c}=this._queryEngine,p=[];for(const o of t){if(o.geometry&&n!==(0,r.Ji)(o.geometry)){i.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,f.O0)(this._fieldsIndex,t,o.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[d];e.uidToObjectId[o.uid]=t}(0,s.pC)(o.geometry)&&(o.geometry=(0,l.iV)((0,f.og)(o.geometry,h),o.geometry.spatialReference,h)),p.push(o),i.push((0,f.d1)(o.attributes[d]))}}c.addMany((0,o.Yn)([],p,n,u,a,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:u,spatialReference:d,featureStore:h}=this._queryEngine;for(const c of t){const{attributes:t,geometry:p}=c,m=t&&t[u];if(null==m){e.push((0,f.av)(`Identifier field ${u} missing`));continue}if(!h.has(m)){e.push((0,f.av)(`Feature with object id ${m} missing`));continue}const y=(0,o.EI)(h.getFeature(m),i,a,n);if((0,s.pC)(p)){if(i!==(0,r.Ji)(p)){e.push((0,f.av)("Incorrect geometry type."));continue}y.geometry=(0,l.iV)((0,f.og)(p,d),p.spatialReference,d)}if(t){const i=(0,f.O0)(this._fieldsIndex,y.attributes,t);if(i){e.push(i);continue}}h.add((0,o.XA)(y,i,a,n,u)),e.push((0,f.d1)(m))}}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++}}},65306:function(e,t,i){i.d(t,{Dm:function(){return l},Hq:function(){return h},MS:function(){return c},bU:function(){return o}});var n=i(81653),s=i(86232),r=i(64550),a=i(65902);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let d=1;function l(e,t){if((0,n.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const n=new Function(`\n      return class AttributesClass$${d++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `)();return()=>new n}catch(i){return()=>({[t]:null,...e})}}function h(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},81367:function(e,t,i){i.d(t,{O0:function(){return c},av:function(){return u},b:function(){return g},d1:function(){return l},og:function(){return m}});i(21703);var n=i(8693),s=i(54597),r=i(10523);class a{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class d{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new d(e)}const h=new Set;function c(e,t,i,n=!1,s){h.clear();for(const a in i){const o=e.get(a);if(!o)continue;const d=i[a],l=f(o,d);if(l!==d&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:d,sanitizedValue:l}}),h.add(o.name),o&&(n||o.editable)){const e=(0,r.Qc)(o,l);if(e)return u((0,r.vP)(e,o,l));t[o.name]=l}}for(const r of e.requiredFields)if(!h.has(r.name))return u(`missing required field "${r.name}"`);return null}function f(e,t){let i=t;return"string"==typeof t&&(0,r.H7)(e)?i=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.Pz)(i)}let p;function m(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if((0,n.Wi)(p))throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function y(){return(0,n.Wi)(p)&&(p=await Promise.all([i.e(4174),i.e(4438)]).then(i.bind(i,21813))),p}async function g(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await y()}}}]);
//# sourceMappingURL=6641.40a02d4b.js.map