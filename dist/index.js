"use strict";var s=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var d=s(function(I,y){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist');function O(i,e,u,o,t,q){var n,v,c,a,r,f;if(n=e.data,v=e.accessors[0],i===1||u===0)return r=t.call(q,v(n,o),0,o,n),r===void 0?NaN:r;for(a=o,f=0;f<i&&(c=t.call(q,v(n,a),f,a,n),c===void 0);f++)a+=u;if(f===i)return NaN;for(f+=1,f;f<i;f++)if(a+=u,r=t.call(q,v(n,a),f,a,n),r!==void 0){if(Z(r))return r;(r<c||r===c&&j(r))&&(c=r)}return c}y.exports=O
});var l=s(function(J,m){
var P=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist'),w=require('@stdlib/array-base-arraylike2object/dist'),x=d();function z(i,e,u,o,t,q){var n,v,c,a,r;if(i<=0)return NaN;if(c=w(e),c.accessorProtocol)return x(i,c,u,o,t,q);if(i===1||u===0)return a=t.call(q,e[o],0,o,e),a===void 0?NaN:a;for(v=o,r=0;r<i&&(n=t.call(q,e[v],r,v,e),n===void 0);r++)v+=u;if(r===i)return NaN;for(r+=1,r;r<i;r++)if(v+=u,a=t.call(q,e[v],r,v,e),a!==void 0){if(P(a))return a;(a<n||a===n&&R(a))&&(n=a)}return n}m.exports=z
});var B=s(function(K,p){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(i,e,u,o,t){return D(i,e,u,C(i,u),o,t)}p.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=B(),G=l();F(N,"ndarray",G);module.exports=N;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
