"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[6738],{36970:function(e,t,r){r.d(t,{z:function(){return S}});r(48675),r(3462),r(37380),r(1118),r(26699);var i=r(61445),n=(r(80388),r(92698)),s=r(15055),o=r(93622),a=r(67752),l=r(8693),u=r(18105),c=r(61293),d=r(58006),p=(r(81653),r(94315),r(77623)),y=r(65554),h=r(64441),f=r(47608),g=r(37740),E=r(74440),_=r(15084),m=r(31957),b=r(42531),w=r(9048),C=r(87429);const x=o.Z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let S=class extends n.Z{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){(0,u.N1)((()=>(0,l.Wg)(this.viewFilter)?.geometry||(0,l.pC)(this.layerFilter))).then((()=>this.loadAsyncModule(Promise.all([r.e(4174),r.e(5341)]).then(r.bind(r,85341)).then((e=>{this.destroyed||(this._geometryEngine=e,this.applyFilters())})))))}get sortedObjectIds(){if((0,l.Wi)(this.viewFilter)||(0,l.Wi)(this.viewFilter.objectIds))return null;const e=new Float64Array(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=(0,l.pC)(this.viewFilter)?this.viewFilter.where:null;if((0,l.Wi)(e)||!e)return null;try{return h.WhereClause.create(e,this.layerFieldsIndex)}catch(t){x.error(`Failed to parse filter where clause: ${t}`)}return null}addFilters(e,t,r,i){const n=this.sortedObjectIds;(0,l.pC)(n)&&e.push((e=>(0,w.Yb)(n,!0,e))),this.addSqlFilter(e,this.parsedWhereClause);const s=this._layerMaskGeometries,o=this._geometryEngine;if((0,l.pC)(s)&&(0,l.pC)(this.layerFilter)&&(0,l.pC)(o)){const n=this.layerFilter.spatialRelationship;e.push(((e,a)=>D(o,e,a,i,t,r,s,n)))}const a=this._viewMaskGeometries;if((0,l.pC)(a)&&(0,l.pC)(this.viewFilter)&&(0,l.pC)(o)){const n=this.viewFilter.spatialRelationship;e.push(((e,s)=>D(o,e,s,i,t,r,a,n)))}}isMBSGeometryVisible(e,t,r){const i=this._layerMaskGeometries,n=this._geometryEngine;if((0,l.pC)(i)&&(0,l.pC)(this.layerFilter)&&(0,l.pC)(n)){const s=this.layerFilter.spatialRelationship,o=i[0].spatialReference||t;return(0,f.st)(e,r,j,o)?R(n,j,i,o,s):(x.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=this._viewMaskGeometries;if((0,l.pC)(s)&&(0,l.pC)(this.viewFilter)&&(0,l.pC)(n)){const i=this.viewFilter.spatialRelationship,o=s[0].spatialReference||t;return(0,f.st)(e,r,j,o)?R(n,j,s,o,i):(x.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=this._viewMaskGeometries,t=this._layerMaskGeometries;return(0,l.Wi)(e)||(0,l.Wi)(t)?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return(0,l.Wi)(e)||(0,l.Wi)(this._geometryEngine)?null:O(this._geometryEngine,e.geometry,e.spatialRelationship)}get _viewMaskGeometries(){if((0,l.Wi)(this.viewFilter)||(0,l.Wi)(this._geometryEngine))return null;const{geometry:e}=this.viewFilter;if((0,l.Wi)(e))return null;const{distance:t,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,n="mesh"===e.type?e.extent:e;if((0,l.Wi)(t)||0===t)return O(this._geometryEngine,n,i);const s=r||(0,c.qE)(n.spatialReference);if(n.spatialReference.isWGS84){const e=this._geometryEngine.geodesicBuffer(n,t,s);return O(this._geometryEngine,e,i)}const o=(0,m.iV)(n,C.Z.WGS84);if((0,l.pC)(o)){const e=(0,m.iV)(this._geometryEngine.geodesicBuffer(o,t,s),n.spatialReference);return O(this._geometryEngine,e,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,f.zD)().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let a=null;try{a=(0,f.iV)(n,C.Z.WGS84)}catch(u){}if(a)try{a=(0,f.iV)(this._geometryEngine.geodesicBuffer(a,t,s),n.spatialReference)}catch(u){a=null}return a||x.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),O(this._geometryEngine,a,i)}static checkSupport(e){return!(0,l.Wi)(e)&&(e.timeExtent?(x.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!I(e.spatialRelationship)||(x.warn(`Filters with spatialRelationship other than ${F.join(", ")} are not supported for mesh scene layers`),!1))}};(0,i._)([(0,d.Cb)()],S.prototype,"layerFilter",void 0),(0,i._)([(0,d.Cb)({type:b.Z})],S.prototype,"viewFilter",void 0),(0,i._)([(0,d.Cb)()],S.prototype,"layerFieldsIndex",void 0),(0,i._)([(0,d.Cb)()],S.prototype,"loadAsyncModule",void 0),(0,i._)([(0,d.Cb)()],S.prototype,"applyFilters",void 0),(0,i._)([(0,d.Cb)()],S.prototype,"addSqlFilter",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],S.prototype,"sortedObjectIds",null),(0,i._)([(0,d.Cb)({readOnly:!0})],S.prototype,"parsedWhereClause",null),(0,i._)([(0,d.Cb)({readOnly:!0})],S.prototype,"parsedGeometry",null),(0,i._)([(0,d.Cb)({readOnly:!0})],S.prototype,"_layerMaskGeometries",null),(0,i._)([(0,d.Cb)({readOnly:!0})],S.prototype,"_viewMaskGeometries",null),(0,i._)([(0,d.Cb)()],S.prototype,"_projectionEngineLoaded",void 0),(0,i._)([(0,d.Cb)()],S.prototype,"_geometryEngine",void 0),S=(0,i._)([(0,p.j)("esri.views.3d.layers.i3s.I3SMeshViewFilter")],S);const F=(e=>e)(["contains","intersects","disjoint"]);function I(e){return null!=e&&F.includes(e)}var v;function O(e,t,r){if((0,l.Wi)(t))return null;if("disjoint"===r&&"polygon"===t.type){const r=new Array(t.rings.length);for(let e=0;e<t.rings.length;++e){const i=(0,E.al)(1/0,1/0,-1/0,-1/0);(0,E.Wi)(i,t.rings[e]),r[e]={type:"polygon",rings:[t.rings[e]],spatialReference:t.spatialReference,aabr:i}}r.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const i=new Set,n=new s.SO;for(let t=0;t<r.length;++t){const o=r[t];for(let e=t+1;e<r.length;++e){const t=r[e];if(t.aabr[0]>=o.aabr[2])break;i.add(t)}i.forEach((t=>{if(o!==t)if(t.aabr[2]<=o.aabr[0])i.delete(t);else if(e.intersects(o,t)){o.rings=o.rings.concat(t.rings),(0,E.jn)(o.aabr,t.aabr,o.aabr),delete o._geVersion,i.delete(t);const e=(0,s.cq)(r,t,r.length,n);r.splice(e,1)}})),i.add(o)}for(const e of r)delete e.aabr;return r}return[t]}function R(e,t,r,i,n){const s=T(e,t,i);return r.every((t=>M(e,t,s,n)!==v.DISCARD))}function D(e,t,r,i,n,s,o,a){const l=o[0].spatialReference||n.spatialReference;if(!(0,f.st)(r.node.mbs,s,j,l))return void x.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=T(e,j,l),c=Q(a,n,l,i,r.objectHandle);for(const d of o){if(0===t.length)return;switch(M(e,d,u,a)){case v.DISCARD:return void(t.length=0);case v.KEEP:continue}(0,w.hv)(t,r.featureIds,(t=>A(e,d,t,c)))}}!function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"}(v||(v={}));const j=[0,0,0,0];function Q(e,t,r,i,n){const s=t.renderSpatialReference,o=new Map,a={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,c;switch(e){case"intersects":u=(e,t,r)=>e.intersects(t,r)?v.KEEP:v.TEST,c=k;break;case"contains":u=(e,t,r)=>e.contains(t,r)?v.TEST:v.DISCARD,c=k;break;default:u=(e,t,r)=>e.disjoint(t,r)?v.TEST:v.DISCARD,c=N}return{collection:i,object:n,type:e,maskSR:r,renderSR:s,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:c}}function T(e,t,r){const i={x:t[0],y:t[1],hasZ:!1,hasM:!1,type:"point",spatialReference:r},n=!r.isWGS84&&!r.isWebMercator,s=Number.isNaN(t[3])?0:(0,a.uZ)(t[3],0,2*_.sv.radius),o=n?e.buffer(i,s,1):e.geodesicBuffer(i,s,1);return o.type="polygon",o}function M(e,t,r,i){switch(i){case"intersects":case"contains":return k(e,t,r);case"disjoint":return N(e,t,r)}}function k(e,t,r){return e.intersects(t,r)?e.contains(t,r)?v.KEEP:v.TEST:v.DISCARD}function N(e,t,r){return e.intersects(t,r)?e.contains(t,r)?v.DISCARD:v.TEST:v.KEEP}const W=2**-32;function A(e,t,r,i){const{collection:n,object:s,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=i;let c=u.get(r);if(!c){const e=n.getObjectTransform(s);n.getComponentAabb(s,r,G);const t=[[G[0],G[1],0],[G[0],G[4],0],[G[3],G[4],0],[G[3],G[1],0]];for(let r=0;r<4;++r)(0,y.t)(t[r],t[r],e.rotationScale),(0,y.a)(t[r],t[r],e.position),(0,f.SH)(t[r],o,t[r],a);c={rings:[t],hasZ:!1,hasM:!1,type:"polygon",spatialReference:a},c.rings[0][4]=c.rings[0][0],u.set(r,c)}switch(l(e,t,c)){case v.DISCARD:return!1;case v.KEEP:return!0}const{triangle:d,triangleTest:p,positions:h}=i,g=d.rings[0][0],E=d.rings[0][1],_=d.rings[0][2],m=n.getObjectTransform(s);n.getComponentPositions(s,r,h);const{indices:b,data:w,stride:C,startIndex:x,endIndex:S}=h;for(let F=x;F<S;F+=3){const r=C*b[F+0],i=C*b[F+1],n=C*b[F+2];(0,y.s)(g,w[r+0],w[r+1],w[r+2]),(0,y.s)(E,w[i+0],w[i+1],w[i+2]),(0,y.s)(_,w[n+0],w[n+1],w[n+2]),(0,y.t)(g,g,m.rotationScale),(0,y.t)(E,E,m.rotationScale),(0,y.t)(_,_,m.rotationScale),(0,y.a)(g,g,m.position),(0,y.a)(E,E,m.position),(0,y.a)(_,_,m.position),(0,f.SH)(g,o,g,a),(0,f.SH)(E,o,E,a),(0,f.SH)(_,o,_,a);const s=E[0]-g[0],l=E[1]-g[1],u=_[0]-g[0],c=_[1]-g[1];if(!(Math.abs(s*c-l*u)<W))switch(delete d._geVersion,p(e,t,d)){case v.DISCARD:return!1;case v.KEEP:return!0}}return"intersects"!==i.type}const G=(0,g.Ue)()},72244:function(e,t,r){r.d(t,{u:function(){return f}});var i=r(61445),n=r(92698),s=r(22130),o=r(50816),a=r(8693),l=r(58006),u=(r(15055),r(81653),r(94315),r(77623)),c=r(50157),d=r(60427),p=r(48169),y=r(21755);const h=d.q;let f=class extends n.Z{constructor(e){super(e),this._dataQueryEngineInstance=null,this._handles=new o.Z}get defaultQueryJSON(){return new y.Z({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this._ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",(()=>this.spatialIndex.events.emit("changed"))))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:i}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:c.Z.fromJSON(i)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new s.Z("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new s.Z("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const i=await this.dataQueryEngine.executeQuery(r,t),n=p["default"].fromJSON(i);return n.features.forEach((e=>{e.geometry=null})),n}_ensureQueryJSON(e){return(0,a.Wi)(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||"OBJECTID",t="esriGeometryPolygon",r=this.layer.fields.map((e=>e.toJSON())),i=this.layerView.view.resourceController.scheduler,n=this.spatialReference.toJSON(),s=this.priority,o=this.spatialIndex;return this._dataQueryEngineInstance=new h({hasZ:!0,hasM:!1,geometryType:t,fields:r,timeInfo:null,spatialReference:n,objectIdField:e,featureStore:o,scheduler:i,priority:s}),this._dataQueryEngineInstance}};(0,i._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"layerView",void 0),(0,i._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"priority",void 0),(0,i._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"spatialIndex",void 0),(0,i._)([(0,l.Cb)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],f.prototype,"spatialReference",void 0),(0,i._)([(0,l.Cb)({readOnly:!0,aliasOf:"layerView.i3slayer"})],f.prototype,"layer",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],f.prototype,"defaultQueryJSON",null),f=(0,i._)([(0,u.j)("esri.views.3d.layers.i3s.I3SQueryEngine")],f)},16439:function(e,t,r){r.d(t,{u:function(){return l}});var i=r(8693),n=r(37740),s=r(6884),o=r(10297),a=r(9048);class l{constructor(e){this.objectIdField=e.objectIdField,this.getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:t,index:r}=e,n={};this.objectIdField&&(n[this.objectIdField]=e.id);const s=(0,i.pC)(t.attributeInfo)&&t.attributeInfo.attributeData;if((0,i.pC)(s))for(const i of Object.keys(s))n[i]=(0,a.Jx)(s[i],r);return n}getAttribute(e,t){if(t===this.objectIdField)return e.id;const{meta:r,index:n}=e,s=(0,i.pC)(r.attributeInfo)&&r.attributeInfo.attributeData;return(0,i.pC)(s)?(0,a.Jx)(s[t],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,r,i,n,s]=this.getFeatureExtent(e,u);return new o.Z([5],[t,r,i,n,r,i,n,s,i,t,s,i,t,r,i])}getCentroid(e,t){if(e.geometry)return(0,s.Y)(new o.Z,e.geometry,t.hasZ,t.hasM);const[r,i,n,a,l,c]=this.getFeatureExtent(e,u);return new o.Z([0],[(r+a)/2,(i+l)/2,(n+c)/2])}cloneWithGeometry(e,t){const{id:r,index:i,meta:n}=e;return{id:r,index:i,meta:n,geometry:t}}}const u=(0,n.Ue)()},11095:function(e,t,r){r.d(t,{I:function(){return y}});var i=r(61445),n=r(92698),s=r(96545),o=r(58006),a=(r(15055),r(81653),r(94315),r(77623)),l=r(85381),u=r(47608),c=r(37740),d=r(74440),p=r(19177);let y=class extends n.Z{constructor(e){super(e),this.events=new s.Z}forEach(e){this.forAllFeatures((t=>(e(t),p.K.CONTINUE)))}forEachBounds(e,t,r){const i=this.getFeatureExtent;for(const n of e)t(i(n,r))}forEachInBounds(e,t){this.forAllFeatures((r=>{const i=this.getFeatureExtent(r,f);return(0,d.kK)(e,(0,c.y8)(i,g))&&t(r),p.K.CONTINUE}),(t=>{if((0,u.st)(t.node.mbs,this.sourceSpatialReference,h,this.viewSpatialReference),h[0]>=e[0]&&h[2]<=e[2]&&h[1]>=e[1]&&h[3]<=e[3])return p.K.CONTINUE;const r=Math.max(e[0],Math.min(h[0],e[2])),i=Math.max(e[1],Math.min(h[1],e[3])),n=h[0]-r,s=h[1]-i;return n*n+s*s<=h[3]*h[3]?p.K.CONTINUE:p.K.SKIP}))}};(0,i._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"featureAdapter",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"toArray",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"forAllFeatures",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"getFeatureExtent",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"sourceSpatialReference",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"viewSpatialReference",void 0),y=(0,i._)([(0,a.j)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],y);const h=(0,l.c)(),f=(0,c.Ue)(),g=(0,d.Ue)()},34741:function(e,t,r){r.d(t,{l:function(){return c}});var i=r(61445),n=r(93622),s=r(58006),o=(r(15055),r(81653),r(94315),r(77623)),a=r(64441),l=r(9048);const u=n.Z.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),c=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&u.error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&u.error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const e=a.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return u.error("definitionExpression is using non standard function"),null;const t=[],r=e.fieldNames;return(0,l.e8)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(u.error(`definitionExpression references unknown fields: ${t.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return u.error("Failed to parse definitionExpression: "+e),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where=`(${t}) AND (${r.where})`:r.where=t,r}};return(0,i._)([(0,s.Cb)()],t.prototype,"i3slayer",void 0),(0,i._)([(0,s.Cb)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,i._)([(0,s.Cb)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,i._)([(0,o.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},23319:function(e,t,r){r.d(t,{V:function(){return o},e:function(){return s}});r(26699);var i=r(8693),n=r(10523);async function s(e,t=e.popupTemplate){if((0,i.Wi)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:o,typeIdField:a,globalIdField:l,relationships:u}=e;if(r.includes("*"))return["*"];const c=s?await(0,n.CH)(e):[],d=(0,n.Q0)(e.fieldsIndex,[...r,...c]);return a&&d.push(a),d&&o&&e.fieldsIndex.has(o)&&!d.includes(o)&&d.push(o),d&&l&&e.fieldsIndex.has(l)&&!d.includes(l)&&d.push(l),u&&u.forEach((t=>{const{keyField:r}=t;d&&r&&e.fieldsIndex.has(r)&&!d.includes(r)&&d.push(r)})),d}function o(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=6738.99732bc6.js.map