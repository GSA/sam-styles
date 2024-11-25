(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({192:"branding-typography-paragraph-paragraph-stories",735:"components-process-list-process-list-stories",844:"structure-header-header-stories",921:"components-range-slider-range-slider-stories",1077:"branding-typography-heading-heading-stories",1185:"structure-banner-banner-stories",1502:"components-card-card-stories",1854:"components-actions-actions-stories",2481:"components-collection-collection-stories",2739:"form-controls-dropdown-dropdown-stories",2978:"branding-colors-colors-stories",3252:"branding-icons-icons-stories",3438:"components-toasts-toasts-stories",3678:"form-controls-search-search-stories",3685:"components-button-circle-circle-button-stories",3693:"components-button-row-button-row-stories",3818:"components-button-standard-Button-stories",4041:"structure-seal-seal-stories",4049:"components-button-pill-pill-button-stories",4803:"misc-toolbar-toolbar-stories",5065:"components-dashboard-statistics-alt-stories",5156:"components-dashboard-event-event-stories",5178:"components-tables-tables-stories",5273:"components-button-group-button-grop-stories",5324:"branding-typography-fields-fields-stories",5884:"structure-footer-footer-stories",5898:"misc-pop-up-pop-up-stories",6297:"form-controls-name-form-name-form-stories",6628:"components-side-nav-side-nav-stories",6641:"branding-typography-lists-lists-stories",6646:"components-accordion-accordion-stories",6664:"components-stepindicator-stepindicator-stories",6989:"branding-typography-typesetting-typesetting-stories",6994:"components-history-history-stories",7325:"components-autocomplete-autocomplete-stories",7372:"misc-sort-sort-stories",7377:"components-dashboard-statistics-default-stories",7451:"components-pagination-Pagination-stories",7776:"form-controls-input-input-stories",7965:"structure-sds-navbar-sds-navbar-stories",9083:"patterns-pages-pages-stories",9116:"components-tags-tags-stories",9199:"components-summarybox-summarybox-stories",9366:"components-dashboard-tile-SDStile-sdstile-stories",9370:"components-alerts-alert-stories",9448:"form-controls-radio-radio-stories",9506:"form-controls-address-form-address-form-stories",9690:"misc-search-layout-search-layout-stories",9794:"form-controls-checkbox-checkbox-stories",9932:"components-dashboard-tile-SDStile-outline-tileoutline-stories"}[chunkId]||chunkId)+"."+{192:"83afceca",421:"b1ce0dc2",735:"b0559ab5",844:"502f07c1",921:"8232627c",1077:"71e0a92e",1185:"36485e37",1341:"bc30bdee",1502:"7cd199cf",1729:"2680c345",1854:"9459141b",2481:"d025f0ea",2551:"af8f3d16",2739:"7b4d1070",2897:"9defa4d2",2978:"8ad076b8",3252:"8e2109df",3438:"0d6bdafb",3678:"1d7ef7ce",3685:"81f976e6",3693:"c9be7536",3818:"db85a510",4041:"96777f9d",4049:"e40ede9e",4803:"5d036df8",5051:"eb232de1",5065:"8e6e767f",5156:"25799324",5178:"2a92b31b",5229:"10cbd330",5273:"b389684f",5324:"df7af2ab",5884:"736ce7f4",5898:"6b8a8e4d",5935:"f8db798b",6297:"8249be75",6628:"f8f77dac",6641:"62877cc6",6646:"226128fb",6664:"dbb07c8f",6989:"b7af3832",6994:"b838a7a8",7325:"86f928ab",7372:"bb450a0d",7377:"04e11bfa",7421:"e3e88843",7451:"1970b750",7776:"27e1e262",7965:"e4b03dfe",9083:"e5c775b4",9116:"152215d9",9199:"93077937",9366:"9d7e1ecb",9370:"f97a69c4",9448:"1478dcf1",9506:"5d6dbc7b",9690:"056e1b05",9794:"785e5eb7",9807:"81c79b03",9932:"da00008e"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@gsa-sam/sam-styles:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@gsa-sam/sam-styles:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_gsa_sam_sam_styles=self.webpackChunk_gsa_sam_sam_styles||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();