"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[9236],{90863:function(e,t,i){i.d(t,{L:function(){return m},b:function(){return _}});var n=i(51802),s=i(94370),r=i(47001),a=i(12686),o=i(38486),l=i(8953),c=i(73893),h=i(65982),d=i(74824),u=i(63914),p=i(30150);function _(e){const t=new u.kG;t.include(o.j,e);const{vertex:i,fragment:s}=t;return i.uniforms.add([new d.g("modelView",((e,t)=>(0,n.j)(g,t.camera.viewMatrix,e.origin))),new d.g("proj",((e,t)=>t.camera.projectionMatrix)),new c.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new l.A("pixelToNDC",((e,t)=>(0,r.a)(f,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))]),t.attributes.add(p.T.START,"vec3"),t.attributes.add(p.T.END,"vec3"),t.attributes.add(p.T.UP,"vec3"),t.attributes.add(p.T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(h.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),s.uniforms.add(new c.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),s.code.add(h.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}const f=(0,a.a)(),g=(0,s.c)(),m=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},71835:function(e,t,i){i.d(t,{L:function(){return P},b:function(){return m},d:function(){return g}});var n=i(67752),s=i(8693),r=i(47001),a=i(12686),o=i(38486),l=i(84992),c=i(8953),h=i(4240),d=i(69310),u=i(73893),p=i(36538),_=i(65982),f=i(63914);const g=(0,n.Vl)(6);function m(e){const t=new f.kG;t.extensions.add("GL_OES_standard_derivatives"),t.include(l.k),t.include(o.j,e);const i=t.fragment;return e.heightManifoldEnabled&&i.uniforms.add(new d.y("heightPlane")),e.pointDistanceEnabled&&i.uniforms.add(new d.y("pointDistanceSphere")),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new d.y("lineVerticalPlane")),i.uniforms.add(new h.K("lineVerticalStart")),i.uniforms.add(new h.K("lineVerticalEnd"))),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&i.uniforms.add(new p.d("maxPixelDistance")),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&i.code.add(_.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.pointDistanceEnabled&&i.code.add(_.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.intersectsLineEnabled&&(i.uniforms.add(new h.K("intersectsLineStart")),i.uniforms.add(new h.K("intersectsLineEnd")),i.uniforms.add(new h.K("intersectsLineDirection")),i.uniforms.add(new p.d("intersectsLineRadius")),i.uniforms.add(new u.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(_.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(_.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(_.H`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled&&(i.uniforms.add(new c.A("angleCutoff",(e=>b(e)))),i.code.add(_.H`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`)),e.pointDistanceEnabled&&(i.uniforms.add(new c.A("angleCutoff",(e=>b(e)))),i.code.add(_.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new c.A("angleCutoff",(e=>b(e)))),i.code.add(_.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new c.A("angleCutoff",(e=>b(e)))),i.code.add(_.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(_.H`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}function b(e){const t=(0,s.pC)(e.angleCutoff)?e.angleCutoff:g;return(0,r.a)(v,Math.cos(t),Math.cos(Math.max(0,t-(0,n.Vl)(2))))}const v=(0,a.a)(),P=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:g,build:m},Symbol.toStringTag,{value:"Module"}))},95615:function(e,t,i){i.d(t,{W:function(){return Y}});var n=i(8693),s=i(65554),r=i(74674),a=i(16160),o=i(11725),l=i(67752),c=i(97848),h=i(85381),d=i(81692),u=i(70054),p=i(54550),_=i(23573),f=i(4717),g=(i(48675),i(3462),i(37380),i(1118),i(4178)),m=i(96884),b=i(30150),v=i(68205),P=i(20572),y=i(7436),V=i(90863),x=i(17923),E=i(9408);class w extends P.A{initializeProgram(e){const t=w.shader.get().build(this.configuration);return new y.$(e.rctx,t,w.attributeLocations)}initializePipeline(){return(0,E.sm)({blending:(0,E["if"])(x.zi.ONE,x.zi.ONE_MINUS_SRC_ALPHA),colorWrite:E.BK})}}w.shader=new v.J(V.L,(()=>i.e(3406).then(i.bind(i,43406)))),w.attributeLocations=new Map([[b.T.START,0],[b.T.END,1],[b.T.UP,2],[b.T.EXTRUDE,3]]);var L=i(15625),D=i(50659);class C{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,r.c)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=new Float64Array(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,s.s)(this._origin,e[t+0],e[t+1],e[t+2])}else(0,s.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);(0,n.pC)(t)&&(e.bindVAO(t),e.drawArrays(x.MX.TRIANGLES,0,this._count))}dispose(){(0,n.pC)(this._vao)&&this._vao.dispose()}_ensureVAO(e){return(0,n.Wi)(this._buffers)?null:((0,n.Wi)(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new D.U(e,w.attributeLocations,{data:(0,g.K)(A)},{data:L.f.createVertex(e,x.l1.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data.setData(i),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=A.createBuffer(t),n=this._origin;let r=0,a=0;for(const o of e){for(let e=0;e<o.length;e+=3){const t=(0,s.s)(R,o[e+0],o[e+1],o[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,a);const l=this._renderCoordsHelper.worldUpAtPosition(t,S),c=r+2*e,h=(0,s.b)(R,t,n);if(e<o.length-3){i.up.setVec(c,l),i.up.setVec(c+3,l),i.up.setVec(c+5,l);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c+0,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0){i.up.setVec(c-2,l),i.up.setVec(c-4,l),i.up.setVec(c-5,l);for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}}r+=this._numberOfRenderVertices(o)}return i.buffer}}const S=(0,r.c)(),R=(0,r.c)(),A=(0,m.U$)().vec3f(b.T.START).vec3f(b.T.END).vec3f(b.T.UP).vec2f(b.T.EXTRUDE);var M=i(52872),T=i(75633),z=i(34590),U=i(61445),q=i(33274);class I extends q.m{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,U._)([(0,q.o)()],I.prototype,"contrastControlEnabled",void 0);i(65982);var O=i(85018),W=i(71835);class H extends P.A{initializeProgram(e){const t=H.shader.get().build(this.configuration);return new y.$(e.rctx,t,O.i)}initializePipeline(){return(0,E.sm)({blending:(0,E["if"])(x.zi.ONE,x.zi.ONE_MINUS_SRC_ALPHA),colorWrite:E.BK})}}H.shader=new v.J(W.L,(()=>i.e(8001).then(i.bind(i,60500))));class j extends I{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}(0,U._)([(0,q.o)()],j.prototype,"heightManifoldEnabled",void 0),(0,U._)([(0,q.o)()],j.prototype,"pointDistanceEnabled",void 0),(0,U._)([(0,q.o)()],j.prototype,"lineVerticalPlaneEnabled",void 0),(0,U._)([(0,q.o)()],j.prototype,"intersectsLineEnabled",void 0);const G=(0,r.c)(),N=(0,h.c)(),F={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:(0,l.Vl)(6),globalAlphaContrastBoost:2,__tagStrict:"NoParameters"};function B(e,t,i,n){const r=G,a=N;(0,s.m)(r,t,n),(0,s.c)(a,i),a[3]=0,(0,c.t)(a,a,n),(0,p.Yq)(r,a,e)}class k{constructor(e,t={},i={contrastControlEnabled:!1}){this._renderCoordsHelper=e,this._config=i,this._technique=null,this._heightManifoldEnabled=!1,this._heightManifoldTarget=(0,r.c)(),this._pointDistanceEnabled=!1,this._pointDistanceOrigin=(0,r.c)(),this._pointDistanceTarget=(0,r.c)(),this._lineVerticalPlaneEnabled=!1,this._lineVerticalPlaneSegment=(0,a.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineSegment=(0,a.Ue)(),this._intersectsLineRadius=3,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._tempNormal=(0,r.c)(),this._tempDir=(0,r.c)(),this._tempUp=(0,r.c)(),this._tempVec3A=(0,r.c)(),this._tempVec3B=(0,r.c)(),this._tempVec4=(0,h.c)(),this._tempPlane=(0,p.Ue)(),this._tempSphere=(0,f.c)(),this._parameters=(0,z.Uf)(t,F)}get renderSlots(){return[this._config.contrastControlEnabled?T.r.LASERLINES_CONTRAST_CONTROL:T.r.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._heightManifoldTarget}set heightManifoldTarget(e){(0,s.c)(this._heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._pointDistanceTarget}set pointDistanceTarget(e){(0,s.c)(this._pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._pointDistanceOrigin}set pointDistanceOrigin(e){(0,s.c)(this._pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,a.JG)(e,this._lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._intersectsLineSegment}set intersectsLineSegment(e){(0,a.JG)(e,this._intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._intersectsLineRadius}set intersectsLineRadius(e){e!==this._intersectsLineRadius&&(this._intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,(0,n.pC)(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){(0,n.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new C(this._renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){(0,n.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new C(this._renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){(0,z.LO)(this._parameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e;const t=e.renderContext.rctx;this._quadVAO=(0,M.ow)(t),this._techniqueRepository=e.shaderTechniqueRepository,this._techniqueConfig=new j;const i=new I;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(w,i)}uninitializeRenderContext(){this._quadVAO=(0,n.O3)(this._quadVAO),this._technique=(0,n.RY)(this._technique),this._pathVerticalPlaneData=(0,n.O3)(this._pathVerticalPlaneData),this._pathTechnique=(0,n.RY)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._technique=this._techniqueRepository.releaseAndAcquire(H,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const i=e.rctx,n=i.bindTechnique(t,this._parameters,e.bindParameters);this._bindGlobalUniforms(e,n),this._bindHeightManifoldUniforms(e,n),this._bindPointDistanceUniforms(e,n),this._bindLineVerticalPlaneUniforms(e,n),this._bindIntersectsLineUniforms(e,n),i.bindVAO(this._quadVAO),i.drawArrays(x.MX.TRIANGLE_STRIP,0,4)}_renderPath(e){if((0,n.Wi)(this._pathVerticalPlaneData)||(0,n.Wi)(this._pathTechnique))return;const t=e.rctx,i=this._pathTechnique,s=t.bindTechnique(i,{...this._parameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters);this._bindGlobalUniforms(e,s),this._pathVerticalPlaneData.draw(e.rctx)}_bindHeightManifoldUniforms(e,t){if(!this.heightManifoldEnabled)return;const i=this._tempVec3A,n=this._tempPlane,s=e.bindParameters.camera;this._renderCoordsHelper.worldUpAtPosition(this._heightManifoldTarget,i),B(n,this._heightManifoldTarget,i,s.viewMatrix),t.setUniform4fv("heightPlane",n)}_bindPointDistanceUniforms(e,t){if(!this._pointDistanceEnabled)return;const i=e.bindParameters.camera,n=this._tempSphere;(0,s.c)(n,this._pointDistanceOrigin),(0,s.m)(n,n,i.viewMatrix),n[3]=(0,s.i)(this._pointDistanceOrigin,this._pointDistanceTarget),t.setUniform4f("pointDistanceSphere",n[0],n[1],n[2],n[3])}_bindLineVerticalPlaneUniforms(e,t){if(!this._lineVerticalPlaneEnabled)return;const i=this._renderCoordsHelper,n=e.bindParameters.camera,r=this._tempPlane,o=this._tempVec3A,l=this._tempUp,c=this._tempDir,h=this._tempNormal;(0,a.KU)(this._lineVerticalPlaneSegment,.5,o),i.worldUpAtPosition(o,l),(0,s.n)(c,this._lineVerticalPlaneSegment.vector),(0,s.f)(h,l,c),(0,s.n)(h,h),B(r,this._lineVerticalPlaneSegment.origin,h,n.viewMatrix),t.setUniform4fv("lineVerticalPlane",r);const d=this._tempVec3A;(0,s.c)(d,this._lineVerticalPlaneSegment.origin),i.setAltitude(d,0),(0,s.m)(d,d,n.viewMatrix),t.setUniform3fv("lineVerticalStart",d);const u=this._tempVec3B;(0,s.a)(u,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector),i.setAltitude(u,0),(0,s.m)(u,u,n.viewMatrix),t.setUniform3fv("lineVerticalEnd",u)}_bindIntersectsLineUniforms(e,t){if(!this._intersectsLineEnabled)return;const i=J,n=X,r=e.bindParameters.camera;if(this._intersectsLineInfinite){if((0,d.iL)((0,_.re)(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),K),K.c0=-Number.MAX_VALUE,!(0,u.zq)(r.frustum,K))return;(0,d.Ws)(K,i),(0,d.S$)(K,n)}else(0,s.c)(i,this._intersectsLineSegment.origin),(0,s.a)(n,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);const a=this._tempVec3A;(0,s.m)(a,i,r.viewMatrix),t.setUniform3fv("intersectsLineStart",a);const o=this._tempVec4;(0,s.c)(o,this._intersectsLineSegment.vector),this._tempVec4[3]=0,(0,c.t)(this._tempVec4,this._tempVec4,r.viewMatrix),(0,s.m)(n,n,r.viewMatrix),t.setUniform3fv("intersectsLineEnd",n),(0,s.n)(o,o),t.setUniform3f("intersectsLineDirection",o[0],o[1],o[2]),t.setUniform1f("intersectsLineRadius",this._intersectsLineRadius)}_bindGlobalUniforms(e,t){const i=e.bindParameters.camera;this._heightManifoldEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._heightManifoldTarget)):this._pointDistanceEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin)),t.bindTexture("frameColor",e.offscreenRenderingHelper.mainColorTexture)}_requestRender(){this._context&&this._context.requestRender()}}const K=(0,d.Ue)(),J=(0,r.c)(),X=(0,r.c)();class Y extends o.l{constructor(e){super(e.view),this._angleCutoff=W.d,this._style={},this._heightManifoldTarget=(0,r.c)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,a.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this.renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){(0,n.pC)(e)?((0,s.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if((0,n.Wi)(e))return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,$);this.intersectsLine=(0,a.al)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){(0,n.pC)(e)?((0,a.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=(0,n.pC)(e)?(0,a.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=(0,n.pC)(e)?{origin:(0,r.a)(e.origin),target:(0,r.a)(e.target)}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||(0,n.pC)(this._pointDistanceLine)||(0,n.pC)(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){(0,n.pC)(this.renderer)||(this.renderer=new k(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))}_syncStyle(){(0,n.Wi)(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){(0,n.Wi)(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){(0,n.Wi)(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){(0,n.Wi)(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){(0,n.Wi)(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){(0,n.Wi)(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=(0,n.pC)(this._pathVerticalPlaneBuffers)&&this.visible,(0,n.pC)(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){(0,n.Wi)(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=(0,n.pC)(this._lineVerticalPlaneSegment)&&this.visible,(0,n.pC)(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){(0,n.Wi)(this.renderer)||(this.renderer.pointDistanceEnabled=(0,n.pC)(this._pointDistanceLine)&&this.visible,(0,n.pC)(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target))}_disposeRenderer(){(0,n.pC)(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)}}const $=(0,r.c)()},76102:function(e,t,i){i.d(t,{L:function(){return w}});var n=i(67752),s=i(8693),r=i(65554),a=i(74674),o=i(97848),l=i(85381),c=i(47608),h=i(37740),d=i(62069),u=i(18105),p=i(81789),_=i(30505),f=i(14172),g=i(49162),m=i(49491);class b{constructor(e){this.resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return(0,s.pC)(this._resources)?this._resources.object:null}get resources(){return(0,s.pC)(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this.resourceFactory.recreateGeometry)return void this.recreate();const e=this.resourceFactory.view._stage;if((0,s.Wi)(this._resources)||!e)return;const t=this._resources.object;this._resources.external.forEach((t=>{t.type===_.U.Geometry&&e.remove(t)})),t.removeAllGeometries();const i=this.resourceFactory.recreateGeometry(this._resources.external,t,this._resources.layer);e.addMany(i)}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this.resourceFactory,t=e.view,i=t._stage;if(!i)return;const n=new m.F({isPickable:!1,updatePolicy:p.jq.SYNC});i.add(n);const s=new f.T({castShadow:!1}),r=e.createResources(s,n);r.forEach((e=>{i.add(e),e instanceof g.x&&i.loadImmediate(e)})),i.add(s),n.add(s);const a=e.cameraChanged?(0,u.YP)((()=>t.state.camera),(t=>e.cameraChanged(t)),u.nn):null;this._resources={layer:n,object:s,external:r,cameraHandle:a},this._syncVisible()}_destroyResources(){if((0,s.Wi)(this._resources))return;const e=this.resourceFactory.view._stage;e?.remove(this._resources.object),e?.remove(this._resources.layer),this._resources.external.forEach((t=>{e?.remove(t),"dispose"in t&&t.dispose()})),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null}_syncVisible(){(0,s.Wi)(this._resources)||this._resources.object.setVisible(this._visible)}}var v=i(6877),P=i(83494),y=i(80370),V=i(59546),x=i(30150),E=i(1373);class w{constructor(e){this.view=null,this._geometry=null,this._size=3,this._color=(0,l.f)(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=(0,l.f)(1,1,1,1),this._elevationInfo=null,this.resources=new b({view:e.view,createResources:e=>this._createResources(e),recreateGeometry:(e,t)=>(e.geometry=this._recreateGeometry(t,e.material),(0,s.pC)(e.geometry)?[e.geometry]:[])});let t=!0;for(const i in e)i in this?"attached"===i?t=e[i]:this[i]=e[i]:console.error("Cannot set unknown property",i);this.attached=t}destroy(){this.resources.destroy()}get visible(){return this.resources.visible}set visible(e){this.resources.visible=e}get attached(){return this.resources.attached}set attached(e){this.resources.attached=e}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.resources.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this.preferredTextureSize;this._size=e,t<this.preferredTextureSize?(0,s.pC)(this.resources)&&this.resources.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){(0,o.g)(e,this._color)||((0,o.c)(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,(0,s.pC)(this.resources)&&this.resources.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){(0,o.g)(e,this._outlineColor)||((0,o.c)(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.resources&&this.resources.recreateGeometry()}_updateMaterial(){const e=this.resources.resources;(0,s.Wi)(e)||e.material.setParameters(this._materialParameters(e.texture.id))}_updateSizeAttribute(){const e=this.resources.resources,t=this.resources.object;if((0,s.Wi)(e)||(0,s.Wi)(t))return;const i=e.geometry;if((0,s.Wi)(i))return;const n=i.getMutableAttribute(x.T.SIZE).data,r=this.geometrySize;n[0]=r,n[1]=r,t.geometryVertexAttrsUpdated(t.geometryRecords[0])}_materialParameters(e){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:D,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:e,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get geometrySize(){return this._size/L}_recreateGeometry(e,t){const i=this._createRenderGeometry();return(0,s.pC)(i)&&e.addGeometry(i,t),i}_createResources(e){const t=(0,y.cU)(this._primitive,this.preferredTextureSize),i=new E.A(this._materialParameters(t.id)),n=this._recreateGeometry(e,i);return{material:i,texture:t,geometry:n,forEach(e){e(t),e(i),(0,s.pC)(this.geometry)&&e(this.geometry)}}}get preferredTextureSize(){return(0,n.uZ)((0,n.Sf)(2*this.geometrySize),16,128)}calculateMapBounds(e){if((0,s.Wi)(this.resources.resources)||(0,s.Wi)(this.resources.resources.geometry))return!1;const t=this.resources.resources.geometry.vertexAttributes.get(x.T.POSITION);return(0,c.SH)(t.data,this.view.renderCoordsHelper.spatialReference,C,this.view.spatialReference),(0,h.G1)(e,C),!0}_createRenderGeometry(){const e=this.geometry;if((0,s.Wi)(e))return null;const{renderCoordsHelper:t,elevationProvider:i}=this.view,n=(0,v.w7)(e,i,P.o.fromElevationInfo(this.elevationInfo),t),a=(0,r.s)(d.WM.get(),e.x,e.y,n),o=d.WM.get();(0,c.SH)(a,e.spatialReference,o,t.spatialReference);const l=this.geometrySize;return V.Z.createPointGeometry(null,o,null,[l,l],[0,0,0,1])}}const L=y.Ns,D=[L/2,L/2,1-L/2,1-L/2],C=(0,a.c)()},38486:function(e,t,i){i.d(t,{j:function(){return u}});var n=i(8693),s=i(9804),r=i(9674),a=i(8953),o=i(19207),l=i(73893),c=i(65982),h=i(84970),d=i(39578);function u(e,t){e.extensions.add("GL_OES_standard_derivatives");const i=e.fragment;i.include(s.S),e.include(r.G),i.uniforms.add([new l.p("globalAlpha",(e=>e.globalAlpha)),new o.J("glowColor",(e=>e.glowColor)),new l.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new l.p("glowFalloff",(e=>e.glowFalloff)),new o.J("innerColor",(e=>e.innerColor)),new l.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new h.A("depthMap",((e,t)=>t.linearDepthTexture)),new a.A("nearFar",((e,t)=>t.camera.nearFar)),new d.Q("frameColor")]),i.code.add(c.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(c.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(c.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(c.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),t.contrastControlEnabled?(i.uniforms.add(new l.p("globalAlphaContrastBoost",(e=>(0,n.pC)(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),i.code.add(c.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(c.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);
//# sourceMappingURL=9236.066c72c7.js.map