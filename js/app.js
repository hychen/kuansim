(function(){"use strict";var e;e=angular.module("kuansim",["ngCookies","ngResource","app.controllers","app.directives","app.filters","app.services"]),e.config(["$routeProvider","$locationProvider"].concat(function(e,t,n){return e.when("/collect",{templateUrl:"/partials/app/collect.html"}).when("/edit",{templateUrl:"/partials/app/edit.html"}).when("/publish",{templateUrl:"/partials/app/publish.html"}).when("/issue",{templateUrl:"/partials/app/issue.html"}).when("/act",{templateUrl:"/partials/app/act.html"}).when("/about",{templateUrl:"/partials/app/about.html"}).when("/",{templateUrl:"/partials/app/portal.html"}).otherwise({redirectTo:"/"}),t.html5Mode(!1)}))}).call(this),function(){"use strict";angular.module("app.controllers",[]).controller({AppCtrl:["$scope","$location","$resource","$rootScope"].concat(function(e,t,n,r){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""}})}).controller({MyCtrl1:["$scope"].concat(function(e){return e.Title="MyCtrl1"})}).controller({MyCtrl2:["$scope"].concat(function(e){return e.Title="MyCtrl2"})}).controller({IndexCtrl:["$scope","getIssues","getDigests","getPetitions","getActions"].concat(function(e,t,n,r,i){return e.topIssues=t,e.topDigests=n,e.topPetitions=r,e.topActions=i})})}.call(this),function(){"use strict";var e;e={},e.appVersion=["version"].concat(function(e){return function(t,n,r){return n.text(e)}}),angular.module("app.directives",["app.services"]).directive(e)}.call(this),function(){"use strict";angular.module("app.filters",[]).filter("interpolate",["version"].concat(function(e){return function(t){return String(t).replace(/\%VERSION\%/mg,e)}}))}.call(this),function(){"use strict";var e;e={version:function(){return"0.1"}},angular.module("app.services",["ngResource"]).factory({getIssues:["$http"].concat(function(e){var t;return t=[{tagId:1,type:"issue",title:"胖達人事件",kaunsimNumber:2e3,actionNumber:17367,standpointsNumber:426},{tagId:1,type:"issue",title:"洪仲丘事件",kaunsimNumber:2e3,actionNumber:78563,standpointsNumber:6723},{tagId:1,type:"issue",title:"九月政爭",kaunsimNumber:23e6,actionNumber:2,standpointsNumber:22999997}]})}).factory({getDigests:["$resource"].concat(function(e){var t;return t=[{tagId:1,type:"digest",title:"服務協議",body:"才能請財政部依照大的方針去作處理，如果我現在宣布要做，我了解這一定是事實，在暫定執法線的範圍內，在難以兩全的情況下，我不是那麼專精，但要說到讓每個民眾都知道，有很多事項是不宜用公投來進行的，為了國家的需要，國防部所占比例的確相當高。",authorName:"hychen",publishTime:"2013年10月12日"},{tagId:1,type:"digest",title:"服務協議",body:"還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴！",authorName:"hychen",publishTime:"2013年10月12日"},{tagId:1,type:"digest",title:"服務協議",body:"一位像有學識的人說，特別為他倆合奏著進行曲；只有這樂聲在這黑暗中歌唱著，由隘巷中走出來，因為一片暗黑，拔去了不少，這時候風雨也停止進行曲的合奏，放不少鞭炮，在家裡有壓歲錢的分賜，當科白尼還未出世，多有了袖著手、縮著頸、聳著肩、伸著腰、打呵欠的樣子。",authorName:"hychen",publishTime:"2013年10月12日"}]})}).factory({getPetitions:["$http"].concat(function(e){var t;return t=[{tagId:1,type:"petition",title:"倒閣案",petitionNumber:200},{tagId:1,type:"petition",title:"服務協議",petitionNumber:300},{tagId:1,type:"petition",title:"hychen請客",petitionNumber:"∞"}]})}).factory({getActions:["$http"].concat(function(e){var t;return t=[{tagId:1,type:"action",title:"Color Run",peopleNumber:5},{tagId:1,type:"action",title:"New iphone",peopleNumber:5e5},{tagId:1,type:"action",title:"喝飲料",peopleNumber:50}]})})}.call(this),function(){"use strict";angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this)