"use strict";(self["webpackChunkeco_friendly"]=self["webpackChunkeco_friendly"]||[]).push([[3124],{10176:function(e,n,t){t.d(n,{Z:function(){return b}});var l=t(61445),a=t(38511),i=t(58006),r=(t(15055),t(81653),t(94315),t(77623)),o=t(60931),s=t(23012),u=t(40483);const c=new a.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let f=class extends o.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,l._)([(0,i.Cb)({type:u.Z,json:{write:!0}})],f.prototype,"baseSymbol",void 0),(0,l._)([(0,i.Cb)({types:s.V,json:{read:{reader:s.i},write:!0}})],f.prototype,"colorRamp",void 0),(0,l._)([(0,i.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"type",void 0),f=(0,l._)([(0,r.j)("esri.rest.support.ClassificationDefinition")],f);const d=f,m=new a.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),p=new a.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let h=class extends d{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"breakCount",void 0),(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"classificationField",void 0),(0,l._)([(0,i.Cb)({type:String,json:{read:m.read,write:m.write}})],h.prototype,"classificationMethod",void 0),(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"normalizationField",void 0),(0,l._)([(0,i.Cb)({json:{read:p.read,write:p.write}})],h.prototype,"normalizationType",void 0),(0,l._)([(0,i.Cb)({value:null,json:{write:!0}})],h.prototype,"standardDeviationInterval",null),(0,l._)([(0,i.Cb)({value:null,json:{write:!0}})],h.prototype,"definedInterval",null),(0,l._)([(0,i.Cb)()],h.prototype,"type",void 0),h=(0,l._)([(0,r.j)("esri.rest.support.ClassBreaksDefinition")],h);const b=h},73124:function(e,n,t){t.d(n,{G2:function(){return B},oF:function(){return L},XL:function(){return D},i5:function(){return C},H0:function(){return M},eT:function(){return w},Qm:function(){return q},Lq:function(){return z},fk:function(){return _},S5:function(){return F},F_:function(){return N},DL:function(){return G}});t(26699);var l=t(10176);function a(e,n){return Number(e.toFixed(n))}function i(e){const{normalizationTotal:n}=e;return{classBreaks:r(e),normalizationTotal:n}}function r(e){const n=e.definition,{classificationMethod:t,breakCount:l,normalizationType:i,definedInterval:r}=n,c=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,n)=>e-n));const h=f[0],b=f[f.length-1];if("equal-interval"===t)if(f.length>=l){const e=(b-h)/l;let n=h;for(let t=1;t<l;t++){const l=a(h+t*e,6);c.push({minValue:n,maxValue:l,label:o(n,l,i)}),n=l}c.push({minValue:n,maxValue:b,label:o(n,b,i)})}else f.forEach((e=>{c.push({minValue:e,maxValue:e,label:o(e,e,i)})}));else if("natural-breaks"===t){const n=s(f),t=e.valueFrequency||n.valueFrequency,r=u(n.uniqueValues,t,l);let d=h;for(let e=1;e<l;e++)if(n.uniqueValues.length>e){const t=a(n.uniqueValues[r[e]],6);c.push({minValue:d,maxValue:t,label:o(d,t,i)}),d=t}c.push({minValue:d,maxValue:b,label:o(d,b,i)})}else if("quantile"===t)if(f.length>=l&&h!==b){let e=h,n=Math.ceil(f.length/l),t=0;for(let a=1;a<l;a++){let r=n+t-1;r>f.length&&(r=f.length-1),r<0&&(r=0),c.push({minValue:e,maxValue:f[r],label:o(e,f[r],i)}),e=f[r],t+=n,n=Math.ceil((f.length-t)/(l-a))}c.push({minValue:e,maxValue:b,label:o(e,b,i)})}else{let e=-1;for(let n=0;n<f.length;n++){const t=f[n];t!==e&&(e=t,c.push({minValue:e,maxValue:t,label:o(e,t,i)}),e=t)}}else if("standard-deviation"===t){const e=m(f),n=p(f,e);if(0===n)c.push({minValue:f[0],maxValue:f[0],label:o(f[0],f[0],i)});else{const t=d(h,b,l,e,n)*n;let r=0,s=h;for(let n=l;n>=1;n--){const l=a(e-(n-.5)*t,6);c.push({minValue:s,maxValue:l,label:o(s,l,i)}),s=l,r++}let u=a(e+.5*t,6);c.push({minValue:s,maxValue:u,label:o(s,u,i)}),s=u,r++;for(let n=1;n<=l;n++)u=r===2*l?b:a(e+(n+.5)*t,6),c.push({minValue:s,maxValue:u,label:o(s,u,i)}),s=u,r++}}else if("defined-interval"===t){if(!r)return c;const e=f[0],n=f[f.length-1],t=Math.ceil((n-e)/r);let l=e;for(let s=1;s<t;s++){const n=a(e+s*r,6);c.push({minValue:l,maxValue:n,label:o(l,n,i)}),l=n}c.push({minValue:l,maxValue:n,label:o(l,n,i)})}return c}function o(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function s(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let r=0;r<e.length;r++){const o=e[r];o===l?(a++,t[i]=a):null!==o&&(n.push(o),l=o,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function u(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let r=0;r<t;r++)a.push(Math.round(r*l/t-1));a.push(l-1);let i=c(a,e,n,t);return f(i.mean,i.sdcm,a,e,n,t)&&(i=c(a,e,n,t)),a}function c(e,n,t,l){let a=[],i=[],r=[],o=0;const s=[],u=[];for(let m=0;m<l;m++){const l=h(m,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),o+=u[m]}let c,f=o,d=!0;for(;d||o<f;){d=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=n[a],t>0&&a!==e[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){e[t+1]=a-1;break}f=o,o=0,i=[],r=[];for(let a=0;a<l;a++){i.push(s[a]),r.push(u[a]);const l=h(a,e,n,t);s[a]=l.sbMean,u[a]=l.sbSdcm,o+=u[a]}}if(o>f){for(let n=0;n<l;n++)e[n]=a[n],s[n]=i[n],u[n]=r[n];o=f}return{mean:s,sdcm:u}}function f(e,n,t,l,a,i){let r=0,o=0,s=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<i-1;f++)for(;t[f+1]+1!==t[f+2];){t[f+1]=t[f+1]+1;const i=h(f,t,l,a);s=i.sbMean,r=i.sbSdcm;const d=h(f+1,t,l,a);if(u=d.sbMean,o=d.sbSdcm,!(r+o<n[f]+n[f+1])){t[f+1]=t[f+1]-1;break}n[f]=r,n[f+1]=o,e[f]=s,e[f+1]=u,c=!0}for(let f=i-1;f>0;f--)for(;t[f]!==t[f-1]+1;){t[f]=t[f]-1;const i=h(f-1,t,l,a);s=i.sbMean,r=i.sbSdcm;const d=h(f,t,l,a);if(u=d.sbMean,o=d.sbSdcm,!(r+o<n[f-1]+n[f])){t[f]=t[f]+1;break}n[f-1]=r,n[f]=o,e[f-1]=s,e[f]=u,c=!0}}return c}function d(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}function m(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}function p(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}function h(e,n,t,l){let a=0,i=0;for(let s=n[e]+1;s<=n[e+1];s++){const e=l[s];a+=t[s]*e,i+=e}i<=0&&console.log("Exception in Natural Breaks calculation");const r=a/i;let o=0;for(let s=n[e]+1;s<=n[e+1];s++)o+=l[s]*(t[s]-r)**2;return{sbMean:r,sbSdcm:o}}const b="equal-interval",v=1,V=5,y=10,g=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,x=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),T=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function F(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function M(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,l={count:t};return e.supportsNullCount&&(l.nullcount=n.length-t),e.percentileParams&&(l.median=D(n,e.percentileParams)),l}function C(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=null,o=null,s=null,u=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=f&&p<=d&&(r+=p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=r){o=r/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=d&&(e+=(t-o)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const m={avg:o,count:c,max:i,min:a,stddev:s,sum:r,variance:u};return l&&(m.nullcount=n.length-c),e.percentileParams&&(m.median=D(n,e.percentileParams)),m}function D(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,r=z(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>r(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const o=(e.length-1)*l,s=Math.floor(o),u=s+1,c=o%1,f=e[s],d=e[u];return u>=e.length||i||"string"==typeof f||"string"==typeof d?f:f*(1-c)+d*c}function z(e,n){const t=n?1:-1,l=k(n),a=I(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...x].includes(e))return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t;if("esriFieldTypeDate"===e)return(e,n)=>{const a=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(a)||isNaN(i)?t:l(a,i)};if(x.has(e))return(e,n)=>l(e,n);if("esriFieldTypeString"===e)return(e,n)=>a(e,n);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=I(n);return(n,t)=>e(S(n),S(t))}return n?(e,n)=>1:(e,n)=>-1}function I(e){return e?(e,n)=>(e=e?.toUpperCase(),n=n?.toUpperCase(),e>n?-1:e<n?1:0):(e,n)=>(e=e?.toUpperCase(),n=n?.toUpperCase(),e<n?-1:e>n?1:0)}function k(e){return e?(e,n)=>n-e:(e,n)=>e-n}function S(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function N(e,n){let t;for(t in e)T.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function w(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function q(e,n,t){const l=e.count,a=[];t&&n&&"coded-value"===n.type&&n.codedValues.forEach((e=>{const n=e.code;l.hasOwnProperty(n)||(l[n]={data:n,count:0})}));for(const i in l){const e=l[i];a.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:a}}function _(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function B(e,n){const t=E({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||V});return e=j(e,n.minValue,n.maxValue),i({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function j(e,n,t){return n=null==n?-1/0:n,t=null==t?1/0:t,e.filter((e=>Number.isFinite(e)&&e>=n&&e<=t))}function E(e){const n=e.field,t=e.classificationMethod||b,a=e.normalizationType,i=e.normalizationField,r=new l.Z;return r.classificationField=n,r.breakCount=e.breakCount,r.classificationMethod=t,r.standardDeviationInterval="standard-deviation"===t?e.standardDeviationInterval||v:void 0,r.normalizationType=a,r.normalizationField="field"===a?i:void 0,r}function G(e,n){let t=e.classBreaks;const l=t.length,a=t[0].minValue,i=t[l-1].maxValue,r="standard-deviation"===n,o=g;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(r&&n){const e=n.match(o).map((e=>+e.trim()));2===e.length?(t.minStdDev=e[0],t.maxStdDev=e[1],e[0]<0&&e[1]>0&&(t.hasAvg=!0)):1===e.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=e[0]):n.includes(">")&&(t.minStdDev=e[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function L(e,n){const{min:t,max:l,intervals:a}=P(e,n),i=a.map(((e,n)=>({minValue:a[n][0],maxValue:a[n][1],count:0})));for(const r of e)if(null!=r&&r>=t&&r<=l){const e=U(a,r);e>-1&&i[e].count++}return{bins:i,minValue:t,maxValue:l,normalizationTotal:n.normalizationTotal}}function P(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:r,normalizationTotal:o,minValue:s,maxValue:u}=n,c=n.numBins||y;let f=null,d=null,m=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=B(e,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:u,numClasses:c});f=n[0].minValue,d=n[n.length-1].maxValue,m=n.map((e=>[e.minValue,e.maxValue]))}else{if(null!=s&&null!=u)f=s,d=u;else{const n=C({values:e,minValue:s,maxValue:u,useSampleStdDev:!i,supportsNullCount:F({normalizationType:i,normalizationField:r,minValue:s,maxValue:u})});f=n.min,d=n.max}m=O(f,d,c)}return{min:f,max:d,intervals:m}}function U(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}function O(e,n,t){const l=(n-e)/t,a=[];let i,r=e;for(let o=1;o<=t;o++)i=r+l,i=Number(i.toFixed(16)),a.push([r,o===t?n:i]),r=i;return a}}}]);
//# sourceMappingURL=3124.794fdc62.js.map