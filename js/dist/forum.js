module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=30)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e,n){"use strict";function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return s}))},function(t,e,n){"use strict";function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return s}))},function(t,e,n){"use strict";function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return s}))},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,n){"use strict";e.a=function(t,e){return void 0===e&&(e="sort"),t.sort((function(t,n){return t[e]()-n[e]()}))}},,function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n(2),a=n(4),o=n(3),r=n(1),i=n.n(r),c=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,Object(o.a)(Object(s.a)(e),"content",i.a.attribute("content")),Object(o.a)(Object(s.a)(e),"is_suggested",i.a.attribute("is_suggested")),Object(o.a)(Object(s.a)(e),"sort",i.a.attribute("sort")),Object(o.a)(Object(s.a)(e),"field",i.a.hasOne("field")),e}return Object(a.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/mason/answers"+(this.exists?"/"+this.data.id:"")},e}(i.a)},function(t,e){t.exports=flarum.core.compat["utils/computed"]},,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var s=n(2),a=n(4),o=n(3),r=n(1),i=n.n(r),c=n(13),u=n.n(c),l=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,Object(o.a)(Object(s.a)(e),"name",i.a.attribute("name")),Object(o.a)(Object(s.a)(e),"description",i.a.attribute("description")),Object(o.a)(Object(s.a)(e),"min_answers_count",i.a.attribute("min_answers_count")),Object(o.a)(Object(s.a)(e),"max_answers_count",i.a.attribute("max_answers_count")),Object(o.a)(Object(s.a)(e),"show_when_empty",i.a.attribute("show_when_empty")),Object(o.a)(Object(s.a)(e),"user_values_allowed",i.a.attribute("user_values_allowed")),Object(o.a)(Object(s.a)(e),"validation",i.a.attribute("validation")),Object(o.a)(Object(s.a)(e),"icon",i.a.attribute("icon")),Object(o.a)(Object(s.a)(e),"sort",i.a.attribute("sort")),Object(o.a)(Object(s.a)(e),"deleted_at",i.a.attribute("deleted_at",i.a.transformDate)),Object(o.a)(Object(s.a)(e),"all_answers",i.a.hasMany("all_answers")),Object(o.a)(Object(s.a)(e),"suggested_answers",i.a.hasMany("suggested_answers")),Object(o.a)(Object(s.a)(e),"required",u()("min_answers_count",(function(t){return t>0}))),Object(o.a)(Object(s.a)(e),"multiple",u()("max_answers_count",(function(t){return t>1}))),e}return Object(a.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/mason/fields"+(this.exists?"/"+this.data.id:"")},e}(i.a)},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["models/Forum"]},function(t,e){t.exports=flarum.core.compat["tags/utils/sortTags"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},,,,,,,function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),o=n(1),r=n.n(o),i=n(16),c=n.n(i),u=n(19),l=n.n(u),f=n(12),d=n(15),h=n(6),p=n(17),b=n.n(p),g=n(4),w=n(7),y=n.n(w),v=n(11),O=n.n(v),j=n(5),x=n.n(j),_=n(9);function M(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var S=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.field=this.attrs.field,this.answers=this.attrs.answers,this.onchange=this.attrs.onchange},n.view=function(){var t=this,e=[];return this.field.suggested_answers().forEach((function(n){-1!==t.answers.findIndex((function(t){return void 0!==t&&t.id()===n.id()}))&&e.push(n.id())})),m("span.Select",[m("select.Select-input.FormControl",{multiple:this.field.multiple(),onchange:function(e){for(var n,s=[],o=M(e.target.options);!(n=o()).done;){var r=n.value;if(r.selected&&"none"!==r.value){var i=r.value;s.push(a.a.store.getById("mason-answers",i))}}t.onchange(s)}},[this.field.multiple()?null:m("option",{value:"none",selected:0===e.length,disabled:this.field.required(),hidden:this.placeholderHidden()},this.selectPlaceholder()),Object(_.a)(this.field.suggested_answers()).map((function(t){return m("option",{value:t.id(),selected:-1!==e.indexOf(t.id())},t.content())}))]),y()("fas fa-caret-down",{className:"Select-caret"})])},n.placeholderHidden=function(){return!a.a.forum.attribute("fof-mason.labels-as-placeholders")&&this.field.required()},n.selectPlaceholder=function(){var t="";return a.a.forum.attribute("fof-mason.labels-as-placeholders")&&(t+=this.field.name(),this.field.required()&&(t+=" *"),t+=" - "),this.field.required()?t+=a.a.translator.trans("fof-mason.forum.answers.choose-option"):t+=a.a.translator.trans("fof-mason.forum.answers.no-option-selected"),t},e}(x.a),F=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.field=this.attrs.field,this.answers=this.attrs.answers,this.onchange=this.attrs.onchange,this.content="";var s=this.answers.filter((function(t){return void 0!==t&&t.field().id()===n.field.id()}));s.length&&(this.content=s[0].content())},n.view=function(){var t=this;return m("input.FormControl",{required:this.field.required(),value:this.content,oninput:function(e){if(t.content=e.target.value,""===t.content)t.onchange([]);else{var n=a.a.store.createRecord("mason-answers",{attributes:{content:t.content},relationships:{field:{data:r.a.getIdentifier(t.field)}}});t.onchange([n])}},placeholder:this.fieldPlaceholder()})},n.fieldPlaceholder=function(){return a.a.forum.attribute("fof-mason.labels-as-placeholders")?this.field.name()+(this.field.required()?" *":""):""},e}(x.a),I=n(20),P=n.n(I),T=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.tags=a.a.store.all("tags"),this.selectedTags=[],this.attrs.discussion?(this.tags=this.tags.filter((function(t){return t.canAddToDiscussion()||-1!==n.attrs.discussion.tags().indexOf(t)})),this.selectedTags=this.attrs.discussion.tags()):this.tags=this.tags.filter((function(t){return t.canStartDiscussion()})),this.minPrimary=a.a.forum.attribute("minPrimaryTags"),this.maxPrimary=a.a.forum.attribute("maxPrimaryTags"),this.minSecondary=a.a.forum.attribute("minSecondaryTags"),this.maxSecondary=a.a.forum.attribute("maxSecondaryTags"),this.maxPrimary<=0&&(this.tags=this.tags.filter((function(t){return!t.isPrimary()}))),this.maxSecondary<=0&&(this.tags=this.tags.filter((function(t){return t.isPrimary()}))),this.tags=P()(this.tags)},n.view=function(){var t=this;if(this.maxPrimary>1||this.maxSecondary>1)return m(".Alert",a.a.translator.trans("fof-mason.forum.tags.inadequate-settings"));var e=this.selectedTags.length?this.selectedTags.sort((function(t){return t.parent()?-1:1}))[0].id():null,n=this.fieldRequired();return m(".Mason-Field.Form-group",{className:a.a.forum.attribute("fof-mason.labels-as-placeholders")?"Mason-Field--label-as-placeholder":""},[m("label",this.fieldLabel()),m("span.Select",[m("select.Select-input.FormControl",{onchange:function(e){var n=e.target.value;if(t.selectedTags=[],"none"!==n){t.selectedTags.push(t.tags.find((function(t){return t.id()===n})));var s=t.selectedTags[0].parent();s&&t.selectedTags.push(s)}t.attrs.onchange(t.selectedTags)}},[m("option",{value:"none",selected:0===this.selectedTags.length,disabled:n,hidden:this.placeholderHidden()},this.selectPlaceholder()),this.tags.map((function(t){var n=t.parent();return m("option",{value:t.id(),selected:t.id()===e},(n?n.name()+" | ":"")+t.name())}))]),y()("fas fa-caret-down",{className:"Select-caret"})])])},n.fieldRequired=function(){return this.minPrimary>0||this.minSecondary>0},n.fieldLabel=function(){var t=a.a.forum.attribute("fof-mason.tags-field-name")||a.a.translator.trans("fof-mason.forum.tags.tags-label");return this.fieldRequired()&&(t+=" *"),t},n.placeholderHidden=function(){return!a.a.forum.attribute("fof-mason.labels-as-placeholders")&&this.fieldRequired()},n.selectPlaceholder=function(){var t="";return a.a.forum.attribute("fof-mason.labels-as-placeholders")&&(t+=this.fieldLabel()+" - "),this.fieldRequired()?t+=a.a.translator.trans("fof-mason.forum.answers.choose-option"):t+=a.a.translator.trans("fof-mason.forum.answers.no-option-selected"),t},e}(x.a),q=function(t){function e(){return t.apply(this,arguments)||this}return Object(g.a)(e,t),e.prototype.view=function(){return m(".Mason-Grid-Wrapper",m(".Mason-Grid",function(t,e){for(var n=[],s=0;s<t.length;s+=e)n.push(t.slice(s,s+e));return n}(this.attrs.items,a.a.forum.attribute("fof-mason.column-count")).map((function(t){return m(".Mason-Row",t.map((function(t){return m(".Mason-Column",t)})))}))))},e}(x.a),C=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.fields=Object(_.a)(a.a.store.all("mason-fields")),this.answerToFieldIndex=[],this.fields.forEach((function(t){t.suggested_answers().forEach((function(e){n.answerToFieldIndex[e.id()]=t.id()}))}))},n.view=function(){return m(".Mason-Fields.Mason-Fields--editor",[this.headItems().toArray(),q.component({items:this.fieldItems().toArray()})])},n.updateSelection=function(t,e){var n=this,s=this.attrs.answers.filter((function(e){var s=n.answerToFieldIndex[e.id()];return void 0===s?e.field().id()!==t.id():s!==t.id()}));s=s.concat(e),this.attrs.onchange(s)},n.headItems=function(){var t=new O.a;return a.a.forum.attribute("fof-mason.fields-section-title")&&t.add("title",m("h5.Mason-Field--title",a.a.forum.attribute("fof-mason.fields-section-title"))),t},n.fieldItems=function(){var t=this,e=new O.a;return a.a.forum.attribute("fof-mason.tags-as-fields")&&e.add("tags",T.component({discussion:this.attrs.discussion,onchange:function(e){t.attrs.ontagchange&&t.attrs.ontagchange(e)}})),this.fields.forEach((function(n){var s={field:n,answers:t.attrs.answers,onchange:function(e){t.updateSelection(n,e)}},o=null;o=n.user_values_allowed()?F.component(s):S.component(s),e.add("field-"+n.id(),m(".Mason-Field.Form-group",{className:a.a.forum.attribute("fof-mason.labels-as-placeholders")?"Mason-Field--label-as-placeholder":""},[m("label",[n.icon()?[y()(n.icon())," "]:null,n.name(),n.required()?" *":null]),o,n.description()?m(".helpText",n.description()):null]))})),e},e}(x.a),E=n(21),R=n.n(E),D=n(8),N=n.n(D),B=n(22),H=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.answers=this.attrs.discussion.masonAnswers(),this.dirty=!1,this.processing=!1,this.tags=null},n.title=function(){return a.a.translator.trans("fof-mason.forum.answers-modal.edit-title",{title:m("em",this.attrs.discussion.title())})},n.content=function(){var t=this;return[m(".Modal-body",C.component({discussion:this.attrs.discussion,answers:this.answers,onchange:this.answersChanged.bind(this),ontagchange:function(e){t.tags=e,t.dirty=!0}})),m(".Modal-footer",[N.a.component({className:"Button Button--primary",loading:this.processing,disabled:!this.dirty,onclick:this.saveAnswers.bind(this)},a.a.translator.trans("fof-mason.forum.answers-modal.save"))])]},n.answersChanged=function(t){this.answers=t,this.dirty=!0},n.saveAnswers=function(){var t=this;this.processing=!0;var e={masonAnswers:this.answers};null!==this.tags&&(e.tags=this.tags),this.attrs.discussion.save({relationships:e}).then((function(){t.processing=!1,a.a.modal.close(),m.redraw()})).catch((function(e){throw t.processing=!1,e}))},e}(n.n(B).a),U=n(23),k=n.n(U),L=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.fields=Object(_.a)(a.a.store.all("mason-fields")),this.discussion=this.attrs.discussion},n.view=function(){var t=this.headItems().toArray(),e=this.fieldsItems().toArray();return e.length||t.length&&!a.a.forum.attribute("fof-mason.hide-empty-fields-section")?m(".Mason-Fields.Mason-Fields--viewer",[t,q.component({items:e})]):m("div")},n.headItems=function(){var t=this,e=new O.a;return this.discussion.canUpdateMasonAnswers()&&e.add("edit",N.a.component({className:"Button Mason-Fields--edit",icon:"fas fa-pen",onclick:function(){return a.a.modal.show(H,{discussion:t.discussion})}},a.a.translator.trans("fof-mason.forum.discussion-controls.edit-answers"))),a.a.forum.attribute("fof-mason.fields-section-title")&&e.add("title",m("h5.Mason-Field--title",a.a.forum.attribute("fof-mason.fields-section-title"))),e},n.fieldsItems=function(){var t=this,e=new O.a;return this.fields.forEach((function(n){var s=Object(_.a)(t.discussion.masonAnswers().filter((function(t){return t.field()&&t.field().id()===n.id()}))),o=s.map((function(t){return m("span.Mason-Inline-Answer",t.content())}));if(0===s.length){if(!n.show_when_empty())return;o.push(m("em.Mason-Inline-Answer",a.a.translator.trans("fof-mason.forum.post-answers.no-answer")))}e.add("field-"+n.id(),m(".Mason-Field.Form-group",[m("label",[n.icon()?[y()(n.icon())," "]:null,n.name()]),m(".FormControl.Mason-Inline-Answers",o)]))})),e},e}(x.a),G=n(18),z=n.n(G);function W(t){return 1===t.number()&&!a.a.forum.attribute("fof-mason.fields-in-hero")}a.a.initializers.add("fof-mason",(function(t){t.store.models["mason-fields"]=d.a,t.store.models["mason-answers"]=f.a,c.a.prototype.masonAnswers=r.a.hasMany("masonAnswers"),c.a.prototype.canSeeMasonAnswers=r.a.attribute("canSeeMasonAnswers"),c.a.prototype.canUpdateMasonAnswers=r.a.attribute("canUpdateMasonAnswers"),l.a.prototype.canFillMasonFields=r.a.attribute("canFillMasonFields"),b.a.prototype.masonAnswers=[],Object(h.extend)(b.a.prototype,"headerItems",(function(t){var e=this;a.a.forum.canFillMasonFields()&&t.add("mason-fields",C.component({answers:this.masonAnswers,onchange:function(t){e.masonAnswers=t},ontagchange:function(t){e.composer.fields.tags=t}}))})),Object(h.extend)(b.a.prototype,"data",(function(t){a.a.forum.canFillMasonFields()&&(t.relationships=t.relationships||{},t.relationships.masonAnswers=this.masonAnswers)})),Object(h.extend)(k.a.prototype,"items",(function(t){this.attrs.discussion.canSeeMasonAnswers()&&a.a.forum.attribute("fof-mason.fields-in-hero")&&t.add("mason-fields",L.component({discussion:this.attrs.discussion}))})),Object(h.extend)(z.a.prototype,"oninit",(function(){var t=this;this.attrs.post.discussion().canSeeMasonAnswers()&&W(this.attrs.post)&&this.subtree.check((function(){return t.attrs.post.discussion().masonAnswers().map((function(t){return t.id()})).join(",")}))})),Object(h.extend)(z.a.prototype,"content",(function(t){if(this.attrs.post.discussion().canSeeMasonAnswers()&&W(this.attrs.post)){var e=t.findIndex((function(t){return t.attrs&&"Post-header"===t.attrs.className}));t.splice(-1===e?0:e+1,0,L.component({discussion:this.attrs.post.discussion()}))}})),Object(h.extend)(R.a,"moderationControls",(function(t,e){e.canUpdateMasonAnswers()&&t.add("mason-update-answers",N.a.component({icon:"fas fa-tag",onclick:function(){return a.a.modal.show(H,{discussion:e})}},a.a.translator.trans("fof-mason.forum.discussion-controls.edit-answers")))})),Object(h.override)(r.a,"getIdentifier",(function(t,e){return e instanceof f.a&&!e.exists?{type:e.data.type,attributes:{content:e.data.attributes.content},relationships:{field:{data:r.a.getIdentifier(e.data.relationships.field)}}}:t(e)}))}))}]);
//# sourceMappingURL=forum.js.map