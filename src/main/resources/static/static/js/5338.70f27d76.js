"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[5338],{45977:function(t,e,n){n.d(e,{Z:function(){return v}});n(48675),n(3462),n(37380),n(1118);var r,o=n(61445),i=n(60931),s=n(8693),a=n(58006),l=(n(15055),n(81653),n(94315),n(77623)),c=n(51802),u=n(94370),f=n(65554),p=n(74674),h=n(49304),g=n(47608),m=n(3399),y=n(24272),d=n(76180),x=n(84121),w=n(34305);let b=r=class extends i.wq{constructor(t){super(t),this.origin=(0,p.c)(),this.translation=(0,p.c)(),this.rotation=(0,y.Ue)(),this.scale=(0,p.f)(1,1,1),this.geographic=!0}get localMatrix(){const t=(0,u.c)();return(0,c.u)(t,this.scale),(0,c.e)(t,t,(0,y.WH)(this.rotation),(0,y.ZZ)(this.rotation)),(0,c.j)(t,t,this.translation),t}get localMatrixInverse(){return(0,c.a)((0,u.c)(),this.localMatrix)}applyLocal(t,e){return(0,f.m)(e,t,this.localMatrix)}applyLocalInverse(t,e){return(0,f.m)(e,t,this.localMatrixInverse)}project(t,e){const n=new Float64Array(t.length),r=d.fP.fromTypedArray(n),o=d.fP.fromTypedArray(t);if(this.geographic){const t=(0,m.rS)(e),i=(0,u.c)();return(0,g.Bm)(e,this.origin,i,t),(0,c.m)(i,i,this.localMatrix),(0,x.t)(r,o,i),(0,g.CM)(n,t,0,n,e,0,n.length/3),n}const{localMatrix:i,origin:s}=this;(0,c.v)(i,u.I)?(0,w.c)(r,o):(0,x.t)(r,o,i);for(let a=0;a<n.length;a+=3)n[a+0]+=s[0],n[a+1]+=s[1],n[a+2]+=s[2];return n}getOriginPoint(t){const[e,n,r]=this.origin;return new h.Z({x:e,y:n,z:r,spatialReference:t})}equals(t){return(0,s.pC)(t)&&this.geographic===t.geographic&&(0,f.k)(this.origin,t.origin)&&(0,c.w)(this.localMatrix,t.localMatrix)}clone(){const t={origin:(0,p.a)(this.origin),translation:(0,p.a)(this.translation),rotation:(0,y.Ue)(this.rotation),scale:(0,p.a)(this.scale),geographic:this.geographic};return new r(t)}};(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"origin",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"translation",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"rotation",void 0),(0,o._)([(0,a.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"scale",void 0),(0,o._)([(0,a.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],b.prototype,"geographic",void 0),(0,o._)([(0,a.Cb)()],b.prototype,"localMatrix",null),(0,o._)([(0,a.Cb)()],b.prototype,"localMatrixInverse",null),b=r=(0,o._)([(0,l.j)("esri.geometry.support.MeshTransform")],b);const v=b},24272:function(t,e,n){n.d(e,{Ue:function(){return a},WH:function(){return f},ZZ:function(){return u},qC:function(){return c},uT:function(){return l}});var r=n(67752),o=n(44420),i=n(45263),s=n(65554);function a(t=h){return[t[0],t[1],t[2],t[3]]}function l(t,e,n=a()){return(0,s.c)(u(n),t),n[3]=e,n}function c(t,e,n=a()){return(0,o.s)(g,u(t),f(t)),(0,o.s)(m,u(e),f(e)),(0,o.m)(g,m,g),p(n,(0,r.BV)((0,o.g)(u(n),g)))}function u(t){return t}function f(t){return(0,r.Vl)(t[3])}function p(t,e){return t[3]=e,t}const h=[0,0,1,0],g=(0,i.a)(),m=(0,i.a)();a()},30958:function(t,e,n){function r(t,e){return t.isGeographic||t.isWebMercator&&(e?.geographic??!0)}n.d(e,{h:function(){return r}})},6432:function(t,e,n){n.d(e,{FF:function(){return w},I5:function(){return d},Yq:function(){return b},iv:function(){return y},w1:function(){return x}});n(48675),n(3462),n(37380),n(1118);var r=n(8693),o=n(61293),i=n(26114),s=n(51802),a=n(94370),l=n(18037),c=n(47608),u=n(3399),f=n(45977),p=n(76180),h=n(84121),g=n(30958),m=n(3057);function y(t,e,n){return(0,g.h)(e.spatialReference,n)?A(t,e,n):v(t,e,n)}function d(t,e,n){const{position:o,normal:i,tangent:s}=t;if((0,r.Wi)(e))return{position:o,normal:i,tangent:s};const a=e.localMatrix;return y({position:(0,m.zZ)(o,new Float64Array(o.length),a),normal:(0,r.pC)(i)?(0,m.w9)(i,new Float32Array(i.length),a):null,tangent:(0,r.pC)(s)?(0,m.VS)(s,new Float32Array(s.length),a):null},e.getOriginPoint(n),{geographic:e.geographic})}function x(t,e,n){if(n?.useTransform){const{position:r,normal:o,tangent:i}=t;return{vertexAttributes:{position:r,normal:o,tangent:i},transform:new f.Z({origin:[e.x,e.y,e.z??0],geographic:(0,g.h)(e.spatialReference,n)})}}return{vertexAttributes:y(t,e,n),transform:null}}function w(t,e,n){return(0,g.h)(e.spatialReference,n)?Z(t,e,n):M(t,e,n)}function b(t,e,n,o){if((0,r.Wi)(e))return w(t,n,o);const i=d(t,e,n.spatialReference);return n.equals(e.getOriginPoint(n.spatialReference))?M(i,n,o):(0,g.h)(n.spatialReference,o)?Z(i,n,o):M(i,n,o)}function v(t,e,n){const r=new Float64Array(t.position.length),o=t.position,i=e.x,s=e.y,a=e.z||0,{horizontal:l,vertical:c}=I(n?n.unit:null,e.spatialReference);for(let u=0;u<o.length;u+=3)r[u+0]=o[u+0]*l+i,r[u+1]=o[u+1]*l+s,r[u+2]=o[u+2]*c+a;return{position:r,normal:t.normal,tangent:t.tangent}}function A(t,e,n){const r=e.spatialReference,o=P(e,n,z),i=new Float64Array(t.position.length),s=C(t.position,o,r,i),a=(0,l.a)(S,o);return{position:s,normal:R(s,i,t.normal,a,r),tangent:F(s,i,t.tangent,a,r)}}function C(t,e,n,r){(0,h.t)(p.fP.fromTypedArray(r),p.fP.fromTypedArray(t),e);const o=new Float64Array(t.length);return(0,m.To)(r,o,n)}function R(t,e,n,o,i){if((0,r.Wi)(n))return null;const s=new Float32Array(n.length);return(0,h.a)(p.ct.fromTypedArray(s),p.ct.fromTypedArray(n),o),(0,m.Yk)(s,t,e,i,s),s}function F(t,e,n,o,i){if((0,r.Wi)(n))return null;const s=new Float32Array(n.length);(0,h.a)(p.ct.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT),p.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),o);for(let r=3;r<s.length;r+=4)s[r]=n[r];return(0,m.M2)(s,t,e,i,s),s}function M(t,e,n){const r=new Float64Array(t.position.length),o=t.position,i=e.x,s=e.y,a=e.z||0,{horizontal:l,vertical:c}=I(n?n.unit:null,e.spatialReference);for(let u=0;u<o.length;u+=3)r[u+0]=(o[u+0]-i)/l,r[u+1]=(o[u+1]-s)/l,r[u+2]=(o[u+2]-a)/c;return{position:r,normal:t.normal,tangent:t.tangent}}function Z(t,e,n){const r=e.spatialReference;P(e,n,z);const o=(0,s.a)(L,z),i=new Float64Array(t.position.length),a=E(t.position,r,o,i),c=(0,l.a)(S,o);return{position:a,normal:T(t.normal,t.position,i,r,c),tangent:O(t.tangent,t.position,i,r,c)}}function P(t,e,n){(0,c.Bm)(t.spatialReference,[t.x,t.y,t.z||0],n,(0,u.rS)(t.spatialReference));const{horizontal:r,vertical:o}=I(e?e.unit:null,t.spatialReference);return(0,s.h)(n,n,[r,r,o]),n}function E(t,e,n,r){const o=(0,m.XO)(t,e,r),i=p.fP.fromTypedArray(o),s=new Float64Array(o.length),a=p.fP.fromTypedArray(s);return(0,h.t)(a,i,n),s}function T(t,e,n,o,i){if((0,r.Wi)(t))return null;const s=(0,m.Iz)(t,e,n,o,new Float32Array(t.length)),a=p.ct.fromTypedArray(s);return(0,h.a)(a,a,i),s}function O(t,e,n,o,i){if((0,r.Wi)(t))return null;const s=(0,m.wi)(t,e,n,o,new Float32Array(t.length)),a=p.ct.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT);return(0,h.a)(a,a,i),s}function I(t,e){if((0,r.Wi)(t))return N;const n=e.isGeographic?1:(0,o.c9)(e),i=e.isGeographic?1:(0,o._R)(e),s=(0,o.En)(1,t,"meters");return{horizontal:s*n,vertical:s*i}}const z=(0,a.c)(),L=(0,a.c)(),S=(0,i.c)(),N={horizontal:1,vertical:1}},85338:function(t,e,n){n.r(e),n.d(e,{meshFeatureSetFromJSON:function(){return ne}});n(26699),n(92087);var r=n(39264),o=n(8693),i=n(50157),s=n(61445),a=n(22130),l=n(30374),c=n(29924),u=n(93622),f=n(66144),p=n(92454),h=n(18105),g=n(58006),m=(n(15055),n(81653),n(94315),n(77623)),y=n(74674),d=n(92489),x=n(49304),w=n(91407),b=n(24272),v=n(89933),A=n(45977),C=n(45956),R=n(38250),F=n(47608),M=n(30958),Z=n(6432);const P=u.Z.getLogger("esri.geometry.support.meshUtils.centerAt");function E(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=n?.origin??t.origin;(0,o.pC)(t.transform)?(null!=n?.geographic&&n.geographic!==t.transform.geographic&&P.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),T(t.transform,e,r)):(0,M.h)(t.spatialReference,n)?O(t,e,r):I(t,e,r)}function T(t,e,n){const r=e.x-n.x,o=e.y-n.y,i=e.hasZ&&n.hasZ?e.z-n.z:0,s=t.origin;t.origin=[s[0]+r,s[1]+o,s[2]+i]}function O(t,e,n){const r=(0,Z.FF)(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:i,tangent:s}=(0,Z.iv)(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=i,t.vertexAttributes.tangent=s,t.vertexAttributesChanged()}function I(t,e,n){const r=S,o=L;if((0,F.KC)(e,o,t.spatialReference)){if(!(0,F.KC)(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,P.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}z(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else P.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function z(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]}const L=(0,y.c)(),S=(0,y.c)();var N=n(99659);async function _(t,e,r){const{loadGLTFMesh:i}=await(0,p.Hl)(n.e(9404).then(n.bind(n,9404)),r),s=await k(e,r),a=i(new x.Z({x:0,y:0,z:0,spatialReference:t.spatialReference}),s.url,{resolveFile:U(s),useTransform:!0,signal:(0,o.pC)(r)?r.signal:null});a.then((()=>s.dispose()),(()=>s.dispose()));const{vertexAttributes:l,components:c}=await a;t.vertexAttributes=l,t.components=c}function U(t){const e=(0,N.Yd)(t.url);return n=>{const r=(0,N.PF)(n,e,e),o=r?r.replace(/^ *\.\//,""):null;return t.files.get(o)??n}}async function k(t,e){return t instanceof Blob?B.fromBlob(t):"string"==typeof t?new B(t):Array.isArray(t)?D(t,e):j(t,e)}async function D(t,e){const n=new Map;let r=null;const i=await(0,p.WW)(t.map((async t=>({name:t.name,source:await k(t instanceof Blob?t:t.source,e)})))),s=[];for(const o of i)o&&((0,p.Hc)(e)?o.source.dispose():s.push(o));(0,p.k_)(e);for(const{name:a,source:l}of s)((0,o.Wi)(r)||/\.(gltf|glb)/i.test(a))&&(r=l.url),n.set(a,l.url),l.files&&l.files.forEach(((t,e)=>n.set(e,t)));if((0,o.Wi)(r))throw new a.Z("mesh-load-external:missing-files","Missing files to load external mesh source");return new B(r,(()=>s.forEach((({source:t})=>t.dispose()))),n)}async function j(t,e){const{default:r}=await(0,p.Hl)(Promise.resolve().then(n.bind(n,94848)),e),o="string"==typeof t.multipart[0]?await Promise.all(t.multipart.map((async t=>(await r(t,{responseType:"array-buffer"})).data))):t.multipart;return B.fromBlob(new Blob(o))}class B{constructor(t,e=(()=>{}),n=new Map){this.url=t,this.dispose=e,this.files=n}static fromBlob(t){const e=URL.createObjectURL(t);return new B(e,(()=>URL.revokeObjectURL(e)))}}n(48675),n(3462),n(37380),n(1118);var W=n(18037),G=n(26114),$=n(94370),Y=n(65554),q=n(3399),H=n(3057);const K=u.Z.getLogger("esri.geometry.support.meshUtils.offset");function X(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&((0,o.pC)(t.transform)?(null!=n?.geographic&&n.geographic!==t.transform.geographic&&K.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),V(t.transform,e)):(0,M.h)(t.spatialReference,n)?J(t,e):Q(t,e))}function V(t,e){const n=t.origin;t.origin=(0,Y.a)((0,y.c)(),n,e)}function J(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,i=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,a=new Float64Array(r.length),l=(0,o.pC)(i)?new Float32Array(i.length):null,c=(0,o.pC)(s)?new Float32Array(s.length):null,u=t.extent.center,f=et;(0,F.Bm)(n,[u.x,u.y,u.z],nt,(0,q.rS)(n)),(0,W.f)(rt,nt),(0,Y.t)(f,e,rt),(0,H.XO)(r,n,a),(0,o.pC)(i)&&(0,H.Iz)(i,r,a,n,l),(0,o.pC)(s)&&(0,H.wi)(s,r,a,n,c),tt(a,f),(0,H.To)(a,r,n),(0,o.pC)(i)&&(0,H.Yk)(l,r,a,n,i),(0,o.pC)(s)&&(0,H.M2)(c,r,a,n,s),t.vertexAttributesChanged()}function Q(t,e){tt(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function tt(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const et=(0,y.c)(),nt=(0,$.c)(),rt=(0,G.c)();function ot(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=dt,r=4*t.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let l=0,c=0,u=0,f=0;for(let p=0;p<t.length;p++){const r=t[p],h=l/3;for(const t of e)a[f++]=h+t;const g=r.corners;for(let t=0;t<4;t++){const e=g[t];let a=0;s[u++]=.25*n[t][0]+r.uvOrigin[0],s[u++]=r.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==r.axis[t]?(o[l++]=.5*r.axis[t],i[c++]=r.axis[t]):(o[l++]=.5*e[a++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:a}}function it(t,e){const n=t.components[0],r=n.faces,i=xt[e],s=6*i,a=new Uint32Array(6),l=new Uint32Array(r.length-6);let c=0,u=0;for(let o=0;o<r.length;o++)o>=s&&o<s+6?a[c++]=r[o]:l[u++]=r[o];if((0,o.pC)(t.vertexAttributes.uv)){const e=new Float32Array(t.vertexAttributes.uv),n=4*i*2,r=[0,1,1,1,1,0,0,0];for(let t=0;t<r.length;t++)e[n+t]=r[t];t.vertexAttributes.uv=e}return t.components=[new v.Z({faces:a,material:n.material}),new v.Z({faces:l})],t}function st(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array((e-1)*n*2*3);let l=0,c=0,u=0,f=0;for(let p=0;p<=e;p++){const t=p/e*Math.PI+.5*Math.PI,r=Math.cos(t),h=Math.sin(t);wt[2]=h;const g=0===p||p===e,m=g?n-1:n;for(let y=0;y<=m;y++){const t=y/m*2*Math.PI;wt[0]=-Math.sin(t)*r,wt[1]=Math.cos(t)*r;for(let e=0;e<3;e++)o[l]=.5*wt[e],i[l]=wt[e],++l;s[c++]=(y+(g?.5:0))/n,s[c++]=p/e,0!==p&&y!==n&&(p!==e&&(a[u++]=f,a[u++]=f+1,a[u++]=f-n),1!==p&&(a[u++]=f,a[u++]=f-n,a[u++]=f-n-1)),f++}}return{position:o,normal:i,uv:s,faces:a}}function at(t=0){const e=5,n=Math.round(16*2**t),r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(4*n*3);let l=0,c=0,u=0,f=0,p=0;for(let h=0;h<=e;h++){const t=0===h||h===e,r=h<=1||h>=e-1,g=2===h||4===h,m=t?n-1:n;for(let y=0;y<=m;y++){const d=y/m*2*Math.PI,x=t?0:.5;wt[0]=x*Math.sin(d),wt[1]=x*-Math.cos(d),wt[2]=h<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=wt[t],i[c++]=r?2===t?h<=1?1:-1:0:2===t?0:wt[t]/x;s[u++]=(y+(t?.5:0))/n,s[u++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,g||0===h||y===n||(h!==e&&(a[f++]=p,a[f++]=p+1,a[f++]=p-n),1!==h&&(a[f++]=p,a[f++]=p-n,a[f++]=p-n-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}function lt(t,e){const n="number"==typeof e?e:null!=e?e.width:1,r="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function ct(t){const e=ht.facingAxisOrderSwap[t],n=ht.position,r=ht.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let s=0;for(let a=0;a<4;a++){const t=s;for(let a=0;a<3;a++){const l=e[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[s]=n[t+c]*u,i[s]=r[t+c]*u,s++}}return{position:o,normal:i,uv:new Float32Array(ht.uv),faces:new Uint32Array(ht.faces),isPlane:!0}}const ut=1,ft=2,pt=3,ht={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[pt,ut,ft],west:[-pt,-ut,ft],north:[-ut,pt,ft],south:[ut,-pt,ft],up:[ut,ft,pt],down:[ut,-ft,-pt]}};function gt(t,e,n){t.isPlane||mt(t),yt(t,n&&n.size);const{vertexAttributes:r,transform:o}=(0,Z.w1)(t,e,n);return{vertexAttributes:new C.Q({...r,uv:t.uv}),transform:o,components:[new v.Z({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function mt(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function yt(t,e){if(null==e)return;const n="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];bt[0]=n[0],bt[4]=n[1],bt[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let e=0;e<3;e++)wt[e]=t.position[r+e];(0,Y.t)(wt,wt,bt);for(let e=0;e<3;e++)t.position[r+e]=wt[e]}if(n[0]!==n[1]||n[1]!==n[2]){bt[0]=1/n[0],bt[4]=1/n[1],bt[8]=1/n[2];for(let e=0;e<t.normal.length;e+=3){for(let n=0;n<3;n++)wt[n]=t.normal[e+n];(0,Y.t)(wt,wt,bt),(0,Y.n)(wt,wt);for(let n=0;n<3;n++)t.normal[e+n]=wt[n]}}}const dt={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},xt={south:0,east:1,north:2,west:3,up:4,down:5},wt=(0,y.c)(),bt=(0,G.c)();var vt=n(51802);const At=u.Z.getLogger("esri.geometry.support.meshUtils.rotate");function Ct(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const r=t.spatialReference;if((0,o.pC)(t.transform)){null!=n?.geographic&&n.geographic!==t.transform.geographic&&At.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=n?.origin??t.transform.getOriginPoint(r);Rt(t.transform,e,o)}else{const r=n?.origin??t.origin;(0,M.h)(t.spatialReference,n)?Ft(t,e,r):Mt(t,e,r)}}function Rt(t,e,n){const r=(0,Y.s)(Pt,n.x,n.y,n.z),o=(0,Y.b)(Pt,r,t.origin);t.applyLocalInverse(o,Et),t.rotation=(0,b.qC)(t.rotation,e,(0,b.Ue)()),t.applyLocalInverse(o,o),(0,Y.b)(o,o,Et),t.translation=(0,Y.a)((0,y.c)(),t.translation,o)}function Ft(t,e,n){const r=t.spatialReference,i=(0,q.rS)(r),s=zt;(0,F.KC)(n,s,i)||(0,F.KC)(t.origin,s,i);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,u=new Float64Array(a.length),f=(0,o.pC)(l)?new Float32Array(l.length):null,p=(0,o.pC)(c)?new Float32Array(c.length):null;(0,F.Bm)(i,s,Ot,i),(0,W.f)(It,Ot);const h=Tt;(0,Y.t)((0,b.ZZ)(Tt),(0,b.ZZ)(e),It),h[3]=e[3],(0,H.XO)(a,r,u),(0,o.pC)(l)&&(0,H.Iz)(l,a,u,r,f),(0,o.pC)(c)&&(0,H.wi)(c,a,u,r,p),Zt(u,h,3,s),(0,H.To)(u,a,r),(0,o.pC)(l)&&(Zt(f,h,3),(0,H.Yk)(f,a,u,r,l)),(0,o.pC)(c)&&(Zt(p,h,4),(0,H.M2)(p,a,u,r,c)),t.vertexAttributesChanged()}function Mt(t,e,n){const r=zt;if(!(0,F.KC)(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,At.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Zt(t.vertexAttributes.position,e,3,r),Zt(t.vertexAttributes.normal,e,3),Zt(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function Zt(t,e,n,r=y.Z){if(!(0,o.Wi)(t)){(0,vt.d)(Ot,(0,b.WH)(e),(0,b.ZZ)(e));for(let e=0;e<t.length;e+=n){for(let n=0;n<3;n++)Pt[n]=t[e+n]-r[n];(0,Y.m)(Pt,Pt,Ot);for(let n=0;n<3;n++)t[e+n]=Pt[n]+r[n]}}}const Pt=(0,y.c)(),Et=(0,y.c)(),Tt=(0,b.Ue)(),Ot=(0,$.c)(),It=(0,G.c)(),zt=(0,y.c)(),Lt=u.Z.getLogger("esri.geometry.support.meshUtils.scale");function St(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if((0,o.pC)(t.transform)){null!=n?.geographic&&n.geographic!==t.transform.geographic&&Lt.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=n?.origin??t.transform.getOriginPoint(r);Nt(t.transform,e,o)}else{const r=(0,M.h)(t.spatialReference,n),o=n&&n.origin||t.origin;r?_t(t,e,o):Ut(t,e,o)}}function Nt(t,e,n){const r=(0,Y.s)(Dt,n.x,n.y,n.z),o=(0,Y.b)(Dt,r,t.origin);t.applyLocalInverse(o,jt);const i=(0,Y.g)((0,y.c)(),t.scale,e);t.scale=i,t.applyLocalInverse(o,o),(0,Y.b)(o,o,jt),t.translation=(0,Y.a)((0,y.c)(),t.translation,o)}function _t(t,e,n){const r=t.spatialReference,i=(0,q.rS)(r),s=Bt;(0,F.KC)(n,s,i)||(0,F.KC)(t.origin,s,i);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,u=new Float64Array(a.length),f=(0,o.pC)(l)?new Float32Array(l.length):null,p=(0,o.pC)(c)?new Float32Array(c.length):null;(0,H.XO)(a,r,u),(0,o.pC)(l)&&(0,H.Iz)(l,a,u,r,f),(0,o.pC)(c)&&(0,H.wi)(c,a,u,r,p),kt(u,e,s),(0,H.To)(u,a,r),(0,o.pC)(l)&&(0,H.Yk)(f,a,u,r,l),(0,o.pC)(c)&&(0,H.M2)(p,a,u,r,c),t.vertexAttributesChanged()}function Ut(t,e,n){const r=Bt;if(!(0,F.KC)(n,r,t.spatialReference)){const e=t.origin;r[0]=e.x,r[1]=e.y,r[2]=e.z,Lt.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}kt(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}function kt(t,e,n=y.Z){if(t)for(let r=0;r<t.length;r+=3){for(let e=0;e<3;e++)Dt[e]=t[r+e]-n[e];(0,Y.g)(Dt,Dt,e);for(let e=0;e<3;e++)t[r+e]=Dt[e]+n[e]}}const Dt=(0,y.c)(),jt=(0,y.c)(),Bt=(0,y.c)();var Wt;const Gt=u.Z.getLogger("esri.geometry.Mesh");let $t=Wt=class extends((0,l.p)(c.Z.LoadableMixin((0,f.v)(d.Z)))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new C.Q,this.type="mesh"}initialize(){((0,o.Wi)(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add((0,h.YP)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((t=>t.clone())),transform:(0,o.pC)(this.transform)?this.transform.clone():null})),(()=>this._set("external",null)),{once:!0,sync:!0}))}))}get hasExtent(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(0===t.length||this.components&&0===this.components.length)return{extent:new i.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new x.Z({x:0,y:0,z:0,spatialReference:e})};const n=(0,o.pC)(this.transform)?this.transform.project(t,e):t;let r=1/0,s=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,f=0,p=0,h=0;const g=n.length,m=1/(g/3);let y=0;for(;y<g;){const t=n[y++],e=n[y++],o=n[y++];r=Math.min(r,t),s=Math.min(s,e),a=Math.min(a,o),l=Math.max(l,t),c=Math.max(c,e),u=Math.max(u,o),f+=m*t,p+=m*e,h+=m*o}return{extent:new i.Z({xmin:r,ymin:s,zmin:a,xmax:l,ymax:c,zmax:u,spatialReference:e}),center:new x.Z({x:f,y:p,z:h,spatialReference:e})}}get anchor(){if((0,o.pC)(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new x.Z({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return(0,o.pC)(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(v.Z.from(t)),this.notifyChange("components")):Gt.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(-1!==e)return this.components.splice(e,1),void this.notifyChange("components")}Gt.error("removeComponent()","Provided component is not part of the list of components")}else Gt.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return(0,b.uT)(Yt.x,t,qt),(0,b.uT)(Yt.y,e,Ht),(0,b.uT)(Yt.z,n,Kt),(0,b.qC)(qt,Ht,qt),(0,b.qC)(qt,Kt,qt),Ct(this,qt,r),this}offset(t,e,n,r){return this.loaded?(Xt[0]=t,Xt[1]=e,Xt[2]=n,X(this,Xt,r),this):(Gt.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(St(this,t,e),this):(Gt.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(E(this,t,e),this):(Gt.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return(0,o.pC)(this.external)&&this.addResolvingPromise(_(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map((n=>n.cloneWithDeduplication(t,e))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:(0,o.pC)(this.transform)?this.transform.clone():null,external:(0,o.pC)(this.external)?{source:this.external.source,extent:(0,o.pC)(this.external.extent)?this.external.extent.clone():null}:null};return new Wt(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await n.e(2346).then(n.bind(n,22346));return e(this,t)}static createBox(t,e){if(!(t instanceof x.Z))return Gt.error(".createBox()","expected location to be a Point instance"),null;const n=new Wt(gt(ot(),t,e));return e&&e.imageFace&&"all"!==e.imageFace?it(n,e.imageFace):n}static createSphere(t,e){return t instanceof x.Z?new Wt(gt(st(e&&e.densificationFactor||0),t,e)):(Gt.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof x.Z?new Wt(gt(at(e&&e.densificationFactor||0),t,e)):(Gt.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){if(!(t instanceof x.Z))return Gt.error(".createPlane()","expected location to be a Point instance"),null;const n=e?.facing??"up",r=lt(n,e?.size);return new Wt(gt(ct(n),t,{...e,size:r}))}static createFromPolygon(t,e){if(!(t instanceof w.Z))return Gt.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=(0,R.bT)(t);return new Wt({vertexAttributes:new C.Q({position:n.position}),components:[new v.Z({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,r){if(!(t instanceof x.Z))throw Gt.error(".createfromGLTF()","expected location to be a Point instance"),new a.Z("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:o}=await(0,p.Hl)(n.e(9404).then(n.bind(n,9404)),r);return new Wt(await o(t,e,r))}static createWithExternalSource(t,e,n){const r=n?.extent??null,o=n?.transform.clone()??new A.Z;o.origin=[t.x,t.y,t.z??0];const i=t.spatialReference;return new Wt({external:{source:e,extent:r},transform:o,spatialReference:i})}static createIncomplete(t,e){const n=e?.transform.clone()??new A.Z;n.origin=[t.x,t.y,t.z??0];const r=t.spatialReference,o=new Wt({transform:n,spatialReference:r});return o.addResolvingPromise(Promise.reject(new a.Z("mesh-incomplete","Mesh resources are not complete"))),o}};(0,s._)([(0,g.Cb)({type:[v.Z],json:{write:!0}})],$t.prototype,"components",void 0),(0,s._)([(0,g.Cb)({type:A.Z,json:{write:!0}})],$t.prototype,"transform",void 0),(0,s._)([(0,g.Cb)({constructOnly:!0})],$t.prototype,"external",void 0),(0,s._)([(0,g.Cb)({readOnly:!0})],$t.prototype,"hasExtent",null),(0,s._)([(0,g.Cb)({readOnly:!0})],$t.prototype,"boundingInfo",null),(0,s._)([(0,g.Cb)({readOnly:!0})],$t.prototype,"anchor",null),(0,s._)([(0,g.Cb)({readOnly:!0})],$t.prototype,"origin",null),(0,s._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],$t.prototype,"extent",null),(0,s._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],$t.prototype,"hasZ",void 0),(0,s._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],$t.prototype,"hasM",void 0),(0,s._)([(0,g.Cb)({type:C.Q,nonNullable:!0,json:{write:!0}})],$t.prototype,"vertexAttributes",void 0),$t=Wt=(0,s._)([(0,m.j)("esri.geometry.Mesh")],$t);const Yt={x:(0,y.f)(1,0,0),y:(0,y.f)(0,1,0),z:(0,y.f)(0,0,1)},qt=(0,b.Ue)(),Ht=(0,b.Ue)(),Kt=(0,b.Ue)(),Xt=(0,y.c)(),Vt=$t;var Jt,Qt;!function(t){t.featureGUID="featureGUID",t.assetName="assetName",t.hash="hash",t.type="type",t.conversionStatus="conversionStatus",t.flags="flags",t.complexity="complexity",t.size="size",t.seqNo="seqNo",t.sourceHash="sourceHash",t.assetURL="assetURL"}(Jt||(Jt={})),function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}(Qt||(Qt={}));var te,ee=n(48169);function ne(t,e,n){const i=n.features;n.features=[],delete n.geometryType;const s=ee["default"].fromJSON(n);s.geometryType="mesh";const a=s.spatialReference,l=(0,o.Wi)(t.outFields)||!t.outFields.length?()=>({}):re(t.outFields.includes("*")?null:new Set(t.outFields));for(const c of i){const t=oe(c,a,e);(0,o.pC)(t)&&s.features.push(new r.Z({geometry:t,attributes:l(c)}))}return s}function re(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}function oe(t,e,n){const{status:r,source:o}=ae(t);if(r===te.FAILED)return null;const s=ie(t,e,n),a=i.Z.fromJSON(t.geometry);a.spatialReference=e;const l=se(t,n);return r===te.PENDING?Vt.createIncomplete(s,{extent:a,transform:l}):Vt.createWithExternalSource(s,o,{extent:a,transform:l})}function ie({attributes:t},e,{transformFieldRoles:n}){return new x.Z({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function se({attributes:t,assetMappings:e},{transformFieldRoles:n}){return new A.Z({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:(0,b.uT)([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!e[Jt.flags]?.includes("PROJECT_VERTICES")})}function ae(t){if(!t.assetMappings)return{status:te.FAILED};const e=[],n=new Map;for(const r of t.assetMappings){const t=r[Jt.seqNo],o=r[Jt.assetName],i=r[Jt.assetURL],s=r[Jt.conversionStatus];if(s===Qt.FAILED)return{status:te.FAILED};if(s!==Qt.COMPLETED)return{status:te.PENDING};if(null==t)e.push({name:o,source:i});else{const r=n.get(o);let s;r?s=r.multipart:(s=[],e.push({name:o,source:{multipart:s}}),n.set(o,{multipart:s})),s[t]=i}}return{status:te.COMPLETED,source:e}}!function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"}(te||(te={}))}}]);
//# sourceMappingURL=5338.70f27d76.js.map