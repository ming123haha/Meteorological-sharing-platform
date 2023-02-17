"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[2964],{62964:function(e,t,r){r.r(t),r.d(t,{default:function(){return X}});var i,o=r(61445),n=(r(80388),r(41473)),s=(r(87270),r(66815),r(631),r(20942),r(85220),r(87498),r(47496)),a=r(17040),l=r(58221),p=r(88710),d=r(94848),y=r(75430),u=r(22130),c=r(93622),h=r(8693),b=r(74823),f=r(92454),m=r(58006),v=(r(15055),r(81653),r(94315)),g=r(62269),w=r(77623),_=r(43009),S=r(56009),I=r(36421),C=r(20694),x=r(18678),j=r(80397),R=r(9074),T=r(35894),F=r(44283),Z=r(82232),N=r(23706),O=r(28161),k=r(12799),P=r(41172),D=r(39143),E=r(10523),L=r(35365),U=r(4902),A=r(60931);let J=i=class extends A.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,o._)([(0,m.Cb)({type:Number,json:{write:!0}})],J.prototype,"age",void 0),(0,o._)([(0,m.Cb)({type:Number,json:{write:!0}})],J.prototype,"ageReceived",void 0),(0,o._)([(0,m.Cb)({type:Number,json:{write:!0}})],J.prototype,"displayCount",void 0),(0,o._)([(0,m.Cb)({type:Number,json:{write:!0}})],J.prototype,"maxObservations",void 0),J=i=(0,o._)([(0,w.j)("esri.layers.support.PurgeOptions")],J);const q=J;var z=r(78508),G=r(21755),M=r(20837),Q=r(54514),V=r(87429),Y=r(50157);const W=c.Z.getLogger("esri.layers.StreamLayer"),H=(0,D.v)();let B=class extends((0,R.b)((0,x.h)((0,O.n)((0,N.M)((0,Z.Q)((0,C.Y)((0,T.q)((0,F.I)((0,b.R)((0,j.N)(I.Z))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new q,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=V.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new u.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,h.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(f.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,E.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,l.a)(i,t,r)||void 0;return e||W.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new a.Z({defaultSymbol:K(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:K(e.symbol,e,r)})))}):new s.Z({symbol:K(t.defaultSymbol,t,r)})}createPopupTemplate(e){return(0,M.eZ)(this,e)}createQuery(){const e=new G.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}async _fetchService(e){if(this.webSocketUrl){if(!this.timeInfo?.trackIdField)throw new u.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new u.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new u.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new u.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,d["default"])(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,E.YN)(this.renderer,this.fieldsIndex),(0,E.UF)(this.timeInfo,this.fieldsIndex),(0,z.y)(this,{origin:"service"})}};(0,o._)([(0,m.Cb)({type:String})],B.prototype,"copyright",void 0),(0,o._)([(0,m.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,o._)([(0,m.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,o._)([(0,m.Cb)({type:String})],B.prototype,"displayField",void 0),(0,o._)([(0,m.Cb)({type:Q.ZP})],B.prototype,"elevationInfo",void 0),(0,o._)([(0,m.Cb)(P.d)],B.prototype,"featureReduction",void 0),(0,o._)([(0,m.Cb)(H.fields)],B.prototype,"fields",void 0),(0,o._)([(0,m.Cb)(H.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,o._)([(0,m.Cb)({type:Y.Z})],B.prototype,"geometryDefinition",void 0),(0,o._)([(0,m.Cb)({type:S.Mk.apiValues,json:{read:{reader:S.Mk.read}}})],B.prototype,"geometryType",void 0),(0,o._)([(0,m.Cb)(k.iR)],B.prototype,"labelsVisible",void 0),(0,o._)([(0,m.Cb)({type:[L.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:U.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],B.prototype,"labelingInfo",void 0),(0,o._)([(0,m.Cb)(k.rn)],B.prototype,"legendEnabled",void 0),(0,o._)([(0,m.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,o._)([(0,m.Cb)({type:v.z8})],B.prototype,"maxReconnectionAttempts",void 0),(0,o._)([(0,m.Cb)({type:v.z8})],B.prototype,"maxReconnectionInterval",void 0),(0,o._)([(0,m.Cb)(k.u1)],B.prototype,"maxScale",void 0),(0,o._)([(0,m.Cb)(k.rO)],B.prototype,"minScale",void 0),(0,o._)([(0,m.Cb)({type:String})],B.prototype,"objectIdField",void 0),(0,o._)([(0,m.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],B.prototype,"operationalLayerType",void 0),(0,o._)([(0,m.Cb)(k.C_)],B.prototype,"popupEnabled",void 0),(0,o._)([(0,m.Cb)({type:n.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],B.prototype,"popupTemplate",void 0),(0,o._)([(0,m.Cb)({type:q})],B.prototype,"purgeOptions",void 0),(0,o._)([(0,m.Cb)({types:p.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],B.prototype,"renderer",null),(0,o._)([(0,g.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,g.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],B.prototype,"readRenderer",null),(0,o._)([(0,m.Cb)(k.YI)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,m.Cb)()],B.prototype,"sourceJSON",void 0),(0,o._)([(0,m.Cb)({type:V.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],B.prototype,"spatialReference",void 0),(0,o._)([(0,m.Cb)({json:{read:!1}})],B.prototype,"type",void 0),(0,o._)([(0,m.Cb)(k.HQ)],B.prototype,"url",void 0),(0,o._)([(0,m.Cb)({type:Number})],B.prototype,"updateInterval",void 0),(0,o._)([(0,m.Cb)({type:String})],B.prototype,"webSocketUrl",void 0),B=(0,o._)([(0,w.j)("esri.layers.StreamLayer")],B);const K=(0,_.d)({types:y.QT}),X=B}}]);
//# sourceMappingURL=2964.e5712729.js.map