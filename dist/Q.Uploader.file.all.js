//devin87@qq.com
//build:2018/04/12 10:05:52
!function(t,e){"use strict";var i,n,r,a=Object.prototype.toString,s=Object.prototype.hasOwnProperty,o=Array.prototype.slice;function l(t,i){return t!==e?t:i}function u(t){return"[object Function]"===a.call(t)}function c(t){return"number"==typeof t&&t>0&&t===Math.floor(t)}function d(t,i,n){if(!t||!i)return t;for(var r in i)r!=e&&s.call(i,r)&&(n||t[r]===e)&&(t[r]=i[r]);return t}function f(t,e,i,n){for(var r=t[i||e],a=[];r;){if(1==r.nodeType){if(!n)return r;a.push(r)}r=r[e]}return n?a:null}function p(t){return t.firstElementChild||f(t,"nextSibling","firstChild",!1)}function h(t,e,i){var n=document.createElement(t);return e&&(n.className=e),i&&(n.innerHTML=i),n}function v(e){var i=e||t.event;return i.target||(i.target=i.srcElement),i}d(Object,{forEach:function(t,e,i){for(var n in t)s.call(t,n)&&e.call(i,n,t[n],t)}}),d(Array.prototype,{forEach:function(t,e){for(var i=this,n=0,r=i.length;n<r;n++)n in i&&t.call(e,i[n],n,i)}}),d(Date,{now:function(){return+new Date}}),(t.ActiveXObject||t.msIndexedDB)&&(i=document.documentMode||(t.XMLHttpRequest?7:6)),t.JSON||(t.JSON={}),JSON.parse||(JSON.parse=function(t,e){if(!1!==e&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(t){}}),document.addEventListener?(n=function(t,e,i){t.addEventListener(e,i,!1)},r=function(t,e,i){t.removeEventListener(e,i,!1)}):document.attachEvent&&(n=function(t,e,i){t.attachEvent("on"+e,i)},r=function(t,e,i){t.detachEvent("on"+e,i)});var m=/^https?:\/\//i;function g(t){return m.test(t)}function y(t,e,i){t=+t;for(var n=0,r="number"==typeof(e=e||1024),a=1,s=c(i)?i:r?100:e.length;t>=a&&n<s;)a*=r?e:e[n],n++;return n&&t<a&&(a/=r?e:e.last(),n--),{value:n?t/a:t,level:n}}var w=["B","KB","MB","GB","TB","PB","EB"];var x={def:l,isFunc:u,isUInt:c,fire:function(t,e){if(u(t))return t.apply(e,o.call(arguments,2))},extend:d,ie:i,setOpacity:function(t,i){i<=1&&(i*=100),t.style.opacity!=e?t.style.opacity=i/100:t.style.filter!=e&&(t.style.filter="alpha(opacity="+parseInt(i)+")")},getOffset:function(t,e){for(var i=0,n=0,r=t.offsetWidth,a=t.offsetHeight;i+=t.offsetLeft,n+=t.offsetTop,(t=t.offsetParent)&&t!=e;);return{left:i,top:n,width:r,height:a}},walk:f,getPrev:function(t){return t.previousElementSibling||f(t,"previousSibling",null,!1)},getNext:function(t){return t.nextElementSibling||f(t,"nextSibling",null,!1)},getFirst:p,getLast:function(t){return t.lastElementChild||f(t,"previousSibling","lastChild",!1)},getChilds:function(t){return t.children||f(t,"nextSibling","firstChild",!0)},createEle:h,parseHTML:function(t,e){var i=h("div","",t);return e?i.childNodes:p(i)},isHttpURL:g,isSameHost:function(t){if(!g(t))return!0;var i=RegExp.lastMatch.length,n=t.indexOf("/",i);return t.slice(0,-1!=n?n:e).toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()},parseLevel:y,formatSize:function(t,i){if(i=!0===i?{all:!0}:i||{},isNaN(t)||t==e||t<0){var n=i.error||"--";return i.all?{text:n}:n}var r=y(t,i.steps,i.limit),a=r.value.toFixed(l(i.digit,2));return!1!==i.trim&&-1!=a.lastIndexOf(".")&&(a=a.replace(/\.?0+$/,"")),r.text=a+(i.join||"")+(i.units||w)[r.level+(i.start||0)],i.all?r:r.text}};i&&(x["ie"+(i<6?6:i)]=!0),x.event={fix:v,stop:function(t,e,i){var n=v(t);!1!==e&&(n.preventDefault?n.preventDefault():n.returnValue=!1),!1!==i&&(n.stopPropagation?n.stopPropagation():n.cancelBubble=!0)},trigger:function(t,e){if(u(t[e]))t[e]();else if(t.fireEvent)t.fireEvent("on"+e);else if(t.dispatchEvent){var i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!0),t.dispatchEvent(i)}},add:function(t,e,i,a){var s=function(n){i.call(t,v(n)),a&&r(t,e,s)};if(n(t,e,s),!a)return{stop:function(){r(t,e,s)}}}},t.Q=x}(window),function(t,e){"use strict";var i=Q.def,n=Q.fire,r=Q.extend,a=Q.getFirst,s=Q.getLast,o=JSON.parse,l=Q.createEle,u=Q.parseHTML,c=Q.setOpacity,d=Q.getOffset,f=Q.md5File,p=Q.event,h=p.add,v=p.trigger,m=p.stop,g=!1,y=!1,w=!1,x=0,E=0,S=0,_=0,T=1,b=2,k=-1,L=-2,I=-3;function N(t,e){var i=t.lastIndexOf(e);return-1!=i?t.slice(i):""}function O(t){if(t){for(var e=t.split(","),i={},n=0,r=e.length;n<r;n++)i[e[n]]=!0;return i}}function M(t){var e=this,i=t||{};e.guid=i.guid||"uploader"+ ++x,e.list=[],e.map={},e.index=0,e.started=!1,e.set(i)._init()}M.prototype={constructor:M,set:function(t){var n=this,a=r(t,n.ops);n.url=a.url,n.dataType=a.dataType||"json",n.data=a.data,n.targets=a.target||[],n.targets.forEach||(n.targets=[n.targets]),n.target=n.targets[0],n.html5=g&&!!i(a.html5,!0),n.multiple=y&&n.html5&&!!i(a.multiple,!0),n.clickTrigger=w&&!!i(a.clickTrigger,!0),n.workerThread=n.html5&&a.workerThread||1,n.workerIdle=n.workerThread,n.auto=!1!==a.auto,n.upName=a.upName||"upfile",n.accept=a.accept,n.isDir=a.isDir,n.allows=O(a.allows),n.disallows=O(a.disallows),n.maxSize=+a.maxSize||0,n.isSlice=!!a.isSlice,n.chunkSize=+a.chunkSize||2097152,n.isQueryState=!!i(a.isQueryState,n.isSlice),n.isMd5=!!i(a.isMd5,n.isSlice),n.isUploadAfterHash=!1!==a.isUploadAfterHash,n.sliceRetryCount=a.sliceRetryCount==e?2:+a.sliceRetryCount||0,n.container=a.container||document.body,a.getPos&&(n.getPos=a.getPos);var s=a.UI||{};return s.init&&(n.init=s.init),s.draw&&(n.draw=s.draw),s.update&&(n.update=s.update),s.over&&(n.over=s.over),n.fns=a.on||{},n.ops=a,n.accept&&!n.clickTrigger&&n.resetInput(),n},_init:function(){var t=this;if(!t._inited){t._inited=!0;var i,n,r=t.guid,o=t.container,u=l("div","upload-input "+r);if(o.appendChild(u),t.boxInput=u,!t.html5){var d="upload_iframe_"+r,f=l("div","upload-html4 "+r,'<iframe class="u-iframe" name="'+d+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+d+'"></form>');o.appendChild(f);var p=a(f),g=s(f);t.iframe=p,t.form=g,n=function(){if(0==t.workerIdle){var i;try{i=p.contentWindow.document.body.innerHTML}catch(t){}t.complete(e,b,i)}},(i=p).attachEvent?i.attachEvent("onload",n):i.addEventListener("load",n,!1)}return t.targets.forEach(function(e){t.clickTrigger?h(e,"click",function(e){!1!==t.fire("select",e)&&(t.resetInput(),v(t.inputFile,"click"))}):h(e,"mouseover",function(e){t.target=this,t.updatePos()})}),t.clickTrigger||(h(u,"click",function(e){!1===t.fire("select",e)&&m(e)}),c(u,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput;if(!e)return t;e.innerHTML='<input type="file" name="'+t.upName+'"'+(t.accept?'accept="'+t.accept+'"':"")+(t.isDir?'webkitdirectory=""':"")+' style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var i=a(e);return h(i,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=i,t.updatePos()},updatePos:function(t){var e=this;if(e.clickTrigger)return e;var i=e.getPos||d,n=e.boxInput,r=a(n),s=e.target,o=s.offsetWidth,l=s.offsetHeight,u=0==o?{left:-1e4,top:-1e4}:i(s);return n.style.width=r.style.width=o+"px",n.style.height=r.style.height=l+"px",n.style.left=u.left+"px",n.style.top=u.top+"px",t&&(n.style.zIndex=++S),e},fire:function(t,e,i){if(!i)return n(this.fns[t],this,e);var r=this.fns[t+"Async"];if(r)return n(r,this,e,i);i(n(this.fns[t],this,e))},run:function(t,e){var i=this[t];return i&&n(i,this,e),this},addTask:function(t,e){if(t||e){var i,n;e?(i=e.webkitRelativePath||e.name||e.fileName,n=0===e.size?0:e.size||e.fileSize):(i=N(t.value,"\\").slice(1)||t.value,n=-1);var r,a=this,s=N(i,".").toLowerCase();a.disallows&&a.disallows[s]||a.allows&&!a.allows[s]?r="ext":-1!=n&&a.maxSize&&n>a.maxSize&&(r="size");var o={id:++E,name:i,ext:s,size:n,input:t,file:e,state:r?k:_};return r&&(o.limited=r,o.disabled=!0),a.fire("add",o,function(t){!1===t||o.disabled||o.limited||(o.index=a.list.length,a.list.push(o),a.map[o.id]=o,a.run("draw",o),a.auto&&a.start())}),o}},add:function(t){if("INPUT"==t.tagName){var i=t.files;if(i)for(var n=0,r=i.length;n<r;n++)this.addTask(t,i[n]);else this.addTask(t)}else this.addTask(e,t)},addList:function(t){for(var e=0,i=t.length;e<i;e++)this.add(t[e])},get:function(t){if(t!=e)return this.map[t]},cancel:function(t,e){var i=this,n=i.get(t);if(n){var r=n.state;if(r!=_&&r!=T)return i;if(r==T){var a=n.xhr;if(a)return a.abort(),i;i.iframe.contentWindow.location="about:blank"}return e?i:i.complete(n,L)}},remove:function(t){var e=this.get(t);e&&(e.state==T&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this,e=t.workerIdle,i=t.list,n=t.index,r=i.length;if(t.started||(t.started=!0),r<=0||n>=r||e<=0)return t;var a=i[n];return t.index++,t.upload(a)},upload:function(t){var e=this;return!t||t.state!=_||t.skip||t.deleted?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(i){if(!1===i)return e.complete(t,k);e.html5&&t.file?e._upload_html5_ready(t):t.input?e._upload_html4(t):e.complete(t,k)}),e)},queryState:function(t,e){var i=this,r=i.url,a=new XMLHttpRequest;return t.queryUrl=r+(-1==r.indexOf("?")?"?":"&")+"action=query&hash="+(t.hash||encodeURIComponent(t.name))+"&fileName="+encodeURIComponent(t.name),i.fire("sliceQuery",t),a.open("GET",t.queryUrl),a.onreadystatechange=function(){if(4==a.readyState){var r,s;if(a.status>=200&&a.status<400)if("ok"===(r=a.responseText)?s={ret:1}:r&&(s=o(r)),s&&"number"!=typeof s||(s={ret:0,start:s}),t.response=r,t.json=s,1==s.ret)t.queryOK=!0,i.cancel(t.id,!0).complete(t,b);else{var l=+s.start||0;l!=Math.floor(l)&&(l=0),t.sliceStart=l}n(e,i,a)}},a.onerror=function(){n(e,i,a)},a.send(null),i},_upload_html5_ready:function(t){var e=this,i=function(){t.state!=b&&(e.isSlice?e._upload_slice(t):e._upload_html5(t))},r=function(i){e.fire("hash",t,function(){t.hash&&e.isQueryState&&t.state!=b?e.queryState(t,i):i()})},a=function(i){if(e.isMd5&&f){var a=e.fns.hashProgress;f(t.file,function(e,n){t.hash=e,t.timeHash=n,r(i)},function(i){n(a,e,t,i)})}else r(i)};return e.isUploadAfterHash?a(i):(i(),a()),e},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,i=new XMLHttpRequest;t.xhr=i,i.upload.addEventListener("progress",function(i){e.progress(t,i.total,i.loaded)},!1),i.addEventListener("load",function(i){e.complete(t,b,i.target.responseText)},!1),i.addEventListener("error",function(){e.complete(t,I)},!1),i.addEventListener("abort",function(){e.complete(t,L)},!1);var n=new FormData;e._process_params(t,function(t,e){n.append(t,e)}),n.append("fileName",t.name),n.append(e.upName,t.blob||t.file,t.name),i.open("POST",t.url),e.fire("send",t,function(r){if(!1===r)return e.complete(t,k);i.send(n),e._afterSend(t)})},_upload_html4:function(t){var e=this,i=e.form,n=t.input;if(n._uploaded)return e.complete(t,b);n._uploaded=!0,n.name=e.upName,i.innerHTML="",i.appendChild(n),i.action=t.url,e._process_params(t,function(t,e){i.appendChild(u('<input type="hidden" name="'+t+'" value="'+e+'">'))}),e.fire("send",t,function(n){if(!1===n)return e.complete(t,k);i.submit(),e._afterSend(t)})},_afterSend:function(t){t.lastTime=t.startTime=Date.now(),t.state=T,this._lastTask=t,this.progress(t)},progress:function(t,e,i){e||(e=t.size),(!i||i<0)&&(i=0);var n=t.state||_;i>e&&(i=e),i>0&&n==_&&(t.state=n=T),n==b&&(e=i=t.size),function(t,e,i){if(e&&!(e<=0)){var n,r=Date.now();if(i>=e)return(n=r-t.startTime)?t.avgSpeed=Math.min(Math.round(1e3*e/n),e):t.speed||(t.avgSpeed=t.speed=e),t.time=n||0,void(t.endTime=r);(n=r-t.lastTime)<200||(t.speed=Math.min(Math.round(1e3*(i-t.loaded)/n),t.total),t.lastTime=r)}}(t,e,i),t.total=e,t.loaded=i,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=o(e))},complete:function(t,i,n){var r=this;return t||1!=r.workerThread||(t=r._lastTask),t&&(i!=e&&(t.state=i),t.state!=T&&i!=b||(t.state=b,r.progress(t,t.size,t.size)),n!==e&&r._process_response(t,n)),r.run("update",t).run("over",t),i==L&&r.fire("cancel",t),r.fire("complete",t),r.workerIdle++,r.started&&r.start(),r}},M.extend=function(t,e){r(M.prototype,t,e)},function(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(g=!0);var i=document.createElement("input");i.type="file",y=!!i.files,w=g}(),r(M,{support:{html5:g,multiple:y},READY:_,PROCESSING:T,COMPLETE:b,SKIP:k,CANCEL:L,ERROR:I,UI:{},Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"已失败"},getStatusText:function(t){var e=M.Lang;switch(t){case _:return e.status_ready;case T:return e.status_processing;case b:return e.status_complete;case k:return e.status_skip;case L:return e.status_cancel;case I:return e.status_error}return t}}),Q.Uploader=M}(window),function(t,e){"use strict";var i=Q.def,n=Q.getFirst,r=Q.getLast,a=Q.getNext,s=Q.createEle,o=Q.formatSize,l=Q.event.add,u=Q.Uploader,c=u.Lang;function d(t,e){t.className+=" "+e}function f(t,e){t&&(t.innerHTML=e||"")}u.UI.File={init:function(){var t=this.ops.view;t&&d(t,"ui-file "+(this.html5?"html5":"html4"))},draw:function(t){var e=this,a=e.ops,o=a.view;if(o){var u=a.button||{},d=i(c.cancel||u.cancel,"取消"),f=i(c.remove||u.remove,"删除"),p=t.name,h='<div class="fl"><div class="u-name" title="'+p+'">'+p+'</div></div><div class="fr"><div class="u-size"></div><div class="u-speed">--/s</div><div class="u-progress-bar"><div class="u-progress" style="width:1%;"></div></div><div class="u-detail">0%</div><div class="u-state"></div><div class="u-op"><a class="u-op-cancel">'+d+'</a><a class="u-op-remove">'+f+'</a></div></div><div class="clear"></div>',v=t.id,m=s("div","u-item",h);m.taskId=v,t.box=m,o.appendChild(m);var g=r(m.childNodes[1]),y=n(g),w=r(g);l(y,"click",function(){e.cancel(v)}),l(w,"click",function(){e.remove(v),o.removeChild(m)}),e.update(t)}},update:function(t){if(t&&t.box){var e=t.total||t.size,i=t.loaded,r=t.state,s=t.box.childNodes[1],l=n(s),c=a(l),d=a(c),p=n(d),h=a(d);if(f(a(h),u.getStatusText(r)),!(e<0)){var v="";if(this.html5&&null!=i&&i>=0){var m;if(r==u.PROCESSING)"100.0"==(m=Math.min(100*i/e,100).toFixed(1))&&(m="99.9");else r==u.COMPLETE&&(m="100");m&&(m+="%",p.style.width=m,f(h,m)),v='<span class="u-loaded">'+o(i)+"</span> / ";var g=t.avgSpeed||t.speed;f(c,o(g)+"/s")}f(l,v+='<span class="u-total">'+o(e)+"</span>")}}},over:function(t){t&&t.box&&d(t.box,"u-over")}},u.extend(u.UI.File)}(window);