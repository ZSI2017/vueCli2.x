<style lang="scss" scoped>
   .myChooseExpress:not([am-version]){
      background-color: white;
       padding:0;
       border:.01rem solid #e5e5e5;
       border-left: 0;
       border-right:0;
      .chooseOutA{
        margin-left:.15rem;
         border-bottom:.01rem solid #e5e5e5;
        .mylistItem{
          padding:.15rem;
          padding-left:0;
          .myThumb{
            margin-right:.11rem;
            #myImage{
                 display: block;
                 height:.6rem;
                 width:.6rem;
                 border-radius: .1rem
            }
          }
          .mycontent{
            font-size: .14rem;
            .myp{
                display:inline-block;
                padding:0 .05rem;
                margin-right:.1rem;
                color:#ff8200;
                border:.01rem solid #ff8200;
                font-size:.12rem;
                -webkit-transform-origin-x:0;
                transform: scale(0.90);
                border-radius: .06rem
            }
            .myTitle{
              .myLogo{
                 margin-left: .11rem;
                  font-style: normal;
                   display: block;
                   width: .16rem;
                   height:.16rem;
                   background: red;
                   border-radius: .03rem;
                  text-align: center;
                   b{
                      display: block;
                      line-height: .16rem;
                     color:white;
                     font-weight: normal;
                     font-size: .12rem;
                     -webkit-transform-origin-x:0;
                     transform: scale(0.90);
                   }
              }
            }
          }
          .myExtra{
            color:#ff8200;
          }
        }}
  }
</style>

<template lang="html">
  <!--Notice 公告  -->
<div>
   <div class="am-notice" role="alert">
     <div class="am-notice-content">{{notice}} </div>
     <div class="am-notice-operation">
         <a class="am-notice-close" href=""></a>
     </div>
  </div>
    <div class="am-list myChooseExpress ">
       <router-link
          :to="{name:'result', params: {name:item.title}}"
          class="chooseOutA"
         v-for="(item,index) in datasource"
          :style="{borderBottom:index==total ?  '' : '.01rem solid #e5e5e5'}"
       >
          <a class="am-list-item mylistItem" >
            <div class="am-list-thumb myThumb">
              <img id="myImage"  src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png"  alt="图片描述" />
            </div>
           <div class="am-list-content mycontent">
              <div class="am-list-title myTitle am-flexbox">
                 <p>{{item.title}}</p>
                 <i class="myLogo"
                     v-for="iitem in item.hot"      :style="{background:item.color}">
                      <b>{{iitem}}</b>
                 </i>
                </div>
              <div class="am-list-brief" style="font-size:.12rem;text-overflow:ellipsis">{{item.subtitle}}</div>
              <div  class="am-list-brief "        　
　　　　　　　　　　　style="margin-top:.03rem;margin-bottom:2px">
                 <p
                     v-for="item in item.little"
                     class="am-flexbox-item myp"
                  >{{item}}
                </p>
              </div>
            </div>
             <div class="am-list-extra myExtra">
                 {{item.money}}
            </div>
            <div class="am-list-arrow" aria-hidden="true">
              <span class="am-icon arrow horizontal">
              </span>
            </div>
          </a>
        </router-link>
      </div>
</div>
</template>


<script>
   import  {changeIndex} from "../vuex/actions";
    export default{
        data(){
            return{
              notice:"由于双十一期间快递资源紧张，故部分快递无法正常配送",
              total:2,
              mag:{
                  title:"返回"
              },
              datasource:[{
                title:"菜鸟驿站",
                hot:["热"],
                color:'#f00',
                subtitle:"官方合作门店，安全有保障",
                little:[
                  "安全保障","便捷代寄"
                ],
                money:"22元起"
              },
               {
                title:"顺丰",
                hot:[],
                subtitle:"找就近网点快速提供服务",
                little:[
                 "快速上门","安全保障"],
                 money:"24元起"
                },
                {
                  title:"闪送",
                  hot:['新'],
                  color:"#4db885",
                  subtitle:"官方合作门店，安全有保障",
                  little:[
                     "安全保障","便捷代寄"
                   ],
                   money:"32元起"
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
      // use Vue.nextTick if you need  an in-document guarantee

          //  ant.setTitle({
          //      title:"选择快递"
          //    })
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

        // setTimeout(function(){
        //       router.push({path:'/index/third'});
        //       console.log("跳转、");
        // },3000)

        },
        methods:{

        }
  }

</script>
