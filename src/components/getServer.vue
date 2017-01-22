<style lang="scss" scoped>

</style>

<template>
    <section>
        <img  style="width:100%" src="/static/images/getServer.png" alt="获取服务">
        <div class="am-list">
  <div class="am-list-body" aria-labelledby="demo-cb-header-1">
        <label class="am-list-item check">
      <div  style="color:#b2b2b2" class="am-list-content">获取你的公开信息(头像、性别、区县)</div>
      <div class="am-checkbox">
        <input type="checkbox" checked="checked" name="c2" id="c2">
        <span class="icon-check" aria-hidden="true"></span>
      </div>
    </label>
    <label class="am-list-item check">
      <div style="color:#b2b2b2" class="am-list-content">使用身份信息(姓名、手机号)办理业务</div>
      <div class="am-checkbox">
        <input type="checkbox" checked="checked" name="c3" id="c3">
        <span class="icon-check" aria-hidden="true"></span>
      </div>
    </label>
  </div>
</div>
<div style="margin:.3rem .15rem 0rem">
    <button  @click="nextRouter" type="button" class="am-button blue  ">确定</button>
</div>
<p style="margin-left:.15rem;">确认授权即表示同意 <i style="color:blue;font-style:normal">《用户授权协议》</i></p
    </section>
</template>



<script>
  export default{
       data(){
            return{


            }
       },
       methods:{
         nextRouter(){
           let router = new VueRouter();
           if(this.$route.params.myid==0){
             console.log("this.$route.params.myid");
              router.push({path:'/jijian'})
           }else{
               router.push({path:"/third"});
           }
              //  这里填写路由跳转的条码
              alert("进入下一个路由！！！")
         }

       },
       created(){
         ant.setTitle({
             title:"服务授权"
         })
       },
       mounted(){

       },
       destory(){

       }
  }
</script>
