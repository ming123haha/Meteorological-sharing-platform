"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[6548],{98938:function(e,t,n){var r,o;n.d(t,{B:function(){return o},P:function(){return r}}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}))},56548:function(e,t,n){n.r(t),n.d(t,{destroyContext:function(){return b},dracoDecompressPointCloudData:function(){return d},filterObbsForModifications:function(){return h},filterObbsForModificationsSync:function(){return L},initialize:function(){return C},interpretObbModificationResults:function(){return P},process:function(){return l},setLegacySchema:function(){return y},setModifications:function(){return m},setModificationsSync:function(){return w},test:function(){return I}});n(48675),n(3462),n(37380),n(1118);var r=n(8693),o=n(928),i=n(98938),s=n(27123);function f(){return c||(c=new Promise((e=>n.e(4156).then(n.bind(n,44156)).then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:a,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>{throw e}))),c}function a(e){return(0,s.V)(`esri/libs/i3s/${e}`)}let c;var u=n(64524);async function l(e){await C();const t=[e.geometryBuffer];return{result:g(e,t),transferList:t}}async function d(e){await C();const t=[e.geometryBuffer],{geometryBuffer:n}=e,r=n.byteLength,i=p._malloc(r),s=new Uint8Array(p.HEAPU8.buffer,i,r);s.set(new Uint8Array(n));const f=p.dracoDecompressPointCloudData(i,s.byteLength);if(p._free(i),f.error.length>0)throw`i3s.wasm: ${f.error}`;const a=f.featureIds?.length>0?(0,o.tP)(f.featureIds):null,c=(0,o.tP)(f.positions);return a&&t.push(a.buffer),t.push(c.buffer),{result:{positions:c,featureIds:a},transferList:t}}async function h(e){await C(),L(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function m(e){await C(),w(e)}async function y(e){await C(),p.setLegacySchema(e.context,e.jsonSchema)}function b(e){U(e)}let E,p;function w(e){const t=e.modifications,n=p._malloc(8*t.length),r=new Float64Array(p.HEAPU8.buffer,n,t.length);for(let o=0;o<t.length;++o)r[o]=t[o];p.setModifications(e.context,n,t.length,e.isGeodetic),p._free(n)}function g(e,t){if(!p)return null;const{context:n,localOrigin:s,globalTrafo:f,mbs:a,obb:c,elevationOffset:u,geometryBuffer:l,geometryDescriptor:d,indexToVertexProjector:h,vertexToRenderProjector:m}=e,y=p._malloc(l.byteLength),b=33,E=p._malloc(b*Float64Array.BYTES_PER_ELEMENT),w=new Uint8Array(p.HEAPU8.buffer,y,l.byteLength);w.set(new Uint8Array(l));const g=new Float64Array(p.HEAPU8.buffer,E,b);_(g,s);let P=g.byteOffset+3*g.BYTES_PER_ELEMENT,L=new Float64Array(g.buffer,P);_(L,f),P+=16*g.BYTES_PER_ELEMENT,L=new Float64Array(g.buffer,P),_(L,a),P+=4*g.BYTES_PER_ELEMENT,(0,r.pC)(c)&&(L=new Float64Array(g.buffer,P),_(L,c.center),P+=3*g.BYTES_PER_ELEMENT,L=new Float64Array(g.buffer,P),_(L,c.halfSize),P+=3*g.BYTES_PER_ELEMENT,L=new Float64Array(g.buffer,P),_(L,c.quaternion));const U=d,C={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:U.featureIndex},I=p.process(n,!!e.obb,y,w.byteLength,U,C,E,u,h,m,e.normalReferenceFrame);if(p._free(E),p._free(y),I.error.length>0)throw`i3s.wasm: ${I.error}`;if(I.discarded)return null;const v=I.componentOffsets.length>0?(0,o.tP)(I.componentOffsets):null,A=I.featureIds.length>0?(0,o.tP)(I.featureIds):null,M=(0,o.tP)(I.interleavedVertedData).buffer,F=I.indicesType===i.P.Int16?(0,o.tP)(new Uint16Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/2)):(0,o.tP)(new Uint32Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/4)),O=(0,o.tP)(I.positions),R=I.positionIndicesType===i.P.Int16?(0,o.tP)(new Uint16Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/2)):(0,o.tP)(new Uint32Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/4)),T={layout:e.layouts[0],interleavedVertexData:M,indices:F,hasColors:I.hasColors,hasModifications:I.hasModifications,positionData:{data:O,indices:R}};return A&&t.push(A.buffer),v&&t.push(v.buffer),t.push(M),t.push(F.buffer),t.push(O.buffer),t.push(R.buffer),{componentOffsets:v,featureIds:A,transformedGeometry:T,obb:I.obb}}function P(e){return 0===e?u.O4.Unmodified:1===e?u.O4.PotentiallyModified:2===e?u.O4.Culled:u.O4.Unknown}function L(e){const{context:t,buffer:n}=e,r=p._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(p.HEAPU8.buffer,r,o),s=new Float64Array(n);i.set(s),p.filterOBBs(t,r,o),s.set(i),p._free(r)}function U(e){p&&p.destroy(e)}function _(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function C(){return p?Promise.resolve():(E||(E=f().then((e=>{p=e,E=null}))),E)}const I={transform:g,destroy:U}},64524:function(e,t,n){n.d(t,{$i:function(){return c},FE:function(){return f},Hw:function(){return i},NB:function(){return l},O4:function(){return o},U_:function(){return r},oQ:function(){return d},rw:function(){return u},w5:function(){return s}});var r,o,i,s,f,a=n(4717);class c{constructor(e,t){this.id=e,this.mbs=t,this.renderMbs=(0,a.f)(0,0,0,-1),this.elevationRange=null}}class u{constructor(){this.min=1/0,this.max=-1/0,this.valid=!1}}!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(r||(r={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(o||(o={}));class l extends c{constructor(e,t,n,r,s,f,a,c,u,l){super(e,n),this.index=t,this.childCount=r,this.level=s,this.resources=f,this.version=a,this.lodMetric=c,this.maxError=u,this.numFeatures=l,this.failed=!1,this.cacheState=i.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=o.NotChecked}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(i||(i={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(s||(s={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(f||(f={}));class d{constructor(e,t,n,r){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=n,this.version=r}}}}]);
//# sourceMappingURL=6548.8cd8071c.js.map