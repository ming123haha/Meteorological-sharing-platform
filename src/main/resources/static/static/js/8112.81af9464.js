"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[8112,4989],{86253:function(e,t,r){r.d(t,{D:function(){return n}});var o=r(47604);function n(e){e&&e.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,o.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},47604:function(e,t,r){function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:function(){return o}})},20482:function(e,t,r){r.d(t,{xp:function(){return K},Vt:function(){return T}});var o=r(61445),n=r(94848),a=r(22130),i=(r(81653),r(93622)),s=r(8693),l=r(92454),p=r(99659),u=r(58006),c=(r(15055),r(94315),r(62269)),d=r(77623),h=r(73261),f=r(86253),y=r(50157),m=r(3407),v=r(87429),g=r(53317),w=r(12799),S=r(98406),I=r(53262),_=r(999),x=r(49724),b=r(72158),R=r(64989);async function O(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const n=new Set(t.resources.toKeep.map((e=>e.resource.path))),i=new Set,s=[];n.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const a of t.resources.toUpdate)if(o.delete(a.resource.path),n.has(a.resource.path)||i.has(a.resource.path)){const{resource:t,content:o,finish:n,error:i}=a,l=(0,R.getSiblingOfSameTypeI)(t,(0,b.D)());e.paths.push(l.path),s.push(P({resource:l,content:o,finish:n,error:i},r))}else e.paths.push(a.resource.path),s.push(A(a,r)),i.add(a.resource.path);for(const a of t.resources.toAdd)s.push(P(a,r)),e.paths.push(a.resource.path);if(o.forEach((e=>{const r=t.portalItem.resourceFromPath(e);s.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===s.length)return;const p=await(0,l.as)(s);(0,l.k_)(r);const u=p.filter((e=>"error"in e)).map((e=>e.error));if(u.length>0)throw new a.Z("save:resources","Failed to save one or more resources",{errors:u})}async function P(e,t){const r=await(0,x.q6)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function A(e,t){const r=await(0,x.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const N=i.Z.getLogger("esri.layers.mixins.SceneService"),T=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case K.SAVE:return this._save(t);case K.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return v.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new v.Z(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return y.Z.fromJSON(o,r)}const o=t.store,n=this._readSpatialReference(t);return null==n||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<E))?null:new y.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:n})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,g.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,g.Qc)(this.url);(0,s.pC)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,g.ld)(o)}set url(e){const t=(0,g.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:N});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,g.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,p.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,S.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,N,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new a.Z("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<E||null==this.fullExtent||this.fullExtent.hasZ)return;const o=r.obb.halfSize,n=r.obb.center[2],i=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=n-i,this.fullExtent.zmax=n+i}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<E)return;const r=t[2],o=t[3];this.fullExtent.zmin=r-o,this.fullExtent.zmax=r+o}}async _fetchService(e){if(null==this.url)throw new a.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,n["default"])(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,n["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await(0,n["default"])(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const n of o)e.typeKeywords.push(n);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===C.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...Z,...t};let o=_["default"].from(e);o||(N.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new a.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const n=o.portal||I.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=j,o.portal=n;const i={origin:"portal-item",url:null,messages:[],portal:n,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(s,i,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,C.newItem),await n._signIn(),await n.user.addItem({item:o,folder:r&&r.folder,data:s}),await O(this.resourceReferences,i,null),this.portalItem=o,(0,f.D)(i),i.portalItem=o,o}async _save(e){const t={...Z,...e};this.portalItem||(N.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new a.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==j&&(N.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+j),await Promise.reject(new a.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${j}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,p.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||I.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,C.existingItem),await this.portalItem.update({data:o}),await O(this.resourceReferences,r,null),(0,f.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let n=t.messages.filter((e=>"error"===e.type)).map((e=>new a.Z(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(n=n.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||U){const t=(await r.e(6234).then(r.bind(r,16234))).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(N.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===o.validationOptions.failPolicy){const e=t.map((e=>new a.Z("sceneservice:schema-validation",e))).concat(n);throw new a.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(n.length>0)throw new a.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}};return(0,o._)([(0,u.Cb)(w.id)],t.prototype,"id",void 0),(0,o._)([(0,u.Cb)({type:v.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,c.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,u.Cb)({type:y.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,c.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,u.Cb)({readOnly:!0,type:m.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,c.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,u.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,u.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,u.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,c.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,c.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,u.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,u.Cb)(w.HQ)],t.prototype,"url",null),(0,o._)([(0,h.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,u.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,u.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,d.j)("esri.layers.mixins.SceneService")],t),t},E=-1e38,U=!1;var C;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(C||(C={}));const j="Scene Service",Z={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var K;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(K||(K={}))},98406:function(e,t,r){r.d(t,{T:function(){return i}});var o=r(94848),n=r(22130),a=r(8693);async function i(e,t,r,i,s,l){let p=null;if((0,a.pC)(r)){const t=`${e}/nodepages/`,n=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o["default"])(n,{query:{f:"json",token:i},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){(0,a.pC)(s)&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,d),p=d}}if(!t)return null;const u=`${e}/nodes/`,c=u+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await(0,o["default"])(c,{query:{f:"json",token:i},responseType:"json",signal:l})).data,urlPrefix:u}}catch(d){throw new n.Z("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:d,url:c})}}},64989:function(e,t,r){r.r(t),r.d(t,{addOrUpdateResource:function(){return l},contentToBlob:function(){return f},fetchResources:function(){return s},getSiblingOfSameType:function(){return y},getSiblingOfSameTypeI:function(){return m},removeAllResources:function(){return u},removeResource:function(){return p},splitPrefixFileNameAndExtension:function(){return d}});var o=r(94848),n=r(22130),a=r(8693),i=r(99659);async function s(e,t={},r){await e.load(r);const o=(0,i.v_)(e.itemUrl,"resources"),{start:n=1,num:s=10,sortOrder:l="asc",sortField:p="created"}=t,u={query:{start:n,num:s,sortOrder:l,sortField:p,token:e.apiKey},signal:(0,a.U2)(r,"signal")},c=await e.portal._request(o,u);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function l(e,t,r,o){if(!e.hasPath())throw new n.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const s=e.portalItem;await s.load(o);const l=(0,i.v_)(s.userItemUrl,"add"===t?"addResources":"updateResources"),[p,u]=c(e.path),d=await f(r),h=new FormData;return p&&"."!==p&&h.append("resourcesPrefix",p),h.append("fileName",u),h.append("file",d,u),h.append("f","json"),(0,a.pC)(o)&&o.access&&h.append("access",o.access),await s.portal._request(l,{method:"post",body:h,signal:(0,a.U2)(o,"signal")}),e}async function p(e,t,r){if(!t.hasPath())throw new n.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,i.v_)(e.userItemUrl,"removeResources");await e.portal._request(o,{method:"post",query:{resource:t.path},signal:(0,a.U2)(r,"signal")}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,i.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,a.U2)(t,"signal")})}function c(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=h(e),[o,n]=c(t);return[o,n,r]}function h(e){const t=(0,i.Ml)(e);return(0,a.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function f(e){return e instanceof Blob?e:(await(0,o["default"])(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,i.v_)(r,t+o))}function m(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,i.v_)(r,t+o))}}}]);
//# sourceMappingURL=8112.81af9464.js.map