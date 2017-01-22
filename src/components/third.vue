
<style  lang="css" scoped>
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
   .my-test{
       border:0 !important;
   }

</style>

 <template>
     <section>
<div  class="am-list form">
   <div class="am-list-item am-input-autoclear my-test">
     <div class="am-list-label">收件人</div>
     <div class="am-list-control">
       <input type="text" placeholder="收件人姓名"  v-model="inf.name" >
     </div>
     <div class="am-list-clear"><i class="am-icon-clear am-icon"></i></div>
     <div class="am-list-button">
       <button v-on:click = "change123"  type="button" style="color:blue">通讯录</button>
     </div>
   </div>
        <div  class="am-list-item am-input-autoclear">
          <div class="am-list-label">手机号码</div>
          <div class="am-list-control">
            <input type="telphone" placeholder="11位手机号"
               v-model="inf.mobile">
          </div>
        </div>
        <div  class="am-list-item am-input-autoclear">
          <div class="am-list-label">选择地区</div>
          <div class="am-list-control">
            <input type="telphone" placeholder="地区信息" value="">
          </div>
        </div>
        <div style="align-items:flex-start;padding-left:0;margin-left:.12rem; border-bottom:1px solid #e6e6e6 padding:0" class="am-list-item am-input-autoclear">
          <div class="am-list-label">详细地址</div>
          <div class="am-list-control">
            <textarea type="telphone" placeholder="街道 楼宇 门牌信息" ></textarea>
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
        <button v-on:click="green" type="button" class="am-button blue  ">完成</button>
    </div>

          </section>


</template>


<script>
    import {changeIndex} from "../vuex/actions";

    export default{
          data(){
              return{
                inf:{
                    name:'',
                    mobile:''
                },
                  mag:{
                    title:"返回"
                  }
              }
          },
         vuex:{
             actions:{
                   change:changeIndex
             }
         },
         methods:{
           green(){
             let router = new VueRouter;
             router.push({path:"/four"});
               alert("提交成功！");
           },
           change123(){
             var _this =this;

               ant.contacts.get(function(result){
                 _this.inf.name=result.name;
                 _this.inf.mobile = result.mobile;
                   alert(result.name+result.mobile);
               })
               //alert("sdfg")
           }
        },
         mounted(){
              ant.setTitle({
                  title:"填写寄件人地址"
              })
              this.change(3);
         }
    }
</script>
