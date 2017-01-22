<style lang="scss" scoped>
.outLab{
    background: white;
}
 .checkLab{
     color:#e6e6e6;
 }
 .addressee{
   overflow: hidden;
   background:white;
   border-top:1px solid #e6e6e6;
   border-bottom:1px solid #e6e6e6 !important;
   padding:0
 }
 .myPosition{
      position: absolute;
      top:0;
 }
</style>

<template lang="html">
  <section>
<div  class="addressee am-list form">
<div style="padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
  <div class="am-list-label">寄件人</div>
  <div class="am-list-control">
    <input type="text" v-on:input="checkoutName" maxlength="20" placeholder="寄件人姓名"  >
  </div>
  <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
  <!-- <div class="am-list-button">
    <button v-on:click = "change123"  type="button" style="color:blue">通讯录</button>
  </div> -->
</div>
     <div style="padding-left:0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
       <div class="am-list-label">手机号码</div>
       <div class="am-list-control">
         <input v-on:input="checkoutPhone" type="text" pattern="\d*" placeholder="11位手机号" maxlength="11"  v-model="inf.mobile">
       </div>
     </div>
     <!-- 定义toast 弹出层  -->
     <div v-if="toastShow"  class="am-toast text">
       <div class="am-toast-text">
           {{toastContent}}
       </div>
     </div>
     <div style="padding:.12rem 0;margin-left:.12rem; border-bottom:1px solid #e6e6e6" class="am-list-item am-input-autoclear">
       <div class="am-list-label">选择地区</div>
       <div class="am-list-control">
         <input type="text" placeholder="省 市 区"  v-model="inf.name" >
       </div>
       <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
       <div class="am-list-button">
         <button @click = "change123"  type="button" style="color:blue">获取定位</button>
       </div>
     </div>
     <div style="align-items:flex-start;padding-left:0;margin-left:.12rem; border-bottom:1px solid #e6e6e6 padding:0" class="am-list-item am-input-autoclear">
       <div class="am-list-label">详细地址</div>
       <div class="am-list-control">
         <textarea type="telphone" maxlength="50"   @input="checkoutAddress" placeholder="街道 楼宇 门牌信息" ></textarea>
       </div>
     </div>
   </div>
   <div class="outLab">
       <div class="am-checkbox mini argument">
         <input id="agree1" type="checkbox" checked="checked">
         <span class="icon-check"></span>
         <label class="checkLab" for="agree1">设为默认寄件地址</label>
       </div>
     </div>
 <div style="margin:15px 15px 60px">
     <button @click="green" type="button" class="am-button blue  ">完成</button>
 </div>

 <div v-if="show" class="am-dialog-mask show"></div>
<!-- A11Y: 对话框隐藏时设置 aria-hidden="true"，显示时设置 aria-hidden="false" -->
<!-- A11Y: 可以通过 aria-describedby 把对话框的描述指向 header -->
<div v-if="show" class="am-dialog show myPosition" role="dialog" aria-hidden="true" aria-describedby="demo-modal-header">
  <div class="am-dialog-wrap" role="document">
    <div class="am-dialog-header">
      <h3 id="demo-modal-header">“我的快递”想使用你的当前位置</h3>
    </div>
    <div class="am-dialog-footer">
      <button type="button" class="am-dialog-button" v-on:click="cancel">取消</button>
      <button type="button" class="am-dialog-button" v-on:click="sure">确定</button>
    </div>
  </div>
</div>
</section>

</template>


<script>
export default{
     data(){
         return {
           toastShow:false,
           toastContent:"姓名不能超过20个汉字",
           show:true,
           inf:{
                mobile:''
           }
         }
     },
     methods:{
       checkoutPhone(e){
         let _this = this;
        e.srcElement.value= e.srcElement.value.replace(/\D+/g,'');
        if(e.srcElement.value.length==11){
                     _this.toastContent="手机号码不能超过11位";
                     _this.toastShow=true;
                     setTimeout(function(){
                          _this.toastShow=false;
                     },2000);
         };
       },
       checkoutName(e){
         var _this =this;
         // 只允许输入汉字
          e.srcElement.value = e.srcElement.value.replace(/[^\u4E00-\u9FA5]/g,'');
          if(e.srcElement.value.length==20){
                   _this.toastContent="姓名不能超过20个汉字";
                   _this.toastShow=true;

               setTimeout(function(){
                    _this.toastShow=false;
               },2000)
          }
      },
        change123(){
               alert("sdfg");
         },
         checkoutAddress(e){
           let _this = this;
        e.srcElement.value =e.srcElement.value.replace(/[^\u4E00-\u9FA5]/g,'');

           if(e.srcElement.value.length==50){
                _this.toastContent="详细地址不能超出50个汉字"
                _this.toastShow=true;
                setTimeout(function(){
                      _this.toastShow=false;
                },3000);
           }
         },

         cancel(){
              this.show=false
         },
         sure(){
              this.show=false;
              ant.getLocation({

              })
         }
     },

}

</script>
