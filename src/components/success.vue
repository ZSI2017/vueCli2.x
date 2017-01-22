<style lang="scss" scoped>


</style>



<template lang="html">


</template>


<script>
   export default{
        data(){
            return {

            }
        },
        methods:{

        },
        created(){
            ant.setTitle({
                title:'下单成功'
            }),
            ant.setOptionMenu({
                  title:'完成',
                  color:'#56aff0',
                  redDot:'-1'
            });
            ant.showOptionMenu();
            ant.on('optionMenu',function(e){
                  alert("即将跳转到下一个页面！")
            })
        },
        mounted(){

        }
   }
</script>
