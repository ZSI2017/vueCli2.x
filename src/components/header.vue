<style lang="scss" scoped>
   header{
        padding:.1rem;
        height:.44rem;
        background:#fff;
        display:flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
     .left{
          display: flex;
     }
     .img1{
           height:.26rem;
     }
     .betweenImg{
         color:blue;
         font-size: .22rem;
     }

}
</style>



<template lang="html">
     <header>
        <div class="am-flexbox">
          <img  class="img1" src="/static/images/jiantou.png"/>
          <p class="betweenImg">{{msgheader.title}}</p>
       </div>
         <slot>
              这里称为备用内容，备用内容在子组件的作用域内编译
         </slot>
         <div style="width:.5rem;height:.5rem">
        </div>
     </header>
</template>


<script>

  export default {
      data(){
          return{

          }
      },
      props:{
          msgheader:{
               title:null
          }
      },
      create(){

      },
      mounted(){

      },
      destory(){

      },
      methods:{


      }

  }

</script>
