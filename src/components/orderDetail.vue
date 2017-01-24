s   <style lang="scss" scoped>
      .am-list:not([am-version]){
         padding: 0;
        .my-list-item1{
            border-top:.01rem solid #e5e5e5;
            border-bottom: .01rem solid #e5e5e5;
           .my-list-thumb1{
                margin-right:.09rem;
           }
           .my-list-content1{
                font-size:.14rem;
                color:#f99750;
           }
       }
      }

        .am-list:not([am-version]){
          .my-list-body{
             padding-bottom: .15rem;
             border-bottom:.01rem solid #e5e5e5;
             background-color: white;
             margin-bottom:.09rem;
          .myItem{
               padding:.15rem .15rem  0;
               color:#888;
               font-size:.14rem;
          }
        }
      }


  // list 3 列表
      .am-list:not([am-version]).form{
        margin-bottom:.09rem;
        .my-item{
            padding:.15rem 0;
            padding-top:.05rem;
            margin-left:.15rem;
            .my-image{
                width:.25rem;
                height:.25rem;
            }
            .my-list-control{
                 color:#888;
            }
            .my-list-clear{
                 width:.25rem;
            }
          }

      }
        .nameColor{
          i{
            font-style: normal;
          }
          b{
            font-weight: normal;
          }
          line-height: .34rem;
          font-size: .14rem;
        }
        .moreEllipsis{
            line-height: .2rem;
             font-size: .14rem;
              display: -webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
              overflow:hidden;
        }

        .addressee{
          overflow: hidden;
          background:white;
          border-top:1px solid #e6e6e6;
          border-bottom:1px solid #e6e6e6 !important;
          padding:0
        }

        // 列表4
     .am-list:not([am-version]){
          .my-list-body4{
            margin-bottom:.09rem;
            border-bottom:.01rem solid #e5e5e5;
            border-top:.01rem solid #e5e5e5;
            background: white;
              padding:.02rem 0;
               .myItem{
                 color:#888;
                  padding:.15rem;
                  padding-left:0;
                  margin-left:.15rem;
               }
          }
     }

     .otherFont{
       color:#888;
          font-size: .14rem;
          margin-left:.15rem;
     }
   </style>


<template lang="html">
    <div>
      <!--   list　列表     -->
      <div class="am-list sicon">
        <div class="am-list-body ">
          <div class="am-list-item my-list-item1">
            <div class="am-list-thumb my-list-thumb1">
              <!-- A11Y: alt 信息增加对图片内容或者目的描述，如「xxx头像」 -->
              <img src="/static/images/detail.png" alt="图片描述" />
            </div>
            <div class="am-list-content my-list-content1">下单成功，正在安排快递员
            </div>
          </div>
        </div>
      </div>

      <!--　　　列表 　 -->
      <div class="am-list">
            <div class="am-list-body  my-list-body">
              <a  v-for="items in datalist" class="am-list-item  myItem">
                <div class="am-list-content ">{{items.content}}</div>
                <div class="am-list-extra">{{items.extra}}</div>
              </a>
            </div>
      </div>
      <!--list3 列表  -->
       <div class="addressee am-list form">
           <div v-for="(item,index) in datasource"
                :style="{borderBottom:index==total-1 ?  '' : '.01rem solid #e5e5e5'}"

                 class="am-list-item am-input-autoclear my-item"
                 >
             <img  class="my-image"  v-bind:src="item.url" alt="寄件">
              <div style="min-width:0" class="am-list-label">
              </div>
             <div class="am-list-control my-list-control am-ft-sm">
                 <p class="nameColor" ><i>{{item.myname}}</i> <b class="am-wingblank wb10px">{{item.tel}}</b></p>
                 <p class="moreEllipsis"> {{item.detailAdd}}</p>
             </div>
             <div class="am-list-clear my-list-clear"><i class="am-icon-clear am-icon"></i></div>
           </div>
       </div>

       <!--list4 列表4  -->
       <div class="am-list">
             <div class="am-list-body  my-list-body4">
               <a  v-for="(items,index) in datalist4"
                    :style="{borderBottom: index==total4-1?'':'.01rem solid #e5e5e5'}"
                class="am-list-item  myItem">
                 <div class="am-list-content ">{{items.content}}</div>
                 <div class="am-list-extra">{{items.extra}}</div>
               </a>
             </div>
       </div>

         <!-- list6 列表6 -->
        <div class="am-list">
            <div class="am-list-body  my-list-body4">
               <a  v-for="(items,index) in datalist5"
                   :style="{borderBottom: index==total5-1?'':'.01rem solid #e5e5e5'}"
                class="am-list-item  myItem">
                <div class="am-list-content ">{{items.content}}</div>
                 <div class="am-list-extra">{{items.extra}}</div>
               </a>
             </div>
       </div>
       <p class="otherFont">首重7元，续重3元 <a href="#">如何计算?</a> </p>
  </div>
</template>




   <script>
      export default{
            data(){
    	         return {
                 bgcolor:['red','green'],
                 total:2,
                 datasource:[
                     {
                         type:'寄',
                         myname:'双井吴彦祖组',
                         tel:"12345678",
                         detailAdd:"北京市朝阳区双井百子湾路32号苹果社区北区底商2-26号新石器科技有限公司棒棒达",
                         url:"/static/images/ji.png"
                     },
                     {
                         type:'收',
                         myname:'北海张学友',
                         tel:"9876543",
                         detailAdd:"北京市朝阳区双井百子湾路32号苹果社区北区底商2-26号新石器科技有限公司棒棒达新石器科技有限公司棒棒达",
                         url:"/static/images/shou.png"
                     }
                 ],
                   datalist:[
                       {
                         content:"预计上门",
                         extra:"2016.05.08 10:00-12:00"
                       },{
                           content:"订单号",
                           extra:"18888677867"
                       },{
                           content:"快递公司",
                           extra:"顺丰快递"
                       },{
                            content:"客服电话",
                            extra:"95338"
                       }
                   ],
                   total4:3,
                   datalist4:[
                          {
                            content:'物品类型',
                            extra:'日用品'
                          },{
                              content:"额外服务",
                              extra:'需要纸箱'
                          },{
                              content:'备注',
                              extra:"无"
                          }
                   ],
                   total5:4,
                   datalist5:[
                        {
                          content:"支付方式",
                          extra:"上门后在线支付",
                        },{
                            content:"支付状态",
                            extra:'待支付'
                        },{
                          content:"物品重量",
                          extra:"2公斤"

                        },{
                            content:"预计快递费用",
                            extra:"23.00"
                        }
                   ]
    		         }
	      },
       created(){
          // 处理5字溢出的问题
           this.datasource.map(function(item){
             if(item.myname.length>5){
              item.myname=item.myname.substring(0,5).concat('...');
            }
           })
         this.total4= this.datalist4.length;

         this.total5= this.datalist5.length;

	    //      ant.setTitle({
		  //      title:"订单详情"
		  //  })
	      },





 }
  </script>
