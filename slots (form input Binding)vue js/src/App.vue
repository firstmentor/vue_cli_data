<template>
<div>
  <student>
    <h3>This is header tag</h3>
    <p>This is simple </p>
    <h4 slot="pn">pninfosys</h4>
  </student>
  <h2>From INPUT BINDLING</h2>
  <form name="" method="post">
    <p>
      <label>Name:</label>
      <input type="text" placeholder="Enter name" v-model= "employee.name" >
    </p> 
    <p>
      <label>Email:</label>
      <input type="email" placeholder="Enter email"  v-model.lazy= "employee.email" >
    </p>  
    <p>
      <label>Designation:</label>
      <input type="text" placeholder="Enter Designation"  v-model= "employee.designation" >
    </p> 
    <p>
      <label><input type="checkbox" v-model= "employee.post" value="Developer">Developer</label>
      <label><input type="checkbox" v-model= "employee.post" value="designer">designer</label>
      <label><input type="checkbox" v-model= "employee.post" value="CA">CA</label>
      <label><input type="checkbox"  v-model= "employee.post" value="MBA">MBA</label>
    </p>   

    <p>
      <label>Select gender</label>
      <label><input type="radio" v-model= "employee.gender" value="male">Male</label>
      <label><input type="radio" v-model= "employee.gender" value="female">Female</label>
      <label><input type="radio" v-model= "employee.gender" value="other">Other</label>
      
    </p> 
    <p>
      <select v-model="employee.level">
        <option v-for="level in levels" v-bind:key="level">{{ level}}</option>
      </select>  
    </p> 

  </form>
  <div id="details-preview">
    <h3>Employee Details Preview</h3>
    <p>Name : {{employee.name}} </p>
    <p>Email : {{employee.email}}</p>
    <p>Designation : {{employee.designation}}</p>
    <p>Employee post
      <ul>
        <li v-for="p in employee.post" v-bind:key="p">{{p}}</li>
      </ul>  
    </p>
    <p>Gender :{{employee.gender}}</p>
    <p>Employee Level : {{employee.level}}</p>
     
  </div>  
  
</div>  
 
</template>

<script>
import student from './components/student.vue'




export default {
  
  data () {
     return {
       employee: {
         name :"",
         email :"",
         designation :"",
         post:[],
         gender:""

       },
       levels : ["Senior", "Junior", "Team Leader" , "Motivator"]
       
     }
  },
  methods:{
   
     
  },
  components: {
    student,
   
    
    
  }
}
</script>

<style>


</style>
