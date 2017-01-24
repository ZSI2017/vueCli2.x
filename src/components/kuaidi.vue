<style lang="scss" scoped>
.kuaidiflexout{
  background:white;
   .kuaidiflex{
        padding-top:.08rem;
        flex-direction: column;
        text-align: center;
        background: white;
        .myPhoto{
            width:.54rem;
            height:.54rem;
            background:blue;
            border:.01rem solid #e8e8e8;
            border-radius: .05rem;
        }
   }
}
.outli{
     flex-direction:row;
     flex-wrap: wrap;
      .flexboxli{
          box-sizing: border-box;
          padding-right: .05rem;
          width:50%;
          height:1rem;
          background:#f5f5f9;
          margin-bottom: .05rem;
          .flexboxliin{
               display: block;
                font-style: normal;
                width: 100%;
                height:100%;
                background-color: white;
                text-align: center;
              .flexboxliinimg{
                  margin-top: .1rem;
                  width:.45rem;
              }
              .flexboxliinp1{
                  margin-left: .1rem;
                   font-size: .12rem;
                   font-weight: bold;
                   text-align: left;
              }
              .flexboxliinp2{
                white-space: nowrap;
                    width:100%;
                    text-overflow: ellipsis;
                    margin-left: .1rem;
                    font-size:.12rem;
                    -webkit-transform-origin-x:0;
                    transform: scale(0.90);
                    color:#989898;
                    text-align:left;
              }
              .smallsize{
                   font-size:.108rem;
              }
          }
      }
    }
</style>

<template>
    <div class="">
      <p> 常用快递</p>
       <div class="am-flexbox kuaidiflexout">
           <div class="am-flexbox-item kuaidiflex am-flexbox">
                  <div class="myPhoto">
                  </div>
                  <p>顺丰快递</p>
            </div>
            <div class="am-flexbox-item kuaidiflex am-flexbox">
                   <div class="myPhoto">
                   </div>
                   <p>顺丰快递</p>
             </div>
             <div class="am-flexbox-item kuaidiflex am-flexbox">
                    <div class="myPhoto">
                    </div>
                    <p>顺丰快递</p>
             </div>
        </div>
      <p>常用功能</p>
         <ul class="am-flexbox outli">
             <li v-for="(item,index) in datasource" class="flexboxli">
                <router-link :to="{path:item.path}" class="flexboxliin">
                    <img class="flexboxliinimg" :src="item.imgUrl" alt="快递">
                    <p class="flexboxliinp1">{{item.p1}}</p>
                    <p class="flexboxliinp2">{{item.p2}}</p>
                </router-link>
             </li>
         </ul>

    </div>
</template>


<script>
// import Vue from "vue"
// import VueRouter from "vue-router";
//    Vue.use(VueRouter);
   export default{

        data(){
          return{
            datasource:[
               {
                   imgUrl:'/static/images/first1.png',
                   p1:'预约寄件',
                   p2:'快递预约寄件，小哥上门收件',
                   path:'/address'
               }, {
                    imgUrl:'/static/images/first2.png',
                    p1:'实时抢单',
                    p2:'阿里巴巴官方服务，最快30分钟上门'
                }, {
                     imgUrl:'/static/images/first5.png',
                     p1:'同城直送',
                     p2:'专人直送，快速送达全城'
                 }, {
                      imgUrl:'/static/images/first3.png',
                      p1:'同城货运',
                      p2:'国内领先的拉货搬家服务'
                  }, {
                       imgUrl:'/static/images/first4.png',
                       p1:'附近快递资源',
                       p2:'附近的快递网点.快递柜',
                       path:"/first"
                   }
            ]

          }
        },
        methods:{

        },
        created(){

        },
        mounted(){

        },
         destory(){

         }

   }

</script>
