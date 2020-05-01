<template>
<div>
  <h2>{{message}}</h2>
  <button v-on:click="updatemessage">update from Child</button>

</div>
    
</template>
<script>
export default {
    props:["message"],
    data() {
        return{
            msg:"hello pninfosys"
        }
    },
    methods: {
        updatemessage: function(){
      //this.message ="Value has been updated from parent"
      this.$emit("updateparentvariable","Value has been updated from parent")
    }
    }
    
    
}
</script>
<style scoped>

</style>