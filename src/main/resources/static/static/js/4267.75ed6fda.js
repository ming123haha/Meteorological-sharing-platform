"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[4267],{64267:function(e,t,n){n.r(t),n.d(t,{FeatureCollectionSnappingSource:function(){return u}});var r=n(61445),o=n(92698),i=n(8693),a=n(58006),c=(n(15055),n(81653),n(94315),n(77623)),p=n(68490);let u=class extends o.Z{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,t){const n=this.layerSource.layer.source;return n.querySnapping?(await n.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:(0,i.pC)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:t})).candidates.map((t=>(0,p.X)(t,e.coordinateHelper,e.elevationInfo))):[]}};(0,r._)([(0,a.Cb)({constructOnly:!0})],u.prototype,"layerSource",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],u.prototype,"availability",null),u=(0,r._)([(0,c.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],u)},68490:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(23007),o=n(83186);function i(e,t,n){switch(e.type){case"edge":return new r.L({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n});case"vertex":return new o.x({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n})}}}}]);
//# sourceMappingURL=4267.75ed6fda.js.map