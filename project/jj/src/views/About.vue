<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import axios from "axios";
export default {
  data(){
    return{

    }
  },
  mounted(){
     axios.post("https://jsonplaceholder.typicode.com/posts",{
        title :"vikhhha",
        body: "mohitnhhhhhhhhhhnn"
        // title,
        // body
      })
        .then(function(response){
          console.log(response)
        })
        .catch(err => console.log(err));
  }
  
}
</script>

