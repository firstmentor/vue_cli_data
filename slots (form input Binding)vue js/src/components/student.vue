<template>
<div>
  <h2>{{msg}}</h2>
  <slot></slot>
  <slot name="pn"></slot>
  

</div>
    
</template>
<script>
export default {
    
    data() {
        return{
            msg:"hello pninfosys"
        }
    },
    methods: {
       
    
    }
    
    
}
</script>
<style scoped>

</style>