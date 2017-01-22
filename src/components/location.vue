<style>
  .outContent{
    justify-content: center;
      align-items: center;
      width:100%;
      height:.54rem;
      background: #dbdbdb;
  }
  .inContent{
      /*margin-left: .10rem;*/
      border-radius: .04rem;
       background: #fff;
       width:80%;
       height:.38rem;
  }

  .myImg{
         width:.2rem;

  }
</style>


<template>
  <div class="outContent am-flexbox">
    <div class="outContent am-flexbox">
        <div class="inContent am-flexbox">
              <img class="myImg" src="/static/images/localtion1.png" alt="">
              <slot>
              </slot>

        </div>

         <img  class="myImg" src="/static/images/localtion2.png" alt="">
         <p style="font-size:.14rem" v-on:click = "change123"> 定位 </p>
      </div>
  </div>

</template>

<script>

      export default{
           data(){
                return{
                    info:"zzz"
                }
           },
           props:{
                    address:"正在定位中..."
           },
           methods:{
             change123(){
                 ant.call("getLocation",function(result){
                     if(result.error){
                         alert(result.errorMessage);
                         return;
                     }
                     alert(result.province+result.street);
                 })
             }

           }

      }


</script>
