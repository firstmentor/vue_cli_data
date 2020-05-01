<template>
<div>
  <student v-bind:message= "msg" v-on:updateparentvariable="updatevalueFn($event)"></student>
  <!-- <button v-on:click="updatemessage">update from Parent</button> -->
  
</div>  
 
</template>

<script>
import student from './components/student.vue'



export default {
  
  data () {
     return {
       msg: "Passing data from  Parent Component to child component"
     }
  },
  methods:{
    // updatemessage: function(){
    //   this.msg =" Value has been updated from parent"
    // }
    updatevalueFn:function(updatedValue){
      this.msg = updatedValue
    }
     
  },
  components: {
    student
    
    
  }
}
</script>

<style>


</style>
