(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{345:function(e,t,a){"use strict";a.r(t);var r={data:function(){return{firstName:"",lastName:"",email:""}},methods:{onSubmit:function(){alert("Form has been submitted!")}}},n=(a(433),a(31)),s=Object(n.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit,n=t.reset;return[a("form",{on:{submit:function(t){return t.preventDefault(),r(e.onSubmit)},reset:function(e){return e.preventDefault(),n(e)}}},[a("ValidationProvider",{attrs:{name:"E-mail",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("span",[e._v(e._s(r[0]))])]}}],null,!0)}),e._v(" "),a("ValidationProvider",{attrs:{name:"First Name",rules:"required|alpha"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),e._v(" "),a("span",[e._v(e._s(r[0]))])]}}],null,!0)}),e._v(" "),a("ValidationProvider",{attrs:{name:"Last Name",rules:"required|alpha"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),e._v(" "),a("span",[e._v(e._s(r[0]))])]}}],null,!0)}),e._v(" "),a("button",{attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("button",{attrs:{type:"reset"}},[e._v("Reset")])],1)]}}])})},[],!1,null,"4aef9ddc",null);t.default=s.exports},386:function(e,t,a){},433:function(e,t,a){"use strict";var r=a(386);a.n(r).a}}]);