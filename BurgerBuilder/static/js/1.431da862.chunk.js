webpackJsonp([1],{208:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=t.n(a),i=t(12),u=t(14),l=t(209),c=t(66),A=t(67),d=t(221),s=t.n(d),p=t(7),b=t(19),h=function(){function e(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(e){var n=Object(a.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),t=h(n,2),i=t[0],d=t[1],p=Object(a.useState)(!0),g=h(p,2),m=g[0],f=g[1];Object(a.useEffect)(function(){e.buildingBurger||"/"===e.authRedirectPath||e.onSetAuthRedirectPath()},[]);var B=function(e,n){var t=Object(b.b)(i,r({},n,Object(b.b)(i[n],{value:e.target.value,valid:Object(b.a)(e.target.value,i[n].validation),touched:!0})));d(t)},C=function(n){n.preventDefault(),e.onAuth(i.email.value,i.password.value,m)},v=function(){f(!m)},x=[];for(var _ in i)x.push({id:_,config:i[_]});var I=x.map(function(e){return o.a.createElement(l.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(n){return B(n,e.id)}})});e.loading&&(I=o.a.createElement(A.a,null));var w=null;e.error&&(w=o.a.createElement("p",null,e.error.message));var k=null;return e.isAuthenticated&&(k=o.a.createElement(u.c,{to:e.authRedirectPath})),o.a.createElement("div",{className:s.a.Auth},k,w,o.a.createElement("form",{onSubmit:C},I,o.a.createElement(c.a,{btnType:"Success"},"SUBMIT")),o.a.createElement(c.a,{clicked:v,btnType:"Danger"},"SWITCH TO ",m?"SIGNIN":"SIGNUP"))},m=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},f=function(e){return{onAuth:function(n,t,r){return e(p.b(n,t,r))},onSetAuthRedirectPath:function(){return e(p.v("/"))}}};n.default=Object(i.b)(m,f)(g)},209:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(210),i=t.n(o),u=function(e){var n=null,t=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(i.a.Invalid),e.elementType){case"input":n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=a.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=a.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:i.a.Input},a.a.createElement("label",{className:i.a.Label},e.label),n)};n.a=u},210:function(e,n,t){var r=t(211);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(205)(r,a);r.locals&&(e.exports=r.locals)},211:function(e,n,t){n=e.exports=t(204)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/wamp64/www/Portfolio Finished/Burger Builder (React)/burger-basics--01-project-setup/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,WAAa,CAChB,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border: none;\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: #FDA49A;\r\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},221:function(e,n,t){var r=t(222);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(205)(r,a);r.locals&&(e.exports=r.locals)},222:function(e,n,t){n=e.exports=t(204)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["C:/wamp64/www/Portfolio Finished/Burger Builder (React)/burger-basics--01-project-setup/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .Auth {\r\n        width: 500px;\r\n    }\r\n}"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.431da862.chunk.js.map