parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eHzx":[function(require,module,exports) {

},{"/Users/d.baltak/Projects/emails-input-widget/src/components/EmailsInput/remove.svg":[["remove.7a4aeacd.svg","eHSH"],"eHSH"]}],"QCba":[function(require,module,exports) {
"use strict";var t,e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var a=arguments[e],s=0,o=a.length;s<o;s++,r++)n[r]=a[s];return n};Object.defineProperty(exports,"__esModule",{value:!0}),require("./index.scss"),function(t){t.RENDER="render",t.DESTROY="destroy",t.ADD_EMAIL="addEmail",t.REMOVE_EMAIL="removeEmail",t.FOCUS_INPUT="focusInput"}(t||(t={}));var n=function(){function n(e){var i=this,n=e.$el;this.state={emails:[]},this.$widget=null,this.$input=null,this.className="emails-input-widget",this.onInputKeydown=function(t){if(13===t.which||188===t.which||","===t.key||"Enter"===t.key){t.preventDefault();var e=t.target.innerText;e&&(i.add(e),i.clearInputEl())}},this.onInputPaste=function(t){var e=null;void 0===t.clipboardData?e=window.clipboardData.getData("Text"):t.clipboardData&&(e=t.clipboardData.getData("text/plain")),e&&(t.preventDefault(),i.add(e),i.clearInputEl())},this.onInputBlur=function(t){var e=t.target.innerText;e&&(i.add(e),i.clearInputEl())},this.onWidgetClick=function(e){var n=e.target;switch(n.dataset.action){case t.REMOVE_EMAIL:var r=n.parentNode.dataset.key;r&&i.remove(r);break;case t.FOCUS_INPUT:i.$input&&(i.$input.setActive?i.$input.setActive():i.$input.focus())}},this.remove=function(e){var n=i.state.emails.filter(function(t){return t.id!==e});i.setState({emails:n},function(){i.trigerEvent(t.REMOVE_EMAIL)})},this.$root=n,this.renderWidget(),this.addEventListeners()}return n.prototype.setState=function(t,i){this.state=e(e({},this.state),t),this.updateWidgetOnStateChange(),i&&i()},n.prototype.resetState=function(){this.setState({emails:[]})},n.prototype.generateId=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},n.prototype.sanitize=function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&grave;"};return t.replace(/[&<>"'\/`]/gi,function(t){return e[t]})},n.prototype.clearInputEl=function(){this.$input&&(this.$input.innerHTML="")},n.prototype.addEventListeners=function(){this.$input&&(this.$input.addEventListener("keydown",this.onInputKeydown),this.$input.addEventListener("paste",this.onInputPaste),this.$input.addEventListener("blur",this.onInputBlur)),this.$widget&&this.$widget.addEventListener("click",this.onWidgetClick)},n.prototype.removeEventListeners=function(){this.$input&&(this.$input.removeEventListener("keydown",this.onInputKeydown),this.$input.removeEventListener("paste",this.onInputPaste),this.$input.removeEventListener("blur",this.onInputBlur)),this.$widget&&this.$widget.removeEventListener("click",this.onWidgetClick)},n.prototype.parseEmailsString=function(t){return t.split(",").map(function(t){return t.replace(/^\s+|\s+$/g,"")}).filter(function(t){return t})},n.prototype.validateEmail=function(t){return/^\S+@\S+\.\S+$/.test(t)},n.prototype.generateEmailList=function(t){var e=this;return("string"==typeof t?this.parseEmailsString(t):t).map(function(t){return{id:e.generateId(),value:e.sanitize(t),isValid:e.validateEmail(t)}})},n.prototype.removeDOMElements=function(){this.$root.innerHTML=""},n.prototype.trigerEvent=function(t,e){var i;"function"==typeof window.CustomEvent?i=new CustomEvent(t,{detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!1,!1,e),this.$root.dispatchEvent(i)},n.prototype.trigerEventsForList=function(t,e){var i=this;e.forEach(function(e){i.trigerEvent(t,e)})},n.prototype.createInputFieldEl=function(){var t=document.createElement("div");return t.classList.add(this.className+"__input"),t.setAttribute("contenteditable","true"),t},n.prototype.createEmailEl=function(e){var i=document.createElement("div");i.dataset.key=e.id,i.classList.add(this.className+"__email"),e.isValid||i.classList.add(this.className+"__email--invalid");var n=document.createElement("span");n.innerHTML=e.value,n.classList.add(this.className+"__email-value"),i.appendChild(n);var r=document.createElement("span");return r.classList.add(this.className+"__email-remove"),r.dataset.action=t.REMOVE_EMAIL,i.appendChild(r),i},n.prototype.renderWidget=function(){var e=this,i=document.createElement("div");i.dataset.action=t.FOCUS_INPUT,i.classList.add(this.className);var n=this.createInputFieldEl();i.appendChild(n);var r=document.createDocumentFragment();this.state.emails.forEach(function(t){r.appendChild(e.createEmailEl(t))}),i.insertBefore(r,n),this.$root.appendChild(i),this.$widget=i,this.$input=n,this.trigerEvent(t.RENDER)},n.prototype.getRenderedEmails=function(){return this.$widget?Array.prototype.slice.call(this.$widget.childNodes).map(function(t){var e=t.dataset.key;return{key:void 0!==e?e:"",$el:t}}).filter(function(t){return t.key}):[]},n.prototype.renderNewEmails=function(t){var e=this;if(this.$widget){var i=this.state.emails.filter(function(e){return-1===t.indexOf(e.id)});if(i&&i.length){var n=document.createDocumentFragment();i.forEach(function(t){n.appendChild(e.createEmailEl(t))}),this.$widget.insertBefore(n,this.$input)}}},n.prototype.removeDeletedEmails=function(t){var e=this,i=this.state.emails.map(function(t){return t.id});t.filter(function(t){return-1===i.indexOf(t.key)}).forEach(function(t){e.$widget&&e.$widget.removeChild(t.$el)})},n.prototype.updateWidgetOnStateChange=function(){var t=this.getRenderedEmails(),e=t.map(function(t){return t.key});this.renderNewEmails(e),this.removeDeletedEmails(t)},n.prototype.getAll=function(){return this.state.emails},n.prototype.getValid=function(){return this.getAll().filter(function(t){return t.isValid})},n.prototype.getInvalid=function(){return this.getAll().filter(function(t){return!t.isValid})},n.prototype.getCount=function(){var t=this.getValid().length,e=this.getInvalid().length;return{valid:t,invalid:e,total:t+e}},n.prototype.resetAll=function(e){var i=this,n=this.generateEmailList(e);this.setState({emails:n},function(){i.trigerEventsForList(t.ADD_EMAIL,n)})},n.prototype.add=function(e){var n=this,r=this.generateEmailList(e);this.setState({emails:i(this.state.emails,r)},function(){n.trigerEventsForList(t.ADD_EMAIL,r)})},n.prototype.destroy=function(){this.resetState(),this.removeEventListeners(),this.removeDOMElements(),this.trigerEvent(t.DESTROY)},n}();exports.default=n;
},{"./index.scss":"eHzx"}]},{},["QCba"], "EmailsInput")
//# sourceMappingURL=/index.js.map