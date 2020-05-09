<template>
<nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- <a  href="#">Navbar</a> -->
  <div class="container">
  <router-link to="/" class="navbar-brand">{{siteTitle}}</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item active">
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      
     
    </ul>
  </div>
  </div>
</nav>
 
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
   
  
</template>

<script>
export default {
  name: 'Header',
   data(){   //object
    return {
      siteTitle: "PNINFOSYS"
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background: #1a1d24;
}
.navbar-nav a{
  color: #fff;
  padding: 0 15px;
  display: block;
}
</style>
