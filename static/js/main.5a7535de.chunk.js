(this.webpackJsonpcalculator_react=this.webpackJsonpcalculator_react||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_component_buttonPanel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_component_display__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),Apps=function(_Component){Object(C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Apps,_Component);var _super=Object(C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Apps);function Apps(){var _this;Object(C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Apps);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={result:"0",display:"0",buttons:[{id:"zero",value:"0",type:"num"},{id:"one",value:"1",type:"num"},{id:"two",value:"2",type:"num"},{id:"three",value:"3",type:"num"},{id:"four",value:"4",type:"num"},{id:"five",value:"5",type:"num"},{id:"six",value:"6",type:"num"},{id:"seven",value:"7",type:"num"},{id:"eight",value:"8",type:"num"},{id:"nine",value:"9",type:"num"},{id:"equals",value:"=",type:"eq"},{id:"add",value:"+",type:"operator"},{id:"subtract",value:"-",type:"operator"},{id:"multiply",value:"*",type:"operator"},{id:"divide",value:"/",type:"operator"},{id:"decimal",value:".",type:"dec"},{id:"clear",value:"AC",type:"clr"}]},_this.isDec=new RegExp("[.]"),_this.isNull=new RegExp("^$|^[0]"),_this.isOperator=new RegExp("^[+*-/]|[+*-/]$"),_this.isDoubeOps=new RegExp("([+-/*]{2})$"),_this.isStartZero=new RegExp("^[0]"),_this.handleDecimal=function(){var e=_this.state.display,_=_this.state.result;_this.isDec.test(_)||(_this.isNull.test(_)?e=_="0.":(_+=".",e+=".")),_this.setState({display:e,result:_})},_this.handleResult=function(){var result=eval(_this.state.display);_this.setState({display:result,result:result})},_this.handleZero=function(){var e=_this.state.display,_=_this.state.result;_this.isStartZero.test(e)&&!_this.isDec.test(e)||(e+="0",_+="0"),_this.setState({display:e,result:_})},_this.handleButton=function(e){var _=_this.state.display,t=_this.state.result;_this.isNull.test(_)&&!_this.isDec.test(_)?(_=e,t=e):(_this.isOperator.test(t)&&!_this.isDec.test(t)?t=e:t+=e,_+=e),_this.setState({display:_,result:t})},_this.handleOperator=function(e){var _=_this.state.display,t=_this.state.result;_this.isNull.test(_)?_=e:_this.isOperator.test(t)?(_this.isDoubeOps.test(_)?_=_.slice(0,-2):"-"===e&&"-"!==t||(_=_.slice(0,-1)),_+=e):_+=e,t=e,_this.setState({display:_,result:t})},_this.handleClear=function(){_this.setState({display:"0",result:0})},_this}return Object(C_Users_pygmy_Documents_Web_program_Project_front_end_project_calculator_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Apps,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_component_display__WEBPACK_IMPORTED_MODULE_6__.a,{onDisplay:this.state.display,onResult:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_component_buttonPanel__WEBPACK_IMPORTED_MODULE_5__.a,{buttons:this.state.buttons,onButton:this.handleButton,onDecimal:this.handleDecimal,onZero:this.handleZero,onResult:this.handleResult,onClear:this.handleClear,onOperator:this.handleOperator})]})}}]),Apps}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Apps},function(e,_,t){"use strict";var s=t(2),r=t(3),a=t(5),n=t(4),i=t(1),l=t(0),o=function(e){Object(a.a)(t,e);var _=Object(n.a)(t);function t(){return Object(s.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,_=e.buttons,t=e.onButton,s=e.onDecimal,r=e.onZero,a=e.onResult,n=e.onClear,i=e.onOperator;return Object(l.jsx)("div",{className:"row grid-button",children:_.map((function(e){return Object(l.jsx)("button",{className:"eq"===e.type?"btn btn-primary":"clr"===e.type?"btn btn-danger":"zero"===e.id?"btn btn-secondary big-z":"operator"===e.type?"btn btn-light "+e.id:"btn btn-secondary num",id:e.id,onClick:function(){return"zero"===e.id?r():"decimal"===e.id?s():"equals"===e.id?a():"clear"===e.id?n():"operator"===e.type?i(e.value):t(e.value)},children:e.value},e.value)}))})}}]),t}(i.Component);_.a=o},function(e,_,t){"use strict";t(1);var s=t(0);_.a=function(e){var _=e.onDisplay,t=e.onResult;return Object(s.jsx)("div",{className:"row display-container",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:_}),Object(s.jsx)("h3",{id:"display",children:t})]})})}},function(e,_,t){"use strict";t.r(_);var s=t(1),r=t.n(s),a=t(7),n=t.n(a),i=t(8),l=t(0);n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{})}),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.5a7535de.chunk.js.map