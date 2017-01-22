
import first from "./components/one.vue";
//import second from "./components/second.vue";
import third from "./components/third.vue";

import second from "./components/second.vue";

//import index from "./components/index.vue";
  import bottomlist from "./components/index.vue";

import index from "./components/kuaidi.vue";

import address from "./components/Address.vue";

import four from "./components/four.vue";

import getServer from "./components/getServer.vue";

import jijian from "./components/jijian.vue";

import manage from "./components/manage.vue";

import result from "./components/result.vue"

import lastSuccess from "./components/success.vue";

//import choose from "./components/chooseExpress.vue";

//import orderDetail from "./components/orderDetail.vue";

//import  jsapi from "./components/jsapi.vue"


//  在最外层的app.js 文件中注册 自定义的search 组件
     import header from "./components/header.vue";
      var Mycomponent = Vue.extend(header);
      Vue.component('myHeader',Mycomponent);

// 引入store 进行全局状态管理
  import store from "./vuex/store";

  //  在最外层注册组件
  //  import searchBody   froｍ　"./location.vue";
  //  var myComponent = Vue.extend(searchBody);
  //  Vue.component('location',myComponent);
  import searchBody   from　"./components/location.vue";
  var myComponent = Vue.extend(searchBody);
  Vue.component('location',myComponent);



//let router = new VueRouter();

let App = Vue.extend({
      store:store
});

const router =  new VueRouter({
      routes:[{
                     path:"/",
                     name:'first',
                     component:index
                },
                {
                    path:"/first",
                     name:'fujingziyuan',
                     component:first
                },
                {
                      path:"/second/:name",
                      name:"second",
                      component:second
                },
                 {
                     path:"/third",
                     name:"third",
                     component:third
                },
                 {
                    path:"/four",
                     name:'four',
                     component:four
                },
                 {
                       path:"/address",
                       name:'address',
                       component:address
                },
                {
                    path:"/getServer/:myid",
                    name:"getServer",
                    component:getServer
                },
                {
                      path:"/jijian",
                        name:"jijian",
                        component:jijian
                },
                {
                        path:"/manage",
                         name:'manage',
                         component:manage
                },
                {
                          path:"/successLast",
                          name:'success',
                          component:lastSuccess,
                },
                {
                            path:"/result/:name",
                　　　　　　 name:"result",
                            component:result
                }]
})

   const app = new Vue({router}).$mount('#app');
