webpackJsonp([2],{"+Nq1":function(e,t,r){"use strict";var s=function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("TechStackEdit")],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n},"5c1x":function(e,t,r){"use strict";var s=r("BpKR"),n=r("pQMr"),a=!1;var i=function(e){a||r("FJw5")},o=r("VU/8")(s.a,n.a,!1,i,null,null);o.options.__file="src\\components\\TechStackEdit.vue",t.a=o.exports},"9zOA":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("yp0+"),n=r("+Nq1"),a=r("VU/8")(s.a,n.a,!1,null,null,null);a.options.__file="src\\pages\\stacks\\new.vue",t.default=a.exports},BVBb:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("img",{ref:"imageUrl",staticStyle:{cursor:"pointer"},attrs:{src:e.imageUrl},on:{click:e.onPickFile}})]),r("div",[e.imageUrl?r("v-btn",{staticClass:"error",attrs:{raised:""},on:{click:e.removeFile}},[e._v("\n            "+e._s(e.removeLabel)+"\n        ")]):r("v-btn",{attrs:{raised:""},on:{click:e.onPickFile}},[e._v("\n            "+e._s(e.selectLabel)+"\n        ")]),r("input",{ref:"image",attrs:{type:"file",name:"image",accept:e.accept},on:{change:e.onFilePicked}})],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n},BpKR:function(e,t,r){"use strict";var s=r("woOf"),n=r.n(s),a=r("Xxa5"),i=r.n(a),o=r("fZjL"),c=r.n(o),l=r("exGp"),u=r.n(l),d=r("Dd8w"),h=r.n(d),p=r("TxlB"),v=r("NYxO"),m=r("5YJS"),f=r("kRG6"),g=(r.n(f),r("J9uk")),x={name:"",vendorName:"",appUrl:"",description:"",details:"",isLocked:!1,screenshot:null,screenshotUrl:"",technologyIds:[]};t.a={props:["techstack"],components:{FileInput:p.a},computed:h()({canChange:function(){return!this.techstack||this.user.userAuthId==this.techstack.ownerId||this.isAdmin}},Object(v.mapGetters)(["loading","isAuthenticated","user","isAdmin"])),methods:{onFileChange:function(e){this.screenshot=e},submit:function(){var e=u()(i.a.mark(function e(){var t,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=23;break}if(e.prev=1,this.$store.commit("loading",!0),t=f.toObject.call(this,c()(x)),this.techstack){e.next=10;break}return e.next=7,Object(g.d)(t,this.screenshot);case 7:e.t0=e.sent,e.next=13;break;case 10:return e.next=12,Object(g.y)(h()({},t,{id:this.id}),this.screenshot);case 12:e.t0=e.sent;case 13:r=e.t0,this.$router.push("/"+r.slug),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),this.responseStatus=e.t1.responseStatus||e.t1;case 20:return e.prev=20,this.$store.commit("loading",!1),e.finish(20);case 23:case"end":return e.stop()}},e,this,[[1,17,20,23]])}));return function(){return e.apply(this,arguments)}}(),remove:function(){var e=u()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.$store.commit("loading",!0),e.next=4,Object(g.f)(this.id);case 4:return this.$store.commit("removeTechStack",this.techstack),e.next=7,this.$router.push("/stacks");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.responseStatus=e.t0.responseStatus||e.t0;case 12:return e.prev=12,this.$store.commit("loading",!1),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,9,12,15]])}));return function(){return e.apply(this,arguments)}}(),loadVersion:function(e){n()(this,e,{id:this.id})},errorResponse:f.errorResponse,dateFmtHM:f.dateFmtHM},mounted:function(){var e=u()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.techstack){e.next=8;break}return this.title="Edit "+this.techstack.name,this.actionLabel="Update TechStack",n()(this,this.techstack),this.technologyIds=(this.techstack.technologyChoices||[]).map(function(e){return e.technologyId}),e.next=7,Object(g.n)(this.techstack.slug);case 7:this.previousVersions=e.sent;case 8:return e.next=10,Object(g.q)();case 10:this.technologySelectItems=e.sent;case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),data:function(){return h()({},x,{title:"Add a new TechStack",actionLabel:"Add TechStack",valid:!0,allowDelete:!1,responseStatus:null,nameCounter:m.a,nameRules:m.b,urlRules:m.e,urlCounter:m.d,technologySelectItems:[],previousVersions:[]})}}},DE3n:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"input[type=file][data-v-036beace]{position:absolute;left:-99999px}",""])},FJw5:function(e,t,r){var s=r("pQ6z");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("ec7300ba",s,!1)},TxlB:function(e,t,r){"use strict";var s=r("z6fj"),n=r("BVBb"),a=!1;var i=function(e){a||r("ut45")},o=r("VU/8")(s.a,n.a,!1,i,"data-v-036beace",null);o.options.__file="src\\components\\FileInput.vue",t.a=o.exports},pQ6z:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".image-upload IMG{max-width:300px;max-height:150px}",""])},pQMr:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[e.isAuthenticated?e._e():r("v-layout",{attrs:{fluid:""}},[r("v-flex",{staticClass:"headline",staticStyle:{"text-align":"center"}},[e._v("Authentication is Required")])],1),e.isAuthenticated?r("v-layout",{attrs:{fluid:""}},[r("v-flex",{class:e.loading?"loading-body":"",attrs:{sm10:"","offset-sm1":""}},[r("v-toolbar",[r("v-toolbar-title",{staticClass:"headline"},[e._v(e._s(e.title))]),r("v-spacer"),e.previousVersions.length>0?r("v-toolbar-items",[r("v-menu",{attrs:{"offset-y":""}},[r("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[e._v("\r\n                    Previous Versions  \r\n                    "),r("v-icon",[e._v("reply")])],1),r("v-list",e._l(e.previousVersions,function(t){return r("v-list-tile",{key:t.id,on:{click:function(r){e.loadVersion(t)}}},[r("v-list-tile-title",[e._v("Modified by "+e._s(t.lastModifiedBy)+" at "+e._s(e.dateFmtHM(new Date(t.lastModified))))])],1)}))],1)],1):e._e()],1),r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("v-form",{ref:"form",staticStyle:{width:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:e.errorResponse()}},[e._v(e._s(e.errorResponse()))]),r("v-layout",[r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{label:"Stack Name",required:"",rules:e.nameRules,counter:e.nameCounter,"error-messages":e.errorResponse("name")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{label:"Vendor Name",required:"",rules:e.nameRules,counter:e.nameCounter,"error-messages":e.errorResponse("vendorName")},model:{value:e.vendorName,callback:function(t){e.vendorName=t},expression:"vendorName"}}),r("v-text-field",{attrs:{label:"App URL",required:"",rules:e.urlRules,counter:e.urlCounter,"error-messages":e.errorResponse("appUrl")},model:{value:e.appUrl,callback:function(t){e.appUrl=t},expression:"appUrl"}})],1),r("v-flex",{staticClass:"image-upload",staticStyle:{"text-align":"right"},attrs:{xs6:""}},[r("v-layout",{staticStyle:{"text-align":"center",margin:"1em auto"}},[r("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:e.errorResponse("screenshotUrl")}},[e._v(e._s(e.errorResponse("screenshotUrl")))])],1),r("small",{staticStyle:{"margin-right":"2em",color:"#999"}},[e._v("(minimum 860 x 690)")]),r("file-input",{ref:"fileScreenshot",attrs:{value:e.screenshotUrl,accept:"image/*",selectLabel:"Add Screenshot"},on:{input:e.onFileChange}})],1)],1),r("v-select",{attrs:{label:"Select Technologies",autocomplete:"",loading:e.loading,multiple:"",chips:"",required:"",items:e.technologySelectItems,rules:[function(){return e.technologyIds.length>0||"You must choose at least one"}]},model:{value:e.technologyIds,callback:function(t){e.technologyIds=t},expression:"technologyIds"}}),r("v-text-field",{attrs:{label:"Summary",counter:740,"multi-line":"",rows:6,required:"",rules:[function(e){return!!e||"Required"},function(e){return e.length>=50||"Min 50 characters"},function(e){return e.length<=740||"Max 740 characters"}],"error-messages":e.errorResponse("description")},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),r("v-text-field",{attrs:{label:"details (Markdown)","multi-line":"",rows:20,counter:4e3,rules:[function(e){return e.length<=4e3||"Max 4000 characters"}],"error-messages":e.errorResponse("details")},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),r("v-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.canChange,expression:"canChange"}],attrs:{label:"Prevent others from editing this Technology?"},model:{value:e.isLocked,callback:function(t){e.isLocked=t},expression:"isLocked"}})],1)],1)],1),r("v-card-actions",{staticStyle:{"text-align":"center"}},[r("v-layout",[r("v-flex",[r("v-btn",{attrs:{large:"",disabled:!e.valid||e.loading},on:{click:e.submit}},[e._v(e._s(e.actionLabel))])],1),e.techstack&&(e.techstack.ownerId==e.user.userAuthId||e.isAdmin)?r("v-flex",{staticStyle:{margin:".5em -3em 0 3em"},attrs:{xs1:""}},[r("v-checkbox",{attrs:{large:"",label:"confirm"},model:{value:e.allowDelete,callback:function(t){e.allowDelete=t},expression:"allowDelete"}})],1):e._e(),e.techstack&&(e.techstack.ownerId==e.user.userAuthId||e.isAdmin)?r("v-flex",{attrs:{xs5:""}},[r("v-btn",{staticClass:"white--text",attrs:{large:"",disabled:!e.allowDelete,color:"red"},on:{click:e.remove}},[e._v("\r\n                      Delete TechStack\r\n                    ")])],1):e._e()],1)],1)],1)],1)],1):e._e()],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n},ut45:function(e,t,r){var s=r("DE3n");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("9fcc69cc",s,!1)},"yp0+":function(e,t,r){"use strict";var s=r("5c1x");t.a={components:{TechStackEdit:s.a}}},z6fj:function(e,t,r){"use strict";t.a={props:{value:{type:String},accept:{type:String,default:"*"},selectLabel:{type:String,default:"Select an image"},removeLabel:{type:String,default:"Remove"}},data:function(){return{imageUrl:""}},watch:{value:function(e){this.imageUrl=e}},mounted:function(){this.imageUrl=this.value},methods:{onPickFile:function(){this.$refs.image.click()},onFilePicked:function(e){var t=this,r=e.target.files||e.dataTransfer.files;if(r&&r[0]){var s=r[0].name;if(s&&s.lastIndexOf(".")<=0)return;var n=new FileReader;n.addEventListener("load",function(){t.imageUrl=n.result}),n.readAsDataURL(r[0]),this.$emit("input",r[0])}},removeFile:function(){this.imageUrl=""}}}}});