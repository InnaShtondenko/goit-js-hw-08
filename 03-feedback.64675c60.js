var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,i,o,f,a,u,c=0,l=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function h(e){return c=e,a=setTimeout(O,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=o}function O(){var e=v();if(j(e))return w(e);a=setTimeout(O,function(e){var n=t-(e-u);return p?d(n,o-(e-c)):n}(e))}function w(e){return a=void 0,g&&r?y(e):(r=i=void 0,f)}function E(){var e=v(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===a)return h(u);if(p)return a=setTimeout(O,t),y(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=m(t)||0,b(n)&&(l=!!n.leading,o=(p="maxWait"in n)?s(m(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),E.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=i=a=void 0},E.flush=function(){return void 0===a?f:w(v())},E}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=i.test(e);return a||o.test(e)?f(e.slice(2),a?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const g=document.querySelector(".feedback-form");let y={};function h(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}function j(e){e.preventDefault(),console.log(y),g.reset(),Object.keys(y).forEach((e=>y[e]="")),localStorage.removeItem("feedback-form-state")}g.addEventListener("input",t(h,500)),g.addEventListener("submit",j),[...g.elements].forEach((e=>{e.setAttribute("required","")})),y=JSON.parse(localStorage.getItem("feedback-form-state")),y=y||{},Object.keys(y).forEach((e=>y[e]?g.elements[e].value=y[e]:null));
//# sourceMappingURL=03-feedback.64675c60.js.map
