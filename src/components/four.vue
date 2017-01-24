<style lang="scss">

</style>

<template>
  <div>
     <!-- <my-header :msgheader="mag" >
       <p  style="font-weight:bold;font-size:.26rem">地址信息</p>
    </my-header> -->
      <vue-plugin></vue-plugin>
  </div>
</template>

<script>
    import  VuePlugin from  "../plugins/plug1.js";
    import {changeIndex} from "../vuex/actions";
    import Vue from "vue";
    Vue.use(VuePlugin);
export default{
    data(){
        return {
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
    created(){

    },
    mounted(){
        // this.change(1);

    },
    destory(){

    }

}
</script>
