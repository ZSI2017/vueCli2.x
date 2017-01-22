<style lang="scss" scoped>
   .iBall{
      text-align: center;
      line-height: .3rem;
       color:white;
       font-style: normal;
       display: block;
       width:.3rem;
       height:.3rem;
       border-radius: .15rem;
   }
   .nameColor{
        color:#8E7F7F;
   }
   .moreEllipsis{
     font-weight: bold;
         display: -webkit-box;
         -webkit-box-orient:vertical;
         -webkit-line-clamp:2;
         overflow:hidden;
   }
   .am-list-button:before{
        background:white !important;
   }
   .borLeft{
       border-left:.01rem solid #e6e6e6;
   }
   .addressee{
     overflow: hidden;
     background:white;
     border-top:1px solid #e6e6e6;
     border-bottom:1px solid #e6e6e6 !important;
     padding:0
   }
   .little12font{
      margin-left:.18rem;
      color:#ababab;
       font-size:.12rem;
       -webkit-transform-origin-x:0;
       transform: scale(0.90);
   }
   .small108{
   }
   .myResultStyle{
     background: white;
       color:black;
        padding:0;
        font-weight:bold;
        font-size:.14rem;
   }
   .borderBottom{
        border-bottom:.01rem solid  #dddddd;
   }
   .myresultkuaidi{
        line-height: .41rem;
        justify-content: space-between;
      }
  .myresultkuaidip{
       line-height: .22rem;
       .myresultkuaidired{
            font-style:normal;
            color:red;
        }
  }
  .additionalServer{
    line-height:.34rem;
      color:#b6b6b6;
      font-size:.12rem;
      -webkit-transform-origin-x:0;
      transform: scale(0.90);
  }
  .myOtherStyle{
      justify-content:space-between;
      a{
          color:#8f8f8f;
          width:1.51rem;
          height:.36rem;
          border:.01rem dashed #108ee9;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
      }
  }
  .otherText{
       width:100%;
       box-sizing: border-box;
       padding:.16rem;
       border:0;
       border-bottom:.01rem solid  #dddddd;
       display: block;
       margin-bottom: .08rem;
  }
  .resultBottom{
    flex-direction: column;
    justify-content: center;
      border-top:.01rem solid #dddddd;
      background: white;
  }
</style>

<template>
  <section>
      <div class="addressee am-list form">
           <div v-for="(item,index) in datasource" style="padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
             <i   :style="{background:bgcolor[index]}" class="iBall">{{item.type}}</i>
              <div style="min-width:0" class="am-list-label">
              </div>
             <div class="am-list-control">
                 <p class="nameColor" >{{item.tel}}</p>
                 <p class="moreEllipsis"> {{item.detailAdd}}</p>
             </div>
             <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
           </div>
      </div>
      <p class="little12font">08:00-16:00下单必取，逾时请预约次日服务</p>
 <div  class="am-list sicon myResultStyle">

   <div  class="am-list-body ">
      <a class="am-list-item borderBottom" v-for="(items,index) in datasource2"
        @click=choose(index)
      >
       <div class="am-list-thumb">
         <img src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png" alt="图片描述" />
       </div>
       <div class="am-list-content"><i style="color:red">*</i>{{items.content}}</div>
       <div class="am-list-extra" style="color:black">{{items.extra}}</div>
       <div class="am-list-arrow" aria-hidden="true">
         <span class="am-icon arrow horizontal"></span>
       </div>
      </a>
     <div class="borderBottom">
       <div style="backgrond:white; padding-bottom:.14rem;" class="am-wingblank wb.18rem">
         <div class="am-flexbox myresultkuaidi"> <p>预计快递费</p>  <p style="color:red">{{tip}}</p>
         </div>
       <p class="myresultkuaidip"><i class="myresultkuaidired">*首重7元，续重3元</i> 实际费用以快递员取件时的称重为准<a>如何计算?</a>如需保价，请与快递员当面沟通</p>
       </div>
     </div>

  <div class="borderBottom">
     <div style="padding:.13rem 0" class="am-wingblank wb.18rem">
        <img style="height:.17rem" src="/static/images/people.png" alt="额外服务"> <i style="font-style:normal">额外服务</i>
        <p class="additionalServer">温馨提示：如需提供纸箱，可能会产生额外的费用</p>
        <div class="am-flexbox myOtherStyle">
            <a class="am-flexbox" href="#">我需要纸箱</a>
            <a class="am-flexbox" href="#">我需要胶带</a>
        </div>
     </div>
   </div>
<textarea class="otherText borderBottom" name="name" rows="4" placeholder="其他要求请在此备注(选填)">
</textarea>
</div>

 </div>
   <!-- antui  的列表栏  -->
<div class="am-flexbox resultBottom">
        <div class="outLab">
           <div class="am-checkbox mini argument">
             <input id="agree1" type="checkbox" checked="checked">
             <span class="icon-check"></span>
             <label class="checkLab" for="agree1">我已阅读并同意<a>《服务协议》</a></label>
           </div>
         </div>
         <div style="width:3.45rem; margin:4px 15px 10px">
             <button @click="green" type="button" class="am-button blue">立即下单</button>
         </div>
   </div>

 </section>
</template>


<script>
  export default {
       data(){
           return{
             bgcolor:['red','green'],
             category:["日用品","文件",'数码产品','食品','衣服'],
             weight:["3kg及以上",'4kg','5kg','6kg','7kg','8kg','9kg及以上'],
             datasource:[
                 {
                     type:'寄',
                     tel:"双井吴彦祖 12345678",
                     detailAdd:"北京市朝阳区双井百子湾路32号苹果社区北区底商2-26号新石器科技有限公司棒棒达",
                     bgcolor:'red'
                 },
                 {
                     type:'收',
                     tel:"双井吴彦祖 9876543",
                     detailAdd:"北京市朝阳区双井百子湾路32号苹果社区北区底商2-26号新石器科技有限公司棒棒达",
                     bgcolor:'green'
                 }
             ],
             datasource2:[
                 {
                     imageUrl:"https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png",
                     content:"期望上门时间",
                     extra:"今天10:00-12:00"
                 },{
                     imageUrl:"https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png",
                     content:"物品类型",
                     extra:"日用品"
                 },{
                     imageUrl:"https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png",
                     content:"物品重量",
                     extra:"3Kg及以下"
                 },

             ],
             tip:"10.00元"
           }
       },
       methods:{
         choose(index){
           var options=[];
             if(index==0){


             }else if(index==1){
              options=this.category;

             }else{
                options=this.weight;
             }
             ant.call('beehiveOptionsPicker',{
                 title:'',
                  optionsOne:options,
                  selectedOneIdex:2,
             },function(result){
                  alert(JOSN.stringify(result));
             });
         },
         green(){
            let router = new VueRouter();
             router.push({path:"/orderDetail"});
         },
          myClick(index){
             var  _this = this;
             am.selectAddress(function(data){
                    _this.datasource[index].tel=data.fullname + data.mobilePhone;
                    _this.datasource[index].detailAdd=data.prov+data.city+data.area
                    alert(JSON.stringify(data));
             })
          }
       },
       created(){
         var _this = this;
         ant.setTitle({
             title:_this.$route.params.name,
         })
        //  this.$http.get("/rest/list4")
        //    .then(
        //       (res) =>{
        //            this.datasource = res.data.data;
        //            console.log(res.data.data);
        //       },(response) =>{
        //             console.log("http error");
        //       }
        //    )
       },
       mounted(){
       }
  }
</script>
