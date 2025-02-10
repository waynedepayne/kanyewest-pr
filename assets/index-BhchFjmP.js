import{g as Z,bj as ee,bk as ne,bl as te,E as ie,P as re,T as q,V as C}from"./index-CjWuT42i.js";var k,B;function se(){if(B)return k;B=1;function i(n){if(n.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),t=0;t<e.length;t++)e[t]=255;for(var r=0;r<n.length;r++){var s=n.charAt(r),a=s.charCodeAt(0);if(e[a]!==255)throw new TypeError(s+" is ambiguous");e[a]=r}var l=n.length,E=n.charAt(0),f=Math.log(l)/Math.log(256),d=Math.log(256)/Math.log(l);function m(o){if(o instanceof Uint8Array||(ArrayBuffer.isView(o)?o=new Uint8Array(o.buffer,o.byteOffset,o.byteLength):Array.isArray(o)&&(o=Uint8Array.from(o))),!(o instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(o.length===0)return"";for(var h=0,M=0,_=0,w=o.length;_!==w&&o[_]===0;)_++,h++;for(var y=(w-_)*d+1>>>0,u=new Uint8Array(y);_!==w;){for(var v=o[_],S=0,g=y-1;(v!==0||S<M)&&g!==-1;g--,S++)v+=256*u[g]>>>0,u[g]=v%l>>>0,v=v/l>>>0;if(v!==0)throw new Error("Non-zero carry");M=S,_++}for(var A=y-M;A!==y&&u[A]===0;)A++;for(var I=E.repeat(h);A<y;++A)I+=n.charAt(u[A]);return I}function V(o){if(typeof o!="string")throw new TypeError("Expected String");if(o.length===0)return new Uint8Array;for(var h=0,M=0,_=0;o[h]===E;)M++,h++;for(var w=(o.length-h)*f+1>>>0,y=new Uint8Array(w);o[h];){var u=e[o.charCodeAt(h)];if(u===255)return;for(var v=0,S=w-1;(u!==0||v<_)&&S!==-1;S--,v++)u+=l*y[S]>>>0,y[S]=u%256>>>0,u=u/256>>>0;if(u!==0)throw new Error("Non-zero carry");_=v,h++}for(var g=w-_;g!==w&&y[g]===0;)g++;for(var A=new Uint8Array(M+(w-g)),I=M;g!==w;)A[I++]=y[g++];return A}function Y(o){var h=V(o);if(h)return h;throw new Error("Non-base"+l+" character")}return{encode:m,decodeUnsafe:V,decode:Y}}return k=i,k}var F,G;function ae(){return G||(G=1,F=se()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")),F}var oe=ae();const b=Z(oe);let z;const de=new Uint8Array(16);function ce(){if(!z&&(z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return z(de)}const c=[];for(let i=0;i<256;++i)c.push((i+256).toString(16).slice(1));function le(i,n=0){return c[i[n+0]]+c[i[n+1]]+c[i[n+2]]+c[i[n+3]]+"-"+c[i[n+4]]+c[i[n+5]]+"-"+c[i[n+6]]+c[i[n+7]]+"-"+c[i[n+8]]+c[i[n+9]]+"-"+c[i[n+10]]+c[i[n+11]]+c[i[n+12]]+c[i[n+13]]+c[i[n+14]]+c[i[n+15]]}const he=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),J={randomUUID:he};function ue(i,n,e){if(J.randomUUID&&!i)return J.randomUUID();i=i||{};const t=i.random||(i.rng||ce)();return t[6]=t[6]&15|64,t[8]=t[8]&63|128,le(t)}function D(i){return i.version===void 0}function O(i){return D(i)?i.serialize({verifySignatures:!1,requireAllSignatures:!1}):i.serialize()}var Q=function(i,n,e,t){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function l(d){try{f(t.next(d))}catch(m){a(m)}}function E(d){try{f(t.throw(d))}catch(m){a(m)}}function f(d){d.done?s(d.value):r(d.value).then(l,E)}f((t=t.apply(i,n||[])).next())})};function R(i){return Q(this,void 0,void 0,function*(){try{return yield i.request({method:"wallet_getSnaps"}),!0}catch{return!1}})}function fe(){return Q(this,void 0,void 0,function*(){try{const i=window.ethereum;if(!i)return null;if(i.providers&&Array.isArray(i.providers)){const n=i.providers;for(const e of n)if(yield R(e))return e}if(i.detected&&Array.isArray(i.detected)){const n=i.detected;for(const e of n)if(yield R(e))return e}return(yield R(i))?i:null}catch(i){return console.error(i),null}})}const me="solana:mainnet",_e="solana:devnet",ge="solana:testnet",pe="solana:localnet",X=[me,_e,ge,pe];function P(i){return X.includes(i)}var T=function(i,n,e,t){if(e==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?i!==n||!t:!n.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?t:e==="a"?t.call(i):t?t.value:n.get(i)},x=function(i,n,e,t,r){if(t==="m")throw new TypeError("Private method is not writable");if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?i!==n||!r:!n.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t==="a"?r.call(i,e):r?r.value=e:n.set(i,e),e},U,K,H,N,W,j;const we=X,ye=[ee,ne,te];class L{get address(){return T(this,U,"f")}get publicKey(){return T(this,K,"f").slice()}get chains(){return T(this,H,"f").slice()}get features(){return T(this,N,"f").slice()}get label(){return T(this,W,"f")}get icon(){return T(this,j,"f")}constructor({address:n,publicKey:e,label:t,icon:r}){U.set(this,void 0),K.set(this,void 0),H.set(this,void 0),N.set(this,void 0),W.set(this,void 0),j.set(this,void 0),new.target===L&&Object.freeze(this),x(this,U,n,"f"),x(this,K,e,"f"),x(this,H,we,"f"),x(this,N,ye,"f"),x(this,W,t,"f"),x(this,j,r,"f")}}U=new WeakMap,K=new WeakMap,H=new WeakMap,N=new WeakMap,W=new WeakMap,j=new WeakMap;var p=function(i,n,e,t){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function l(d){try{f(t.next(d))}catch(m){a(m)}}function E(d){try{f(t.throw(d))}catch(m){a(m)}}function f(d){d.done?s(d.value):r(d.value).then(l,E)}f((t=t.apply(i,n||[])).next())})};class $ extends ie{constructor(n){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var t,r;switch(e.type){case"connect":{this._collapseIframe(),!((t=e.data)===null||t===void 0)&&t.publicKey?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return}case"disconnect":{this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return}case"accountChanged":{!((r=e.data)===null||r===void 0)&&r.publicKey?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return}default:return}},this._handleResize=e=>{e.resizeMode==="full"?e.params.mode==="fullscreen"?this._expandIframe():e.params.mode==="hide"&&this._collapseIframe():e.resizeMode==="coordinates"&&this._resizeIframe(e.params)},this._handleMessage=e=>{var t;if(((t=e.data)===null||t===void 0?void 0:t.channel)!=="solflareIframeToWalletAdapter")return;const r=e.data.data||{};if(r.type==="event")this._handleEvent(r.event);else if(r.type==="resize")this._handleResize(r);else if(r.type==="response"&&this._messageHandlers[r.id]){const{resolve:s,reject:a}=this._messageHandlers[r.id];delete this._messageHandlers[r.id],r.error?a(r.error):s(r.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const t of e)t.parentElement&&t.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),t=Object.keys(e).map(s=>`${s}=${encodeURIComponent(e[s])}`).join("&"),r=`${$.IFRAME_URL}?${t}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${r}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise((t,r)=>{var s,a;const l=ue();this._messageHandlers[l]={resolve:t,reject:r},(a=(s=this._iframe)===null||s===void 0?void 0:s.contentWindow)===null||a===void 0||a.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:l},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();(!this._account||this._account.address!==e)&&(this._account=new L({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},n!=null&&n.network&&(this._network=n==null?void 0:n.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),n!=null&&n.params&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),n==null?void 0:n.params))}get publicKey(){return this._publicKey?new re(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return p(this,void 0,void 0,function*(){this.connected||(this._injectElement(),yield new Promise((n,e)=>{this._connectHandler={resolve:n,reject:e}}))})}disconnect(){return p(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(n){var e;return p(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=O(n),r=yield this._sendIframeMessage({method:"signTransactionV2",params:{transaction:b.encode(t)}}),{transaction:s}=r;return D(n)?q.from(b.decode(s)):C.deserialize(b.decode(s))}catch(t){throw new Error(((e=t==null?void 0:t.toString)===null||e===void 0?void 0:e.call(t))||"Failed to sign transaction")}})}signAllTransactions(n){var e;return p(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=n.map(s=>O(s)),{transactions:r}=yield this._sendIframeMessage({method:"signAllTransactionsV2",params:{transactions:t.map(s=>b.encode(s))}});return r.map((s,a)=>D(n[a])?q.from(b.decode(s)):C.deserialize(b.decode(s)))}catch(t){throw new Error(((e=t==null?void 0:t.toString)===null||e===void 0?void 0:e.call(t))||"Failed to sign transactions")}})}signAndSendTransaction(n,e){var t;return p(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const r=O(n),{signature:s}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:b.encode(r),options:e}});return s}catch(r){throw new Error(((t=r==null?void 0:r.toString)===null||t===void 0?void 0:t.call(r))||"Failed to sign and send transaction")}})}signMessage(n,e="utf8"){var t;return p(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:r}=yield this._sendIframeMessage({method:"signMessage",params:{data:b.encode(n),display:e}});return Uint8Array.from(b.decode(r))}catch(r){throw new Error(((t=r==null?void 0:r.toString)===null||t===void 0?void 0:t.call(r))||"Failed to sign message")}})}sign(n,e="utf8"){return p(this,void 0,void 0,function*(){return yield this.signMessage(n,e)})}static isSupported(){return p(this,void 0,void 0,function*(){return!!(yield fe())})}standardSignAndSendTransaction(...n){return p(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(n.length===1){const{transaction:t,account:r,chain:s,options:a}=n[0],{minContextSlot:l,preflightCommitment:E,skipPreflight:f,maxRetries:d}=a||{};if(r!==this._account)throw new Error("invalid account");if(!P(s))throw new Error("invalid chain");const m=yield this.signAndSendTransaction(C.deserialize(t),{preflightCommitment:E,minContextSlot:l,maxRetries:d,skipPreflight:f});e.push({signature:b.decode(m)})}else if(n.length>1)for(const t of n)e.push(...yield this.standardSignAndSendTransaction(t));return e})}standardSignTransaction(...n){return p(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(n.length===1){const{transaction:t,account:r,chain:s}=n[0];if(r!==this._account)throw new Error("invalid account");if(s&&!P(s))throw new Error("invalid chain");const a=yield this.signTransaction(C.deserialize(t));e.push({signedTransaction:a.serialize()})}else if(n.length>1){let t;for(const a of n){if(a.account!==this._account)throw new Error("invalid account");if(a.chain){if(!P(a.chain))throw new Error("invalid chain");if(t){if(a.chain!==t)throw new Error("conflicting chain")}else t=a.chain}}const r=n.map(({transaction:a})=>C.deserialize(a)),s=yield this.signAllTransactions(r);e.push(...s.map(a=>({signedTransaction:a.serialize()})))}return e})}standardSignMessage(...n){return p(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(n.length===1){const{message:t,account:r}=n[0];if(r!==this._account)throw new Error("invalid account");const s=yield this.signMessage(t);e.push({signedMessage:t,signature:s})}else if(n.length>1)for(const t of n)e.push(...yield this.standardSignMessage(t));return e})}}$.IFRAME_URL="https://widget.solflare.com/";export{L as StandardSolflareMetaMaskWalletAccount,$ as default};
