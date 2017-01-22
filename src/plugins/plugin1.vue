<style lang="css" scoped>
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
</style>

<template>
  <section>
      <div  class="addressee am-list form">
           <div v-for="(item,index) in datasource" style="padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
             <i   v-bind:style="{background:bgcolor[index]}" class="iBall">{{item.type}}</i>
             <div style="min-width:0" class="am-list-label">
              </div>
             <div class="am-list-control">
                 <p class="nameColor" >{{item.tel}}</p>
                 <p class="moreEllipsis"> {{item.detailAdd}}</p>
               <!-- <input type="text" placeholder="收件人姓名" value=""> -->
             </div>
             <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
             <div class="am-list-button borLeft">
               <button type="button" style="color:blue;font-size:.2rem"
               v-on:click="myClick(index)">地址䈬</button>
             </div>
           </div>
      </div>
      <div style="margin:.3rem .15rem .6rem">
          <button v-on:click="green" type="button" class="am-button blue ">下一步</button>
      </div>
</section>
</template>


<script>

  export default {
       data(){
           return{
             bgcolor:['red','green'],
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
             ]
           }
       },
       methods:{
         green(){
           let router = new VueRouter;
           router.push({
                 path:'/chooseExpress'
           })
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
         ant.setTitle({
             title:"地址信息",
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
