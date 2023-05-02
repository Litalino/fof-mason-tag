(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const n=flarum.core.compat["admin/app"];var a=t.n(n);function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}const i=flarum.core.compat["common/Model"];var r=t.n(i),l=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).content=r().attribute("content"),e.is_suggested=r().attribute("is_suggested"),e.sort=r().attribute("sort"),e.field=r().hasOne("field"),e}return o(e,t),e.prototype.apiEndpoint=function(){return"/xsoft/mason-tag/answers"+(this.exists?"/"+this.data.id:"")},e}(r());const d=flarum.core.compat["common/utils/computed"];var c=t.n(d),u=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).name=r().attribute("name"),e.description=r().attribute("description"),e.min_answers_count=r().attribute("min_answers_count"),e.max_answers_count=r().attribute("max_answers_count"),e.show_when_empty=r().attribute("show_when_empty"),e.user_values_allowed=r().attribute("user_values_allowed"),e.validation=r().attribute("validation"),e.icon=r().attribute("icon"),e.sort=r().attribute("sort"),e.deleted_at=r().attribute("deleted_at",r().transformDate),e.allAnswers=r().hasMany("allAnswers"),e.suggestedAnswers=r().hasMany("suggestedAnswers"),e.required=c()("min_answers_count",(function(t){return t>0})),e.multiple=c()("max_answers_count",(function(t){return t>1})),e}return o(e,t),e.prototype.apiEndpoint=function(){return"/xsoft/mason-tag/fields"+(this.exists?"/"+this.data.id:"")},e}(r()),f=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).tag_name=r().attribute("tag_name"),e.tag_id=r().attribute("tag_id"),e.field_name=r().attribute("field_name"),e.switch=r().attribute("switch"),e}return o(e,t),e.prototype.apiEndpoint=function(){return"/xsoft/mason-tag/bytags"+(this.exists?"/"+this.data.id:"")},e}(r());function h(t,e,n){if(void 0===n)return t&&t.h5s&&t.h5s.data&&t.h5s.data[e];t.h5s=t.h5s||{},t.h5s.data=t.h5s.data||{},t.h5s.data[e]=n}var p=function(t,e){if(!(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof e?Array.from(t):Array.from(t).filter((function(t){return 1===t.nodeType&&t.matches(e)}))},g=new Map,v=function(){function t(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(t.prototype,"config",{get:function(){var t={};return this._config.forEach((function(e,n){t[n]=e})),t},set:function(t){if("object"!=typeof t)throw new Error("You must provide a valid configuration object to the config setter.");var e=Object.assign({},t);this._config=new Map(Object.entries(e))},enumerable:!1,configurable:!0}),t.prototype.setConfig=function(t,e){if(!this._config.has(t))throw new Error("Trying to set invalid configuration item: "+t);this._config.set(t,e)},t.prototype.getConfig=function(t){if(!this._config.has(t))throw new Error("Invalid configuration item requested: "+t);return this._config.get(t)},Object.defineProperty(t.prototype,"placeholder",{get:function(){return this._placeholder},set:function(t){if(!(t instanceof HTMLElement)&&null!==t)throw new Error("A placeholder must be an html element or null.");this._placeholder=t},enumerable:!1,configurable:!0}),t.prototype.setData=function(t,e){if("string"!=typeof t)throw new Error("The key must be a string.");this._data.set(t,e)},t.prototype.getData=function(t){if("string"!=typeof t)throw new Error("The key must be a string.");return this._data.get(t)},t.prototype.deleteData=function(t){if("string"!=typeof t)throw new Error("The key must be a string.");return this._data.delete(t)},t}(),w=function(t){if(!(t instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return g.has(t)||g.set(t,new v),g.get(t)};function b(t,e,n){if(t instanceof Array)for(var a=0;a<t.length;++a)b(t[a],e,n);else t.addEventListener(e,n),w(t).setData("event"+e,n)}function y(t,e){if(t instanceof Array)for(var n=0;n<t.length;++n)y(t[n],e);else t.removeEventListener(e,w(t).getData("event"+e)),w(t).deleteData("event"+e)}function x(t,e,n){if(t instanceof Array)for(var a=0;a<t.length;++a)x(t[a],e,n);else t.setAttribute(e,n)}function E(t,e){if(t instanceof Array)for(var n=0;n<t.length;++n)E(t[n],e);else t.removeAttribute(e)}var _,T,N,C,S,A,F,M,L,P=function(t){if(!t.parentElement||0===t.getClientRects().length)throw new Error("target element must be part of the dom");var e=t.getClientRects()[0];return{left:e.left+window.pageXOffset,right:e.right+window.pageXOffset,top:e.top+window.pageYOffset,bottom:e.bottom+window.pageYOffset}},H=function(t,e){if(!(t instanceof HTMLElement&&(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(e).indexOf(t)},B=function(t){if(!(t instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==t.parentNode},O=function(t,e,n){if(!(t instanceof HTMLElement&&t.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");t.parentElement.insertBefore(e,"before"===n?t:t.nextElementSibling)},D=function(t,e){return O(t,e,"after")},I=function(t){if(!(t instanceof HTMLElement))throw new Error("You must provide a valid dom element");var e=window.getComputedStyle(t);return"border-box"===e.getPropertyValue("box-sizing")?parseInt(e.getPropertyValue("height"),10):["height","padding-top","padding-bottom"].map((function(t){var n=parseInt(e.getPropertyValue(t),10);return isNaN(n)?0:n})).reduce((function(t,e){return t+e}))},j=function(t){if(!(t instanceof HTMLElement))throw new Error("You must provide a valid dom element");var e=window.getComputedStyle(t);return["width","padding-left","padding-right"].map((function(t){var n=parseInt(e.getPropertyValue(t),10);return isNaN(n)?0:n})).reduce((function(t,e){return t+e}))},k=function(t,e){if(!(t instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof e?t:t.filter((function(t){return t.querySelector(e)instanceof HTMLElement||t.shadowRoot&&t.shadowRoot.querySelector(e)instanceof HTMLElement})).map((function(t){return t.querySelector(e)||t.shadowRoot&&t.shadowRoot.querySelector(e)}))},q=function(t){return t.composedPath&&t.composedPath()[0]||t.target},Y=function(t,e,n){return{element:t,posX:n.pageX-e.left,posY:n.pageY-e.top}},R=function(t,e){if(!0===t.isSortable){var n=w(t).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(t){return t.length>0&&e.matches(t)})).length>0;if(t===e)return!0;if(void 0!==w(t).getConfig("connectWith")&&null!==w(t).getConfig("connectWith"))return w(t).getConfig("connectWith")===w(e).getConfig("connectWith")}return!1},U={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,dropTargetContainerClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"},z=function(t){y(t,"dragstart"),y(t,"dragend"),y(t,"dragover"),y(t,"dragenter"),y(t,"drop"),y(t,"mouseenter"),y(t,"mouseleave")},W=function(t,e){t&&y(t,"dragleave"),e&&e!==t&&y(e,"dragleave")},X=function(t){var e;(e=t).h5s&&delete e.h5s.data,E(t,"aria-dropeffect")},G=function(t){E(t,"aria-grabbed"),E(t,"aria-copied"),E(t,"draggable"),E(t,"role")};function V(t,e){if(e.composedPath)return e.composedPath().find((function(t){return t.isSortable}));for(;!0!==t.isSortable;)t=t.parentElement;return t}function J(t,e){var n=h(t,"opts"),a=p(t.children,n.items).filter((function(t){return t.contains(e)||t.shadowRoot&&t.shadowRoot.contains(e)}));return a.length>0?a[0]:e}var K=function(t){var e=h(t,"opts"),n=p(t.children,e.items),a=k(n,e.handle);x(t,"aria-dropeffect","move"),h(t,"_disabled","false"),x(a,"draggable","true"),!1===e.disableIEFix&&"function"==typeof(document||window.document).createElement("span").dragDrop&&b(a,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var t=this.parentElement;-1===n.indexOf(t);)t=t.parentElement;t.dragDrop()}}))};function Q(t,e){var n=String(e);return e=e||{},"string"==typeof t&&(t=document.querySelectorAll(t)),t instanceof HTMLElement&&(t=[t]),t=Array.prototype.slice.call(t),/serialize/.test(n)?t.map((function(t){var e=h(t,"opts");return function(t,e,n){if(void 0===e&&(e=function(t,e){return t}),void 0===n&&(n=function(t){return t}),!(t instanceof HTMLElement)||1==!t.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof e||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var a=h(t,"opts").items,s=p(t.children,a),o=s.map((function(e){return{parent:t,node:e,html:e.outerHTML,index:H(e,s)}}));return{container:n({node:t,itemCount:o.length}),items:o.map((function(n){return e(n,t)}))}}(t,e.itemSerializer,e.containerSerializer)})):(t.forEach((function(t){if(/enable|disable|destroy/.test(n))return Q[n](t);["connectWith","disableIEFix"].forEach((function(t){Object.prototype.hasOwnProperty.call(e,t)&&null!==e[t]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+t+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),e=Object.assign({},U,w(t).config,e),w(t).config=e,h(t,"opts",e),t.isSortable=!0,function(t){var e=h(t,"opts"),n=p(t.children,e.items),a=k(n,e.handle);h(t,"_disabled","false"),z(n),W(C,M),y(a,"mousedown"),y(t,"dragover"),y(t,"dragenter"),y(t,"drop")}(t);var a,s=p(t.children,e.items);if(null!==e.placeholder&&void 0!==e.placeholder){var o=document.createElement(t.tagName);e.placeholder instanceof HTMLElement?o.appendChild(e.placeholder):o.innerHTML=e.placeholder,a=o.children[0]}w(t).placeholder=function(t,e,n){var a;if(void 0===n&&(n="sortable-placeholder"),!(t instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(e instanceof HTMLElement)&&void 0!==e)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===e&&(["UL","OL"].includes(t.tagName)?e=document.createElement("li"):["TABLE","TBODY"].includes(t.tagName)?(e=document.createElement("tr")).innerHTML='<td colspan="100"></td>':e=document.createElement("div")),"string"==typeof n&&(a=e.classList).add.apply(a,n.split(" ")),e}(t,a,e.placeholderClass),h(t,"items",e.items),e.acceptFrom?h(t,"acceptFrom",e.acceptFrom):e.connectWith&&h(t,"connectWith",e.connectWith),K(t),x(s,"role","option"),x(s,"aria-grabbed","false"),function(t,e){if("string"==typeof w(t).getConfig("hoverClass")){var n=w(t).getConfig("hoverClass").split(" ");!0===e?(b(t,"mousemove",function(t,e){var n=this;if(void 0===e&&(e=250),"number"!=typeof e)throw new Error("You must provide a number as the second argument for throttle.");var a=null;return function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];var i=Date.now();(null===a||i-a>=e)&&(a=i,t.apply(n,s))}}((function(e){0===e.buttons&&p(t.children,w(t).getConfig("items")).forEach((function(t){var a,s;t!==e.target?(a=t.classList).remove.apply(a,n):(s=t.classList).add.apply(s,n)}))}),w(t).getConfig("throttleTime"))),b(t,"mouseleave",(function(){p(t.children,w(t).getConfig("items")).forEach((function(t){var e;(e=t.classList).remove.apply(e,n)}))}))):(y(t,"mousemove"),y(t,"mouseleave"))}}(t,!0),b(t,"dragstart",(function(t){var n=q(t);if(!0!==n.isSortable&&(t.stopImmediatePropagation(),(!e.handle||n.matches(e.handle))&&"false"!==n.getAttribute("draggable"))){var a=V(n,t),s=J(a,n);F=p(a.children,e.items),S=F.indexOf(s),A=H(s,a.children),C=a,function(t,e,n){if(!(t instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(e instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=Y),t.dataTransfer&&t.dataTransfer.setDragImage){var a=n(e,P(e),t);if(!(a.element instanceof HTMLElement)||"number"!=typeof a.posX||"number"!=typeof a.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setData("text/plain",q(t).id),t.dataTransfer.setDragImage(a.element,a.posX,a.posY)}}(t,s,e.customDragImage),T=I(s),N=j(s),s.classList.add(e.draggingClass),_=function(t,e){var n=t;return!0===w(e).getConfig("copy")&&(x(n=t.cloneNode(!0),"aria-copied","true"),t.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=t.style.display),n}(s,a),x(_,"aria-grabbed","true"),a.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:A,index:S,container:C},item:_,originalTarget:n}}))}})),b(t,"dragenter",(function(n){var a=q(n),s=V(a,n);s&&s!==M&&(L=p(s.children,h(s,"items")).filter((function(e){return e!==w(t).placeholder})),e.dropTargetContainerClass&&s.classList.add(e.dropTargetContainerClass),s.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:A,index:S,container:C},destination:{container:s,itemsBeforeUpdate:L},item:_,originalTarget:a}})),b(s,"dragleave",(function(t){var n=t.relatedTarget||t.fromElement;t.currentTarget.contains(n)||(e.dropTargetContainerClass&&s.classList.remove(e.dropTargetContainerClass),s.dispatchEvent(new CustomEvent("sortleave",{detail:{origin:{elementIndex:A,index:S,container:s},item:_,originalTarget:a}})))}))),M=s})),b(t,"dragend",(function(n){if(_){_.classList.remove(e.draggingClass),x(_,"aria-grabbed","false"),"true"===_.getAttribute("aria-copied")&&"true"!==h(_,"dropped")&&_.remove(),_.style.display=_.oldDisplay,delete _.oldDisplay;var a=Array.from(g.values()).map((function(t){return t.placeholder})).filter((function(t){return t instanceof HTMLElement})).filter(B)[0];a&&a.remove(),t.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:A,index:S,container:C},item:_}})),M=null,_=null,T=null,N=null}})),b(t,"drop",(function(n){if(R(t,_.parentElement)){n.preventDefault(),n.stopPropagation(),h(_,"dropped","true");var a=Array.from(g.values()).map((function(t){return t.placeholder})).filter((function(t){return t instanceof HTMLElement})).filter(B)[0];D(a,_),a.remove(),t.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:A,index:S,container:C},item:_}}));var s=w(t).placeholder,o=p(C.children,e.items).filter((function(t){return t!==s})),i=!0===this.isSortable?this:this.parentElement,r=p(i.children,h(i,"items")).filter((function(t){return t!==s})),l=H(_,Array.from(_.parentElement.children).filter((function(t){return t!==s}))),d=H(_,r);e.dropTargetContainerClass&&i.classList.remove(e.dropTargetContainerClass),A===l&&C===i||t.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:A,index:S,container:C,itemsBeforeUpdate:F,items:o},destination:{index:d,elementIndex:l,container:i,itemsBeforeUpdate:L,items:r},item:_}}))}}));var i,r,l,d=(i=function(t,n,a,s){if(_)if(e.forcePlaceholderSize&&(w(t).placeholder.style.height=T+"px",w(t).placeholder.style.width=N+"px"),Array.from(t.children).indexOf(n)>-1){var o=I(n),i=j(n),r=H(w(t).placeholder,n.parentElement.children),l=H(n,n.parentElement.children);if(o>T||i>N){var d=o-T,c=i-N,m=P(n).top,u=P(n).left;if(r<l&&("vertical"===e.orientation&&s<m||"horizontal"===e.orientation&&a<u))return;if(r>l&&("vertical"===e.orientation&&s>m+o-d||"horizontal"===e.orientation&&a>u+i-c))return}void 0===_.oldDisplay&&(_.oldDisplay=_.style.display),"none"!==_.style.display&&(_.style.display="none");var f=!1;try{var h=P(n).top+n.offsetHeight/2,v=P(n).left+n.offsetWidth/2;f="vertical"===e.orientation&&s>=h||"horizontal"===e.orientation&&a>=v}catch(t){f=r<l}f?D(n,w(t).placeholder):function(t,e){O(t,e,"before")}(n,w(t).placeholder),Array.from(g.values()).filter((function(t){return void 0!==t.placeholder})).forEach((function(e){e.placeholder!==w(t).placeholder&&e.placeholder.remove()}))}else{var b=Array.from(g.values()).filter((function(t){return void 0!==t.placeholder})).map((function(t){return t.placeholder}));-1!==b.indexOf(n)||t!==n||p(n.children,e.items).length||(b.forEach((function(t){return t.remove()})),n.appendChild(w(t).placeholder))}},void 0===(r=e.debounce)&&(r=0),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(l),l=setTimeout((function(){i.apply(void 0,t)}),r)}),c=function(t){var e=t.target,n=!0===e.isSortable?e:V(e,t);if(e=J(n,e),_&&R(n,_.parentElement)&&"true"!==h(n,"_disabled")){var a=h(n,"opts");parseInt(a.maxItems)&&p(n.children,h(n,"items")).length>=parseInt(a.maxItems)&&_.parentElement!==n||(t.preventDefault(),t.stopPropagation(),t.dataTransfer.dropEffect=!0===w(n).getConfig("copy")?"copy":"move",d(n,e,t.pageX,t.pageY))}};b(s.concat(t),"dragover",c),b(s.concat(t),"dragenter",c)})),t)}Q.destroy=function(t){!function(t){var e=h(t,"opts")||{},n=p(t.children,e.items),a=k(n,e.handle);y(t,"dragover"),y(t,"dragenter"),y(t,"dragstart"),y(t,"dragend"),y(t,"drop"),X(t),y(a,"mousedown"),z(n),G(n),W(C,M),t.isSortable=!1}(t)},Q.enable=function(t){K(t)},Q.disable=function(t){!function(t){var e=h(t,"opts"),n=p(t.children,e.items),a=k(n,e.handle);x(t,"aria-dropeffect","none"),h(t,"_disabled","true"),x(a,"draggable","false"),y(a,"mousedown")}(t)},Q.__testing={_data:h,_removeItemEvents:z,_removeItemData:G,_removeSortableData:X,_removeContainerEvents:W};const Z=Q,tt=flarum.core.compat["admin/components/ExtensionPage"];var et=t.n(tt);const nt=flarum.core.compat["common/utils/throttleDebounce"],at=flarum.core.compat["common/helpers/icon"];var st=t.n(at);const ot=flarum.core.compat["common/utils/extractText"];var it=t.n(ot);const rt=flarum.core.compat["common/Component"];var lt=t.n(rt);const dt=flarum.core.compat["common/components/Button"];var ct=t.n(dt);const mt=flarum.core.compat["common/components/Switch"];var ut=t.n(mt),ft=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.answer=this.attrs.answer,this.dirty=!1,this.processing=!1},n.view=function(){var t=this;return m("div",{className:"Mason-Box"},this.answer.is_suggested()&&[m("span",{className:"fas fa-arrows-alt Mason-Box--handle js-answer-handle"})," "],m("span",{onclick:function(){var e=prompt(it()(a().translator.trans("xsoft-mason-tag.admin.buttons.edit-answer-prompt")),t.answer.content());e&&t.updateAttribute("content",e)},title:it()(a().translator.trans("xsoft-mason-tag.admin.buttons.edit-answer"))},this.answer.content()," ",st()("fas fa-pen")),m(ut(),{state:this.answer.is_suggested(),onchange:function(e){t.updateAttribute("is_suggested",e),t.saveAnswer()}},a().translator.trans("xsoft-mason-tag.admin.fields.is_suggested")),m("div",{className:"ButtonGroup"},m(ct(),{className:"Button Button--primary",loading:this.processing,disabled:!this.readyToSave(),onclick:this.saveAnswer.bind(this)},a().translator.trans("xsoft-mason-tag.admin.buttons.save-answer")),m(ct(),{className:"Button Button--danger",loading:this.processing,onclick:this.deleteAnswer.bind(this)},a().translator.trans("xsoft-mason-tag.admin.buttons.delete-answer"))))},n.updateAttribute=function(t,e){var n;this.answer.pushAttributes(((n={})[t]=e,n)),this.dirty=!0},n.readyToSave=function(){return this.dirty},n.saveAnswer=function(){var t=this;this.processing=!0,this.answer.save(this.answer.data.attributes).then((function(){t.processing=!1,t.dirty=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e}))},n.deleteAnswer=function(){var t=this;confirm(it()(a().translator.trans("xsoft-mason-tag.admin.messages.delete-answer-confirmation",{content:this.answer.content()})))&&(this.processing=!0,this.answer.delete().then((function(){t.processing=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e})))},e}(lt());function ht(t,e){return e||(e="sort"),t.sort((function(t,n){return t[e]()-n[e]()}))}var pt=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).sortingChanged=(0,nt.debounce)(500,(function(){var t=e.$(".js-answer-data").map((function(){return $(this).data("id")})).get();e.updateSort(t)})),e}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.field=this.attrs.field,this.processing=!1,this.new_content="",this.showUserAnswers=!1},n.configSortable=function(){var t=this.element.querySelector(".js-answers-container");if(t){var e=Z(t,{handle:".js-answer-handle"})[0];e.removeEventListener("sortupdate",this.sortingChanged),e.addEventListener("sortupdate",this.sortingChanged)}},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.configSortable()},n.onupdate=function(){this.configSortable()},n.view=function(){var t=this;if(!this.field.exists)return m("div",null,a().translator.trans("xsoft-mason-tag.admin.fields.save-field-for-answers"));var e=[],n=[];return(this.field.allAnswers()||[]).forEach((function(t){void 0!==t&&(t.is_suggested()?e.push(t):n.push(t))})),[m("div",null,m("div",{className:"Mason-Container js-answers-container"},ht(e).map((function(t){return m("div",{className:"js-answer-data",key:t.id(),"data-id":t.id()},m(ft,{answer:t}))}))),n.length&&m("[",null,m("button",{className:"Button Button--block Mason-Box-Header",onclick:function(){t.showUserAnswers=!t.showUserAnswers}},m("div",{className:"Mason-Box-Header-Title"},a().translator.trans("xsoft-mason-tag.admin.buttons.show-user-answers",{count:n.length})),m("div",null,st()("fas fa-chevron-"+(this.showUserAnswers?"up":"down")))),this.showUserAnswers&&m("div",{className:"Mason-Container"},ht(n,"content").map((function(t){return m("div",{key:t.id()},m(ft,{answer:t}))}))))),m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.fields.new-answer"),m("input",{className:"FormControl",value:this.new_content,oninput:function(e){t.new_content=e.target.value},placeholder:a().translator.trans("xsoft-mason-tag.admin.fields.new-answer-placeholder")}))),m("div",{className:"Form-group"},m(ct(),{className:"Button Button--primary",loading:this.processing,disabled:!this.new_content,onclick:this.saveField.bind(this)},a().translator.trans("xsoft-mason-tag.admin.buttons.add-answer")))]},n.saveField=function(){var t=this;this.processing=!0,a().request({method:"POST",url:a().forum.attribute("apiUrl")+this.field.apiEndpoint()+"/answers",body:{data:{attributes:{content:this.new_content,is_suggested:!0}}}}).then((function(e){a().store.pushPayload(e),t.new_content="",t.processing=!1,m.redraw()}))},n.updateSort=function(t){a().request({method:"POST",url:a().forum.attribute("apiUrl")+this.field.apiEndpoint()+"/answers/order",body:{sort:t}}).then((function(t){a().store.pushPayload(t),m.redraw()}))},e}(lt()),gt=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.field=this.attrs.field,this.dirty=!1,this.processing=!1,this.toggleFields=!1,this.field||this.initNewField()},n.initNewField=function(){this.field=a().store.createRecord("mason-fields",{attributes:{name:"",description:"",min_answers_count:0,max_answers_count:1,user_values_allowed:!1,show_when_empty:!1,validation:"",icon:""}})},n.boxTitle=function(){return this.field.exists?this.field.name():a().translator.trans("xsoft-mason-tag.admin.buttons.new-field")},n.view=function(){var t=this;return m("div",{className:"Mason-Box"},this.field.exists&&m("span",{className:"fas fa-arrows-alt Mason-Box--handle js-field-handle"}),m("button",{className:"Button Button--block Mason-Box-Header",onclick:function(){t.toggleFields=!t.toggleFields}},m("div",{className:"Mason-Box-Header-Title"},this.boxTitle()),m("div",null,this.field.exists&&a().translator.trans("xsoft-mason-tag.admin.buttons.edit-field")+" ",st()("fas fa-chevron-"+(this.toggleFields?"up":"down")))),this.toggleFields&&this.viewFields())},n.viewFields=function(){var t=this;return[m("div",{className:"Mason-Box--row"},m("div",{className:"Mason-Box--column"},m("h4",null,a().translator.trans("xsoft-mason-tag.admin.titles.field-settings")),m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.fields.name"),m("input",{className:"FormControl",value:this.field.name(),oninput:function(e){t.updateAttribute("name",e.target.value)}}),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.fields.name-help")))),m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.fields.description"),m("input",{className:"FormControl",value:this.field.description(),oninput:function(e){t.updateAttribute("description",e.target.value)}}),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.fields.description-help")))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:1===this.field.min_answers_count(),onchange:function(e){return t.updateAttribute("min_answers_count",e?1:0)}},a().translator.trans("xsoft-mason-tag.admin.fields.required")))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.field.show_when_empty(),onchange:this.updateAttribute.bind(this,"show_when_empty")},a().translator.trans("xsoft-mason-tag.admin.fields.show_when_empty"))),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.fields.show_when_empty-help"))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.field.user_values_allowed(),onchange:this.updateAttribute.bind(this,"user_values_allowed")},a().translator.trans("xsoft-mason-tag.admin.fields.user_values_allowed"))),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.fields.user_values_allowed-help"))),m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.fields.validation"),m("input",{className:"FormControl",disabled:!this.field.user_values_allowed(),placeholder:this.field.user_values_allowed()?"":a().translator.trans("xsoft-mason-tag.admin.fields.enable-user-values-for-validation"),value:this.field.validation(),oninput:function(e){t.updateAttribute("validation",e.target.value)}}),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.fields.validation-help",{a:m("a",{href:"https://laravel.com/docs/6.x/validation#available-validation-rules",target:"_blank"})})))),m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.fields.icon")," ",this.iconPreview(this.field.icon()),m("input",{className:"FormControl",value:this.field.icon(),oninput:function(e){t.updateAttribute("icon",e.target.value)}})),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.fields.icon-help",{a:m("a",{href:"https://fontawesome.com/icons?m=free",target:"_blank"})}))),m("div",{className:"Mason-Box--column"},m("h4",null,a().translator.trans("xsoft-mason-tag.admin.titles.field-answers")),m("div",{className:"Form-group"},m(pt,{field:this.field}))))),m("div",{className:"ButtonGroup"},m(ct(),{className:"Button Button--primary",loading:this.processing,disabled:!this.readyToSave(),onclick:this.saveField.bind(this)},a().translator.trans("xsoft-mason-tag.admin.buttons."+(this.field.exists?"save":"add")+"-field")),this.field.exists&&m(ct(),{className:"Button Button--danger",loading:this.processing,onclick:this.deleteField.bind(this)},a().translator.trans("xsoft-mason-tag.admin.buttons.delete-field")))]},n.updateAttribute=function(t,e){var n;this.field.pushAttributes(((n={})[t]=e,n)),this.dirty=!0},n.readyToSave=function(){return this.dirty},n.saveField=function(){var t=this;this.processing=!0;var e=!this.field.exists;this.field.save(this.field.data.attributes).then((function(){e&&(t.initNewField(),t.toggleFields=!1),t.processing=!1,t.dirty=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e}))},n.deleteField=function(){var t=this;confirm(it()(a().translator.trans("xsoft-mason-tag.admin.messages.delete-field-confirmation",{name:this.field.name()})))&&(this.processing=!0,this.field.delete().then((function(){t.processing=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e})))},n.iconPreview=function(t){return t?[" (",a().translator.trans("xsoft-mason-tag.admin.fields.icon-preview",{preview:st()(t)}),")"]:""},e}(lt());const vt=flarum.core.compat["common/utils/saveSettings"];var wt=t.n(vt);const bt=flarum.core.compat["common/components/Select"];var yt=t.n(bt),xt=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.fieldsSectionTitle=a().data.settings["xsoft-mason-tag.fields-section-title"]||"",this.columnCount=a().data.settings["xsoft-mason-tag.column-count"]||1,this.labelsAsPlaceholders=a().data.settings["xsoft-mason-tag.labels-as-placeholders"]>0,this.fieldsInHero=a().data.settings["xsoft-mason-tag.fields-in-hero"]>0,this.hideEmptyFieldsSection=a().data.settings["xsoft-mason-tag.hide-empty-fields-section"]>0,this.tagsAsFields=a().data.settings["xsoft-mason-tag.tags-as-fields"]>0,this.tagsFieldName=a().data.settings["xsoft-mason-tag.tags-field-name"]||"",this.columnOptions={};for(var n=1;n<=3;n++)this.columnOptions[n]=a().translator.trans("xsoft-mason-tag.admin.settings.n-columns",{count:n})},n.view=function(){var t=this;return m("div",{className:"Mason-Container"},m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.settings.fields-section-title"),m("input",{className:"FormControl",value:this.fieldsSectionTitle,placeholder:a().translator.trans("xsoft-mason-tag.admin.settings.fields-section-title-placeholder"),onchange:function(e){t.updateSetting("fieldsSectionTitle","xsoft-mason-tag.fields-section-title",e.target.value)}})),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.settings.fields-section-title-help"))),m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.settings.column-count"),",",m(yt(),{options:this.columnOptions,value:this.columnCount,onchange:this.updateSetting.bind(this,"columnCount","xsoft-mason-tag.column-count")}))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.labelsAsPlaceholders,onchange:this.updateSetting.bind(this,"labelsAsPlaceholders","xsoft-mason-tag.labels-as-placeholders")},a().translator.trans("xsoft-mason-tag.admin.settings.labels-as-placeholders"))),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.settings.labels-as-placeholders-help"))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.fieldsInHero,onchange:this.updateSetting.bind(this,"fieldsInHero","xsoft-mason-tag.fields-in-hero")},a().translator.trans("xsoft-mason-tag.admin.settings.fields-in-hero")))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.hideEmptyFieldsSection,onchange:this.updateSetting.bind(this,"hideEmptyFieldsSection","xsoft-mason-tag.hide-empty-fields-section")},a().translator.trans("xsoft-mason-tag.admin.settings.hide-empty-fields-section"))),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.settings.hide-empty-fields-section-help"))),m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.tagsAsFields,onchange:this.updateSetting.bind(this,"tagsAsFields","xsoft-mason-tag.tags-as-fields")},a().translator.trans("xsoft-mason-tag.admin.settings.tags-as-field"))),m("div",{className:"helpText"},a().translator.trans("xsoft-mason-tag.admin.settings.tags-as-field-help"))),this.tagsAsFields&&m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.settings.tags-field-name")),m("input",{className:"FormControl",value:this.tagsFieldName,placeholder:a().translator.trans("xsoft-mason-tag.admin.settings.tags-field-name-placeholder"),onchange:function(e){t.updateSetting("tagsFieldName","xsoft-mason-tag.tags-field-name",e.target.value)}})))},n.updateSetting=function(t,e,n){var a;wt()(((a={})[e]=n,a)),this[t]=n},e}(lt()),Et=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.init()},n.init=function(){var t=this;a().request({method:"GET",url:a().forum.attribute("apiUrl")+"/xsoft/mason-tag/bytag"}).then((function(e){a().store.pushPayload(e),t.initRows()})),this.tag=this.attrs.name,this.tagID=this.attrs.id,this.dirty=!1,this.processing=!1,this.toggleFields=!1,this.dataRow,this.fieldsList=[],this.matchingTags=[]},n.initRows=function(){var t=this,e=ht(a().store.all("mason-fields")),n=a().store.all("mason-bytags").filter((function(e){return e.data.attributes.tag_name==t.tag}));e.map((function(e){if(!n.find((function(t){return t.data.attributes.field_name==e.data.attributes.name}))){var s=a().store.createRecord("mason-bytags",{attributes:{tag_name:t.tag,tag_id:t.tagID,field_name:e.data.attributes.name,switch:!1}});t.makeRow(s.data.attributes)}})),n.filter((function(t){return!e.find((function(e){return e.data.attributes.name===t.data.attributes.field_name}))})).map((function(e){t.deleteRow(e)})),this.matchingTags=n,this.matchingTags.sort((function(t,e){var n=t.data.attributes.field_name,a=e.data.attributes.field_name;return n==a?0:n>a?1:-1})),m.redraw()},n.makeRow=function(t){a().request({method:"POST",url:a().forum.attribute("apiUrl")+"/xsoft/mason-tag/bytag",body:{data:{attributes:t}}}).then((function(t){a().store.pushPayload(t)}))},n.updateRow=function(t,e){a().request({method:"PATCH",url:a().forum.attribute("apiUrl")+"/xsoft/mason-tag/bytag/"+t.data.id,body:{data:{attributes:{switch:e}}}}).then((function(t){a().store.pushPayload(t),m.redraw()}))},n.deleteRow=function(t){a().request({method:"DELETE",url:a().forum.attribute("apiUrl")+"/xsoft/mason-tag/bytag/"+t.data.id}).then((function(e){a().store.remove(t)}))},n.reInit=function(t){a().store.all("mason-fields").length==t&&this.init()},n.view=function(){var t=this;return m("div",{className:"Mason-Tags-Dropdown"},m("div",{className:"Button Button--block Mason-Box-Header",onclick:function(){return t.toggleFields=!t.toggleFields}},m("div",{className:"Mason-Box-Header-Title"},this.tag),m("div",null,st()("fas fa-chevron-"+(this.toggleFields?"up":"down")))),this.toggleFields&&this.matchingTags.map((function(e){return m("div",{className:"Form-group"},m("label",null,m(ut(),{state:e.data.attributes.switch,onchange:t.updateRow.bind(t,e)},e.data.attributes.field_name)))})))},e}(lt()),_t=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.byTag=a().data.settings["xsoft-mason-tag.by-tag"]>0,this.tagsList=[];for(var n=a().store.all("tags"),s=0;s<n.length;s++){var o=n[s].data.attributes.name,i=n[s].data.id;this.tagsList.push({name:o,id:i})}},n.view=function(){return m("div",{className:"Mason-Container"},m("div",{className:"Form-group"},m("label",null,m(ut(),{state:this.byTag,onchange:this.updateSetting.bind(this,"byTag","xsoft-mason-tag.by-tag")},a().translator.trans("xsoft-mason-tag.admin.settings.by-tag")))),this.byTag&&m("div",{className:"Form-group"},m("label",null,a().translator.trans("xsoft-mason-tag.admin.settings.by-tag-name")),this.tagsList.map((function(t){return m("div",{className:"js-tag-data","data-id":t.name},m(Et,{name:t.name,id:t.id}))}))))},n.updateSetting=function(t,e,n){var a;wt()(((a={})[e]=n,a)),this[t]=n},e}(lt()),Tt=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).sortingChanged=(0,nt.debounce)(500,(function(){var t=e.$(".js-field-data").map((function(){return $(this).data("id")})).get();e.updateSort(t)})),e}o(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),a().request({method:"GET",url:a().forum.attribute("apiUrl")+"/xsoft/mason-tag/fields"}).then((function(t){a().store.pushPayload(t),m.redraw()}))},n.configSortable=function(){var t=Z(this.element.querySelector(".js-fields-container"),{handle:".js-field-handle"})[0];t.removeEventListener("sortupdate",this.sortingChanged),t.addEventListener("sortupdate",this.sortingChanged)},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.configSortable()},n.onupdate=function(){this.configSortable()},n.content=function(){var t=a().store.all("mason-fields"),e=[];return ht(t).forEach((function(t){e.push(m("div",{className:"js-field-data",key:t.id(),"data-id":t.id()},m(gt,{field:t})))})),m("div",{className:"ExtensionPage-settings"},m("div",{className:"container"},m("h2",null,a().translator.trans("xsoft-mason-tag.admin.titles.fields")),m("div",{className:"Mason-Container"},m("div",{className:"js-fields-container"},e),m(gt,null)),m("h2",null,a().translator.trans("xsoft-mason-tag.admin.titles.tag-settings")),m(_t,null),m("h2",null,a().translator.trans("xsoft-mason-tag.admin.titles.settings")),m(xt,null)))},n.updateSort=function(t){a().request({method:"POST",url:a().forum.attribute("apiUrl")+"/xsoft/mason-tag/fields/order",body:{sort:t}}).then((function(t){a().store.pushPayload(t),m.redraw()}))},e}(et());a().initializers.add("xsoft-ict-mason-tag",(function(){a().store.models["mason-fields"]=u,a().store.models["mason-answers"]=l,a().store.models["mason-bytags"]=f,a().extensionData.for("xsoft-ict-mason-tag").registerPage(Tt).registerPermission({icon:"fas fa-eye",label:a().translator.trans("xsoft-mason-tag.admin.permissions.see-own-fields"),permission:"xsoft-mason-tag.see-own-fields"},"view").registerPermission({icon:"fas fa-eye",label:a().translator.trans("xsoft-mason-tag.admin.permissions.see-other-fields"),permission:"xsoft-mason-tag.see-other-fields",allowGuest:!0},"view").registerPermission({icon:"fas fa-tasks",label:a().translator.trans("xsoft-mason-tag.admin.permissions.fill-fields"),permission:"xsoft-mason-tag.fill-fields"},"reply").registerPermission({icon:"fas fa-edit",label:a().translator.trans("xsoft-mason-tag.admin.permissions.update-own-fields"),permission:"xsoft-mason-tag.update-own-fields"},"reply").registerPermission({icon:"fas fa-edit",label:a().translator.trans("xsoft-mason-tag.admin.permissions.update-other-fields"),permission:"xsoft-mason-tag.update-other-fields",allowGuest:!0},"moderate").registerPermission({icon:"fas fa-forward",label:a().translator.trans("xsoft-mason-tag.admin.permissions.skip-required-fields"),permission:"xsoft-mason-tag.skip-required-fields"},"moderate")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map