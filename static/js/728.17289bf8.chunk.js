(self.webpackChunkweb3_blog=self.webpackChunkweb3_blog||[]).push([[728],{75728:function(e,t,n){"use strict";n.r(t),n.d(t,{AlchemyWebSocketProvider:function(){return C},getAlchemyEventTag:function(){return P}});var r=n(37762),s=n(97326),i=n(11752),o=n(61120),a=n(60136),c=n(29388),u=n(74165),l=n(42982),h=n(15671),f=n(43144),d=n(68514),p=n(19560),v=n(38862),b=n(33372),m=n(10524),y=(n(59926),function(){function e(t){(0,h.Z)(this,e),this.provider=t,this.maxBackfillBlocks=120}return(0,f.Z)(e,[{key:"getNewHeadsBackfill",value:function(e,t,n){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,i,o,a,c;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return x(e),r.next=3,this.getBlockNumber();case 3:if(s=r.sent,x(e),0!==t.length){r.next=7;break}return r.abrupt("return",this.getHeadEventsInRange(Math.max(n,s-this.maxBackfillBlocks)+1,s+1));case 7:if(i=(0,d.f)(t[t.length-1].number),o=s-this.maxBackfillBlocks+1,!(i<=o)){r.next=11;break}return r.abrupt("return",this.getHeadEventsInRange(o,s+1));case 11:return r.next=13,this.getReorgHeads(e,t);case 13:return a=r.sent,x(e),r.next=17,this.getHeadEventsInRange(i+1,s+1);case 17:return c=r.sent,x(e),r.abrupt("return",[].concat((0,l.Z)(a),(0,l.Z)(c)));case 20:case"end":return r.stop()}}),r,this)})))}},{key:"getLogsBackfill",value:function(e,t,n,r){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function s(){var i,o,a,c,h,f,p;return(0,u.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return x(e),s.next=3,this.getBlockNumber();case 3:if(i=s.sent,x(e),0!==n.length){s.next=7;break}return s.abrupt("return",this.getLogsInRange(t,Math.max(r,i-this.maxBackfillBlocks)+1,i+1));case 7:if(o=(0,d.f)(n[n.length-1].blockNumber),a=i-this.maxBackfillBlocks+1,!(o<a)){s.next=11;break}return s.abrupt("return",this.getLogsInRange(t,a,i+1));case 11:return s.next=13,this.getCommonAncestor(e,n);case 13:return c=s.sent,x(e),h=n.filter((function(e){return(0,d.f)(e.blockNumber)>c.blockNumber})).map((function(e){return Object.assign(Object.assign({},e),{removed:!0})})),f=c.blockNumber===Number.NEGATIVE_INFINITY?(0,d.f)(n[0].blockNumber):c.blockNumber,s.next=19,this.getLogsInRange(t,f,i+1);case 19:return p=(p=s.sent).filter((function(e){return e&&((0,d.f)(e.blockNumber)>c.blockNumber||(0,d.f)(e.logIndex)>c.logIndex)})),x(e),s.abrupt("return",[].concat((0,l.Z)(h),(0,l.Z)(p)));case 23:case"end":return s.stop()}}),s,this)})))}},{key:"setMaxBackfillBlock",value:function(e){this.maxBackfillBlocks=e}},{key:"getBlockNumber",value:function(){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.send("eth_blockNumber");case 2:return t=e.sent,e.abrupt("return",(0,d.f)(t));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getHeadEventsInRange",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i,o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e>=t)){n.next=2;break}return n.abrupt("return",[]);case 2:for(r=[],s=e;s<t;s++)r.push({method:"eth_getBlockByNumber",params:[(0,d.t)(s),!1]});return n.next=6,this.provider.sendBatch(r);case 6:return i=n.sent,o=i.reduce((function(e,t){return e.concat(t)}),[]),n.abrupt("return",o.map(k));case 9:case"end":return n.stop()}}),n,this)})))}},{key:"getReorgHeads",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i,o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],s=t.length-1;case 2:if(!(s>=0)){n.next=14;break}return i=t[s],n.next=6,this.getBlockByNumber((0,d.f)(i.number));case 6:if(o=n.sent,x(e),i.hash!==o.hash){n.next=10;break}return n.abrupt("break",14);case 10:r.push(k(o));case 11:s--,n.next=2;break;case 14:return n.abrupt("return",r.reverse());case 15:case"end":return n.stop()}}),n,this)})))}},{key:"getBlockByNumber",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.provider.send("eth_getBlockByNumber",[(0,d.t)(e),!1]));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getCommonAncestor",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getBlockByNumber((0,d.f)(t[t.length-1].blockNumber));case 2:r=n.sent,x(e),s=t.length-1;case 5:if(!(s>=0)){n.next=16;break}if((i=t[s]).blockNumber===r.number){n.next=11;break}return n.next=10,this.getBlockByNumber((0,d.f)(i.blockNumber));case 10:r=n.sent;case 11:if(i.blockHash!==r.hash){n.next=13;break}return n.abrupt("return",{blockNumber:(0,d.f)(i.blockNumber),logIndex:(0,d.f)(i.logIndex)});case 13:s--,n.next=5;break;case 16:return n.abrupt("return",{blockNumber:Number.NEGATIVE_INFINITY,logIndex:Number.NEGATIVE_INFINITY});case 17:case"end":return n.stop()}}),n,this)})))}},{key:"getLogsInRange",value:function(e,t,n){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t>=n)){r.next=2;break}return r.abrupt("return",[]);case 2:return s=Object.assign(Object.assign({},e),{fromBlock:(0,d.t)(t),toBlock:(0,d.t)(n-1)}),r.abrupt("return",this.provider.send("eth_getLogs",[s]));case 4:case"end":return r.stop()}}),r,this)})))}}]),e}());function k(e){var t=Object.assign({},e);return delete t.totalDifficulty,delete t.transactions,delete t.uncles,t}function g(e){return E(e,(function(e){return e.hash}))}function w(e){return E(e,(function(e){return"".concat(e.blockHash,"/").concat(e.logIndex)}))}function E(e,t){var n=new Set,r=[];return e.forEach((function(e){var s=t(e);n.has(s)||(n.add(s),r.push(e))})),r}var _=new Error("Cancelled");function x(e){if(e())throw _}var I="alchemy-pending-transactions",B=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,h.Z)(this,n),t.apply(this,arguments)}return(0,f.Z)(n,[{key:"fromAddress",get:function(){var e=this.tag.split(":");if(e[0]===I)return e[1]&&"*"!==e[1]?T(e[1]):void 0}},{key:"toAddress",get:function(){var e=this.tag.split(":");if(e[0]===I)return e[2]&&"*"!==e[2]?T(e[2]):void 0}},{key:"hashesOnly",get:function(){var e=this.tag.split(":");if(e[0]===I)return e[3]&&"*"!==e[3]?"true"===e[3]:void 0}}]),n}(function(){function e(t,n,r){(0,h.Z)(this,e),this.listener=n,this.tag=t,this.once=r,this._lastBlockNumber=-2,this._inflight=!1}return(0,f.Z)(e,[{key:"event",get:function(){switch(this.type){case"tx":return this.hash;case"filter":return this.filter;default:return this.tag}}},{key:"type",get:function(){return this.tag.split(":")[0]}},{key:"hash",get:function(){var e=this.tag.split(":");if("tx"!==e[0])throw new Error("Not a transaction event");return e[1]}},{key:"filter",get:function(){var e=this.tag.split(":");if("filter"!==e[0])throw new Error("Not a transaction event");var t=e[1],n=function(e){if(""===e)return[];return e.split(/&/g).map((function(e){if(""===e)return[];var t=e.split("|").map((function(e){return"null"===e?null:e}));return 1===t.length?t[0]:t}))}(e[2]),r={};return n.length>0&&(r.topics=n),t&&"*"!==t&&(r.address=t),r}},{key:"pollable",value:function(){return this.tag.indexOf(":")>=0||["block","network","pending","poll"].indexOf(this.tag)>=0}}]),e}());function T(e){if(""!==e){var t=e.split("|");return 1===t.length?t[0]:t}}var C=function(e){(0,a.Z)(m,e);var t=(0,c.Z)(m);function m(e,i){var o,a;(0,h.Z)(this,m);var c=v.AlchemyProvider.getApiKey(e.apiKey),l=v.AlchemyProvider.getAlchemyNetwork(e.network),f=v.AlchemyProvider.getAlchemyConnectionInfo(l,c,"wss"),p="alchemy-sdk-".concat(d.V),k=new b.Z(null!==(a=e.url)&&void 0!==a?a:f.url,p,{wsConstructor:null!==i&&void 0!==i?i:"undefined"!==typeof process&&null!=process&&null!=process.versions&&null!=process.versions.node?n(62467).w3cwebsocket:WebSocket}),g=d.E[l];return(o=t.call(this,k,g))._events=[],o.virtualSubscriptionsById=new Map,o.virtualIdsByPhysicalId=new Map,o.handleMessage=function(e){var t=JSON.parse(e.data);if(function(e){return!function(e){return Array.isArray(e)||"2.0"===e.jsonrpc&&void 0!==e.id}(e)}(t)){var n=t.params.subscription,r=o.virtualIdsByPhysicalId.get(n);if(r){var s=o.virtualSubscriptionsById.get(r);if("eth_subscribe"===s.method)switch(s.params[0]){case"newHeads":var i=s,a=t,c=i.isBackfilling,u=i.backfillBuffer,l=a.params.result;c?function(e,t){S(e,t,A)}(u,l):n!==r?o.emitAndRememberEvent(r,l,A):o.rememberEvent(r,l,A);break;case"logs":var h=s,f=t,d=h.isBackfilling,p=h.backfillBuffer,v=f.params.result;d?function(e,t){S(e,t,L)}(p,v):r!==n?o.emitAndRememberEvent(r,v,L):o.rememberEvent(r,v,L)}}}},o.handleReopen=function(){o.virtualIdsByPhysicalId.clear();var e=function(){var e=!1;return{cancel:function(){return e=!0},isCancelled:function(){return e}}}(),t=e.cancel,n=e.isCancelled;o.cancelBackfill=t;var i,a=(0,r.Z)(o.virtualSubscriptionsById.values());try{var c=function(){var e=i.value;(0,d._)((0,s.Z)(o),void 0,void 0,(0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.resubscribeAndBackfill(n,e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n()||console.error('Error while backfilling "'.concat(e.params[0],'" subscription. Some events may be missing.'),t.t0);case 8:case"end":return t.stop()}}),t,this,[[0,5]])})))};for(a.s();!(i=a.n()).done;)c()}catch(l){a.e(l)}finally{a.f()}o.startHeartbeat()},o.stopHeartbeatAndBackfill=function(){null!=o.heartbeatIntervalId&&(clearInterval(o.heartbeatIntervalId),o.heartbeatIntervalId=void 0),o.cancelBackfill()},o.apiKey=c,o.backfiller=new y((0,s.Z)(o)),o.addSocketListeners(),o.startHeartbeat(),o.cancelBackfill=d.n,o}return(0,f.Z)(m,[{key:"on",value:function(e,t){return this._addEventListener(e,t,!1)}},{key:"once",value:function(e,t){return this._addEventListener(e,t,!0)}},{key:"off",value:function(e,t){return R(e)?this._off(e,t):(0,i.Z)((0,o.Z)(m.prototype),"off",this).call(this,e,t)}},{key:"removeAllListeners",value:function(e){return void 0!==e&&R(e)?this._removeAllListeners(e):(0,i.Z)((0,o.Z)(m.prototype),"removeAllListeners",this).call(this,e)}},{key:"listenerCount",value:function(e){return void 0!==e&&R(e)?this._listenerCount(e):(0,i.Z)((0,o.Z)(m.prototype),"listenerCount",this).call(this,e)}},{key:"listeners",value:function(e){return void 0!==e&&R(e)?this._listeners(e):(0,i.Z)((0,o.Z)(m.prototype),"listeners",this).call(this,e)}},{key:"_addEventListener",value:function(e,t,n){if(R(e)){var r=new B(P(e),t,n);return this._events.push(r),this._startEvent(r),this}return(0,i.Z)((0,o.Z)(m.prototype),"_addEventListener",this).call(this,e,t,n)}},{key:"_startEvent",value:function(e){[I,"block","filter"].includes(e.type)?this.customStartEvent(e):(0,i.Z)((0,o.Z)(m.prototype),"_startEvent",this).call(this,e)}},{key:"_subscribe",value:function(e,t,n,r){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function s(){var i,o,a,c,l=this;return(0,u.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=this._subIds[e],s.next=3,this.getBlockNumber();case 3:return o=s.sent,null==i&&(i=Promise.all(t).then((function(e){return l.send("eth_subscribe",e)})),this._subIds[e]=i),s.next=7,i;case 7:return a=s.sent,s.next=10,Promise.all(t);case 10:c=s.sent,this.virtualSubscriptionsById.set(a,{event:r,method:"eth_subscribe",params:c,startingBlockNumber:o,virtualId:a,physicalId:a,sentEvents:[],isBackfilling:!1,backfillBuffer:[]}),this.virtualIdsByPhysicalId.set(a,a),this._subs[a]={tag:e,processFunc:n};case 14:case"end":return s.stop()}}),s,this)})))}},{key:"emit",value:function(e){for(var t,n=this,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];if(R(e)){var c=!1,u=[],l=P(e);return this._events=this._events.filter((function(e){return e.tag!==l||(setTimeout((function(){e.listener.apply(n,s)}),0),c=!0,!e.once||(u.push(e),!1))})),u.forEach((function(e){n._stopEvent(e)})),c}return(t=(0,i.Z)((0,o.Z)(m.prototype),"emit",this)).call.apply(t,[this,e].concat(s))}},{key:"sendBatch",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){var n,r,s,i;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0,r=e.map((function(e){return{method:e.method,params:e.params,jsonrpc:"2.0",id:"alchemy-sdk:".concat(n++)}})),t.next=4,this.sendBatchConcurrently(r);case 4:if(s=t.sent,!(i=s.find((function(e){return!!e.error})))){t.next=8;break}throw new Error(i.error.message);case 8:return t.abrupt("return",s.sort((function(e,t){return e.id-t.id})).map((function(e){return e.result})));case 9:case"end":return t.stop()}}),t,this)})))}},{key:"destroy",value:function(){return this.removeSocketListeners(),this.stopHeartbeatAndBackfill(),(0,i.Z)((0,o.Z)(m.prototype),"destroy",this).call(this)}},{key:"isCommunityResource",value:function(){return this.apiKey===d.D}},{key:"_stopEvent",value:function(e){var t=this,n=e.tag;if(e.type===I){if(this._events.filter((function(e){return e.type===I})).length)return}else if("tx"===e.type){if(this._events.filter((function(e){return"tx"===e.type})).length)return;n="tx"}else if(this.listenerCount(e.event))return;var r=this._subIds[n];r&&(delete this._subIds[n],r.then((function(e){t._subs[e]&&(delete t._subs[e],t.send("eth_unsubscribe",[e]))})))}},{key:"addSocketListeners",value:function(){this._websocket.addEventListener("message",this.handleMessage),this._websocket.addEventListener("reopen",this.handleReopen),this._websocket.addEventListener("down",this.stopHeartbeatAndBackfill)}},{key:"removeSocketListeners",value:function(){this._websocket.removeEventListener("message",this.handleMessage),this._websocket.removeEventListener("reopen",this.handleReopen),this._websocket.removeEventListener("down",this.stopHeartbeatAndBackfill)}},{key:"resubscribeAndBackfill",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i,o,a,c,h,f,d,p,v=this;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.virtualId,s=t.method,i=t.params,o=t.sentEvents,a=t.backfillBuffer,c=t.startingBlockNumber,t.isBackfilling=!0,a.length=0,n.prev=3,n.next=6,this.send(s,i);case 6:h=n.sent,x(e),t.physicalId=h,this.virtualIdsByPhysicalId.set(h,r),n.t0=i[0],n.next="newHeads"===n.t0?13:"logs"===n.t0?20:28;break;case 13:return n.next=15,N((function(){return O(v.backfiller.getNewHeadsBackfill(e,o,c),6e4)}),5,(function(){return!e()}));case 15:return f=n.sent,x(e),g([].concat((0,l.Z)(f),(0,l.Z)(a))).forEach((function(e){return v.emitNewHeadsEvent(r,e)})),n.abrupt("break",29);case 20:return d=i[1]||{},n.next=23,N((function(){return O(v.backfiller.getLogsBackfill(e,d,o,c),6e4)}),5,(function(){return!e()}));case 23:return p=n.sent,x(e),w([].concat((0,l.Z)(p),(0,l.Z)(a))).forEach((function(e){return v.emitLogsEvent(r,e)})),n.abrupt("break",29);case 28:return n.abrupt("break",29);case 29:return n.prev=29,t.isBackfilling=!1,a.length=0,n.finish(29);case 33:case"end":return n.stop()}}),n,this,[[3,,29,33]])})))}},{key:"emitNewHeadsEvent",value:function(e,t){this.emitAndRememberEvent(e,t,A)}},{key:"emitLogsEvent",value:function(e,t){this.emitAndRememberEvent(e,t,L)}},{key:"emitAndRememberEvent",value:function(e,t,n){this.rememberEvent(e,t,n);var r=this.virtualSubscriptionsById.get(e);r&&this.emitGenericEvent(r,t)}},{key:"rememberEvent",value:function(e,t,n){var r=this.virtualSubscriptionsById.get(e);r&&S(r.sentEvents,Object.assign({},t),n)}},{key:"emitGenericEvent",value:function(e,t){this.emitProcessFn(e.event)(t)}},{key:"startHeartbeat",value:function(){var e=this;null==this.heartbeatIntervalId&&(this.heartbeatIntervalId=setInterval((function(){return(0,d._)(e,void 0,void 0,(0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(this.send("net_version"),1e4);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this._websocket.reconnect();case 8:case"end":return e.stop()}}),e,this,[[0,5]])})))}),3e4))}},{key:"sendBatchConcurrently",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){var n=this;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(e.map((function(e){return n.send(e.method,e.params)}))));case 1:case"end":return t.stop()}}),t)})))}},{key:"customStartEvent",value:function(e){if(e.type===I){var t=e.fromAddress,n=e.toAddress,r=e.hashesOnly;this._subscribe(e.tag,["alchemy_pendingTransactions",{fromAddress:t,toAddress:n,hashesOnly:r}],this.emitProcessFn(e),e)}else"block"===e.type?this._subscribe("block",["newHeads"],this.emitProcessFn(e),e):"filter"===e.type&&this._subscribe(e.tag,["logs",this._getFilter(e.filter)],this.emitProcessFn(e),e)}},{key:"emitProcessFn",value:function(e){var t=this;switch(e.type){case I:var n=e.fromAddress,r=e.toAddress,s=e.hashesOnly;return function(e){return t.emit({method:"alchemy_pendingTransactions",fromAddress:n,toAddress:r,hashesOnly:s},e)};case"block":return function(e){var n=p.O$.from(e.number).toNumber();t._emitted.block=n,t.emit("block",n)};case"filter":return function(n){null==n.removed&&(n.removed=!1),t.emit(e.filter,t.formatter.filterLog(n))};default:throw new Error("Invalid event type to `emitProcessFn()`")}}},{key:"_off",value:function(e,t){var n=this;if(null==t)return this.removeAllListeners(e);var r=[],s=!1,i=P(e);return this._events=this._events.filter((function(e){return e.tag!==i||e.listener!=t||(!!s||(s=!0,r.push(e),!1))})),r.forEach((function(e){n._stopEvent(e)})),this}},{key:"_removeAllListeners",value:function(e){var t=this,n=[];if(null==e)n=this._events,this._events=[];else{var r=P(e);this._events=this._events.filter((function(e){return e.tag!==r||(n.push(e),!1)}))}return n.forEach((function(e){t._stopEvent(e)})),this}},{key:"_listenerCount",value:function(e){if(!e)return this._events.length;var t=P(e);return this._events.filter((function(e){return e.tag===t})).length}},{key:"_listeners",value:function(e){if(null==e)return this._events.map((function(e){return e.listener}));var t=P(e);return this._events.filter((function(e){return e.tag===t})).map((function(e){return e.listener}))}}]),m}(m.q);function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0};return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,i;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s=0,i=0;case 2:return r.prev=3,r.next=6,e();case 6:return r.abrupt("return",r.sent);case 9:if(r.prev=9,r.t0=r.catch(3),!(++i>=t)&&n(r.t0)){r.next=14;break}throw r.t0;case 14:return r.next=16,Z(s);case 16:if(n(r.t0)){r.next=18;break}throw r.t0;case 18:s=0===s?1e3:Math.min(3e4,2*s);case 19:r.next=2;break;case 21:case"end":return r.stop()}}),r,null,[[3,9]])})))}function Z(e){return new Promise((function(t){return setTimeout(t,e)}))}function O(e,t){return Promise.race([e,new Promise((function(e,n){return setTimeout((function(){return n(new Error("Timeout"))}),t)}))])}function A(e){return(0,d.f)(e.number)}function L(e){return(0,d.f)(e.blockNumber)}function S(e,t,n){var r=n(t),s=e.findIndex((function(e){return n(e)>r-10}));-1===s?e.length=0:e.splice(0,s),e.push(t)}function R(e){return"object"===typeof e&&"method"in e}function P(e){if(!R(e))throw new Error("Event tag requires AlchemyEventType");var t;return"alchemy-pending-transactions:"+j(e.fromAddress)+":"+j(e.toAddress)+":"+(void 0===(t=e.hashesOnly)?"*":t.toString())}function j(e){return void 0===e?"*":Array.isArray(e)?e.join("|"):e}},90128:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},33372:function(e,t){"use strict";var n=function(){function e(t,n,s){if(void 0===s&&(s={}),this.url=t,this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.ondown=null,this.onreopen=null,this.CONNECTING=e.CONNECTING,this.OPEN=e.OPEN,this.CLOSING=e.CLOSING,this.CLOSED=e.CLOSED,this.hasBeenOpened=!1,this.isClosed=!1,this.messageBuffer=[],this.nextRetryTime=0,this.reconnectCount=0,this.lastKnownExtensions="",this.lastKnownProtocol="",this.listeners={},null==n||"string"===typeof n||Array.isArray(n)?this.protocols=n:s=n,this.options=r(s),!this.options.wsConstructor){if("undefined"===typeof WebSocket)throw new Error("WebSocket not present in global scope and no wsConstructor option was provided.");this.options.wsConstructor=WebSocket}this.openNewWebSocket()}return Object.defineProperty(e.prototype,"binaryType",{get:function(){return this.binaryTypeInternal||"blob"},set:function(e){this.binaryTypeInternal=e,this.ws&&(this.ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){var e=this.ws?this.ws.bufferedAmount:0,t=!1;return this.messageBuffer.forEach((function(n){var r=function(e){return"string"===typeof e?2*e.length:e instanceof ArrayBuffer?e.byteLength:e instanceof Blob?e.size:void 0}(n);null!=r?e+=r:t=!0})),t&&this.debugLog("Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount."),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this.ws?this.ws.extensions:this.lastKnownExtensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this.ws?this.ws.protocol:this.lastKnownProtocol},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this.isClosed?e.CLOSED:e.OPEN},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){this.disposeSocket(e,t),this.shutdown(),this.debugLog("WebSocket permanently closed by client.")},e.prototype.send=function(e){if(this.isClosed)throw new Error("WebSocket is already in CLOSING or CLOSED state.");this.ws&&this.ws.readyState===this.OPEN?this.ws.send(e):this.messageBuffer.push(e)},e.prototype.reconnect=function(){if(this.isClosed)throw new Error("Cannot call reconnect() on socket which is permanently closed.");this.disposeSocket(1e3,"Client requested reconnect."),this.handleClose(void 0)},e.prototype.addEventListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.dispatchEvent=function(e){return this.dispatchEventOfType(e.type,e)},e.prototype.removeEventListener=function(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((function(e){return e!==t})))},e.prototype.openNewWebSocket=function(){var e=this;if(!this.isClosed){var t=this.options,n=t.connectTimeout,r=t.wsConstructor;this.debugLog("Opening new WebSocket to "+this.url+".");var s=new r(this.url,this.protocols);s.onclose=function(t){return e.handleClose(t)},s.onerror=function(t){return e.handleError(t)},s.onmessage=function(t){return e.handleMessage(t)},s.onopen=function(t){return e.handleOpen(t)},this.connectTimeoutId=setTimeout((function(){e.clearConnectTimeout(),e.disposeSocket(),e.handleClose(void 0)}),n),this.ws=s}},e.prototype.handleOpen=function(e){var t=this;if(this.ws&&!this.isClosed){var n=this.options.allClearResetTime;this.debugLog("WebSocket opened."),null!=this.binaryTypeInternal?this.ws.binaryType=this.binaryTypeInternal:this.binaryTypeInternal=this.ws.binaryType,this.clearConnectTimeout(),this.hasBeenOpened?this.dispatchEventOfType("reopen",e):(this.dispatchEventOfType("open",e),this.hasBeenOpened=!0),this.messageBuffer.forEach((function(e){return t.send(e)})),this.messageBuffer=[],this.allClearTimeoutId=setTimeout((function(){t.clearAllClearTimeout(),t.nextRetryTime=0,t.reconnectCount=0;var e=n/1e3|0;t.debugLog("WebSocket remained open for "+e+" seconds. Resetting retry time and count.")}),n)}},e.prototype.handleMessage=function(e){this.isClosed||this.dispatchEventOfType("message",e)},e.prototype.handleClose=function(e){var t=this;if(!this.isClosed){var n=this.options,r=n.maxReconnectAttempts,s=n.shouldReconnect;if(this.clearConnectTimeout(),this.clearAllClearTimeout(),this.ws&&(this.lastKnownExtensions=this.ws.extensions,this.lastKnownProtocol=this.ws.protocol,this.disposeSocket()),this.dispatchEventOfType("down",e),this.reconnectCount>=r)this.stopReconnecting(e,this.getTooManyFailedReconnectsMessage());else{var i=!e||s(e);"boolean"===typeof i?this.handleWillReconnect(i,e,"Provided shouldReconnect() returned false. Closing permanently."):i.then((function(n){t.isClosed||t.handleWillReconnect(n,e,"Provided shouldReconnect() resolved to false. Closing permanently.")}))}}},e.prototype.handleError=function(e){this.dispatchEventOfType("error",e),this.debugLog("WebSocket encountered an error.")},e.prototype.handleWillReconnect=function(e,t,n){e?this.reestablishConnection():this.stopReconnecting(t,n)},e.prototype.reestablishConnection=function(){var e=this,t=this.options,n=t.minReconnectDelay,r=t.maxReconnectDelay,s=t.reconnectBackoffFactor;this.reconnectCount++;var i=this.nextRetryTime;this.nextRetryTime=Math.max(n,Math.min(this.nextRetryTime*s,r)),setTimeout((function(){return e.openNewWebSocket()}),i);var o=i/1e3|0;this.debugLog("WebSocket was closed. Re-opening in "+o+" seconds.")},e.prototype.stopReconnecting=function(e,t){this.debugLog(t),this.shutdown(),e&&this.dispatchEventOfType("close",e)},e.prototype.shutdown=function(){this.isClosed=!0,this.clearAllTimeouts(),this.messageBuffer=[],this.disposeSocket()},e.prototype.disposeSocket=function(e,t){this.ws&&(this.ws.onerror=s,this.ws.onclose=s,this.ws.onmessage=s,this.ws.onopen=s,this.ws.close(e,t),this.ws=void 0)},e.prototype.clearAllTimeouts=function(){this.clearConnectTimeout(),this.clearAllClearTimeout()},e.prototype.clearConnectTimeout=function(){null!=this.connectTimeoutId&&(clearTimeout(this.connectTimeoutId),this.connectTimeoutId=void 0)},e.prototype.clearAllClearTimeout=function(){null!=this.allClearTimeoutId&&(clearTimeout(this.allClearTimeoutId),this.allClearTimeoutId=void 0)},e.prototype.dispatchEventOfType=function(e,t){var n=this;switch(e){case"close":this.onclose&&this.onclose(t);break;case"error":this.onerror&&this.onerror(t);break;case"message":this.onmessage&&this.onmessage(t);break;case"open":this.onopen&&this.onopen(t);break;case"down":this.ondown&&this.ondown(t);break;case"reopen":this.onreopen&&this.onreopen(t)}return e in this.listeners&&this.listeners[e].slice().forEach((function(e){return n.callListener(e,t)})),!t||!t.defaultPrevented},e.prototype.callListener=function(e,t){"function"===typeof e?e.call(this,t):e.handleEvent.call(this,t)},e.prototype.debugLog=function(e){this.options.debug&&console.log(e)},e.prototype.getTooManyFailedReconnectsMessage=function(){var e,t=this.options.maxReconnectAttempts;return"Failed to reconnect after "+t+" "+(e="attempt",(1===t?e:e+"s")+". Closing permanently.")},e.DEFAULT_OPTIONS={allClearResetTime:5e3,connectTimeout:5e3,debug:!1,minReconnectDelay:1e3,maxReconnectDelay:3e4,maxReconnectAttempts:Number.POSITIVE_INFINITY,reconnectBackoffFactor:1.5,shouldReconnect:function(){return!0},wsConstructor:void 0},e.CONNECTING=0,e.OPEN=1,e.CLOSING=2,e.CLOSED=3,e}();function r(e){var t={};return Object.keys(n.DEFAULT_OPTIONS).forEach((function(r){var s=e[r];t[r]=void 0===s?n.DEFAULT_OPTIONS[r]:s})),t}function s(){}t.Z=n},62467:function(e,t,n){var r;if("object"===typeof globalThis)r=globalThis;else try{r=n(90128)}catch(a){}finally{if(r||"undefined"===typeof window||(r=window),!r)throw new Error("Could not determine global this")}var s=r.WebSocket||r.MozWebSocket,i=n(67565);function o(e,t){return t?new s(e,t):new s(e)}s&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(o,e,{get:function(){return s[e]}})})),e.exports={w3cwebsocket:s?o:null,version:i}},67565:function(e,t,n){e.exports=n(19794).version},19794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);