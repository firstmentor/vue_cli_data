<template>
<div>
  {{msg}}
  <ul>
    <!-- <li v-for="student in students">{{ student}}</li> -->
  </ul>
  <h2>{{sayHello("morning")}}</h2>  
  <h2>{{pnHello}}</h2>
  <HelloWorld></HelloWorld>
  <pninfosys></pninfosys>
</div>  
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your pninfosys"/>
  </div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import pninfosys from './components/PnComponent.vue'

export default {
  name: 'App',
  data () {
     return {
       msg : "welcome vikas jain",
       student:['vikas','raj','mohit'],
       channel: "pn",
       firstName : "Mohit",
       lastName : "Jain",
       authorname : "Sanjay Kumar"
     }
  },
  methods:{
      sayHello :function(dayTime){
        return "Good" + dayTime;
      }
  },
  computed:{
    pnHello : function(){
      return this.firstName+" "+this.lastName+" give by "+ this.authorname
    }
  },
  components: {
    HelloWorld,
    pninfosys
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
