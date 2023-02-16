"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[1246],{18548:function(e,t,s){s.d(t,{Z:function(){return i}});var r=s(8693);class i{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if((0,r.pC)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;(0,r.pC)(t);)e&&e(t),t=this.dequeue()}}},21287:function(e,t,s){s.d(t,{Qo:function(){return u}});var r=s(18548),i=s(67752),o=s(8693);const n="__esri_stream_id__",a="__esri_timestamp__",c=1e3;class u{constructor(e,t,s,r,i=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=r,this.store=e,this.objectIdField=t,this.purgeInterval=i,this._useGeneratedIds=this.objectIdField===n}add(e){if(this._useGeneratedIds){const t=this._nextId();e.attributes[this.objectIdField]=t,e.objectId=t}else e.objectId=e.attributes[this.objectIdField];if(this._addOrUpdated.set(e.objectId,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return(0,o.Wi)(this._trackIdLessObservations)&&(this._trackIdLessObservations=new r.Z(1e5)),void this._trackIdLessObservations.enqueue(e.objectId);const t=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(t)){const e=(0,o.pC)(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:c,s=(0,i.uZ)(e,0,c);this._trackIdToObservations.set(t,new r.Z(s))}const s=this._trackIdToObservations.get(t).enqueue(e.objectId);(0,o.pC)(s)&&(this._addOrUpdated.has(s)?this._addOrUpdated.delete(s):this._removed.push(s))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),s=performance.now();s-this._lastPurge>=this.purgeInterval&&(this._purge(s),this._lastPurge=s);const r=[];if((0,o.pC)(t))for(const i of t){const e=this.store.removeById(i);(0,o.pC)(e)&&r.push(e)}if((0,o.pC)(e))for(const i of e)i.attributes[a]=s,this.store.add(i);(e||r)&&this.store.update(e,r)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach((s=>e[t++]=s)),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;(0,o.pC)(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField)for(const s of this._trackIdToObservations.values())if(t>e.displayCount&&s.size){const e=(0,o.Wg)(s.dequeue());this._removed.push(e),t--}if((0,o.pC)(this._trackIdLessObservations)){let s=t-e.displayCount;for(;s-- >0;){const e=this._trackIdLessObservations.dequeue();(0,o.pC)(e)&&this._removed.push(e)}}}}_purgeByAge(e){if(!e.age||!this._timeInfo?.startTimeField)return;const t=60*e.age*1e3,s=this._maxAge-t;this.store.forEach((e=>{e.attributes[this._timeInfo.startTimeField]<s&&this._removed.push(e.objectId)}))}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const s=e-60*t.ageReceived*1e3;this.store.forEach((e=>{e.attributes[a]<s&&this._removed.push(e.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((e,t)=>{0===e.size&&this._trackIdToObservations.delete(t)}))}}},89583:function(e,t,s){s.d(t,{I:function(){return R}});s(26699);var r=s(61445),i=(s(80388),s(94848)),o=s(22130),n=s(93622),a=s(8693),c=s(92454),u=s(99659),h=(s(94315),s(15055),s(81653),s(10771),s(77623)),d=s(58006),l=s(1164),f=s(96545),_=s(30374);let p=class extends(f.Z.EventedMixin(_.r)){onFeature(e){this.emit("feature",e)}};p=(0,r._)([(0,h.j)("esri.layers.graphics.sources.connections.StreamConnection")],p);const g=p,y=n.Z.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var m;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(m||(m={}));let b=class extends g{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,l.k)(t,r,s),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){(0,a.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if((0,a.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case m.CONNECTING:case m.OPEN:return"connected";case m.CLOSING:case m.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,s=0){try{if(this.destroyed)return;const t=(0,u.fl)(e,this._config.customParameters);this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(r){const i=t/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(y.error(new o.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(y.error(new o.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${i}s`,r)),await(0,c.e4)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),s+1))}}_createWebSocket(e){return new Promise(((t,s)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=e=>this._onClose(e),r.onerror=e=>this._onError(e),r.onmessage=e=>this._onMessage(e),t(r)},r.onclose=e=>{r.onopen=r.onclose=null,s(e)}}))}async _handshake(e=1e4){const t=this._websocket;if((0,a.Wi)(t))return;const s=(0,c.hh)(),r=t.onmessage,{filter:i,outFields:n,spatialReference:u}=this._config;return s.timeout(e),t.onmessage=e=>{let a=null;try{a=JSON.parse(e.data)}catch(g){}a&&"object"==typeof a||(y.error(new o.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),s.reject(),this.destroy()),a.spatialReference?.wkid!==u?.wkid&&(y.error(new o.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,e.data)),s.reject(),this.destroy()),"json"!==a.format&&(y.error(new o.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),s.reject(),this.destroy()),i&&a.filter!==i&&y.error(new o.Z("websocket-connection","Tried to set filter, but server doesn't support it")),n&&a.outFields!==n&&y.error(new o.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=r,s.resolve()},t.send(JSON.stringify({filter:i,outFields:n,format:"json",spatialReference:{wkid:u.wkid}})),s.promise}_onMessage(e){try{const t=JSON.parse(e.data);if("featureResult"!==t.type)throw new o.Z("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const e of t.features)(0,a.pC)(this._featureZScaler)&&this._featureZScaler(e.geometry),this.onFeature(e)}catch(t){return y.error(new o.Z("websocket-connection","Failed to parse message",t)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),y.error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&y.error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,r._)([(0,d.Cb)()],b.prototype,"connectionStatus",null),(0,r._)([(0,d.Cb)()],b.prototype,"errorString",void 0),b=(0,r._)([(0,h.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],b);var w=s(61075),v=s(21755),k=s(90421),S=s(87429);const C=n.Z.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),F=1e4,I={maxQueryDepth:5,maxRecordCountFactor:3};let O=class extends b{constructor(e){super({...I,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||C.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:s,outFields:r}=this._config;this.destroyed||this._setFilter(s,r)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),(0,a.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(s){return void C.error(new o.Z("geoevent-connection","Failed to parse message",s))}this.onFeature(t)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},s=(0,i["default"])(e.path,{query:t,responseType:"json"}),r=(await s).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(e,t){const s=e[0],{urls:r,token:i}=s,o=this._inferWebSocketBaseUrl(r);return(0,u.fl)(`${o}/subscribe`,{outSR:""+t.wkid,token:i})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return C.error(new o.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if((0,a.Wi)(s)||(0,a.Wi)(e)&&(0,a.Wi)(t))return;const r=JSON.stringify({filter:this._serializeFilter(e,t)});let i=!1;const n=(0,c.hh)(),u=()=>{i||(this.destroyed||this._websocket!==s||C.error(new o.Z("geoevent-connection","Server timed out when setting filter")),n.reject())},h=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(C.error(new o.Z("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),n.reject(t.error)),s.onmessage=this._onMessage.bind(this),i=!0,n.resolve())};return s.onmessage=h,s.send(r),setTimeout(u,F),n.promise}_serializeFilter(e,t){const s={};if((0,a.Wi)(e)&&(0,a.Wi)(t))return s;if((0,a.pC)(e)&&e.geometry)try{const t=(0,k.im)(e.geometry);if("extent"!==t.type)throw new o.Z(`Expected extent but found type ${t.type}`);s.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(r){C.error(new o.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return(0,a.pC)(e)&&e.where&&"1 = 1"!==e.where&&(s.where=e.where),(0,a.pC)(t)&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,s=e.attributes[t];if(!this._relatedFeatures.has(s))return C.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:r,geometry:i}=this._relatedFeatures.get(s);for(const o in r)e.attributes[o]=r[o];return i&&(e.geometry=i),e.geometry||e.centroid||C.error(new o.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,s=this._queryRelatedFeatures(e),r=this._queryArchive(t);await s;const i=await r;if(!i)return;for(const o of i.features)this.onFeature(this._enrich(o))}catch(e){C.error(new o.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(s.bind(s,11480))).default)({url:e}),{capabilities:r}=await t.load(),i=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,c=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,h=i?u*c:u,d=new v.Z;if(d.outFields=(0,a.Pt)(this._config.outFields,["*"]),d.where=(0,a.Pt)((0,a.U2)(this._config.filter,"where"),"1=1"),d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=S.Z.fromJSON(this._config.spatialReference),n&&(d.returnCentroid=!0),i&&(d.maxRecordCountFactor=c),o)return d.num=h,t.destroy(),this._queryPages(e,d);const l=await(0,w.executeQuery)(e,d,this._config.sourceSpatialReference);return t.destroy(),l.data}async _queryPages(e,t,s=[],r=0){t.start=(0,a.pC)(t.num)?r*t.num:null;const{data:i}=await(0,w.executeQuery)(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&r<this._config.maxQueryDepth?(i.features.forEach((e=>s.push(e))),this._queryPages(e,t,s,r+1)):(s.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,s=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const i of s){const e=i.attributes[r];t.set(e,i)}this._relatedFeatures=t}};O=(0,r._)([(0,h.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],O);const x=O;function R(e,t,s,r,i,o,n,a){const c=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),u={source:e,sourceSpatialReference:t,spatialReference:s,geometryType:r,filter:i,maxReconnectionAttempts:o,maxReconnectionInterval:n,customParameters:a};return c?new b(u):new x(u)}}}]);
//# sourceMappingURL=1246.ef949044.js.map