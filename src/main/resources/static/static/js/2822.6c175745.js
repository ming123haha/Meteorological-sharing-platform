"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[2822],{72822:function(e,a,r){r.r(a),r.d(a,{fetchFeatureService:function(){return m},fromUrl:function(){return u}});var t=r(94848),n=r(22130),l=r(8693),s=r(99659),i=r(53317),y=r(6175);async function u(e){const a=e.properties?.customParameters,t=await d(e.url,a),n={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(n.layerId=t.layerOrTableId,n.sourceJSON=t.sourceJSON),new t.Constructor(n);const l=new(0,(await r.e(7510).then(r.bind(r,67510))).default)({title:t.parsedUrl.title});return c(l,t,n),l}function o(e,a){return e?e.find((e=>e.id===a)):null}function c(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(t)&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,o(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,o(a.tableInfos,r));e.tables.add(n)}))}async function d(e,a){let r=(0,i.Qc)(e);if((0,l.Wi)(r)&&(r=await f(e,a)),(0,l.Wi)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:s}=r;let y;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":y=null!=s?"FeatureLayer":L(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":y=S(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":y=S(r.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},r=e.layers[0]?.layerType;if(null!=a[r])return a[r]}}return"SceneLayer"}));break;default:y=u[t]}const o={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===t,d={parsedUrl:r,Constructor:null,layerOrTableId:c?s:null,sublayerIds:null,tableIds:null},b=await y;if(o[b]&&null==s){const r=await h(e,t,a);c&&(d.sublayerInfos=r.layerInfos,d.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(d.sublayerIds=r.layerIds,d.tableIds=r.tableIds):c&&(d.layerOrTableId=r.layerIds[0]??r.tableIds[0],d.sourceJSON=r.layerInfos[0]??r.tableInfos[0])}return d.Constructor=await p(b),d}async function f(e,a){const r=await S(e,{customParameters:a});let t=null,n=null;const y=r.type;if("Feature Layer"===y||"Table"===y?(t="FeatureServer",n=r.id):"indexedVector"===y?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":b(r)?(t="SceneServer",n=r.id):r.hasOwnProperty("layers")&&b(r.layers?.[0])&&(t="SceneServer"),!t)return null;const u=null!=n?(0,i.DR)(e):null;return{title:(0,l.pC)(u)&&r.name||(0,s.vt)(e),serverType:t,sublayer:n,url:{path:(0,l.pC)(u)?u.serviceUrl:(0,s.mN)(e).path}}}function b(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function h(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await m(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await S(e,{customParameters:r});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}function w(e){return!e.type||"Feature Layer"===e.type}async function m(e,a){let r=await S(e,a);r=r||{},r.layers=r.layers?.filter(w)||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const n=await S(e+"/layers",a);return t.layersJSON={layers:n?.layers?.filter(w)||[],tables:n?.tables||[]},t}async function p(e){return(0,y.T[e])()}async function L(e,a){return(await S(e,{customParameters:a})).tileInfo}async function S(e,a){return(await(0,t["default"])(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}},6175:function(e,a,r){r.d(a,{T:function(){return t}});const t={BingMapsLayer:async()=>(await r.e(3451).then(r.bind(r,3451))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(8112),r.e(4170),r.e(2516)]).then(r.bind(r,72516))).default,CSVLayer:async()=>(await r.e(2074).then(r.bind(r,32074))).default,ElevationLayer:async()=>(await r.e(2800).then(r.bind(r,32800))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,11480))).default,GroupLayer:async()=>(await r.e(7510).then(r.bind(r,67510))).default,GeoRSSLayer:async()=>(await r.e(7983).then(r.bind(r,67983))).default,GeoJSONLayer:async()=>(await r.e(5270).then(r.bind(r,85270))).default,ImageryLayer:async()=>(await Promise.all([r.e(6814),r.e(4143),r.e(9770),r.e(3917),r.e(3073)]).then(r.bind(r,43073))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6814),r.e(4143),r.e(3225),r.e(9770),r.e(3917),r.e(181)]).then(r.bind(r,80181))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(8112),r.e(2612)]).then(r.bind(r,72612))).default,KMLLayer:async()=>(await r.e(7937).then(r.bind(r,17937))).default,LineOfSightLayer:async()=>(await r.e(6682).then(r.bind(r,36682))).default,MapImageLayer:async()=>(await Promise.all([r.e(5525),r.e(1660)]).then(r.bind(r,31660))).default,MapNotesLayer:async()=>(await r.e(9790).then(r.bind(r,39790))).default,OGCFeatureLayer:async()=>(await r.e(5767).then(r.bind(r,45767))).default,OpenStreetMapLayer:async()=>(await r.e(1748).then(r.bind(r,41748))).default,PointCloudLayer:async()=>(await Promise.all([r.e(8112),r.e(8527)]).then(r.bind(r,88527))).default,RouteLayer:async()=>(await Promise.all([r.e(5016),r.e(7917)]).then(r.bind(r,37917))).default,SceneLayer:async()=>(await Promise.all([r.e(8112),r.e(1746)]).then(r.bind(r,96764))).default,StreamLayer:async()=>(await r.e(2964).then(r.bind(r,62964))).default,TileLayer:async()=>(await Promise.all([r.e(5525),r.e(3832)]).then(r.bind(r,3832))).default,UnknownLayer:async()=>(await r.e(4837).then(r.bind(r,14837))).default,UnsupportedLayer:async()=>(await r.e(5881).then(r.bind(r,85881))).default,VectorTileLayer:async()=>(await Promise.all([r.e(128),r.e(5066)]).then(r.bind(r,34303))).default,VoxelLayer:async()=>(await Promise.all([r.e(8112),r.e(8531)]).then(r.bind(r,38531))).default,WebTileLayer:async()=>(await r.e(3313).then(r.bind(r,23313))).default,WFSLayer:async()=>(await Promise.all([r.e(9968),r.e(471)]).then(r.bind(r,70471))).default,WMSLayer:async()=>(await r.e(9190).then(r.bind(r,44479))).default,WMTSLayer:async()=>(await r.e(1717).then(r.bind(r,51717))).default}}}]);
//# sourceMappingURL=2822.6c175745.js.map