!function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(d&&d(e);m.length;)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={0:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(t){return o.p+""+({}[t]||t)+"."+{2:"fe4a7bc650678c892029"}[t]+".bundle.js"}(t);var l=new Error;r=function(e){i.onerror=i.onload=null,clearTimeout(c);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,s[1](l)}n[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;r.push([262,1]),s()}({246:function(t,e,s){var a={"./af":81,"./af.js":81,"./ar":82,"./ar-dz":83,"./ar-dz.js":83,"./ar-kw":84,"./ar-kw.js":84,"./ar-ly":85,"./ar-ly.js":85,"./ar-ma":86,"./ar-ma.js":86,"./ar-sa":87,"./ar-sa.js":87,"./ar-tn":88,"./ar-tn.js":88,"./ar.js":82,"./az":89,"./az.js":89,"./be":90,"./be.js":90,"./bg":91,"./bg.js":91,"./bm":92,"./bm.js":92,"./bn":93,"./bn.js":93,"./bo":94,"./bo.js":94,"./br":95,"./br.js":95,"./bs":96,"./bs.js":96,"./ca":97,"./ca.js":97,"./cs":98,"./cs.js":98,"./cv":99,"./cv.js":99,"./cy":100,"./cy.js":100,"./da":101,"./da.js":101,"./de":102,"./de-at":103,"./de-at.js":103,"./de-ch":104,"./de-ch.js":104,"./de.js":102,"./dv":105,"./dv.js":105,"./el":106,"./el.js":106,"./en-au":107,"./en-au.js":107,"./en-ca":108,"./en-ca.js":108,"./en-gb":109,"./en-gb.js":109,"./en-ie":110,"./en-ie.js":110,"./en-il":111,"./en-il.js":111,"./en-in":112,"./en-in.js":112,"./en-nz":113,"./en-nz.js":113,"./en-sg":114,"./en-sg.js":114,"./eo":115,"./eo.js":115,"./es":116,"./es-do":117,"./es-do.js":117,"./es-us":118,"./es-us.js":118,"./es.js":116,"./et":119,"./et.js":119,"./eu":120,"./eu.js":120,"./fa":121,"./fa.js":121,"./fi":122,"./fi.js":122,"./fil":123,"./fil.js":123,"./fo":124,"./fo.js":124,"./fr":125,"./fr-ca":126,"./fr-ca.js":126,"./fr-ch":127,"./fr-ch.js":127,"./fr.js":125,"./fy":128,"./fy.js":128,"./ga":129,"./ga.js":129,"./gd":130,"./gd.js":130,"./gl":131,"./gl.js":131,"./gom-deva":132,"./gom-deva.js":132,"./gom-latn":133,"./gom-latn.js":133,"./gu":134,"./gu.js":134,"./he":135,"./he.js":135,"./hi":136,"./hi.js":136,"./hr":137,"./hr.js":137,"./hu":138,"./hu.js":138,"./hy-am":139,"./hy-am.js":139,"./id":140,"./id.js":140,"./is":141,"./is.js":141,"./it":142,"./it-ch":143,"./it-ch.js":143,"./it.js":142,"./ja":144,"./ja.js":144,"./jv":145,"./jv.js":145,"./ka":146,"./ka.js":146,"./kk":147,"./kk.js":147,"./km":148,"./km.js":148,"./kn":149,"./kn.js":149,"./ko":150,"./ko.js":150,"./ku":151,"./ku.js":151,"./ky":152,"./ky.js":152,"./lb":153,"./lb.js":153,"./lo":154,"./lo.js":154,"./lt":155,"./lt.js":155,"./lv":156,"./lv.js":156,"./me":157,"./me.js":157,"./mi":158,"./mi.js":158,"./mk":159,"./mk.js":159,"./ml":160,"./ml.js":160,"./mn":161,"./mn.js":161,"./mr":162,"./mr.js":162,"./ms":163,"./ms-my":164,"./ms-my.js":164,"./ms.js":163,"./mt":165,"./mt.js":165,"./my":166,"./my.js":166,"./nb":167,"./nb.js":167,"./ne":168,"./ne.js":168,"./nl":169,"./nl-be":170,"./nl-be.js":170,"./nl.js":169,"./nn":171,"./nn.js":171,"./oc-lnc":172,"./oc-lnc.js":172,"./pa-in":173,"./pa-in.js":173,"./pl":174,"./pl.js":174,"./pt":175,"./pt-br":176,"./pt-br.js":176,"./pt.js":175,"./ro":177,"./ro.js":177,"./ru":178,"./ru.js":178,"./sd":179,"./sd.js":179,"./se":180,"./se.js":180,"./si":181,"./si.js":181,"./sk":182,"./sk.js":182,"./sl":183,"./sl.js":183,"./sq":184,"./sq.js":184,"./sr":185,"./sr-cyrl":186,"./sr-cyrl.js":186,"./sr.js":185,"./ss":187,"./ss.js":187,"./sv":188,"./sv.js":188,"./sw":189,"./sw.js":189,"./ta":190,"./ta.js":190,"./te":191,"./te.js":191,"./tet":192,"./tet.js":192,"./tg":193,"./tg.js":193,"./th":194,"./th.js":194,"./tk":195,"./tk.js":195,"./tl-ph":196,"./tl-ph.js":196,"./tlh":197,"./tlh.js":197,"./tr":198,"./tr.js":198,"./tzl":199,"./tzl.js":199,"./tzm":200,"./tzm-latn":201,"./tzm-latn.js":201,"./tzm.js":200,"./ug-cn":202,"./ug-cn.js":202,"./uk":203,"./uk.js":203,"./ur":204,"./ur.js":204,"./uz":205,"./uz-latn":206,"./uz-latn.js":206,"./uz.js":205,"./vi":207,"./vi.js":207,"./x-pseudo":208,"./x-pseudo.js":208,"./yo":209,"./yo.js":209,"./zh-cn":210,"./zh-cn.js":210,"./zh-hk":211,"./zh-hk.js":211,"./zh-mo":212,"./zh-mo.js":212,"./zh-tw":213,"./zh-tw.js":213};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=246},250:function(t,e,s){var a=s(73),n=s(251);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};a(n,r);t.exports=n.locals||{}},251:function(t,e,s){"use strict";s.r(e);var a=s(68),n=s.n(a)()(!0);n.push([t.i,".strike{\r\n    text-decoration: line-through;\r\n}\r\n.filterClass{\r\n    color: #5C6BC0;\r\n    margin-right: 3%;\r\n}\r\n.midRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.temperatureClass{\r\n    color: #616161;\r\n    /*color: #0277BD;*/\r\n}\r\n.smallRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.marginTopClass{\r\n    margin-top: 2%;\r\n}\r\n.req {\r\n    color: darkred;\r\n}\r\n.overdue{\r\n    margin-left: 10%;\r\n    font-size: medium;\r\n}\r\n.dueDate{\r\n    font-size: medium;\r\n}\r\n.task{\r\n    font-size: large;\r\n    margin-right: 3%;\r\n    margin-left: 1%;\r\n}\r\n.tagBg{\r\n    background-color: #B2DFDB;\r\n    border-block-color: #E8EAF6;\r\n}","",{version:3,sources:["mainPage.css"],names:[],mappings:"AAAA;IACI,6BAA6B;AACjC;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,2BAA2B;AAC/B",file:"mainPage.css",sourcesContent:[".strike{\r\n    text-decoration: line-through;\r\n}\r\n.filterClass{\r\n    color: #5C6BC0;\r\n    margin-right: 3%;\r\n}\r\n.midRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.temperatureClass{\r\n    color: #616161;\r\n    /*color: #0277BD;*/\r\n}\r\n.smallRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.marginTopClass{\r\n    margin-top: 2%;\r\n}\r\n.req {\r\n    color: darkred;\r\n}\r\n.overdue{\r\n    margin-left: 10%;\r\n    font-size: medium;\r\n}\r\n.dueDate{\r\n    font-size: medium;\r\n}\r\n.task{\r\n    font-size: large;\r\n    margin-right: 3%;\r\n    margin-left: 1%;\r\n}\r\n.tagBg{\r\n    background-color: #B2DFDB;\r\n    border-block-color: #E8EAF6;\r\n}"]}]),e.default=n},259:function(t,e){t.exports='<a type=button class="btn btn-link midRightMargin" data-toggle=tooltip data-placement=top title="Add new task" ui-sref=home.tasks.add> <i class="fa fa-plus" aria-hidden=true></i> <span>ADD TASK</span> </a> <a type=button class="btn btn-link filterClass" ng-click=vm.clearCompleted() ng-class={tagBg:vm.classclearCompleted}> <i class="fas fa-list-ul"></i> <span>CLEAR COMPLETED</span> </a> <a type=button class="btn btn-link filterClass" ng-click=vm.getCompleted() ng-class={tagBg:vm.classGetCompleted}> <i class="fas fa-tasks"></i> <span>GET COMPLETED</span> </a> <a type=button class="btn btn-link filterClass" ng-click=vm.getToDoList()> <i class="fas fa-tasks"></i> <span>ToDo list</span> </a> <button id=sortDateWise type=button class="btn btn-link filterClass" ng-click=vm.sortDatewise() data-toggle=tooltip data-placement=top title="Time left to complete the due-tasks" ng-class={tagBg:vm.classSort}> <i class="fas fa-sort-amount-down-alt"></i> <span>SORT</span> </button> <div class="card d-inline-flex shadow" style=width:10rem ng-click=vm.getWeather();> <div class=card-body> <i class="fas fa-cloud-sun fa-2x card-title"></i> <p class=card-text> </p><h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6><p></p> </div> </div> <ul class="list-group list-group-flush"> <li ng-repeat="task in vm.taskList | orderBy:[\'completed\',\'!dueDate\',\'dueDate\'] " class="list-group-item form-check"> <input class=form-check-input type=checkbox value="" id=invalidCheck ng-click=vm.toggleState(task) ng-checked=task.completed> <button type=button class="close pull-right" aria-label=Close ng-click=vm.deleteTask(task)> <span aria-hidden=true>&times;</span> </button> <button class="btn float-right" ng-click=vm.openEditTask(task) ui-sref=home.tasks.edit> <i class="fas fa-edit"></i></button> <span ng-class={strike:task.completed} class=task> {{task.taskName | uppercase}} </span> <span class=badge ng-class=vm.getClass(task.category) ng-if="task.dueDate!=\'Invalid date\' "> <span ng-if=vm.checkOverdue(task); class="badge-light overdue">Overdue {{task.dueDate| date:\'yyyy-MM-dd /hh:mm\' }}</span> <span ng-if=!vm.checkOverdue(task); class=dueDate>{{task.dueDate| date:\'yyyy-MM-dd /hh:mm\' }}</span> </span> </li> </ul>'},260:function(t,e){t.exports='<div class="containter formMainBody"> <div class=jumbotron> <h1 class=display-4>Add your task!!</h1> </div> <form novalidate name=taskForm class=text-center ng-model=vm.taskForm> <div class=form-group> <div ng-show="taskForm.item.$touched || taskForm.$submitted"> <div ng-show=taskForm.item.$error.required class="alert alert-danger" role=alert> <span class=req>Task is required</span> </div> </div> <input name=item type=text class=form-control placeholder="Add a task" required ng-model=vm.addTaskName> <input type=datetime-local class=form-control ng-model=vm.addDueDate> </div> <button type=submit class="btn btn-success float-left" ng-click="vm.addTaskToList(); " ui-sref=home.tasks> <i class="fa fa-check-square" aria-hidden=true></i> <span>SAVE TASK</span> </button> <button type=button class="btn btn-secondary float-right" ui-sref=home.tasks> <i class="far fa-window-close"></i> <span>CANCEL</span> </button> </form> </div>'},261:function(t,e){t.exports=' <div class="containter formMainBody"> <div class=jumbotron> <h1 class=display-4>Edit your task!!</h1> </div> <form name=taskForm class=text-center> <div class="alert alert-danger" role=alert ng-show="taskForm.$dirty && !taskForm.$valid"> Please enter valid item! </div> <div class=form-group> <input name=item type=text class=form-control placeholder="Edit task" required ng-model=vm.data> <input type=number class=form-control min=0 max=10 placeholder="Importance (1-10)" ng-model=vm.category value={{vm.category}}> <input type=datetime-local class=form-control ng-model=vm.dueDate value={{vm.dueDate }}> </div> <button type=submit class="btn btn-success float-left" ui-sref=home.tasks ng-click="taskForm.$valid?vm.editTask():console.log(\'invalid\');"> <i class="fa fa-check-square" aria-hidden=true></i> <span>SAVE TASK</span> </button> <button type=button class="btn btn-secondary float-right" ui-sref=home.tasks> <i class="far fa-window-close"></i> <span>CANCEL</span> </button> </form> </div>'},262:function(t,e,s){"use strict";s.r(e);s(229),s(231),s(232),s(233),s(263),s(234);var a=s(1),n=s.n(a),r=(s(250),s(24)),o=s.n(r),i=s(69);function l(t,e){t.state("home",{url:"",template:"<ui-view/>",abstract:!0}),console.log("end"),e.otherwise("")}l.$inject=["$stateProvider","$urlRouterProvider"];var c=l;s(258);function d(t){t.state("home.tasks",{url:"/",views:{"tasks@":{template:s(259),controller:"TasksController as vm"}}}).state("home.tasks.add",{url:"task/add",views:{"handleTask@":{template:s(260),controller:"TasksController as vm"}}}).state("home.tasks.edit",{url:"task/edit",views:{"handleTask@":{template:s(261),controller:"EditController as vm"}}})}d.$inject=["$stateProvider"];var u=d;console.log("task config");var m=s(30);function f(t){const e=this;let a;async function n(){if(!t.tasks)return await s.e(2).then(s.t.bind(null,264,3)).then(({default:t})=>{console.log("tasks",t),a=t,console.log(a)}),a;a=t.tasks}e.getTasks=n,e.addTask=function(t){a||n();let e=m.a.max(a,(function(t){return t.id}));t.id=e.id+1,a.push(t),console.log(a)},e.deleteTask=function(t){a||n();let e=m.a.findIndex(a,(function(e){return e.id==t.id}));a.splice(e,1)},e.setNewTask=function(t){e.newSetTask=t},e.editTask=function(t){a||n();let e=m.a.findIndex(a,(function(e){return e.id==t.id}));a[e]=t},e.toggleState=function(t){t.completed=!t.completed}}f.$inject=["$localStorage"];var g=f;function k(t,e){let s=this;s.addTaskName="",s.addDueDate="",s.temperature="",s.dayType="",s.addTaskToList=function(){console.log("add before taskList",s.taskList),console.log("create"),t.newTask={completed:!1,taskName:s.addTaskName,date:new Date,dueDate:n()(s.addDueDate).format("YYYY-MM-DDTkk:mm"),category:0},t.addTask(t.newTask),console.log("add after taskList",s.taskList),console.log(t.newTask.dueDate),console.log(typeof t.newTask.dueDate)},s.deleteTask=t.deleteTask,s.openEditTask=function(e){t.setNewTask(e)},s.toggleState=function(e){t.toggleState(e)},s.getClass=function(t){return{"badge-danger":t>7,"badge-secondary":t>4&&t<8,"badge-warning":t<5}},s.clearCompleted=function(){console.log("clr"),0==r?(s.oriClearCompletedTaskList=s.taskList,s.taskList=m.a.filter(s.taskList,(function(t){return!t.completed})),s.classclearCompleted=!0):(s.taskList=s.oriClearCompletedTaskList,s.classclearCompleted=!1);r=!r},s.sortDatewise=function(){console.log("clr sort"),0==a?(a++,s.oriSortTaskList=s.taskList,s.taskList=m.a.filter(s.taskList,(function(t){let e=n()(t.dueDate),a=n()();if(n.a.duration(e.diff(a))>0)return t;s.classSort=!0}))):(a--,s.taskList=s.oriSortTaskList,s.classSort=!1)},s.getCompleted=function(){0==o?(s.oriGetCompleted=s.taskList,s.taskList=m.a.filter(s.taskList,(function(t){return t.completed})),s.classGetCompleted=!0):(s.taskList=s.oriGetCompleted,s.classGetCompleted=!1);o=!o},s.getWeather=i,s.resetForm=function(){s.addTaskName=""},s.getToDoList=function(){s.taskList=e.tasks},s.checkOverdue=function(t){let e=n()(t.dueDate),s=n()();return!(n.a.duration(e.diff(s))>0)};let a=0,r=!1,o=!1;async function i(){console.log("weather"),await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6c593e7606df5c875f49e434e924aa32").then((function(t){return t.json()})).then((function(t){console.log("weathrr",t.main.temp,t.weather[0].description),s.temperature=t.main.temp,s.dayType=t.weather[0].description,console.log(s.temperature,s.dayType)})).catch((function(t){console.log(t)}))}i(),e.tasks?(s.taskList=e.tasks,e.tasks=s.taskList,console.log("local",e.tasks)):(s.taskList=[],e.tasks=s.taskList)}k.$inject=["tasksService","$localStorage"];var p=k;function j(t,e){let s=this;s.data=e.newSetTask.taskName,s.dueDate=new Date(e.newSetTask.dueDate),s.category=e.newSetTask.category,s.editTask=function(){e.newSetTask.date=new Date,e.newSetTask.taskName=s.data,e.newSetTask.category=s.category,e.newSetTask.dueDate=n()(s.dueDate).format("YYYY-MM-DDTkk:mm"),e.editTask(e.newSetTask)}}j.$inject=["$stateParams","tasksService"];var h=j;o.a.module("tasks",[i.default,"ngStorage"]).config(u).service("tasksService",g).controller("TasksController",p).controller("EditController",h);console.log("task module"),console.log("controller");s(247),o.a.module("app",[i.default,"tasks"]).config(c)}});
//# sourceMappingURL=mainModule.48dad60493b0392f1c6f.bundle.js.map