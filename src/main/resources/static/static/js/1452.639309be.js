"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[1452],{11452:function(e,n,t){t.r(n),t.d(n,{hydratedAdapter:function(){return c}});var a=t(50157),o=t(72779),i=t(49304),r=t(91407),s=t(43564);const c={convertToGEGeometry:h,exportPoint:u,exportPolygon:x,exportPolyline:f,exportMultipoint:l,exportExtent:p};function h(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function u(e,n,t){const a=e.hasZ(n),o=e.hasM(n),r=new i.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(r.z=e.getPointZ(n)),o&&(r.m=e.getPointM(n)),r.cache._geVersion=n,r}function x(e,n,t){const a=new r.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a}function f(e,n,t){const a=new s.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a}function l(e,n,t){const a=new o.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a}function p(e,n,t){const o=e.hasZ(n),i=e.hasM(n),r=new a.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);r.zmin=t.vmin,r.zmax=t.vmax}if(i){const t=e.getMExtent(n);r.mmin=t.vmin,r.mmax=t.vmax}return r.cache._geVersion=n,r}}}]);
//# sourceMappingURL=1452.639309be.js.map