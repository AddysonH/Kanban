(function(t){function e(e){for(var s,r,n=e[0],d=e[1],c=e[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var d=a[n];0!==i[d]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var l=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1a12":function(t,e,a){},"2ada":function(t,e,a){"use strict";var s=a("ed89"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-teal"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("\n        Login\n      ")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],d=a("bc3a"),c=a.n(d);c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var l={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=l,m=(a("5dfc"),a("2877")),p=Object(m["a"])(u,r,n,!1,null,null,null),h=p.exports,v=a("335d"),f={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},b=f,g=(a("5c0b"),Object(m["a"])(b,i,o,!1,null,null,null)),_=g.exports,C=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid bg-img"},[a("div",[a("div",{staticClass:"row align-items-center bg-dark p-5"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"whiteText"},[t._v("KanBan")])])])])])}],w={name:"home",data(){return{}},computed:{},methods:{},components:{}},T=w,B=(a("9a0a"),Object(m["a"])(T,y,k,!1,null,"3fe2a90a",null)),$=B.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards chalk-img"},[a("div",{staticClass:"bluepaint p-3"},[t._m(0),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Create Board")])])]),t._v(" "),a("div",{staticClass:"row mt-4"},t._l(t.boards,(function(e){return a("div",{key:e.id,staticClass:"col-2 paintstroke center",on:{click:function(a){t.setActive(e)}}},[a("div",{staticClass:"mt-5"},[a("div",{staticClass:"p-2"},[a("router-link",{staticClass:"link-size",attrs:{to:{name:"board",params:{boardId:e.id}}}},[t._v(t._s(e.title))])],1)])])})))])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h1",{staticClass:"whiteText"},[t._v("WELCOME TO THE BOARDS!!!")])])}],I={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},setActive(t){this.$store.dispatch("setActive",t)}}},D=I,P=(a("2ada"),Object(m["a"])(D,x,L,!1,null,"b5fea092",null)),j=P.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid main-back"},[t.board.title?a("div",{staticClass:"row activeboard m-5 "},[a("div",{staticClass:"card col shadow p-3 bg-white rounded"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-end"},[a("i",{staticClass:"fa fa-trash text-danger",on:{click:t.deleteBoard}})]),t._v(" "),a("div",{staticClass:"mb-3"},[a("h1",{staticClass:"card-title font-weight-bold under"},[t._v(t._s(t.board.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.board.description))])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.lists,(function(t){return a("list-comp",{key:t.id,attrs:{listProp:t}})})))]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col",on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[a("h5",{staticClass:"under"},[t._v("New List")]),t._v(" "),a("div",{staticClass:"form-group form-inline d-flex justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listData.title,expression:"listData.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"List Title..."},domProps:{value:t.listData.title},on:{input:function(e){e.target.composing||t.$set(t.listData,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Add List")])])])])])]):t._e()])},A=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-comp col-4"},[a("div",{staticClass:"card shadow mb-5 p-1 bg-white rounded"},[a("div",{staticClass:"col d-flex justify-content-between mt-2"},[a("i",{staticClass:"fa fa-pen text-warning cursor",on:{click:function(e){t.editToggle=!t.editToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-trash text-danger cursor",on:{click:t.deleteList}})]),t._v(" "),t.editToggle?a("div",{staticClass:"col d-flex justify-content-center"},[a("form",{staticClass:"mt-2",on:{submit:function(e){return e.preventDefault(),t.editList(e)}}},[a("div",{staticClass:"form-group form-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editListData.title,expression:"editListData.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New List Title..."},domProps:{value:t.editListData.title},on:{input:function(e){e.target.composing||t.$set(t.editListData,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn-sm btn-warning ml-1",attrs:{type:"submit"}},[t._v("Edit")])])])]):t._e(),t._v(" "),a("h3",{staticClass:"under"},[t._v(t._s(t.listProp.title))]),t._v(" "),a("ul",t._l(t.tasks,(function(t,e){return a("task-comp",{key:t.id,attrs:{taskProp:t,index:e}})}))),t._v(" "),t.addToggle?t._e():a("i",{staticClass:"ml-3 fa fa-plus d-flex justify-self-start mb-3",on:{click:function(e){t.addToggle=!t.addToggle}}}),t._v(" "),t.addToggle?a("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[a("div",{staticClass:"form-group form-inline col d-flex"},[t.addToggle?a("i",{staticClass:"fa fa-angle-up mr-3",on:{click:function(e){t.addToggle=!t.addToggle}}}):t._e(),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addTaskData.description,expression:"addTaskData.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add Task..."},domProps:{value:t.addTaskData.description},on:{input:function(e){e.target.composing||t.$set(t.addTaskData,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn-sm btn-success ml-1",attrs:{type:"submit"}},[t._v("Add Task")])])]):t._e()])])},N=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-comp"},[a("li",{staticClass:"d-flex justify-content-between"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectListData.listId,expression:"selectListData.listId"}],staticClass:"form-control form-control-sm",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.selectListData,"listId",e.target.multiple?a:a[0])},t.selectList]}},t._l(t.lists,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])}))),t._v(" "),a("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.taskProp.description))]),t._v(" "),a("div",[t.commentsToggle?a("i",{staticClass:"fa fa-angle-up mr-4 text-info",on:{click:function(e){t.commentsToggle=!t.commentsToggle}}}):t._e(),t._v(" "),t.commentsToggle?t._e():a("i",{staticClass:"fa fa-angle-down mr-4 text-info",on:{click:function(e){t.commentsToggle=!t.commentsToggle}}}),t._v(" "),a("i",{staticClass:"fa fa-trash text-danger",on:{click:t.deleteTask}})])]),t._v(" "),t.commentsToggle?a("ul",t._l(t.taskProp.comments,(function(e,s){return a("li",{key:e.id,staticClass:"d-flex justify-content-start"},[a("i",{staticClass:"fa fa-minus mr-2",on:{click:function(e){t.deleteComment(s)}}}),t._v(" "),a("p",{staticClass:"text-muted"},[t._v("\n      "+t._s(e.description)+"\n      ")])])}))):t._e(),t._v(" "),t.commentsToggle?a("form",{staticClass:"d-flex justify-content-end",on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[a("div",{staticClass:"form-group form-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addCommentData.description,expression:"addCommentData.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add Comment..."},domProps:{value:t.addCommentData.description},on:{input:function(e){e.target.composing||t.$set(t.addCommentData,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn-sm btn-warning",attrs:{type:"submit"}},[t._v("Add Comment")])])]):t._e()])},S=[],U={name:"task-comp",props:["taskProp","index"],data(){return{selectListData:{},addCommentData:{},commentsToggle:!1}},computed:{lists(){return this.$store.state.lists}},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.taskProp)},selectList(){this.$store.dispatch("selectList",{id:this.taskProp.id,listId:this.selectListData.listId,boardId:this.$route.params.boardId,oldListId:this.taskProp.listId})},addComment(){let t={...this.taskProp};t.comments.push(this.addCommentData),this.$store.dispatch("editTask",t),this.addCommentData={}},deleteComment(t){let e={...this.taskProp};e.comments.splice(t,1),this.$store.dispatch("editTask",e)}},components:{}},R=U,z=(a("a6c0"),Object(m["a"])(R,M,S,!1,null,"5e232f76",null)),H=z.exports,J={name:"list-comp",mounted(){this.$store.dispatch("getTasksByListId",this.listProp.id)},data(){return{editListData:{},addTaskData:{},editToggle:!1,addToggle:!1}},computed:{tasks(){return this.$store.state.tasks[this.listProp.id]}},methods:{deleteList(){this.$store.dispatch("deleteList",this.listProp)},editList(){this.$store.dispatch("editList",{id:this.listProp.id,title:this.editListData.title,boardId:this.listProp.boardId}),this.editListData={}},addTask(){this.$store.dispatch("addTask",{listId:this.listProp.id,description:this.addTaskData.description}),this.addTaskData={},this.addToggle=!this.addToggle}},components:{TaskComp:H},props:["listProp"]},K=J,W=(a("6ae8"),Object(m["a"])(K,E,N,!1,null,"2d87ace6",null)),q=W.exports,G={name:"board",mounted(){this.$store.dispatch("getBoardById",this.$route.params.boardId),this.$store.dispatch("getListsByBoardId",this.boardId)},data(){return{listData:{}}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{addList(){this.$store.dispatch("addList",{boardId:this.$route.params.boardId,title:this.listData.title}),this.listData={}},deleteBoard(){this.$store.dispatch("deleteBoard",this.$route.params.boardId)}},props:["boardId"],components:{ListComp:q}},V=G,Y=(a("b766"),Object(m["a"])(V,O,A,!1,null,"0c66dbcd",null)),F=Y.exports;s["a"].use(C["a"]);var Q=new C["a"]({routes:[{path:"/",name:"home",component:$},{path:"/boards",name:"boards",component:j,beforeEnter:v["b"]},{path:"/boards/:boardId",name:"board",component:F,props:!0,beforeEnter:v["b"]},{path:"*",redirect:"/"}]}),X=a("2f62");let Z=location.host.includes("localhost")?"http://localhost:3000/":"/";const tt=c.a.create({baseURL:Z+"api",timeout:3e3,withCredentials:!0});s["a"].use(X["a"]);var et=new X["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)}},actions:{setBearer({},t){tt.defaults.headers.authorization=t},resetBearer(){tt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await tt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},async getBoards({commit:t,dispatch:e}){try{let e=await tt.get("boards");t("setBoards",e.data)}catch(a){console.error(a)}},addBoard({commit:t,dispatch:e},a){tt.post("boards",a).then(t=>{e("getBoards")})},setActive({commit:t,dispatch:e},a){t("setActiveBoard",a)},async deleteBoard({commit:t,dispatch:e},a){try{await tt.delete("boards/"+a),Q.push({name:"boards"})}catch(s){console.error(s)}},async getBoardById({commit:t,dispatch:e},a){try{let e=await tt.get("boards/"+a);t("setActiveBoard",e.data)}catch(s){}},async getListsByBoardId({commit:t,dispatch:e},a){try{let e=await tt.get("boards/"+a+"/lists");t("setLists",e.data)}catch(s){console.error(s)}},async addList({commit:t,dispatch:e},a){try{await tt.post("lists",a),e("getListsByBoardId",a.boardId)}catch(s){console.error(s)}},async deleteList({commit:t,dispatch:e},a){try{await tt.delete("lists/"+a.id),e("getListsByBoardId",a.boardId)}catch(s){console.error(s)}},async editList({commit:t,dispatch:e},a){try{await tt.put("lists/"+a.id,{title:a.title}),e("getListsByBoardId",a.boardId)}catch(s){console.error(s)}},async getTasksByListId({commit:t,dispatch:e},a){try{let e=await tt.get("lists/"+a+"/tasks");t("setTasks",{tasks:e.data,listId:a})}catch(s){console.error(s)}},async addTask({commit:t,dispatch:e},a){try{await tt.post("tasks",a),e("getTasksByListId",a.listId)}catch(s){console.error(s)}},async deleteTask({commit:t,dispatch:e},a){try{console.log(a),await tt.delete("tasks/"+a.id),e("getTasksByListId",a.listId)}catch(s){}},async selectList({commit:t,dispatch:e},a){try{await tt.put("tasks/"+a.id,{listId:a.listId}),e("getTasksByListId",a.listId),e("getTasksByListId",a.oldListId)}catch(s){console.error(s)}},async editTask({commit:t,dispatch:e},a){try{await tt.put("tasks/"+a.id,a)}catch(s){console.error(s)}}}});const at="dev-naeu7-5y.us.auth0.com",st="https://kanban.com",it="ETYunyGkMtwRhUpdftcL5v1MtVvPmOBv";s["a"].use(v["a"],{domain:at,clientId:it,audience:st,onRedirectCallback:t=>{Q.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:Q,store:et,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"5dfc":function(t,e,a){"use strict";var s=a("1a12"),i=a.n(s);i.a},"6ae8":function(t,e,a){"use strict";var s=a("e879"),i=a.n(s);i.a},"949d":function(t,e,a){},"9a0a":function(t,e,a){"use strict";var s=a("949d"),i=a.n(s);i.a},"9c0c":function(t,e,a){},a1ab:function(t,e,a){},a6c0:function(t,e,a){"use strict";var s=a("a1ab"),i=a.n(s);i.a},b766:function(t,e,a){"use strict";var s=a("eef7"),i=a.n(s);i.a},e879:function(t,e,a){},ed89:function(t,e,a){},eef7:function(t,e,a){}});