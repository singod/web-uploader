//devin87@qq.com
//build:2018/03/23 11:23:17
!function(e,t){"use strict";var r,i,n,a=Object.prototype.toString,s=Object.prototype.hasOwnProperty,o=Array.prototype.slice;function l(e,r){return e!==t?e:r}function u(e){return"[object Function]"===a.call(e)}function c(e){return"number"==typeof e&&e>0&&e===Math.floor(e)}function f(e,r,i){if(!e||!r)return e;for(var n in r)n!=t&&s.call(r,n)&&(i||e[n]===t)&&(e[n]=r[n]);return e}function d(e,t,r,i){for(var n=e[r||t],a=[];n;){if(1==n.nodeType){if(!i)return n;a.push(n)}n=n[t]}return i?a:null}function p(e){return e.firstElementChild||d(e,"nextSibling","firstChild",!1)}function h(e,t,r){var i=document.createElement(e);return t&&(i.className=t),r&&(i.innerHTML=r),i}function m(t){var r=t||e.event;return r.target||(r.target=r.srcElement),r}f(Object,{forEach:function(e,t,r){for(var i in e)s.call(e,i)&&t.call(r,i,e[i],e)}}),f(Array.prototype,{forEach:function(e,t){for(var r=this,i=0,n=r.length;i<n;i++)i in r&&e.call(t,r[i],i,r)}}),f(Date,{now:function(){return+new Date}}),(e.ActiveXObject||e.msIndexedDB)&&(r=document.documentMode||(e.XMLHttpRequest?7:6)),e.JSON||(e.JSON={}),JSON.parse||(JSON.parse=function(e,t){if(!1!==t&&!/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+e)()}catch(e){}}),document.addEventListener?(i=function(e,t,r){e.addEventListener(t,r,!1)},n=function(e,t,r){e.removeEventListener(t,r,!1)}):document.attachEvent&&(i=function(e,t,r){e.attachEvent("on"+t,r)},n=function(e,t,r){e.detachEvent("on"+t,r)});var v=/^https?:\/\//i;function g(e){return v.test(e)}function w(e,t,r){e=+e;for(var i=0,n="number"==typeof(t=t||1024),a=1,s=c(r)?r:n?100:t.length;e>=a&&i<s;)a*=n?t:t[i],i++;return i&&e<a&&(a/=n?t:t.last(),i--),{value:i?e/a:e,level:i}}var y=["B","KB","MB","GB","TB","PB","EB"];var b={def:l,isFunc:u,isUInt:c,fire:function(e,t){if(u(e))return e.apply(t,o.call(arguments,2))},extend:f,ie:r,setOpacity:function(e,r){r<=1&&(r*=100),e.style.opacity!=t?e.style.opacity=r/100:e.style.filter!=t&&(e.style.filter="alpha(opacity="+parseInt(r)+")")},getOffset:function(e,t){for(var r=0,i=0,n=e.offsetWidth,a=e.offsetHeight;r+=e.offsetLeft,i+=e.offsetTop,(e=e.offsetParent)&&e!=t;);return{left:r,top:i,width:n,height:a}},walk:d,getPrev:function(e){return e.previousElementSibling||d(e,"previousSibling",null,!1)},getNext:function(e){return e.nextElementSibling||d(e,"nextSibling",null,!1)},getFirst:p,getLast:function(e){return e.lastElementChild||d(e,"previousSibling","lastChild",!1)},getChilds:function(e){return e.children||d(e,"nextSibling","firstChild",!0)},createEle:h,parseHTML:function(e,t){var r=h("div","",e);return t?r.childNodes:p(r)},isHttpURL:g,isSameHost:function(e){if(!g(e))return!0;var r=RegExp.lastMatch.length,i=e.indexOf("/",r);return e.slice(0,-1!=i?i:t).toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()},parseLevel:w,formatSize:function(e,r){if(r=!0===r?{all:!0}:r||{},isNaN(e)||e==t||e<0){var i=r.error||"--";return r.all?{text:i}:i}var n=w(e,r.steps,r.limit),a=n.value.toFixed(l(r.digit,2));return!1!==r.trim&&-1!=a.lastIndexOf(".")&&(a=a.replace(/\.?0+$/,"")),n.text=a+(r.join||"")+(r.units||y)[n.level+(r.start||0)],r.all?n:n.text}};r&&(b["ie"+(r<6?6:r)]=!0),b.event={fix:m,stop:function(e,t,r){var i=m(e);!1!==t&&(i.preventDefault?i.preventDefault():i.returnValue=!1),!1!==r&&(i.stopPropagation?i.stopPropagation():i.cancelBubble=!0)},trigger:function(e,t){if(u(e[t]))e[t]();else if(e.fireEvent)e.fireEvent("on"+t);else if(e.dispatchEvent){var r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),e.dispatchEvent(r)}},add:function(e,t,r,a){var s=function(i){r.call(e,m(i)),a&&n(e,t,s)};if(i(e,t,s),!a)return{stop:function(){n(e,t,s)}}}},e.Q=b}(window),function(e,t){"use strict";var r=Q.def,i=Q.fire,n=Q.extend,a=Q.getFirst,s=Q.getLast,o=JSON.parse,l=Q.createEle,u=Q.parseHTML,c=Q.setOpacity,f=Q.getOffset,d=Q.md5File,p=Q.event,h=p.add,m=p.trigger,v=p.stop,g=!1,w=!1,y=!1,b=0,x=0,E=0,S=0,_=1,T=2,L=-1,k=-2,I=-3;function M(e,t){var r=e.lastIndexOf(t);return-1!=r?e.slice(r):""}function O(e){if(e){for(var t=e.split(","),r={},i=0,n=t.length;i<n;i++)r[t[i]]=!0;return r}}function C(e){var t=this,r=e||{};t.guid=r.guid||"uploader"+ ++b,t.list=[],t.map={},t.index=0,t.started=!1,t.set(r)._init()}C.prototype={constructor:C,set:function(e){var i=this,a=n(e,i.ops);i.url=a.url,i.dataType=a.dataType||"json",i.data=a.data,i.targets=a.target||[],i.targets.forEach||(i.targets=[i.targets]),i.target=i.targets[0],i.html5=g&&!!r(a.html5,!0),i.multiple=w&&i.html5&&!!r(a.multiple,!0),i.clickTrigger=y&&!!r(a.clickTrigger,!0),i.workerThread=i.html5&&a.workerThread||1,i.workerIdle=i.workerThread,i.auto=!1!==a.auto,i.upName=a.upName||"upfile",i.accept=a.accept,i.isDir=a.isDir,i.allows=O(a.allows),i.disallows=O(a.disallows),i.maxSize=+a.maxSize||0,i.isSlice=!!a.isSlice,i.chunkSize=+a.chunkSize||2097152,i.isQueryState=!!r(a.isQueryState,i.isSlice),i.isMd5=!!r(a.isMd5,i.isSlice),i.isUploadAfterHash=!1!==a.isUploadAfterHash,i.sliceRetryCount=a.sliceRetryCount==t?2:+a.sliceRetryCount||0,i.container=a.container||document.body,a.getPos&&(i.getPos=a.getPos);var s=a.UI||{};return s.init&&(i.init=s.init),s.draw&&(i.draw=s.draw),s.update&&(i.update=s.update),s.over&&(i.over=s.over),i.fns=a.on||{},i.ops=a,i.accept&&!i.clickTrigger&&i.resetInput(),i},_init:function(){var e=this;if(!e._inited){e._inited=!0;var r,i,n=e.guid,o=e.container,u=l("div","upload-input "+n);if(o.appendChild(u),e.boxInput=u,!e.html5){var f="upload_iframe_"+n,d=l("div","upload-html4 "+n,'<iframe class="u-iframe" name="'+f+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+f+'"></form>');o.appendChild(d);var p=a(d),g=s(d);e.iframe=p,e.form=g,i=function(){if(0==e.workerIdle){var r;try{r=p.contentWindow.document.body.innerHTML}catch(e){}e.complete(t,T,r)}},(r=p).attachEvent?r.attachEvent("onload",i):r.addEventListener("load",i,!1)}return e.targets.forEach(function(t){e.clickTrigger?h(t,"click",function(t){!1!==e.fire("select",t)&&(e.resetInput(),m(e.inputFile,"click"))}):h(t,"mouseover",function(t){e.target=this,e.updatePos()})}),e.clickTrigger||(h(u,"click",function(t){!1===e.fire("select",t)&&v(t)}),c(u,0),e.resetInput()),e.fire("init"),e.run("init")}},resetInput:function(){var e=this,t=e.boxInput;if(!t)return e;t.innerHTML='<input type="file" name="'+e.upName+'"'+(e.accept?'accept="'+e.accept+'"':"")+(e.isDir?'webkitdirectory=""':"")+' style="'+(e.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(e.multiple?' multiple="multiple"':"")+">";var r=a(t);return h(r,"change",function(t){e.add(this),e.html5||e.resetInput()}),e.inputFile=r,e.updatePos()},updatePos:function(e){var t=this;if(t.clickTrigger)return t;var r=t.getPos||f,i=t.boxInput,n=a(i),s=t.target,o=s.offsetWidth,l=s.offsetHeight,u=0==o?{left:-1e4,top:-1e4}:r(s);return i.style.width=n.style.width=o+"px",i.style.height=n.style.height=l+"px",i.style.left=u.left+"px",i.style.top=u.top+"px",e&&(i.style.zIndex=++E),t},fire:function(e,t,r){if(!r)return i(this.fns[e],this,t);var n=this.fns[e+"Async"];if(n)return i(n,this,t,r);r(i(this.fns[e],this,t))},run:function(e,t){var r=this[e];return r&&i(r,this,t),this},addTask:function(e,t){if(e||t){var r,i;t?(r=t.webkitRelativePath||t.name||t.fileName,i=t.size||t.fileSize):(r=M(e.value,"\\").slice(1)||e.value,i=-1);var n,a=this,s=M(r,".").toLowerCase();a.disallows&&a.disallows[s]||a.allows&&!a.allows[s]?n="ext":-1!=i&&a.maxSize&&i>a.maxSize&&(n="size");var o={id:++x,name:r,ext:s,size:i,input:e,file:t,state:n?L:S};return n&&(o.limited=n,o.disabled=!0),a.fire("add",o,function(e){!1===e||o.disabled||o.limited||(o.index=a.list.length,a.list.push(o),a.map[o.id]=o,a.run("draw",o),a.auto&&a.start())}),o}},add:function(e){if("INPUT"==e.tagName){var r=e.files;if(r)for(var i=0,n=r.length;i<n;i++)this.addTask(e,r[i]);else this.addTask(e)}else this.addTask(t,e)},addList:function(e){for(var t=0,r=e.length;t<r;t++)this.add(e[t])},get:function(e){if(e!=t)return this.map[e]},cancel:function(e,t){var r=this,i=r.get(e);if(i){var n=i.state;if(n!=S&&n!=_)return r;if(n==_){var a=i.xhr;if(a)return a.abort(),r;r.iframe.contentWindow.location="about:blank"}return t?r:r.complete(i,k)}},remove:function(e){var t=this.get(e);t&&(t.state==_&&this.cancel(e),t.deleted=!0,this.fire("remove",t))},start:function(){var e=this,t=e.workerIdle,r=e.list,i=e.index,n=r.length;if(e.started||(e.started=!0),n<=0||i>=n||t<=0)return e;var a=r[i];return e.index++,e.upload(a)},upload:function(e){var t=this;return!e||e.state!=S||e.skip?t.start():(e.url=t.url,t.workerIdle--,t.fire("upload",e,function(r){if(!1===r)return t.complete(e,L);t.html5&&e.file?t._upload_html5_ready(e):e.input?t._upload_html4(e):t.complete(e,L)}),t)},queryState:function(e,t){var r=this,n=r.url,a=new XMLHttpRequest;return e.queryUrl=n+(-1==n.indexOf("?")?"?":"&")+"action=query&hash="+(e.hash||encodeURIComponent(e.name))+"&fileName="+encodeURIComponent(e.name),r.fire("sliceQuery",e),a.open("GET",e.queryUrl),a.onreadystatechange=function(){if(4==a.readyState){var n,s;if(a.status>=200&&a.status<400)if("ok"===(n=a.responseText)?s={ret:1}:n&&(s=o(n)),s&&"number"!=typeof s||(s={ret:0,start:s}),e.response=n,e.json=s,1==s.ret)e.queryOK=!0,r.cancel(e.id,!0).complete(e,T);else{var l=+s.start||0;l!=Math.floor(l)&&(l=0),e.sliceStart=l}i(t,r,a)}},a.onerror=function(){i(t,r,a)},a.send(null),r},_upload_html5_ready:function(e){var t=this,r=function(){e.state!=T&&(t.isSlice?t._upload_slice(e):t._upload_html5(e))},n=function(r){t.fire("hash",e,function(){e.hash&&t.isQueryState&&e.state!=T?t.queryState(e,r):r()})},a=function(r){if(t.isMd5&&d){var a=t.fns.hashProgress;d(e.file,function(t,i){e.hash=t,e.timeHash=i,n(r)},function(r){i(a,t,e,r)})}else n(r)};return t.isUploadAfterHash?a(r):(r(),a()),t},_process_params:function(e,t){this.data&&Object.forEach(this.data,t),e.data&&Object.forEach(e.data,t)},_upload_html5:function(e){var t=this,r=new XMLHttpRequest;e.xhr=r,r.upload.addEventListener("progress",function(r){t.progress(e,r.total,r.loaded)},!1),r.addEventListener("load",function(r){t.complete(e,T,r.target.responseText)},!1),r.addEventListener("error",function(){t.complete(e,I)},!1),r.addEventListener("abort",function(){t.complete(e,k)},!1);var i=new FormData;t._process_params(e,function(e,t){i.append(e,t)}),i.append("fileName",e.name),i.append(t.upName,e.blob||e.file,e.name),r.open("POST",e.url),t.fire("send",e,function(n){if(!1===n)return t.complete(e,L);r.send(i),t._afterSend(e)})},_upload_html4:function(e){var t=this,r=t.form,i=e.input;if(i._uploaded)return t.complete(e,T);i._uploaded=!0,i.name=t.upName,r.innerHTML="",r.appendChild(i),r.action=e.url,t._process_params(e,function(e,t){r.appendChild(u('<input type="hidden" name="'+e+'" value="'+t+'">'))}),t.fire("send",e,function(i){if(!1===i)return t.complete(e,L);r.submit(),t._afterSend(e)})},_afterSend:function(e){e.lastTime=e.startTime=Date.now(),e.state=_,this._lastTask=e,this.progress(e)},progress:function(e,t,r){t||(t=e.size),(!r||r<0)&&(r=0);var i=e.state||S;r>t&&(r=t),r>0&&i==S&&(e.state=i=_),i==T&&(t=r=e.size),function(e,t,r){if(t&&!(t<=0)){var i,n=Date.now();if(r>=t)return(i=n-e.startTime)?e.avgSpeed=Math.min(Math.round(1e3*t/i),t):e.speed||(e.avgSpeed=e.speed=t),e.time=i||0,void(e.endTime=n);(i=n-e.lastTime)<200||(e.speed=Math.min(Math.round(1e3*(r-e.loaded)/i),e.total),e.lastTime=n)}}(e,t,r),e.total=t,e.loaded=r,this.fire("progress",e),this.run("update",e)},_process_response:function(e,t){e.response=t,t&&"json"==this.dataType&&(e.json=o(t))},complete:function(e,r,i){var n=this;return e||1!=n.workerThread||(e=n._lastTask),e&&(r!=t&&(e.state=r),e.state!=_&&r!=T||(e.state=T,n.progress(e,e.size,e.size)),i!==t&&n._process_response(e,i)),n.run("update",e).run("over",e),r==k&&n.fire("cancel",e),n.fire("complete",e),n.workerIdle++,n.started&&n.start(),n}},C.extend=function(e,t){n(C.prototype,e,t)},function(){var t=e.XMLHttpRequest;t&&(new t).upload&&e.FormData&&(g=!0);var r=document.createElement("input");r.type="file",w=!!r.files,y=g}(),n(C,{support:{html5:g,multiple:w},READY:S,PROCESSING:_,COMPLETE:T,SKIP:L,CANCEL:k,ERROR:I,UI:{},Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"已失败"},getStatusText:function(e){var t=C.Lang;switch(e){case S:return t.status_ready;case _:return t.status_processing;case T:return t.status_complete;case L:return t.status_skip;case k:return t.status_cancel;case I:return t.status_error}return e}}),Q.Uploader=C}(window),function(e,t){"use strict";var r=Q.getFirst,i=Q.getNext,n=Q.createEle,a=Q.setOpacity,s=Q.ie,o=Q.Uploader;function l(e,t){e.className+=" "+t}function u(r,i,n){var a=i.input,o=i.file||(a.files?a.files[0]:t);if(o)!function(t,r){var i=e.URL||e.webkitURL;if(i)return r(i.createObjectURL(t));if(e.FileReader){var n=new FileReader;n.onload=function(e){r(e.target.result)},n.readAsDataURL(t)}else t.readAsDataURL&&r(t.readAsDataURL())}(o,function(e){e&&(r.innerHTML='<img src="'+e+'" />'),n&&n(e)});else if(a){var l=a.value;if(l&&!/^\w:\\fakepath/.test(l)||(a.select(),parent.document.body.focus(),document.selection&&(l=document.selection.createRange().text)),l){r.innerHTML='<img src="'+l+'" />';try{s>6&&(r.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='"+l+"')")}catch(e){}}n&&n(l)}}var c=e.Blob||e.WebkitBlob||e.MozBlob,f=e.WebKitBlobBuilder||e.MozBlobBuilder,d=function(){if(!e.FileReader||!e.atob||!c&&!f)return!1;var t=document.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")}();function p(e,t,r,i){var n=new Image;n.src=e,n.onload=function(){var e=n.width,a=n.height,s=r.maxWidth,o=r.maxHeight,l=s&&e>s,u=o&&a>o;if(!(l||u))return i&&i(!1);l&&(e=s,a=Math.floor(n.height*e/n.width)),u&&(a=o,e=Math.floor(n.width*a/n.height));var c=document.createElement("canvas"),f=c.getContext("2d");c.width=e,c.height=a,f.drawImage(n,0,0,e,a),i&&i(c.toDataURL(t),t)}}var h=".jpg,.png,.gif,.bmp,.webp,.tif,.tiff";o.support.imageScale=d,o.previewImage=u,o.scaleImage=p,o.UI.Image={init:function(){var e=this.ops,t=e.view;e.allows||(e.allows=h),t&&l(t,"ui-image "+(this.html5?"html5":"html4"))},supportScale:function(e){if(!d)return!1;".jpeg"==e&&(e=".jpg");var t=(this.ops.scale||{}).types||".jpg";return!(-1==h.indexOf(e))&&("*"==t||-1!=t.indexOf(e))},previewImage:function(e,t,r){var i=this,n=t.scale||r.scale,a=n&&i.supportScale(t.ext);return a&&(t.skip=!0),u(e,t,function(e){var r,s;(i.fire("preview",{task:t,src:e}),e&&a)&&p(e,(r=t.ext,"image/"+("jpg"==(s=r.slice(1))?"jpeg":s)),n,function(e,r){if(e){var n=function(e,t){for(var r=e.split(","),i=atob(r[1]),n=[],a=0,s=i.length;a<s;a++)n[a]=i.charCodeAt(a);if(c)return new c([new Uint8Array(n)],{type:t});var o=new f;return o.append(n),o.getBlob(t)}(e,r);t.blob=n,i.fire("scale",{task:t,base64:e,type:r,blob:n})}t.skip=!1,i.list.push(t),i.auto&&i.start()})}),i},draw:function(e){var t=this.ops,s=t.view;if(s){var o=e.name,l='<div class="u-img"></div><div class="u-progress-bar"><div class="u-progress"></div></div><div class="u-detail"></div><div class="u-name" title="'+o+'">'+o+"</div>",u=e.id,c=n("div","u-item",l);c.taskId=u;var f=r(c),d=i(f),p=r(d),h=i(d);a(d,.3),a(p,.5),e.box=c,e.boxProgress=p,e.boxDetail=h,s.appendChild(c),this.previewImage(f,e,t).update(e)}},update:function(e){if(e&&e.box){var r,i,n=e.total||e.size,a=e.loaded,s=e.state,l=e.boxProgress,u=e.boxDetail,c=o.getStatusText(s);if(this.html5&&a!=t&&a>=0){var f;if(s==o.PROCESSING)"100.0"==(f=Math.min(100*a/n,100).toFixed(1))&&(f="99.9");else s==o.COMPLETE&&(f="100");f&&(c+=" "+(f+="%"),l.style.width=f)}i=c,(r=u)&&(r.innerHTML=i||"")}},over:function(e){e&&e.box&&l(e.box,"u-over")}},o.extend(o.UI.Image)}(window);