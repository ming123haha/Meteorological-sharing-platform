"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[9404],{9404:function(t,e,n){n.r(e),n.d(e,{loadGLTFMesh:function(){return $}});var o=n(36945),r=n(94848),s=n(67322),a=n(67752),c=n(8693),i=n(18037),u=n(26114),l=n(74674),f=n(85381),p=n(89933),m=n(50654),g=n(38497),d=n(45956),C=n(76180),x=n(84121),w=n(46510),y=n(5434),h=n(6432),b=n(65470),v=n(31031),A=n(52709),E=n(558),T=n(27368),M=n(17923),R=n(34305),S=n(55620),B=n(81770);async function $(t,e,n){const o=new b.C(F(n)),r=(await(0,v.z)(o,e,n,!0)).model,s=r.lods.shift(),a=new Map,i=new Map;r.textures.forEach(((t,e)=>a.set(e,N(t)))),r.materials.forEach(((t,e)=>i.set(e,_(t,a))));const u=L(s);for(const c of u.parts)P(u,c,i);const{position:l,normal:f,tangent:p,color:m,texCoord0:g}=u.vertexAttributes,C={position:l.typedBuffer,normal:(0,c.pC)(f)?f.typedBuffer:null,tangent:(0,c.pC)(p)?p.typedBuffer:null,uv:(0,c.pC)(g)?g.typedBuffer:null,color:(0,c.pC)(m)?m.typedBuffer:null},x=(0,h.w1)(C,t,n);return{transform:x.transform,components:u.components,spatialReference:t.spatialReference,vertexAttributes:new d.Q({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:C.color,uv:C.uv})}}function F(t){return t?.resolveFile?{busy:!1,request:async(e,n,o)=>{const s=t.resolveFile(e),a="image"===n?"image":"binary"===n?"array-buffer":"json";return(await(0,r["default"])(s,{responseType:a,signal:(0,c.pC)(o)?o.signal:null})).data}}:null}function I(t,e){if((0,c.Wi)(t))return"-";const n=t.typedBuffer;return`${(0,s.s1)(e,n.buffer,(()=>e.size))}/${n.byteOffset}/${n.byteLength}`}function k(t){return(0,c.pC)(t)?t.toString():"-"}function L(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,r=new Map,a=[];for(const c of t.parts){const{attributes:{position:t,normal:i,color:u,tangent:l,texCoord0:f}}=c,p=`\n      ${I(t,o)}/\n      ${I(i,o)}/\n      ${I(u,o)}/\n      ${I(l,o)}/\n      ${I(f,o)}/\n      ${k(c.transform)}\n    `;let m=!1;const g=(0,s.s1)(r,p,(()=>(m=!0,{start:e,length:t.count})));m&&(e+=t.count),i&&(n.normal=!0),u&&(n.color=!0),l&&(n.tangent=!0),f&&(n.texCoord0=!0),a.push({gltf:c,writeVertices:m,region:g})}return{vertexAttributes:{position:(0,y.gS)(C.fP,e),normal:n.normal?(0,y.gS)(C.ct,e):null,tangent:n.tangent?(0,y.gS)(C.ek,e):null,color:n.color?(0,y.gS)(C.mc,e):null,texCoord0:n.texCoord0?(0,y.gS)(C.Eu,e):null},parts:a,components:[]}}function N(t){return new g.Z({data:t.data,wrap:O(t.parameters.wrap)})}function _(t,e){const n=new o.Z(z(t.color,t.opacity)),r=t.emissiveFactor?new o.Z(j(t.emissiveFactor)):null;return new m.Z({color:n,colorTexture:(0,c.Wg)((0,c.yw)(t.textureColor,(t=>e.get(t)))),normalTexture:(0,c.Wg)((0,c.yw)(t.textureNormal,(t=>e.get(t)))),emissiveColor:r,emissiveTexture:(0,c.Wg)((0,c.yw)(t.textureEmissive,(t=>e.get(t)))),occlusionTexture:(0,c.Wg)((0,c.yw)(t.textureOcclusion,(t=>e.get(t)))),alphaMode:G(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:(0,c.Wg)((0,c.yw)(t.textureMetallicRoughness,(t=>e.get(t))))})}function P(t,e,n){e.writeVertices&&W(t,e);const o=e.gltf,r=D(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let a=0;a<r.length;a++)r[a]+=s;t.components.push(new p.Z({faces:r,material:n.get(o.material),trustSourceNormals:!0}))}function W(t,e){const{position:n,normal:o,tangent:r,color:s,texCoord0:l}=t.vertexAttributes,f=e.region.start,{attributes:p,transform:m}=e.gltf,g=p.position.count;if((0,x.t)(n.slice(f,g),p.position,m),(0,c.pC)(p.normal)&&(0,c.pC)(o)){const t=(0,i.a)((0,u.c)(),m),e=o.slice(f,g);(0,x.a)(e,p.normal,t),(0,a.oc)(t)&&(0,x.n)(e,e)}else(0,c.pC)(o)&&(0,R.f)(o,0,0,1,{dstIndex:f,count:g});if((0,c.pC)(p.tangent)&&(0,c.pC)(r)){const t=(0,i.a)((0,u.c)(),m),e=r.slice(f,g);(0,w.t)(e,p.tangent,t),(0,a.oc)(t)&&(0,w.n)(e,e)}else(0,c.pC)(r)&&(0,S.f)(r,0,0,1,1,{dstIndex:f,count:g});if((0,c.pC)(p.texCoord0)&&(0,c.pC)(l)?(0,B.n)(l.slice(f,g),p.texCoord0):(0,c.pC)(l)&&(0,B.f)(l,0,0,{dstIndex:f,count:g}),(0,c.pC)(p.color)&&(0,c.pC)(s)){const t=p.color,e=s.slice(f,g);if(4===t.elementCount)t instanceof C.ek?(0,w.s)(e,t,255):t instanceof C.mc?(0,S.c)(e,t):t instanceof C.v6&&(0,w.a)(e,t,8);else{(0,S.f)(e,255,255,255,255);const n=C.ne.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof C.ct?(0,x.s)(n,t,255):t instanceof C.ne?(0,R.c)(n,t):t instanceof C.mw&&(0,x.b)(n,t,8)}}else(0,c.pC)(s)&&(0,S.f)(s.slice(f,g),255,255,255,255)}function D(t,e){switch(e){case M.MX.TRIANGLES:return(0,A.nh)(t,E.DX);case M.MX.TRIANGLE_STRIP:return(0,A.DA)(t);case M.MX.TRIANGLE_FAN:return(0,A.jX)(t)}}function G(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function O(t){return{horizontal:X(t.s),vertical:X(t.t)}}function X(t){switch(t){case M.e8.CLAMP_TO_EDGE:return"clamp";case M.e8.MIRRORED_REPEAT:return"mirror";case M.e8.REPEAT:return"repeat"}}function Z(t){return t**(1/T.K)*255}function z(t,e){return(0,f.f)(Z(t[0]),Z(t[1]),Z(t[2]),e)}function j(t){return(0,l.f)(Z(t[0]),Z(t[1]),Z(t[2]))}}}]);
//# sourceMappingURL=9404.98c8dd45.js.map