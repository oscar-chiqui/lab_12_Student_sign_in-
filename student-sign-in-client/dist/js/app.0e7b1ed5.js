(function(t){function e(e){for(var r,d,u=e[0],i=e[1],o=e[2],l=0,f=[];l<u.length;l++)d=u[l],Object.prototype.hasOwnProperty.call(a,d)&&a[d]&&f.push(a[d][0]),a[d]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=d(d.s=n[0]))}return t}var r={},a={app:0},s=[];function d(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=r,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)d.d(n,r,function(e){return t[e]}.bind(null,r));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"49d8":function(t,e,n){"use strict";n("99e6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("new-student-form",{on:{"student-added":t.newStudentAdded}}),n("student-table",{attrs:{students:t.students},on:{"student-arrived-or-left":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}}),n("student-message",{attrs:{student:t.mostRecentStudent}})],1)},s=[],d=(n("a15b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length>0,expression:"errors.length > 0"}],staticClass:"alert alert-danger"},[n("ul",t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"card add-student m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.newStudentName},on:{input:function(e){e.target.composing||(t.newStudentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[t._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:t.newStarID},on:{input:function(e){e.target.composing||(t.newStarID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:t.addStudent}},[t._v("Add")])])])}),u=[],i={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student Name is required"),this.newStarID||this.errors.push("StarID is required"),0===this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},o=i,c=n("2877"),l=Object(c["a"])(o,d,u,!1,null,"13028579",null),f=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.student.name,expression:"student.name"}]},[t.student.present?n("div",{staticClass:"alert alert-success"},[t._v(" Welcome, "+t._s(t.student.name)+"! ")]):n("div",{staticClass:"alert alert-info"},[t._v(" Goodbye, "+t._s(t.student.name)+". See you later! ")])])])},m=[],v={name:"StudentMessage",props:{student:Object}},h=v,b=Object(c["a"])(h,p,m,!1,null,"a1d144a2",null),A=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Student List")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var n=t.editTable,r=e.target,a=!!r.checked;if(Array.isArray(n)){var s=null,d=t._i(n,s);r.checked?d<0&&(t.editTable=n.concat([s])):d>-1&&(t.editTable=n.slice(0,d).concat(n.slice(d+1)))}else t.editTable=a}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("StarID")]),n("th",[t._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.students,(function(e){return n("student-row",{key:e.starID,attrs:{student:e,edit:t.editTable},on:{"student-arrived-or-left":t.arrivedOrLeft,"delete-student":t.deleteStudent}})}))],2)])])])},S=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{class:t.student.present?"present":"absent"},[r("td",[t._v(t._s(t.student.name))]),r("td",[t._v(t._s(t.student.starID))]),r("td",[r("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.arrivedOrLeft(t.student,e.srcElement.checked)}}})]),r("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[r("img",{attrs:{src:n("ed3a")},on:{click:t.deleteStudent}})])])},g=[],O=(n("b0c0"),{name:"StudentRow",props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}}),C=O,I=(n("49d8"),Object(c["a"])(C,y,g,!1,null,"7a688ec1",null)),D=I.exports,N={name:"StudentTable",components:{StudentRow:D},props:{students:Array},data:function(){return{editTable:!1}},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(t){this.$emit("delete-student",t)}}},j=N,x=(n("b1d5"),Object(c["a"])(j,w,S,!1,null,null,null)),P=x.exports,T={name:"App",components:{NewStudentForm:f,StudentMessage:A,StudentTable:P},data:function(){return{students:[],mostRecentStudent:{}}},mounted:function(){this.updateStudents()},methods:{newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(t){e.updateStudents()})).catch((function(t){var e=t.response.data.join(", ");alert("Error adding Student.\n"+e)}))},studentArrivedOrLeft:function(t,e){var n=this;t.present=e,this.$student_api.updateStudent(t).then((function(){n.mostRecentStudent=t,n.updateStudents()}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t).then((function(){e.updateStudents(),e.mostRecentStudent={}}))},updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e}))}}},B=T,J=(n("034f"),Object(c["a"])(B,a,s,!1,null,null,null)),M=J.exports,L=n("5f5b"),U=n("bc3a"),V=n.n(U),X="/api/students",E={getAllStudents:function(){return V.a.get(X).then((function(t){return t.data}))},addStudent:function(t){return V.a.post(X,t).then((function(t){return t.data}))},updateStudent:function(t){return V.a.patch("".concat(X,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return V.a.delete("".concat(X,"/").concat(t.id),t).then((function(t){return t.data}))}};n("f9e3"),n("2dd8");r["default"].use(L["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$student_api=E,new r["default"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,n){},"99e6":function(t,e,n){},b1d5:function(t,e,n){"use strict";n("c2b6")},c2b6:function(t,e,n){},ed3a:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.0e7b1ed5.js.map