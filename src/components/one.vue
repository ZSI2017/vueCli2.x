<style scoped>
   #myImage{
        height:.6rem;
        width:.6rem;
        border-radius: .1rem
   }
</style>

<template>
<!-- <my-header :msgheader="mag">
     <p style="font-weight:bold;font-size:.26rem">附件快递资源</p>
   </my-header>  -->
  <div class="am-list ">
      <router-link
         :to="{name:'second', params: {name:item.title}}"
         v-for="item in datasource"
       class="am-list-item" style="border-bottom:.01rem solid #5c5c5c">
        <div class="am-list-thumb">
          <!-- A11Y: alt 信息增加对图片内容或者目的描述，如「xxx头像」 -->
          <img id="myImage" src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png" alt="图片描述" />
        </div>
        <div class="am-list-content">
          <div class="am-list-title" style="font-size:.2rem,font-weight:bold">{{item.title}}</div>
          <div class="am-list-brief" style="font-size:.14rem;overflow:visible">{{item.subtitle}}</div>
          <div  class="am-list-brief" style="margin-top:.03rem;margin-bottom:2px">
             <p v-for="item in item.little" class="am-flexbox-item" style="display:inline-block;height:.2rem;padding:.01rem;margin-right:.02rem;color:red;border:1px solid red;font-size:12px">{{item}}</p></div>
        </div>
        <div class="am-list-arrow" aria-hidden="true">
          <span class="am-icon arrow horizontal"></span>
        </div>
      </router-link>
</div>

</template>

<script>
   import  {changeIndex} from "../vuex/actions";
   export default{
        data(){
            return{
              mag:{
                  title:"返回"
              },
              datasource:[{
                title:"菜鸟驿站",
                subtitle:"官方合作门店，安全有保障",
                little:[
                  "安全保障","便捷代寄"
                 ]},
               {
                title:"顺丰",
                subtitle:"找就近网点快速提供服务",
                little:[
                 "快速上门","安全保障"]
                },
                {
                  title:"闪送",
                  subtitle:"官方合作门店，安全有保障",
                  little:[
                     "安全保障","便捷代寄"
                       ]
                 }
               ]


            }
        },
        vuex:{
           actions:{
              change:changeIndex
           }

        },
        created(){
           ant.setTitle({
               title:"附近快递网点"
           })
          //  this.$http.get("/rest/list2")
          //    .then(
          //          (res) =>{
          //           this.datasource = res.data.data;
          //            console.log(res.data.data);
          //          },(response) =>{
          //               console.log("http error");
          //          }
          //    )
        },
        mounted(){
          //  this.change(0);
           console.log("one vue one vue");
          // let router = new VueRouter();
        // setTimeout(function(){
        //       router.push({path:'/index/third'});
        //       console.log("跳转、");
        // },3000)

        },
        methods:{

        }
  }

</script>
