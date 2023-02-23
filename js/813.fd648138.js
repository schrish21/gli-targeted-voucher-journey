(self["webpackChunkvuejs_targeted_voucher_journey"]=self["webpackChunkvuejs_targeted_voucher_journey"]||[]).push([[813],{2023:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(s){return new Sha256(e,!0).update(s)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var s=0;s<OUTPUT_TYPES.length;++s){var r=OUTPUT_TYPES[s];e[r]=createOutputMethod(r,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"===typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null===t||void 0===t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(s,r){return new HmacSha256(s,e,!0).update(r)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,s){return e.create(t).update(s)};for(var s=0;s<OUTPUT_TYPES.length;++s){var r=OUTPUT_TYPES[s];e[r]=createHmacOutputMethod(r,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,s){var r,o=typeof t;if("string"===o){var i,a=[],h=t.length,n=0;for(r=0;r<h;++r)i=t.charCodeAt(r),i<128?a[n++]=i:i<2048?(a[n++]=192|i>>6,a[n++]=128|63&i):i<55296||i>=57344?(a[n++]=224|i>>12,a[n++]=128|i>>6&63,a[n++]=128|63&i):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++r)),a[n++]=240|i>>18,a[n++]=128|i>>12&63,a[n++]=128|i>>6&63,a[n++]=128|63&i);t=a}else{if("object"!==o)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var c=[],l=[];for(r=0;r<64;++r){var u=t[r]||0;c[r]=92^u,l[r]=54^u}Sha256.call(this,e,s),this.update(l),this.oKeyPad=c,this.inner=!0,this.sharedMemory=s}Sha256.prototype.update=function(t){if(!this.finalized){var e,s=typeof t;if("string"!==s){if("object"!==s)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}var r,o,i=0,a=t.length,h=this.blocks;while(i<a){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),e)for(o=this.start;i<a&&o<64;++i)h[o>>2]|=t[i]<<SHIFT[3&o++];else for(o=this.start;i<a&&o<64;++i)r=t.charCodeAt(i),r<128?h[o>>2]|=r<<SHIFT[3&o++]:r<2048?(h[o>>2]|=(192|r>>6)<<SHIFT[3&o++],h[o>>2]|=(128|63&r)<<SHIFT[3&o++]):r<55296||r>=57344?(h[o>>2]|=(224|r>>12)<<SHIFT[3&o++],h[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],h[o>>2]|=(128|63&r)<<SHIFT[3&o++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),h[o>>2]|=(240|r>>18)<<SHIFT[3&o++],h[o>>2]|=(128|r>>12&63)<<SHIFT[3&o++],h[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],h[o>>2]|=(128|63&r)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=h[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,s,r,o,i,a,h,n,c,l,u=this.h0,_=this.h1,H=this.h2,S=this.h3,A=this.h4,d=this.h5,f=this.h6,p=this.h7,E=this.blocks;for(t=16;t<64;++t)o=E[t-15],e=(o>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,o=E[t-2],s=(o>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,E[t]=E[t-16]+e+E[t-7]+s<<0;for(l=_&H,t=0;t<64;t+=4)this.first?(this.is224?(h=300032,o=E[0]-1413257819,p=o-150054599<<0,S=o+24177077<<0):(h=704751109,o=E[0]-210244248,p=o-1521486534<<0,S=o+143694565<<0),this.first=!1):(e=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7),h=u&_,r=h^u&H^l,a=A&d^~A&f,o=p+s+a+K[t]+E[t],i=e+r,p=S+o<<0,S=o+i<<0),e=(S>>>2|S<<30)^(S>>>13|S<<19)^(S>>>22|S<<10),s=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7),n=S&u,r=n^S&_^h,a=p&A^~p&d,o=f+s+a+K[t+1]+E[t+1],i=e+r,f=H+o<<0,H=o+i<<0,e=(H>>>2|H<<30)^(H>>>13|H<<19)^(H>>>22|H<<10),s=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7),c=H&S,r=c^H&u^n,a=f&p^~f&A,o=d+s+a+K[t+2]+E[t+2],i=e+r,d=_+o<<0,_=o+i<<0,e=(_>>>2|_<<30)^(_>>>13|_<<19)^(_>>>22|_<<10),s=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7),l=_&H,r=l^_&S^c,a=d&f^~d&p,o=A+s+a+K[t+3]+E[t+3],i=e+r,A=u+o<<0,u=o+i<<0;this.h0=this.h0+u<<0,this.h1=this.h1+_<<0,this.h2=this.h2+H<<0,this.h3=this.h3+S<<0,this.h4=this.h4+A<<0,this.h5=this.h5+d<<0,this.h6=this.h6+f<<0,this.h7=this.h7+p<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,r=this.h3,o=this.h4,i=this.h5,a=this.h6,h=this.h7,n=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a];return this.is224||(n+=HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h]),n},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,r=this.h3,o=this.h4,i=this.h5,a=this.h6,h=this.h7,n=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,s>>24&255,s>>16&255,s>>8&255,255&s,r>>24&255,r>>16&255,r>>8&255,255&r,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i,a>>24&255,a>>16&255,a>>8&255,255&a];return this.is224||n.push(h>>24&255,h>>16&255,h>>8&255,255&h),n},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},8815:function(t,e,s){"use strict";s.d(e,{C_:function(){return H},Fw:function(){return _},YZ:function(){return i}});var r=s(2023),o=s.n(r);const i="http://10.4.1.135:5001/voucher-journey/";var a=new Date,h=a.getMonth()+1,n=a.getDate();h<10&&(h="0"+h),n<10&&(n="0"+n);var c=a.getFullYear()+""+h+n,l=c,u="SSO4lfag1ft"+l+"voucher_journey",_=o()(u);const H={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS, post, get","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token","Content-Type":"application/json","Content-Length":"<calculated when request is sent>",Host:"<calculated when request is sent>",Accept:"*/*","Accept-Encoding":"gzip, deflate, br",Connection:"keep-alive",app:"sso"}},1813:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",[r("div",{staticClass:"login-block pa-8 d-flex flex-column justify-center align-center"},[r("img",{staticClass:"mb-4 pr-1",attrs:{src:s(6034),alt:"logo",width:"300px"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.login,expression:"login.login"}],staticClass:"mt-4",attrs:{type:"text",placeholder:"NIK",id:"username"},domProps:{value:t.login.login},on:{input:function(e){e.target.composing||t.$set(t.login,"login",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"Password",id:"password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),r("button",{staticClass:"mt-4",on:{click:t.onSubmit}},[t._v("Submit")])])])},o=[],i=s(8815),a=s(9669),h=s.n(a),n={name:"Login",components:{},data(){return{user:null,alert:{message:""},login:{login:"",password:""},shake:!1,good:""}},created(){this.user=this.$store.state.u},computed:{isShake:function(){return console.log(this.shake),1==this.shake?"shake":"none"}},mounted(){this.$checkSession.checkSession()&&this.$router.push({name:"dashboard"}).catch((t=>{console.log(t)}))},methods:{async onSubmit(t){if("18552099877QA"==this.login.login){if("gli_15B22023_ss"==this.login.password){localStorage.setItem("token","token"),localStorage.setItem("user_fname","QA"),localStorage.setItem("user_lname","A"),localStorage.setItem("nik","18552099877QA");var e=new Date;e.setDate(e.getDate()+1),localStorage.setItem("date_end_voucher_journey",e),this.$store.commit("setUser","QA GLI"),this.$router.push({name:"dashboard"}).catch((t=>{console.log(t)}))}}else{t.preventDefault(),this.shake=!1;const e={username:this.login.login,password:this.login.password};await h().post("http://10.4.1.135:5001/sso/login-v2",e,i.C_).then((t=>{if(0!=t.data.data.length){let s=t.data.data[0].basic_role;const r=t=>"DASHBOARD-VOUCHER-JOURNEY"===t.ma_id;if(s.some(r)){localStorage.setItem("token",t.data.data[0].token),localStorage.setItem("user_fname",t.data.data[0].mu_firstname),localStorage.setItem("user_lname",t.data.data[0].mu_lastname),localStorage.setItem("nik",t.data.data[0].mu_username);var e=new Date;e.setDate(e.getDate()+1),localStorage.setItem("date_end_voucher_journey",e),this.$store.commit("setUser",t.data.data[0].mu_firstname),this.$router.push({name:"dashboard"}).catch((t=>{console.log(t)}))}else alert("User does not have the credentials to access this application.")}else alert("Username/ Password incorrect !")})).catch((t=>{console.log("Login.vue (error) :: ",t),alert("Application error!")}))}}}},c=n,l=s(1001),u=(0,l.Z)(c,r,o,!1,null,"5d8295c5",null),_=u.exports}}]);