/*! For license information please see LICENSES */
webpackJsonp([3],{"5Yx0":function(t,e,a){var i=a("EwXI");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("0980a186",i,!1,{sourceMap:!1})},"9LlT":function(t,e,a){"use strict";e.a={BASE_URL:"https://file-repo.herokuapp.com",TINYMCE_STYLE:"body {padding: 3em;}, p{padding: 0 !important;}",API_SIGNATURE:"/api/v1/files/signature",API_IMAGE:"/api/v1/files/image",API_PROFILE:"/api/v1/files/profile",API_DOCUMENT:"/api/v1/files/document",API_PRESENTATION:"/api/v1/files/presentation",API_SPREADSHEET:"/api/v1/files/spreadsheet",BUCKET_IMAGE:"image",BUCKET_PROFILE:"profile",BUCKET_SIGNATURE:"signature",BUCKET_PRESENTATION:"presentation",BUCKET_SPREADSHEET:"spreadsheet",BUCKET_DOCUMENT:"document"}},EwXI:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".signaturePadBorder[data-v-2339929c]{border:thin solid #2e7d32}",""])},Fyhw:function(t,e,a){"use strict";e.a={props:{isActive:Boolean}}},RJS7:function(t,e,a){var i=a("rpLr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("152a4346",i,!1,{sourceMap:!1})},TRHM:function(t,e,a){"use strict";var i=a("kBR5"),s=a("wCI8"),n=["image/png","image/jpeg","image/svg+xml"],r={minWidth:.5,maxWidth:2.5,throttle:16,minDistance:5,backgroundColor:"rgba(0,0,0,0)",penColor:"black",velocityFilterWeight:.7},o=function(t){return JSON.parse(JSON.stringify(t))},l={src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",x:0,y:0},d={name:"VueSignaturePad",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},customStyle:{type:Object},saveType:{type:String,default:"image/png"},options:{type:Object,default:function(){return{}}},images:{type:Array,default:function(){return[]}}},data:function(){return{signaturePad:{},cacheImages:[],signatureData:l}},mounted:function(){var t=this.options,e=this.$refs.signaturePadCanvas,a=new i.a(e,Object.assign({},r,t));this.signaturePad=a,window.addEventListener("resize",this.resizeCanvas.bind(this,e),!1),this.resizeCanvas(e)},methods:{resizeCanvas:function(t){var e=this.signaturePad.toData(),a=Math.max(window.devicePixelRatio||1,1);t.width=t.offsetWidth*a,t.height=t.offsetHeight*a,t.getContext("2d").scale(a,a),this.signaturePad.clear(),this.signatureData=l,this.signaturePad.fromData(e)},saveSignature:function(){var t=this.signaturePad,e=this.saveType,a={isEmpty:!1,data:void 0};if(!function(t){return n.includes(t)}(e))throw new Error("Image type is incorrect!");return t.isEmpty()?Object.assign({},a,{isEmpty:!0}):(this.signatureData=t.toDataURL(e),Object.assign({},a,{data:this.signatureData}))},undoSignature:function(){var t=this.signaturePad,e=t.toData();if(e)return t.fromData(e.slice(0,-1))},mergeImageAndSignature:function(t){return this.signatureData=t,Object(s.a)(this.images.concat(this.cacheImages,[this.signatureData]))},addImages:function(t){return void 0===t&&(t=[]),this.cacheImages=this.cacheImages.concat(t),Object(s.a)(this.images.concat(this.cacheImages,[this.signatureData]))},lockSignaturePad:function(){return this.signaturePad.off()},openSignaturePad:function(){return this.signaturePad.on()},getPropImagesAndCacheImages:function(){return this.propsImagesAndCustomImages},clearCacheImages:function(){this.cacheImages=[]}},computed:{propsImagesAndCustomImages:function(){var t=o(this.images),e=o(this.cacheImages);return t.concat(e)}},render:function(t){var e=this.width,a=this.height,i=this.customStyle;return t("div",{style:Object.assign({},{width:e,height:a},i)},[t("canvas",{style:{width:"100%",height:"100%"},ref:"signaturePadCanvas"})])},install:function(t){return t.component(d.name,d)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(d),e.a=d},Y5Gu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("qlUX"),s=a("au2d"),n=!1;var r=function(t){n||a("5Yx0")},o=a("VU/8")(i.a,s.a,!1,r,"data-v-2339929c",null);o.options.__file="pages/register.vue",e.default=o.exports},au2d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{isActive:this.registrationLoader}}),a("section",{staticClass:"hero has-background-white-ter is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half is-offset-one-quarter"},[a("form",{attrs:{name:"registerForm"}},[a("div",{staticClass:"box"},[a("div",[a("nuxt-link",{staticClass:" has-text-danger",attrs:{to:"/"}},[a("span",{staticClass:"fa fa-chevron-circle-left fa-lg"}),t._v(" \n                    "),a("span",{staticClass:"has-text-danger subtitle is-5"},[t._v("Login")])]),a("br"),a("br")],1),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"input",class:{"is-danger":t.errors.has("username")},attrs:{name:"username","data-vv-as":"username",type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("username")))])]),a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,min:6,is:t.confirm_password},expression:"{required:true, min:6, is:confirm_password}"}],staticClass:"input",class:{"is-danger":t.errors.has("password")},attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("password")))])]),a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Confirm Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_password,expression:"confirm_password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":t.errors.has("password:is")},attrs:{name:"confirm_password","data-vv-as":"confirm password",type:"password",placeholder:"Confirm Password"},domProps:{value:t.confirm_password},on:{input:function(e){e.target.composing||(t.confirm_password=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("confirm_password")))]),a("br"),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("password:is")))])])]),a("span",[t._v("Name")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":t.errors.has("name.firstName")},attrs:{name:"name.firstName","data-vv-as":"first name",type:"text",placeholder:"First Name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("name.firstName")))])]),a("div",{staticClass:"column"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.middleName,expression:"middleName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":t.errors.has("name.middleName")},attrs:{name:"name.middleName","data-vv-as":"middle name",type:"text",placeholder:"Middle Name"},domProps:{value:t.middleName},on:{input:function(e){e.target.composing||(t.middleName=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("name.middleName")))])]),a("div",{staticClass:"column"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":t.errors.has("name.lastName")},attrs:{name:"name.lastName","data-vv-as":"last name",type:"text",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("name.lastName")))])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":t.errors.has("address")},attrs:{name:"address",type:"text",placeholder:"Street, Barangay, Municipality, Province, City"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("address")))])]),a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Date of Birth")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dateOfBirth,expression:"dateOfBirth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":t.errors.has("dateOfBirth")},attrs:{name:"dateOfBirth",type:"date",placeholder:"Street, Barangay, Municipality, Province, City"},domProps:{value:t.dateOfBirth},on:{input:function(e){e.target.composing||(t.dateOfBirth=e.target.value)}}}),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("dateOfBirth")))])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Gender")]),a("div",{staticClass:"select is-fullwidth",class:{"is-danger":t.errors.has("gender")}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"gender"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.gender=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select Gender")]),t._l(t.genderOption,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2)]),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("gender")))])]),a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Position")]),a("div",{staticClass:"select is-fullwidth",class:{"is-danger":t.errors.has("position")}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"position"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.position=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select Position")]),t._l(t.positionOption,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("position")))])])]),a("div",{staticClass:"column"},[a("p",{attrs:{for:"label"}},[t._v("Department")]),a("div",{staticClass:"select is-fullwidth",class:{"is-danger":t.errors.has("department")}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.department,expression:"department"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"department",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.department=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select Department")]),t._l(t.departmentOption,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2),a("small",{staticClass:"has-text-danger"},[t._v(t._s(t.errors.first("department")))])])])]),a("p",[t._v("Digital Signature")]),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("VueSignaturePad",{ref:"signaturePad",staticClass:"signaturePadBorder",attrs:{width:"auto",height:"200px"}}),a("div",{staticClass:"field has-addons float is-pulled-right"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-outlined is-danger is-small",attrs:{type:"button"},on:{click:t.saveSignature}},[t._v("Save")])]),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-outlined is-danger is-small",attrs:{type:"button"},on:{click:t.undoSignature}},[t._v("Undo")])])])],1)]),a("div",[a("button",{staticClass:"button is-fullwidth is-danger",attrs:{type:"button"},on:{click:t.validateBeforeSubmit}},[t._v("Submit")])])])])])])])])])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"cON/":function(t,e,a){"use strict";var i=a("Fyhw"),s=a("vnwn"),n=!1;var r=function(t){n||a("RJS7")},o=a("VU/8")(i.a,s.a,!1,r,"data-v-3f9bef8e",null);o.options.__file="components/loader.vue",e.a=o.exports},kBR5:function(t,e,a){"use strict";function i(t,e,a){this.x=t,this.y=e,this.time=a||(new Date).getTime()}function s(t,e,a,i){this.startPoint=t,this.control1=e,this.control2=a,this.endPoint=i}function n(t,e){var a=this,i=e||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e,a){var i,s,n,r=null,o=0;a||(a={});var l=function(){o=!1===a.leading?0:Date.now(),r=null,n=t.apply(i,s),r||(i=s=null)};return function(){var d=Date.now();o||!1!==a.leading||(o=d);var u=e-(d-o);return i=this,s=arguments,u<=0||u>e?(r&&(clearTimeout(r),r=null),o=d,n=t.apply(i,s),r||(i=s=null)):r||!1===a.trailing||(r=setTimeout(l,u)),n}}(n.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=n.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(a._mouseButtonDown=!0,a._strokeBegin(t))},this._handleMouseMove=function(t){a._mouseButtonDown&&a._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&a._mouseButtonDown&&(a._mouseButtonDown=!1,a._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];a._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];a._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===a._canvas&&(t.preventDefault(),a._strokeEnd(t))},this.on()}i.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},i.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},i.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},s.prototype.length=function(){for(var t=0,e=void 0,a=void 0,i=0;i<=10;i+=1){var s=i/10,n=this._point(s,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),r=this._point(s,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var o=n-e,l=r-a;t+=Math.sqrt(o*o+l*l)}e=n,a=r}return t},s.prototype._point=function(t,e,a,i,s){return e*(1-t)*(1-t)*(1-t)+3*a*(1-t)*(1-t)*t+3*i*(1-t)*t*t+s*t*t*t},n.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},n.prototype.fromDataURL=function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,s=a.ratio||window.devicePixelRatio||1,n=a.width||this._canvas.width/s,r=a.height||this._canvas.height/s;this._reset(),i.src=t,i.onload=function(){e._ctx.drawImage(i,0,0,n,r)},this._isEmpty=!1},n.prototype.toDataURL=function(t){var e;switch(t){case"image/svg+xml":return this._toSVG();default:for(var a=arguments.length,i=Array(a>1?a-1:0),s=1;s<a;s++)i[s-1]=arguments[s];return(e=this._canvas).toDataURL.apply(e,[t].concat(i))}},n.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},n.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},n.prototype.isEmpty=function(){return this._isEmpty},n.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)},n.prototype._strokeUpdate=function(t){var e=t.clientX,a=t.clientY,i=this._createPoint(e,a),s=this._data[this._data.length-1],n=s&&s[s.length-1],r=n&&i.distanceTo(n)<this.minDistance;if(!n||!r){var o=this._addPoint(i),l=o.curve,d=o.widths;l&&d&&this._drawCurve(l,d.start,d.end),this._data[this._data.length-1].push({x:i.x,y:i.y,time:i.time,color:this.penColor})}},n.prototype._strokeEnd=function(t){var e=this.points.length>2,a=this.points[0];if(!e&&a&&this._drawDot(a),a){var i=this._data[this._data.length-1],s=i[i.length-1];a.equals(s)||i.push({x:a.x,y:a.y,time:a.time,color:this.penColor})}"function"==typeof this.onEnd&&this.onEnd(t)},n.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},n.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},n.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},n.prototype._createPoint=function(t,e,a){var s=this._canvas.getBoundingClientRect();return new i(t-s.left,e-s.top,a||(new Date).getTime())},n.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var a=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,i=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,n=new s(e[1],a,i,e[2]),r=this._calculateCurveWidths(n);return e.shift(),{curve:n,widths:r}}return{}},n.prototype._calculateCurveControlPoints=function(t,e,a){var s=t.x-e.x,n=t.y-e.y,r=e.x-a.x,o=e.y-a.y,l=(t.x+e.x)/2,d=(t.y+e.y)/2,u=(e.x+a.x)/2,c=(e.y+a.y)/2,h=Math.sqrt(s*s+n*n),m=Math.sqrt(r*r+o*o),p=m/(h+m),v=u+(l-u)*p,f=c+(d-c)*p,g=e.x-v,_=e.y-f;return{c1:new i(l+g,d+_),c2:new i(u+g,c+_)}},n.prototype._calculateCurveWidths=function(t){var e=t.startPoint,a=t.endPoint,i={start:null,end:null},s=this.velocityFilterWeight*a.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,n=this._strokeWidth(s);return i.start=this._lastWidth,i.end=n,this._lastVelocity=s,this._lastWidth=n,i},n.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},n.prototype._drawPoint=function(t,e,a){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,a,0,2*Math.PI,!1),this._isEmpty=!1},n.prototype._drawCurve=function(t,e,a){var i=this._ctx,s=a-e,n=Math.floor(t.length());i.beginPath();for(var r=0;r<n;r+=1){var o=r/n,l=o*o,d=l*o,u=1-o,c=u*u,h=c*u,m=h*t.startPoint.x;m+=3*c*o*t.control1.x,m+=3*u*l*t.control2.x,m+=d*t.endPoint.x;var p=h*t.startPoint.y;p+=3*c*o*t.control1.y,p+=3*u*l*t.control2.y,p+=d*t.endPoint.y;var v=e+d*s;this._drawPoint(m,p,v)}i.closePath(),i.fill()},n.prototype._drawDot=function(t){var e=this._ctx,a="function"==typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,a),e.closePath(),e.fill()},n.prototype._fromData=function(t,e,a){for(var s=0;s<t.length;s+=1){var n=t[s];if(n.length>1)for(var r=0;r<n.length;r+=1){var o=n[r],l=new i(o.x,o.y,o.time),d=o.color;if(0===r)this.penColor=d,this._reset(),this._addPoint(l);else if(r!==n.length-1){var u=this._addPoint(l),c=u.curve,h=u.widths;c&&h&&e(c,h,d)}}else this._reset(),a(n[0])}},n.prototype._toSVG=function(){var t=this,e=this._data,a=this._canvas,i=Math.max(window.devicePixelRatio||1,1),s=a.width/i,n=a.height/i,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width",a.width),r.setAttributeNS(null,"height",a.height),this._fromData(e,function(t,e,a){var i=document.createElement("path");if(!(isNaN(t.control1.x)||isNaN(t.control1.y)||isNaN(t.control2.x)||isNaN(t.control2.y))){var s="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",s),i.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),i.setAttribute("stroke",a),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),r.appendChild(i)}},function(e){var a=document.createElement("circle"),i="function"==typeof t.dotSize?t.dotSize():t.dotSize;a.setAttribute("r",i),a.setAttribute("cx",e.x),a.setAttribute("cy",e.y),a.setAttribute("fill",e.color),r.appendChild(a)});var o='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+s+" "+n+'" width="'+s+'" height="'+n+'">',l=r.innerHTML;if(void 0===l){var d=document.createElement("dummy"),u=r.childNodes;d.innerHTML="";for(var c=0;c<u.length;c+=1)d.appendChild(u[c].cloneNode(!0));l=d.innerHTML}return"data:image/svg+xml;base64,"+btoa(o+l+"</svg>")},n.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,function(t,a){return e._drawCurve(t,a.start,a.end)},function(t){return e._drawDot(t)}),this._data=t},n.prototype.toData=function(){return this._data},e.a=n},qlUX:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("TRHM"),r=a("mtWM"),o=a.n(r),l=a("9LlT"),d=a("cON/");e.a={components:{VueSignaturePad:n.a,loader:d.a},created:function(){null!==localStorage.getItem("token")&&this.$router.push("/dashboard")},data:function(){return{confirm_password:"",gender:"",username:"",password:"",firstName:"",middleName:"",lastName:"",address:"",department:"",position:"",dateOfBirth:"",registrationLoader:!1,genderOption:["male","female"],departmentOption:["Department of Something","Department of Another"],positionOption:["Admin Aid 1","Admin Aid 2"],signatureImage:null,vueSignatureOptions:{backgroundColor:"#eceff1"},warningMsgs:{type:"warn",group:"warning",title:"<span ><span class='fas fa-exclamation-triangle fa-2x'></span><span class='title is-5'> Warning:</span></span>",text:"<p class='subtitle is-5'>asdasd</p>"}}},computed:{},methods:{undoSignature:function(){this.$refs.signaturePad.undoSignature()},showNotif:function(t,e,a,i){return{type:t,group:"vnotif",title:"<span ><span class='fas "+a+" fa-2x'></span><span class='title is-5'> "+e+":</span></span>",text:"<p class='subtitle is-5'>"+i+"</p>"}},dataURLtoFile:function(t,e){for(var a=t.split(","),i=a[0].match(/:(.*?);/)[1],s=atob(a[1]),n=s.length,r=new Uint8Array(n);n--;)r[n]=s.charCodeAt(n);return new File([r],e,{type:i})},saveSignature:function(){var t=this.$refs.signaturePad.saveSignature(),e=t.isEmpty,a=t.data;e?this.$notify(this.showNotif("warn","Warning","fa-exclamation-triangle","empty signature is not allowed")):(this.signatureImage=this.dataURLtoFile(a,"signature.png"),this.$notify(this.showNotif("success","Success","fa-check-circle","signature added to form..")))},putSignatureToForm:function(){var t=new FormData;return t.append("file",this.signatureImage,this.signatureImage.name),t},submitRegisterForm:function(){this.uploadImageToApi()},uploadImageToApi:function(){var t=this;this.registrationLoader=!0;var e={method:"POST",url:l.a.BASE_URL+"/api/v1/files?id="+this.$store.state.user_details.user._id+"&bucket="+l.a.BUCKET_SIGNATURE,data:this.putSignatureToForm(),headers:{"Content-Type":"multipart/form-data"}};o()(e).then(function(e){return t.createUserWhenImageUpload(e)}).catch(function(e){t.registrationLoader=!1,t.$notify(t.showNotif("error","Server Warning","fa-exclamation-triangle",e.response.data.errors))})},createUserWhenImageUpload:function(t){var e=this,a=""+t.data.file.filename;new FormData(registerForm).append("signature",a);var i={username:this.username,password:this.password,name:{first_name:this.firstName,middle_name:this.middleName,last_name:this.lastName},signature:a,gender:this.gender,address:this.address,department:this.department,position:this.position,dateOfBirth:this.dateOfBirth};console.log(s()(i));var n={method:"POST",url:l.a.BASE_URL+"/api/v1/users",data:s()(i),headers:{"Content-Type":"application/json"}};o()(n).then(function(t){e.registrationLoader=!1,e.$notify(e.showNotif("success","Success","fa-check-circle","Registration Successfull")),setTimeout(function(){return e.$router.push("/")},1500)}).catch(function(t){e.registrationLoader=!1,e.$notify(e.showNotif("error","Server Warning","fa-exclamation-triangle",t.response.data.errors))})},validateBeforeSubmit:function(){var t=this;this.$validator.validateAll().then(function(e){e&&null!==t.signatureImage&&t.submitRegisterForm(),null===t.signatureImage&&t.$notify(t.showNotif("warn","Warning","fa-exclamation-triangle","please fill up the form"))})}}}},rpLr:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},vnwn:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal",class:{"is-active":this.isActive}},[e("div",{staticClass:"modal-background"}),this._m(0)])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-content",staticStyle:{overflow:"hidden"}},[e("div",{attrs:{id:"cssSpiner"}})])}]};e.a=s},wCI8:function(t,e,a){"use strict";var i={format:"image/png",quality:.92,width:void 0,height:void 0,Canvas:void 0};e.a=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e={}),new Promise(function(a){var s=(e=Object.assign({},i,e)).Canvas?new e.Canvas:window.document.createElement("canvas"),n=e.Canvas?e.Canvas.Image:window.Image;e.Canvas&&(e.quality*=100);var r=t.map(function(t){return new Promise(function(e,a){"Object"!==t.constructor.name&&(t={src:t});var i=new n;i.onerror=function(){return a(new Error("Couldn't load image"))},i.onload=function(){return e(Object.assign({},t,{img:i}))},i.src=t.src})}),o=s.getContext("2d");a(Promise.all(r).then(function(t){var a=function(a){return e[a]||Math.max.apply(Math,t.map(function(t){return t.img[a]}))};return s.width=a("width"),s.height=a("height"),t.forEach(function(t){return o.globalAlpha=t.opacity?t.opacity:1,o.drawImage(t.img,t.x||0,t.y||0)}),e.Canvas&&"image/jpeg"===e.format?new Promise(function(t){s.toDataURL(e.format,{quality:e.quality,progressive:!1},function(e,a){if(e)throw e;t(a)})}):s.toDataURL(e.format,e.quality)}))})}}});