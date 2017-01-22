<style scoped>

    img{
        width:100%;
        height:100%;
    }
    .myLi{
        margin-left: .25rem;
        border-bottom: .01rem solid #bdbdbd;
    }
    .myTitle{
         font-size: .18rem;
         font-weight: bold;

    }
    .myInput{

        border:0;
         outline: 0;
    }

</style>


<template>
     <!-- <my-header :msgheader="mag">
          <p  style="font-weight:bold;font-size:.26rem">附近快递网点</p>
     </my-header> -->
       <!-- 使用自定义 组件  -->
       <location>
         <input  class="myInput"
         v-bind:placeholder="address"  />
       </location>
       <!-- <p>当前路径：{{$route.path}}</p> -->
       <!-- <p>当前的路由参数： {{$route}}</p> -->
       <ul>

          <li class="myLi" v-for="item in datasource" >
                <p class="myTitle">{{$route.params.name +item.title}}</p>
                <p>{{item.no1}}</p>
                <p>{{item.no2}}</p>
                <p>{{item.no3}}</p>
          </li>


       </ul>

</template>

<script>

 import { changeIndex} from "../vuex/actions";
 export default {
     data(){
            return {
              address:"正在定位中...",
              mag:{
                  title:"返回"
              },
                datasource:[ ]

            }
     },
     vuex:{
       actions: {
            change:changeIndex
       }

     },
     created(){
        ant.setTitle({
            title:"附件快递资源"
        })
          console.log("created");
     },
 mounted(){
     this.change(2);
   console.log("ready");
   var _this = this;

//   Vue.nextTick(function(){
  setTimeout(function(){
    //  Vue.nextTick(function(){
        console.log("sd")
        ant.call("getLocation",function(result){
            if(result.error){
                alert(result.errorMessage);
                return;
            }
            console.log(result.pois[0].address);
              _this.address =result.pois[0].address;
        })


        _this.datasource=[       {
                    title:'-北京苹果社区店',
                    no1:'地址：百子湾路苹果社区临街低商',
                    no2:'营业时间：08:00-18:00',
                    no3:'取件时间：08:00-18:00',
                  },
                  {
                    title:'-北京海淀社区店',
                    no1:'地址：百子湾路苹果社区临街低商',
                    no2:'营业时间：08:00-18:00',
                    no3:'取件时间：08:00-18:00',
                  },{
                    title:'-北京苹果社区店',
                    no1:'地址：百子湾路苹果社区临街低商',
                    no2:'营业时间：08:00-18:00',
                    no3:'取件时间：08:00-18:00',
                  }
          ];


        // _this.$http.get("/rest/list3")
        //    .then(
        //        (res) =>{
        //          Vue.nextTick(function(){
        //            _this.datasource=res.data.data;
        //            _this.address="北京苹果社区"
        //            console.log(res.data.data);
        //
        //          })
        //        },(response) =>{
        //            console.log("error");
        //        }
        //    )
    //     })
  },1500)


  //  })


//   let router = new VueRouter();
  //  setTimeout(function(){
  //        router.push({path:'/index'});
  //        console.log("跳转、");
  //  },3000)

  }
}

</script>
