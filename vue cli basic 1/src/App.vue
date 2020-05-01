<template>
<div>
  {{msg}}
  <ul>
    <!-- <li v-for="student in students">{{ student}}</li> -->
  </ul>
  <h2>{{sayHello("morning")}}</h2>  
  <h2>{{pnHello}}</h2>
  <HelloWorld></HelloWorld>
  <vikas></vikas>
  <Pnheader name="vikas" v-bind:myplaylist= "student"></Pnheader>
  
  <PnContent v-bind:myplaylist= "pninfosy" v-bind:simple= "simplemessage"></PnContent>

  <Pnfooter name="mohit" v-bind:myplaylist= "pninfosy" v-bind:simple= "simplemessage"></Pnfooter>
 
  
  
</div>  
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your pninfosys"/>
  </div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import vikas from './components/PnComponent.vue'
import Pnheader from './components/Header.vue'
import PnContent from './components/Content.vue'
import Pnfooter from './components/Footer.vue'


export default {
  name: 'App',
  data () {
     return {
       msg : "welcome vikas jain",
       student:['vikas','raj','mohit'],
       channel: "pn",
       firstName : "Mohit",
       lastName : "Jain",
       authorname : "Sanjay Kumar",
       pninfosy:[
         "raj",
         "mohit",
         "Rohit",
         "ram"
       ],
       simplemessage: "hello vikas jain",
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
    vikas,
    Pnheader,
    Pnfooter,
    PnContent
    
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
